import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const SITE_ORIGIN = "https://esteban7145.github.io";
const DEFAULT_FOLDERS = {
  weekly: "1GTj8_8PcgZ1GnFU2eKT3smwlIWhG1uOY",
  event: "1Z3C25CEZT_spPTYfe9ktHHwbcRWIUjcn",
  multimedia: "1Av4jSQaDTimZwSIOcX58JyhCf2uLUo69",
  biblical: "1CQouw6irDWXEzlSHkbJM5NQlf7jPKwA1",
  music: "1TQTIz_Vi7BN8CMkBIIMp2U98GF7dnbs6",
};

function corsHeaders(req: Request) {
  const origin = req.headers.get("Origin") || "";
  const allowed = origin === SITE_ORIGIN || origin.startsWith("http://localhost:");
  return {
    "Access-Control-Allow-Origin": allowed ? origin : SITE_ORIGIN,
    "Access-Control-Allow-Headers": "authorization, apikey, content-type, range, x-client-info",
    "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
    "Access-Control-Expose-Headers": "Accept-Ranges, Content-Length, Content-Range, Content-Type",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json; charset=utf-8",
  };
}

function response(req: Request, body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: corsHeaders(req) });
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

async function googleAccessToken() {
  const clientId = Deno.env.get("GOOGLE_DRIVE_CLIENT_ID");
  const clientSecret = Deno.env.get("GOOGLE_DRIVE_CLIENT_SECRET");
  const refreshToken = Deno.env.get("GOOGLE_DRIVE_REFRESH_TOKEN");
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Falta configurar la conexión segura con Google Drive en Supabase.");
  }
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });
  const body = await tokenResponse.json().catch(() => ({}));
  if (!tokenResponse.ok || !body.access_token) throw new Error("Google no autorizó el acceso seguro a Drive. Vuelve a conectar la cuenta.");
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
  const metadata = JSON.stringify({
    name,
    parents: [parentId],
    // Conservar el tipo MIME evita que Drive entregue las imágenes como
    // descargas genéricas y permite previsualizarlas directamente.
    mimeType: file.type || "application/octet-stream",
  });
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

async function startResumableDriveUpload(token: string, fileName: string, mimeType: string, size: number, parentId: string) {
  const metadata = { name: fileName, parents: [parentId], mimeType: mimeType || "application/octet-stream" };
  const params = new URLSearchParams({ uploadType: "resumable", fields: "id,name,mimeType,size,webViewLink,webContentLink" });
  const result = await fetch(`https://www.googleapis.com/upload/drive/v3/files?${params}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
      "X-Upload-Content-Type": metadata.mimeType,
      "X-Upload-Content-Length": String(size),
    },
    body: JSON.stringify(metadata),
  });
  if (!result.ok) {
    const body = await result.json().catch(() => ({}));
    throw new Error(body?.error?.message || "Google Drive no pudo iniciar la carga del video.");
  }
  const sessionUrl = result.headers.get("Location");
  if (!sessionUrl) throw new Error("Google Drive no entregó la sesión de carga. Inténtalo de nuevo.");
  return sessionUrl;
}

async function sendResumableDriveChunk(sessionUrl: string, chunk: Blob, start: number, total: number) {
  const target = new URL(sessionUrl);
  if (target.protocol !== "https:" || target.hostname !== "www.googleapis.com" || !target.pathname.startsWith("/upload/drive/v3/files")) {
    throw new Error("La sesión de carga de Google Drive no es válida.");
  }
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(total) || start < 0 || total < 1 || start + chunk.size > total || chunk.size > 4 * 1024 * 1024) {
    throw new Error("El bloque de video no es válido.");
  }
  const end = start + chunk.size - 1;
  const result = await fetch(target, {
    method: "PUT",
    headers: { "Content-Type": "application/octet-stream", "Content-Range": `bytes ${start}-${end}/${total}` },
    body: chunk,
  });
  if (result.status === 308) {
    const range = result.headers.get("Range") || "";
    const received = Number(range.match(/-(\d+)$/)?.[1] || -1) + 1;
    return { complete: false, received };
  }
  const uploaded = await result.json().catch(() => ({}));
  if (!result.ok) throw new Error(uploaded?.error?.message || "Google Drive rechazó un bloque del video.");
  return { complete: true, asset: await publishDriveUpload(uploaded, total) };
}

function resumableReceivedBytes(range: string | null) {
  const match = String(range || "").match(/(?:bytes=|bytes\s+)?0-(\d+)$/i);
  return match ? Number(match[1]) + 1 : 0;
}

async function publishDriveUpload(uploaded: Record<string, unknown>, total: number) {
  const id = String(uploaded.id || "");
  if (!id) throw new Error("Drive terminó la transferencia, pero no devolvió el identificador del archivo.");
  const token = await googleAccessToken();
  await driveRequest(token, `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(id)}/permissions?sendNotificationEmail=false`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "anyone", role: "reader", allowFileDiscovery: false }),
  });
  return {
    id: `drive-${id}`,
    driveFileId: id,
    provider: "google-drive",
    name: uploaded.name || "video",
    type: uploaded.mimeType || "application/octet-stream",
    size: Number(uploaded.size || total),
    url: `https://drive.google.com/uc?export=download&id=${id}`,
    previewUrl: `https://drive.google.com/uc?export=view&id=${id}`,
    webViewLink: uploaded.webViewLink || `https://drive.google.com/file/d/${id}/view`,
    uploadedAt: new Date().toISOString(),
    path: `drive/${id}`,
    public: true,
  };
}

