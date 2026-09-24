alter table public.church_members
  add column if not exists guardian_full_name text,
  add column if not exists guardian_consent boolean not null default false,
  add column if not exists minor_informed_consent boolean not null default false;

alter table public.member_change_requests
  add column if not exists guardian_full_name text,
  add column if not exists guardian_consent boolean not null default false,
  add column if not exists minor_informed_consent boolean not null default false;

create or replace function public.review_member_change_request(p_request_id uuid, p_approve boolean)
returns void
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare request_row public.member_change_requests%rowtype;
begin
  if not public.is_ipuc_admin() then raise exception 'not authorized'; end if;
  select * into request_row from public.member_change_requests where id = p_request_id for update;
  if not found or request_row.status <> 'pendiente' then raise exception 'request unavailable'; end if;
  if p_approve then
    update public.church_members set
      full_name = request_row.full_name, address = request_row.address, email = request_row.email,
      phone = request_row.phone, document_type = request_row.document_type, document_number = request_row.document_number,
      birth_date = request_row.birth_date, is_baptized = request_row.is_baptized, baptism_date = request_row.baptism_date,
      filled_with_holy_spirit = request_row.filled_with_holy_spirit,
      has_church_role = request_row.has_church_role, church_role = request_row.church_role,
      photo_path = coalesce(request_row.photo_path, photo_path), attendance_consent = request_row.attendance_consent,
      attendance_consent_at = case when request_row.attendance_consent then coalesce(attendance_consent_at, now()) else null end,
      photo_consent = request_row.photo_consent, photo_consent_at = request_row.photo_consent_at,
      sensitive_data_consent = request_row.sensitive_data_consent,
      sensitive_data_consent_at = request_row.sensitive_data_consent_at,
      consent_version = request_row.consent_version,
      guardian_full_name = request_row.guardian_full_name,
      guardian_consent = request_row.guardian_consent,
      minor_informed_consent = request_row.minor_informed_consent,
      updated_at = now()
    where id = request_row.member_id;
  end if;
  update public.member_change_requests set status = case when p_approve then 'aprobado' else 'rechazado' end,
    reviewed_at = now(), reviewed_by = auth.uid() where id = p_request_id;
end;
$$;
revoke all on function public.review_member_change_request(uuid, boolean) from public, anon;
grant execute on function public.review_member_change_request(uuid, boolean) to authenticated;
