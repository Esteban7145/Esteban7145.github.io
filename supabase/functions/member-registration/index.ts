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
    const documentType = String(form.get("documentType") || "").trim().toUpperCase();
    const documentNumber = String(form.get("documentNumber") || "").trim().toUpperCase();
    const birthDate = String(form.get("birthDate") || "").trim();
    const isBaptizedValue = String(form.get("isBaptized") || "");
    const isBaptized = isBaptizedValue === "true";
    const baptismDate = isBaptized ? String(form.get("baptismDate") || "").trim() : null;
    const filledValue = String(form.get("filledWithHolySpirit") || "");
    const filledWithHolySpirit = filledValue === "true";
    const requestChanges = form.get("requestChanges") === "true";
    const consent = form.get("consent") === "true" && form.get("consentVersion") === "2026-09-v3";
    const sensitiveDataConsent = form.get("sensitiveDataConsent") === "true";
    const guardianFullName = String(form.get("guardianFullName") || "").trim().replace(/\s+/g, " ");
    const guardianConsent = form.get("guardianConsent") === "true";
    const minorInformedConsent = form.get("minorInformedConsent") === "true";
    const photoConsent = form.get("photoConsent") === "true";
    const attendanceConsent = form.get("attendanceConsent") === "true";
    const photo = form.get("photo");
    if (fullName.length < 3 || fullName.length > 140 || address.length < 5 || address.length > 240 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || phone.length < 7 || phone.length > 32) {
      return json(req, { error: "Revisa el nombre, la dirección, el correo y el teléfono." }, 400);
    }
    if (hasChurchRole && (!churchRole || churchRole.length > 120)) return json(req, { error: "Especifica el cargo que desempeñas en la iglesia." }, 400);
    if (!["CC", "TI", "CE", "PA", "RC", "PPT"].includes(documentType) || !/^[A-Z0-9][A-Z0-9.-]{2,31}$/.test(documentNumber)) {
      return json(req, { error: "Selecciona el tipo de documento e ingresa un número válido." }, 400);
    }
    const dateParts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Bogota", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
    const today = `${dateParts.find(part => part.type === "year")?.value}-${dateParts.find(part => part.type === "month")?.value}-${dateParts.find(part => part.type === "day")?.value}`;
    const isValidDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`)) && new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value;
    if (!isValidDate(birthDate) || birthDate < "1900-01-01" || birthDate > today) return json(req, { error: "Ingresa una fecha de nacimiento válida." }, 400);
    const birthParts = birthDate.split("-").map(Number);
    const todayParts = today.split("-").map(Number);
    const isMinor = todayParts[0] - birthParts[0] < 18 || (todayParts[0] - birthParts[0] === 18 && (todayParts[1] < birthParts[1] || (todayParts[1] === birthParts[1] && todayParts[2] < birthParts[2])));
    if (isMinor && (guardianFullName.length < 3 || guardianFullName.length > 140 || !guardianConsent || !minorInformedConsent)) return json(req, { error: "Para una persona menor de edad, completa los datos y las autorizaciones de su representante legal." }, 400);
    if (!["true", "false"].includes(isBaptizedValue) || !["true", "false"].includes(filledValue)) return json(req, { error: "Responde las preguntas de bautismo y Espíritu Santo." }, 400);
    if (isBaptized && (!baptismDate || !isValidDate(baptismDate) || baptismDate < birthDate || baptismDate > today)) return json(req, { error: "Ingresa una fecha de bautismo válida, posterior a tu nacimiento." }, 400);
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

    const { data: byDocument, error: documentLookupError } = await supabaseAdmin.from("church_members").select("id").eq("document_type", documentType).eq("document_number", documentNumber).maybeSingle();
    if (documentLookupError) throw documentLookupError;
    let existingMemberId = byDocument?.id || null;
    if (!existingMemberId) {
      const { data: legacyMatches, error: legacyLookupError } = await supabaseAdmin.from("church_members").select("id").eq("email", email).is("document_type", null).limit(2);
      if (legacyLookupError) throw legacyLookupError;
      if ((legacyMatches || []).length > 1) return json(req, { error: "Encontramos más de un registro anterior con ese correo. Contacta a administración para validar tu identidad." }, 409);
      existingMemberId = legacyMatches?.[0]?.id || null;
    }
    if (existingMemberId && !requestChanges) return json(req, { ok: false, code: "existing_member", error: "Ya existe un registro asociado a este documento." }, 409);
    if (!existingMemberId && requestChanges) return json(req, { ok: false, code: "member_not_found", error: "No encontramos un registro para actualizar. Envía una inscripción nueva." }, 404);
    if (existingMemberId && requestChanges) {
      const { data: pendingRequest, error: pendingLookupError } = await supabaseAdmin.from("member_change_requests").select("id").eq("member_id", existingMemberId).eq("status", "pendiente").maybeSingle();
      if (pendingLookupError) throw pendingLookupError;
      if (pendingRequest) return json(req, { ok: false, code: "pending_change", error: "Ya hay una solicitud de actualización pendiente para este registro." }, 409);
    }

    const id = crypto.randomUUID();
    const extension = photo.type === "image/png" ? "png" : photo.type === "image/webp" ? "webp" : "jpg";
    photoPath = `${id}/${crypto.randomUUID()}.${extension}`;
    const { error: uploadError } = await supabaseAdmin.storage.from("membership-photos").upload(photoPath, photo, { contentType: photo.type, upsert: false });
    if (uploadError) throw uploadError;
    const memberData = {
      id, full_name: fullName, address, email, phone, has_church_role: hasChurchRole,
      church_role: churchRole, document_type: documentType, document_number: documentNumber,
      birth_date: birthDate, is_baptized: isBaptized, baptism_date: baptismDate,
      filled_with_holy_spirit: filledWithHolySpirit, photo_path: photoPath,
      guardian_full_name: isMinor ? guardianFullName : null, guardian_consent: isMinor && guardianConsent,
      minor_informed_consent: isMinor && minorInformedConsent,
      photo_consent: true, photo_consent_at: new Date().toISOString(), attendance_consent: attendanceConsent,
      attendance_consent_at: attendanceConsent ? new Date().toISOString() : null,
      sensitive_data_consent: sensitiveDataConsent, sensitive_data_consent_at: sensitiveDataConsent ? new Date().toISOString() : null,
      consent_version: "2026-09-v3",
    };
    if (requestChanges) {
      const { error: requestError } = await supabaseAdmin.from("member_change_requests").insert({ ...memberData, member_id: existingMemberId });
      if (requestError) throw requestError;
      return json(req, { ok: true, changeRequest: true }, 202);
    }
    const { data, error: insertError } = await supabaseAdmin.from("church_members").insert(memberData).select("id,member_number").single();
    if (insertError) throw insertError;
    return json(req, { ok: true, id: data.id, memberNumber: data.member_number }, 201);
  } catch (error) {
    if (photoPath) await supabaseAdmin.storage.from("membership-photos").remove([photoPath]).catch(() => {});
    console.error("member-registration", error instanceof Error ? error.message : "No se pudo guardar el registro.");
    if (error && typeof error === "object" && "code" in error && error.code === "23505") return json(req, { ok: false, code: "existing_member", error: "Ya existe un registro asociado a este documento." }, 409);
    return json(req, { error: "No se pudo guardar el registro. Revisa los datos o intenta de nuevo." }, 400);
  }
});