async function queryResumableDriveUpload(sessionUrl: string, total: number) {
  const target = new URL(sessionUrl);
  if (target.protocol !== "https:" || target.hostname !== "www.googleapis.com" || !target.pathname.startsWith("/upload/drive/v3/files")) {
    throw new Error("La sesión de carga de Google Drive no es válida.");
  }
  if (!Number.isSafeInteger(total) || total <= 0) throw new Error("El tamaño total del video no es válido.");
  const result = await fetch(target, {
    method: "PUT",
    headers: { "Content-Length": "0", "Content-Range": `bytes */${total}` },
    body: new Blob([]),
  });
  if (result.status === 308) return { complete: false, received: resumableReceivedBytes(result.headers.get("Range")) };
  const uploaded = await result.json().catch(() => ({}));
  if (!result.ok) throw new Error(uploaded?.error?.message || "Drive no pudo consultar el estado de la carga.");
  return { complete: true, asset: await publishDriveUpload(uploaded, total) };
}

async function deleteFromDrive(token: string, fileId: string) {
  await driveRequest(token, `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}`, { method: "DELETE" });
  return { deleted: true, driveFileId: fileId };
}

async function listMusicFromDrive(token: string) {
  const folders = readFolders();
  const query = `'${quoteDriveValue(folders.music)}' in parents and trashed = false`;
  const params = new URLSearchParams({
    q: query,
    orderBy: "name_natural",
    pageSize: "100",
    fields: "files(id,name,mimeType,size,modifiedTime,webViewLink)",
  });
  const result = await driveRequest(token, `https://www.googleapis.com/drive/v3/files?${params}`);
  const files = (result.files || []).filter((file: Record<string, unknown>) => String(file.mimeType || "").startsWith("audio/"));
  await Promise.all(files.map(async (file: Record<string, unknown>) => {
    try {
      await driveRequest(token, `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(String(file.id))}/permissions?sendNotificationEmail=false`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "anyone", role: "reader", allowFileDiscovery: false }),
      });
    } catch (error) {
      console.warn("No se pudo habilitar la reproducción pública de", file.name, error);
    }
  }));
  return {
    folderId: folders.music,
    files: files.map((file: Record<string, unknown>) => ({
      id: file.id,
      name: file.name,
      type: file.mimeType,
      size: Number(file.size || 0),
      modifiedTime: file.modifiedTime,
      // El navegador reproduce el audio a través de esta función. Así no
      // depende de las redirecciones ni de las restricciones del dominio de
      // descarga de Drive.
      audioUrl: `${Deno.env.get("SUPABASE_URL") || "https://qgucwxgwehkualhfnckt.supabase.co"}/functions/v1/drive-upload/music?id=${encodeURIComponent(String(file.id))}`,
      webViewLink: file.webViewLink || `https://drive.google.com/file/d/${encodeURIComponent(String(file.id))}/view`,
    })),
  };
}

