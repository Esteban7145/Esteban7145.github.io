import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";
import { SignJWT, importPKCS8 } from "npm:jose@6.1.0";

const SITE_ORIGIN = "https://esteban7145.github.io";
const DEFAULT_FOLDERS = {
  weekly: "1gwuNFB9cq4N-1EIvHd2pW-1A-OJDVJgn",
  event: "1WPw3zTgNA_vgSssrQDtnuxxjfaXvtanF",
  multimedia: "1EvzF26jKOTSYh-xGVB7S0V9YEGgxnLO6",
  biblical: "1NQmDMepgLjFVaQDEYohD87kkbLfvIXQJ",
};

function corsHeaders(req: Request) {
  const origin = req.headers.get("Origin") || "";
  const allowed = origin === SITE_ORIGIN || origin.startsWith("http://localhost:");
  return {
    "Access-Control-Allow-Origin": allowed ? origin : SITE_ORIGIN,
    "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json; charset=utf-8",
  };
}

function response(req: Request, body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: corsHeaders(req) });
}

function readServiceAccount() {
  const raw = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_JSON");
  if (!raw) throw new Error("Falta configurar la cuenta segura de Google Drive en Supabase.");
  try {
    const account = JSON.parse(raw);
    if (!account.client_email || !account.private_key) throw new Error("La configuración de Google Drive está incompleta.");
    return account;
  } catch (error) {
    if (error instanceof Error && error.message.includes("configuración")) throw error;
    throw new Error("La configuración segura de Google Drive no es válida.");
  }
}

function readFolders() {
  const raw = Deno.env.get("GOOGLE_DRIVE_FOLDER_MAP");
  if (!raw) return DEFAULT_FOLDERS;
  try { return { ...DEFAULT_FOLDERS, ...JSON.parse(raw) }; }
  catch { throw new Error("La estructura de carpetas de Google Drive no es válida."); }
}

function serviceKey() {
  const raw = Deno.env.get("SUPABASE_PUBLISHABLE_KEYS");
  if (raw) {
    try { return JSON.parse(raw).default; } catch { /* usa la clave heredada */ }
  }
  return Deno.env.get("SUPABASE_ANON_KEY") || "";
}

async function getAuthenticatedUser(req: Request) {
  const token = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
  if (!token) throw new Error("Debes iniciar sesión para subir archivos.");
  const client = createClient(Deno.env.get("SUPABASE_URL")!, serviceKey(), { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await client.auth.getUser(token);
  if (error || !data.user) throw new Error("La sesión administrativa no es válida. Vuelve a iniciar sesión.");
  const allowed = (Deno.env.get("DRIVE_ADMIN_EMAILS") || "")
    .split(",").map(email => email.trim().toLowerCase()).filter(Boolean);
  if (!allowed.includes((data.user.email || "").toLowerCase())) throw new Error("Solo el equipo administrador puede usar este almacenamiento.");
  return data.user;
}

async function googleAccessToken(account: { client_email: string; private_key: string }) {
  const key = await importPKCS8(account.private_key, "RS256");
  const assertion = await new SignJWT({ scope: "https://www.googleapis.com/auth/drive" })
    .setProtectedHeader({ alg: "RS256", typ: "JWT" })
    .setIssuer(account.client_email)
    .setAudience("https://oauth2.googleapis.com/token")
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(key);
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }),
  });
  const body = await tokenResponse.json().catch(() => ({}));
  if (!tokenResponse.ok || !body.access_token) throw new Error("Google no autorizó el acceso seguro a Drive.");
  return body.access_token as string;
}

async function driveRequest(token: string, url: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("Authorization", `Bearer ${token}`);
  const result = await fetch(url, { ...init, headers });
  const body = await result.json().catch(() => ({}));
  if (!result.ok) {
    const reason = body?.error?.message || body?.error_description || "Google Drive rechazó la operación.";
    throw new Error(reason);
  }
  return body;
}

function quoteDriveValue(value: string) { return value.replaceAll("\\", "\\\\").replaceAll("'", "\\'"); }

