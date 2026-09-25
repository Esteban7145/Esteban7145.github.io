import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const SITE_ORIGIN = "https://esteban7145.github.io";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "https://qgucwxgwehkualhfnckt.supabase.co";

function cors(req: Request) {
  const origin = req.headers.get("Origin") || "";
  const allowed = origin === SITE_ORIGIN || origin.startsWith("http://localhost:");
  return {
    "Access-Control-Allow-Origin": allowed ? origin : SITE_ORIGIN,
    "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json; charset=utf-8",
    "Vary": "Origin",
  };
}

function json(req: Request, body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: cors(req) });
}

function serviceKey() {
  const value = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || Deno.env.get("SUPABASE_SECRET_KEYS");
  if (!value) throw new Error("Supabase no tiene configurada su clave privada de servidor.");
  if (value.startsWith("{")) return JSON.parse(value).default as string;
  return value;
}

function publishableKey() {
  const value = Deno.env.get("SUPABASE_PUBLISHABLE_KEYS") || Deno.env.get("SUPABASE_ANON_KEY") || "";
  if (value.startsWith("{")) return JSON.parse(value).default as string;
  return value;
}

function base64Url(value: string) {
  return value.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64Utf8(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
  }
  return btoa(binary);
}

async function gmailAccessToken() {
  const clientId = Deno.env.get("GOOGLE_DRIVE_CLIENT_ID");
  const clientSecret = Deno.env.get("GOOGLE_DRIVE_CLIENT_SECRET");
  const refreshToken = Deno.env.get("GMAIL_REFRESH_TOKEN");
  const senderEmail = (Deno.env.get("GMAIL_SENDER_EMAIL") || "").trim().toLowerCase();
  if (!clientId || !clientSecret || !refreshToken || !senderEmail) {
    throw new Error("Falta conectar Gmail en los secretos de Supabase. Revisa GOOGLE_DRIVE_CLIENT_ID, GOOGLE_DRIVE_CLIENT_SECRET, GMAIL_REFRESH_TOKEN y GMAIL_SENDER_EMAIL.");
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, refresh_token: refreshToken, grant_type: "refresh_token" }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.access_token) throw new Error("Google no autorizó el envío. Revisa o vuelve a conectar la autorización de Gmail.");

  const profileResponse = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/profile", {
    headers: { Authorization: `Bearer ${payload.access_token}` },
  });
  const profile = await profileResponse.json().catch(() => ({}));
  if (!profileResponse.ok || String(profile.emailAddress || "").toLowerCase() !== senderEmail) {
    throw new Error("La cuenta autorizada no coincide con GMAIL_SENDER_EMAIL. No se envió el carnet.");
  }
  return { token: payload.access_token as string, senderEmail };
}

