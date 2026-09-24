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
    const legacyChurchRole = hasChurchRole ? String(form.get("churchRole") || "").trim() : "";
    const legacyCommittee = hasChurchRole ? String(form.get("churchCommittee") || "").trim() : "";
    const normalizeCommittee = (value: string) => value.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const allowedCommittees = ["Junta Local", "Red de Familia", "Caballeros", "Damas Dorcas", "DECOM", "Jóvenes", "Recepción", "Música", "Sonido", "Misiones", "Evangelismo", "Escuela Dominical", "Edad Dorada"];
    let requestedAssignments: Array<{ role: string; committee: string; custom?: boolean }> = [];
    if (hasChurchRole) {
      const rawAssignments = String(form.get("churchAssignments") || "");
      if (rawAssignments) {
        if (rawAssignments.length > 12000) return json(req, { error: "El número de cargos ingresado es demasiado grande." }, 400);
        try {
          const parsed: unknown = JSON.parse(rawAssignments);
          if (!Array.isArray(parsed)) throw new Error("invalid assignments");
          requestedAssignments = parsed.map(value => {
            if (!value || typeof value !== "object") throw new Error("invalid assignment");
            const item = value as Record<string, unknown>;
            return { role: String(item.role || "").trim().replace(/\s+/g, " "), committee: String(item.committee || "").trim().replace(/\s+/g, " "), custom: item.custom === true };
          });
        } catch {
          return json(req, { error: "Revisa los cargos y comités ingresados." }, 400);
        }
      } else if (legacyChurchRole || legacyCommittee) {
        requestedAssignments = [{ role: legacyChurchRole, committee: legacyCommittee, custom: form.get("churchCommitteeIsCustom") === "true" }];
      }
    }
    const assignments = requestedAssignments.map(item => {
      const committee = item.custom
        ? item.committee && item.committee.length <= 80 && !/[<>|]/.test(item.committee) ? item.committee : ""
        : allowedCommittees.find(name => normalizeCommittee(name) === normalizeCommittee(item.committee)) || "";
      return { role: item.role, committee };
    });
    const churchRole = hasChurchRole ? assignments.map(item => item.role).join(" | ") : null;
    const churchCommittee = hasChurchRole ? assignments.map(item => item.committee).join(" | ") : null;
    const documentType = hasChurchRole ? String(form.get("documentType") || "").trim().toUpperCase() : "";
    const documentNumber = hasChurchRole ? String(form.get("documentNumber") || "").trim().toUpperCase() : "";
    const birthDate = String(form.get("birthDate") || "").trim();
    const isBaptizedValue = String(form.get("isBaptized") || "");
    const isBaptized = isBaptizedValue === "true";
    const filledValue = String(form.get("filledWithHolySpirit") || "");
    const filledWithHolySpirit = filledValue === "true";
    const requestChanges = form.get("requestChanges") === "true";
    let verifiedEmail = "";
    if (requestChanges) {
      const bearer = req.headers.get("Authorization")?.match(/^Bearer\s+(.+)$/i)?.[1];
      if (!bearer) return json(req, { error: "Verifica el correo registrado antes de solicitar cambios." }, 401);
      const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(bearer);
      if (authError || !user?.email_confirmed_at || !user.email) return json(req, { error: "La verificación del correo venció. Solicita un código nuevo." }, 401);
      verifiedEmail = user.email.trim().toLowerCase();
    }
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
    if (hasChurchRole && (!assignments.length || assignments.length > 20 || assignments.some(item => !item.role || item.role.length > 120 || item.role.includes("|") || !item.committee))) return json(req, { error: "Cada cargo debe tener un comité válido. Puedes registrar hasta 20 cargos o comités." }, 400);
    if (hasChurchRole && (!["CC", "TI", "CE", "PA", "RC", "PPT"].includes(documentType) || !/^[A-Z0-9][A-Z0-9.-]{2,31}$/.test(documentNumber))) {
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
    if (!consent || !sensitiveDataConsent) return json(req, { error: "Debes aceptar de forma expresa el tratamiento de datos para crear el registro de membresía." }, 400);
    if (!(photo instanceof File) || photo.size === 0) return json(req, { error: "Selecciona una foto de rostro para identificarte y generar tu carnet." }, 400);
    if (!photoConsent) return json(req, { error: "Debes autorizar el almacenamiento privado de la foto para generar tu carnet." }, 400);
    if (!["image/jpeg", "image/png", "image/webp"].includes(photo.type) || photo.size > 50 * 1024 * 1024) {
      return json(req, { error: "La foto debe ser JPG, PNG o WebP y pesar máximo 50 MB." }, 400);
    }

    const forwarded = req.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim();
    const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-real-ip") || forwarded || "unknown";
    const fingerprintBytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${projectUrl}:${ip}`));
    const fingerprint = Array.from(new Uint8Array(fingerprintBytes), byte => byte.toString(16).padStart(2, "0")).join("");
    const { data: attempts, error: limitError } = await supabaseAdmin.rpc("take_member_signup_slot", { p_fingerprint: fingerprint });
    if (limitError) throw new Error("El registro no está disponible en este momento.");
    if (Number(attempts) > 5) return json(req, { error: "Se alcanzó el límite temporal de registros. Inténtalo de nuevo en 15 minutos." }, 429);

    const { data: byDocument, error: documentLookupError } = hasChurchRole
      ? await supabaseAdmin.from("church_members").select("id,email").eq("document_type", documentType).eq("document_number", documentNumber).maybeSingle()
      : { data: null, error: null };
    if (documentLookupError) throw documentLookupError;
    let existingMemberId = byDocument?.id || null;
    let existingMemberEmail = String(byDocument?.email || "").trim().toLowerCase();
    if (!existingMemberId) {
      const { data: legacyMatches, error: legacyLookupError } = await supabaseAdmin.from("church_members").select("id,email").eq("email", email).limit(2);
      if (legacyLookupError) throw legacyLookupError;
      if ((legacyMatches || []).length > 1) return json(req, { error: "Encontramos más de un registro anterior con ese correo. Contacta a administración para validar tu identidad." }, 409);
      existingMemberId = legacyMatches?.[0]?.id || null;
      existingMemberEmail = String(legacyMatches?.[0]?.email || "").trim().toLowerCase();
    }
    if (existingMemberId && (email !== existingMemberEmail || (requestChanges && verifiedEmail !== existingMemberEmail))) return json(req, { ok: false, code: "member_email_mismatch", error: "El correo no coincide con el registrado. Contacta a administración para actualizarlo." }, 409);
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
      church_role: churchRole, church_committee: churchCommittee, document_type: hasChurchRole ? documentType : null, document_number: hasChurchRole ? documentNumber : null,
      birth_date: birthDate, is_baptized: isBaptized, baptism_date: null,
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