async function streamMusic(req: Request) {
  const fileId = new URL(req.url).searchParams.get("id") || "";
  if (!/^[A-Za-z0-9_-]+$/.test(fileId)) return response(req, { error: "El archivo de música no es válido." }, 400);
  const token = await googleAccessToken();
  const folders = readFolders();
  const metadata = await driveRequest(token, `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}?fields=id,mimeType,parents,trashed`);
  if (metadata.trashed || !Array.isArray(metadata.parents) || !metadata.parents.includes(folders.music) || !String(metadata.mimeType || "").startsWith("audio/")) {
    return response(req, { error: "No se encontró un archivo de música disponible." }, 404);
  }
  const upstreamHeaders = new Headers();
  const range = req.headers.get("Range");
  if (range) upstreamHeaders.set("Range", range);
  // Permit only audio files directly inside the configured public music folder.
  let upstream = await fetch(`https://drive.usercontent.google.com/download?id=${encodeURIComponent(fileId)}&export=media`, {
    method: req.method,
    headers: upstreamHeaders,
  });
  if (!upstream.ok) {
    upstreamHeaders.set("Authorization", `Bearer ${token}`);
    upstream = await fetch(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}?alt=media`, {
      method: req.method,
      headers: upstreamHeaders,
    });
  }
  if (!upstream.ok) {
    const detail = await upstream.text().catch(() => "");
    return response(req, { error: detail || "No se pudo leer la canción desde Drive." }, upstream.status);
  }
  const headers = new Headers(corsHeaders(req));
  ["Content-Type", "Content-Length", "Content-Range", "Accept-Ranges", "Content-Disposition", "Cache-Control"].forEach(name => {
    const value = upstream.headers.get(name);
    if (value) headers.set(name, value);
  });
  headers.set("Content-Type", upstream.headers.get("Content-Type") || "audio/mpeg");
  headers.set("Content-Disposition", "inline");
  return new Response(req.method === "HEAD" ? null : upstream.body, { status: upstream.status, headers });
}

Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(req) });
  if (req.method === "GET" || req.method === "HEAD") {
    try {
      if (new URL(req.url).pathname.endsWith("/music")) return await streamMusic(req);
      return response(req, { error: "Ruta no encontrada." }, 404);
    } catch (error) {
      return response(req, { error: error instanceof Error ? error.message : "No se pudo reproducir la canción." }, 500);
    }
  }
  if (req.method !== "POST") return response(req, { error: "Método no permitido." }, 405);
  try {
    const form = await req.formData();
    const action = String(form.get("action") || "upload");
    if (action === "list-music") {
      const token = await googleAccessToken();
      return response(req, await listMusicFromDrive(token));
    }
    await getAuthenticatedUser(req);
    if (action === "start-resumable") {
      const fileName = String(form.get("fileName") || "video").slice(0, 180);
      const mimeType = String(form.get("mimeType") || "application/octet-stream").slice(0, 120);
      const size = Number(form.get("size") || 0);
      if (!Number.isSafeInteger(size) || size <= 0 || size > 2 * 1024 * 1024 * 1024) return response(req, { error: "El video debe pesar menos de 2 GB." }, 400);
      const folderKey = String(form.get("folderKey") || "multimedia");
      const folders = readFolders();
      const baseFolder = folders[folderKey as keyof typeof folders] || folders.multimedia;
      let parentId = baseFolder;
      const eventFolder = String(form.get("eventFolder") || "").trim();
      const token = await googleAccessToken();
      if (folderKey === "event" && eventFolder) parentId = await findOrCreateEventFolder(token, baseFolder, eventFolder.slice(0, 120));
      const sessionUrl = await startResumableDriveUpload(token, fileName, mimeType, size, parentId);
      return response(req, { sessionUrl });
    }
    if (action === "upload-chunk") {
      const chunk = form.get("chunk");
      if (!(chunk instanceof Blob)) return response(req, { error: "No se recibió el bloque del video." }, 400);
      const result = await sendResumableDriveChunk(String(form.get("sessionUrl") || ""), chunk, Number(form.get("start") || 0), Number(form.get("total") || 0));
      return response(req, result);
    }
    if (action === "upload-status") {
      const result = await queryResumableDriveUpload(String(form.get("sessionUrl") || ""), Number(form.get("total") || 0));
      return response(req, result);
    }
    if (action === "status") {
      await googleAccessToken();
      return response(req, { configured: true });
    }
    const token = await googleAccessToken();
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