async function findOrCreateEventFolder(token: string, parentId: string, folderName: string) {
  const query = `'${quoteDriveValue(parentId)}' in parents and name = '${quoteDriveValue(folderName)}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`;
  const params = new URLSearchParams({ q: query, pageSize: "1", fields: "files(id,name)" });
  const found = await driveRequest(token, `https://www.googleapis.com/drive/v3/files?${params}`);
  if (found.files?.[0]?.id) return found.files[0].id as string;
  const created = await driveRequest(token, "https://www.googleapis.com/drive/v3/files?fields=id,name", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: folderName, mimeType: "application/vnd.google-apps.folder", parents: [parentId] }),
  });
  return created.id as string;
}

async function uploadToDrive(token: string, file: File, parentId: string, name: string) {
  const boundary = `ipuc_${crypto.randomUUID()}`;
  const metadata = JSON.stringify({ name, parents: [parentId] });
  const body = new Blob([
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${metadata}\r\n`,
    `--${boundary}\r\nContent-Type: ${file.type || "application/octet-stream"}\r\n\r\n`,
    file,
    `\r\n--${boundary}--`,
  ]);
  const params = new URLSearchParams({ uploadType: "multipart", fields: "id,name,mimeType,size,webViewLink,webContentLink" });
  const created = await driveRequest(token, `https://www.googleapis.com/upload/drive/v3/files?${params}`, {
    method: "POST",
    headers: { "Content-Type": `multipart/related; boundary=${boundary}` },
    body,
  });
  await driveRequest(token, `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(created.id)}/permissions?sendNotificationEmail=false`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "anyone", role: "reader", allowFileDiscovery: false }),
  });
  const id = created.id as string;
  return {
    id: `drive-${id}`,
    driveFileId: id,
    provider: "google-drive",
    name: created.name || file.name,
    type: created.mimeType || file.type || "application/octet-stream",
    size: Number(created.size || file.size || 0),
    url: `https://drive.google.com/uc?export=download&id=${id}`,
    previewUrl: `https://drive.google.com/uc?export=view&id=${id}`,
    webViewLink: created.webViewLink || `https://drive.google.com/file/d/${id}/view`,
    uploadedAt: new Date().toISOString(),
    path: `drive/${id}`,
    public: true,
  };
}

async function deleteFromDrive(token: string, fileId: string) {
  await driveRequest(token, `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}`, { method: "DELETE" });
  return { deleted: true, driveFileId: fileId };
}

Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(req) });
  if (req.method !== "POST") return response(req, { error: "Método no permitido." }, 405);
  try {
    await getAuthenticatedUser(req);
    const form = await req.formData();
    const action = String(form.get("action") || "upload");
    if (action === "status") {
      await googleAccessToken(readServiceAccount());
      return response(req, { configured: true });
    }
    const token = await googleAccessToken(readServiceAccount());
    if (action === "delete") {
      const fileId = String(form.get("driveFileId") || "");
      if (!fileId) return response(req, { error: "Falta el archivo que se desea eliminar." }, 400);
      return response(req, await deleteFromDrive(token, fileId));
    }
    const file = form.get("file");
    if (!(file instanceof File)) return response(req, { error: "No se recibió ningún archivo." }, 400);
    const folderKey = String(form.get("folderKey") || "event");
    const folders = readFolders();
    const baseFolder = folders[folderKey as keyof typeof folders] || folders.event;
    let parentId = baseFolder;
    const eventFolder = String(form.get("eventFolder") || "").trim();
    if (folderKey === "event" && eventFolder) parentId = await findOrCreateEventFolder(token, baseFolder, eventFolder.slice(0, 120));
    const result = await uploadToDrive(token, file, parentId, String(form.get("fileName") || file.name));
    return response(req, result);
  } catch (error) {
    console.error("drive-upload", error);
    return response(req, { error: error instanceof Error ? error.message : "No se pudo completar la operación con Google Drive." }, 400);
  }
});