async function sendGmail(token: string, sender: string, recipient: string, fullName: string, pngBase64: string) {
  const boundary = `ipuc_${crypto.randomUUID().replaceAll("-", "")}`;
  const subject = base64Utf8(`Tu carnet de membresía · IPUC Villa del Río`);
  const body = base64Utf8(`Hola ${fullName},\n\nTu registro de membresía fue aprobado. Adjuntamos tu carnet de IPUC Villa del Río.\n\nGuárdalo para identificarte en las actividades de la iglesia. Si encuentras algún dato incorrecto, comunícate con la administración.\n\nDios te bendiga.\nIPUC Villa del Río`);
  const filename = `Carnet-IPUC-${fullName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9-]+/g, "-").replace(/^-|-$/g, "").slice(0, 70) || "miembro"}.png`;
  const mime = [
    `From: IPUC Villa del Río <${sender}>`,
    `To: ${recipient}`,
    `Subject: =?UTF-8?B?${subject}?=`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    body,
    `--${boundary}`,
    `Content-Type: image/png; name="${filename}"`,
    `Content-Disposition: attachment; filename="${filename}"`,
    "Content-Transfer-Encoding: base64",
    "",
    pngBase64.match(/.{1,76}/g)?.join("\r\n") || pngBase64,
    `--${boundary}--`,
    "",
  ].join("\r\n");
  const response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ raw: base64Url(base64Utf8(mime)) }),
  });
  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    const code = result?.error?.code;
    throw new Error(code === 429 ? "Gmail alcanzó su cuota temporal de envíos. El carnet quedó pendiente para reintentar." : "Gmail rechazó el mensaje. Revisa la autorización y el correo del miembro.");
  }
}

Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(req) });
  if (req.headers.get("Origin") && cors(req)["Access-Control-Allow-Origin"] !== req.headers.get("Origin")) return json(req, { error: "Origen no autorizado." }, 403);
  if (req.method !== "POST") return json(req, { error: "Método no permitido." }, 405);

  const authorization = req.headers.get("Authorization") || "";
  const bearer = authorization.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!bearer) return json(req, { error: "Se requiere una sesión administrativa vigente." }, 401);

  let memberId = "";
  let claimed = false;
  const admin = createClient(SUPABASE_URL, serviceKey(), { auth: { persistSession: false, autoRefreshToken: false } });
  try {
    let input: { memberId?: unknown; cardPngBase64?: unknown; force?: unknown };
    try { input = await req.json(); } catch { return json(req, { error: "Solicitud no válida." }, 400); }
    memberId = String(input.memberId || "");
    const pngBase64 = String(input.cardPngBase64 || "");
    const force = input.force === true;
    if (!/^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(memberId)) return json(req, { error: "El registro de miembro no es válido." }, 400);
    if (!pngBase64 || pngBase64.length > 7_000_000 || !/^[A-Za-z0-9+/]+={0,2}$/.test(pngBase64)) return json(req, { error: "La imagen del carnet está vacía o excede el tamaño permitido." }, 400);
    const pngHeader = atob(pngBase64.slice(0, 16));
    if (pngHeader.length < 8 || [...pngHeader.slice(0, 8)].map(char => char.charCodeAt(0)).join(",") !== "137,80,78,71,13,10,26,10") return json(req, { error: "El adjunto no es una imagen PNG válida." }, 400);

    const publicKey = publishableKey();
    if (!publicKey) throw new Error("Supabase no tiene configurada su clave pública.");
    const caller = createClient(SUPABASE_URL, publicKey, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { headers: { Authorization: `Bearer ${bearer}` } },
    });
    const { data: { user }, error: authError } = await caller.auth.getUser(bearer);
    if (authError || !user) return json(req, { error: "La sesión administrativa venció. Inicia sesión de nuevo." }, 401);
    const { data: isAdmin, error: adminCheckError } = await caller.rpc("is_ipuc_admin");
    if (adminCheckError || isAdmin !== true) return json(req, { error: "Solo Administración puede enviar carnets." }, 403);

    const { data: member, error: memberError } = await admin.from("church_members")
      .select("id, full_name, email, has_church_role, photo_path, status, card_email_sent_at, card_email_sending_at")
      .eq("id", memberId).maybeSingle();
    if (memberError) throw new Error("No se pudo consultar el registro aprobado.");
    if (!member || member.status !== "activo" || !member.has_church_role || !member.photo_path || !member.email) {
      return json(req, { error: "El carnet solo se envía a miembros activos con cargo, correo y foto registrados." }, 409);
    }
    if (!/^[^\s<>@\r\n]+@[^\s<>@\r\n]+\.[^\s<>@\r\n]+$/.test(member.email)) return json(req, { error: "El correo registrado no tiene un formato válido. Corrígelo antes de enviar." }, 409);
    if (member.card_email_sent_at && !force) return json(req, { ok: true, alreadySent: true, sentAt: member.card_email_sent_at });

    const stale = new Date(Date.now() - 10 * 60_000).toISOString();
    let claimQuery = admin.from("church_members").update({ card_email_sending_at: new Date().toISOString(), card_email_error: null })
      .eq("id", memberId).or(`card_email_sending_at.is.null,card_email_sending_at.lt.${stale}`);
    if (!force) claimQuery = claimQuery.is("card_email_sent_at", null);
    const { data: claim, error: claimError } = await claimQuery.select("id").maybeSingle();
    if (claimError) throw new Error("No se pudo reservar el envío. Reintenta en un momento.");
    if (!claim) return json(req, { error: "Ya hay un envío en curso o el carnet ya fue enviado. Usa Reenviar solo si realmente hace falta." }, 409);
    claimed = true;

    const { token, senderEmail } = await gmailAccessToken();
    await sendGmail(token, senderEmail, member.email, member.full_name, pngBase64);
    const sentAt = new Date().toISOString();
    const { error: savedError } = await admin.from("church_members").update({ card_email_sent_at: sentAt, card_email_sending_at: null, card_email_error: null, updated_at: sentAt }).eq("id", memberId);
    if (savedError) throw new Error("El correo se envió, pero no se pudo guardar la confirmación. Revisa el correo antes de reintentar.");
    return json(req, { ok: true, sentAt });
  } catch (error) {
    if (claimed && memberId) {
      const message = error instanceof Error ? error.message : "No se pudo enviar el carnet.";
      await admin.from("church_members").update({ card_email_sending_at: null, card_email_error: message.slice(0, 500) }).eq("id", memberId).then(() => {}).catch(() => {});
    }
    return json(req, { error: error instanceof Error ? error.message : "No se pudo enviar el carnet." }, 500);
  }
});
