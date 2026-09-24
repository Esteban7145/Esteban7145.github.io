import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const projectUrl = Deno.env.get("SUPABASE_URL") || "https://qgucwxgwehkualhfnckt.supabase.co";
const secretKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ||
  JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") || "{}").default;
const supabaseAdmin = createClient(projectUrl, secretKey, { auth: { persistSession: false, autoRefreshToken: false } });
const allowedOrigins = new Set(["https://esteban7145.github.io", "http://localhost:4173", "http://127.0.0.1:4173"]);

function json(req: Request, payload: unknown, status = 200) {
  const requestedOrigin = req.headers.get("Origin");
  const origin = requestedOrigin && allowedOrigins.has(requestedOrigin) ? requestedOrigin : "https://esteban7145.github.io";
  return new Response(JSON.stringify(payload), { status, headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  }});
}

Deno.serve(async req => {
  const origin = req.headers.get("Origin");
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: {
    "Access-Control-Allow-Origin": origin && allowedOrigins.has(origin) ? origin : "https://esteban7145.github.io",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  }});
  if (origin && !allowedOrigins.has(origin)) return json(req, { error: "Origen no autorizado." }, 403);
  if (req.method !== "POST") return json(req, { error: "Método no permitido." }, 405);

  let photoPath = "";
  try {
    const form = await req.formData();
    const fullName = String(form.get("fullName") || "").trim().replace(/\s+/g, " ");
    const address = String(form.get("address") || "").trim();
    const email = String(form.get("email") || "").trim().toLowerCase();
    const phone = String(form.get("phone") || "").trim();
    const hasChurchRole = form.get("hasChurchRole") === "true";
    const churchRole = hasChurchRole ? String(form.get("churchRole") || "").trim() : null;
    const documentType = hasChurchRole ? String(form.get("documentType") || "").trim().toUpperCase() : null;
    const documentNumber = hasChurchRole ? String(form.get("documentNumber") || "").trim().toUpperCase() : null;
    const consent = form.get("consent") === "true" && form.get("consentVersion") === "2026-09-v1";
    const sensitiveDataConsent = form.get("sensitiveDataConsent") === "true";
    const photoConsent = form.get("photoConsent") === "true";
    const attendanceConsent = form.get("attendanceConsent") === "true";
    const photo = form.get("photo");
    if (fullName.length < 3 || fullName.length > 140 || address.length < 5 || address.length > 240 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || phone.length < 7 || phone.length > 32) {
      return json(req, { error: "Revisa el nombre, la dirección, el correo y el teléfono." }, 400);
    }
    if (hasChurchRole && (!churchRole || churchRole.length > 120)) return json(req, { error: "Especifica el cargo que desempeñas en la iglesia." }, 400);
    if (hasChurchRole && (!documentType || !["CC", "TI", "CE", "PA", "RC", "PPT"].includes(documentType) || !documentNumber || !/^[A-Z0-9][A-Z0-9.-]{2,31}$/.test(documentNumber))) {
      return json(req, { error: "Selecciona el tipo de documento e ingresa un número válido para elaborar el carnet." }, 400);
    }
    if (!consent || !sensitiveDataConsent) return json(req, { error: "Debes aceptar de forma expresa el tratamiento de datos para crear el registro de membresía." }, 400);
    if (!(photo instanceof File) || photo.size === 0) return json(req, { error: "Selecciona una foto de rostro para identificarte y generar tu carnet." }, 400);
    if (!photoConsent) return json(req, { error: "Debes autorizar el almacenamiento privado de la foto para generar tu carnet." }, 400);
    if (!["image/jpeg", "image/png", "image/webp"].includes(photo.type) || photo.size > 3 * 1024 * 1024) {
      return json(req, { error: "La foto debe ser JPG, PNG o WebP y pesar máximo 3 MB." }, 400);
    }

    const forwarded = req.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim();
    const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-real-ip") || forwarded || "unknown";
    const fingerprintBytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${projectUrl}:${ip}`));
    const fingerprint = Array.from(new Uint8Array(fingerprintBytes), byte => byte.toString(16).padStart(2, "0")).join("");
    const { data: attempts, error: limitError } = await supabaseAdmin.rpc("take_member_signup_slot", { p_fingerprint: fingerprint });
    if (limitError) throw new Error("El registro no está disponible en este momento.");
    if (Number(attempts) > 5) return json(req, { error: "Se alcanzó el límite temporal de registros. Inténtalo de nuevo en 15 minutos." }, 429);

    const id = crypto.randomUUID();
    const extension = photo.type === "image/png" ? "png" : photo.type === "image/webp" ? "webp" : "jpg";
    photoPath = `${id}/${crypto.randomUUID()}.${extension}`;
    const { error: uploadError } = await supabaseAdmin.storage.from("membership-photos").upload(photoPath, photo, { contentType: photo.type, upsert: false });
    if (uploadError) throw uploadError;
    const { data, error: insertError } = await supabaseAdmin.from("church_members").insert({
      id, full_name: fullName, address, email, phone, has_church_role: hasChurchRole,
      church_role: churchRole, document_type: documentType, document_number: documentNumber,
      photo_path: photoPath, photo_consent: true, photo_consent_at: new Date().toISOString(),
      attendance_consent: attendanceConsent, attendance_consent_at: attendanceConsent ? new Date().toISOString() : null,
      sensitive_data_consent: sensitiveDataConsent, sensitive_data_consent_at: sensitiveDataConsent ? new Date().toISOString() : null, consent_version: "2026-09-v1",
    }).select("id,member_number").single();
    if (insertError) throw insertError;
    return json(req, { ok: true, id: data.id, memberNumber: data.member_number }, 201);
  } catch (error) {
    if (photoPath) await supabaseAdmin.storage.from("membership-photos").remove([photoPath]).catch(() => {});
    console.error("member-registration", error instanceof Error ? error.message : "No se pudo guardar el registro.");
    return json(req, { error: "No se pudo guardar el registro. Revisa los datos o intenta de nuevo." }, 400);
  }
});
