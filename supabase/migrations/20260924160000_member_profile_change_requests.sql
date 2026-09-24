alter table public.church_members
  add column if not exists birth_date date,
  add column if not exists is_baptized boolean,
  add column if not exists baptism_date date,
  add column if not exists filled_with_holy_spirit boolean;

alter table public.church_members drop constraint if exists church_members_document_pair;
alter table public.church_members add constraint church_members_document_pair check (
  (document_type is null and document_number is null)
  or (document_type in ('CC', 'TI', 'CE', 'PA', 'RC', 'PPT') and document_number ~ '^[A-Z0-9][A-Z0-9.-]{2,31}$')
);
alter table public.church_members add constraint church_members_baptism_date_check check (
  (is_baptized is null and baptism_date is null)
  or (is_baptized and baptism_date is not null)
  or (not is_baptized and baptism_date is null)
);
create unique index if not exists church_members_document_unique_idx
  on public.church_members (document_type, upper(document_number))
  where document_type is not null and document_number is not null;

create table if not exists public.member_change_requests (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.church_members(id) on delete cascade,
  full_name text not null check (char_length(full_name) between 3 and 140),
  address text not null check (char_length(address) between 5 and 240),
  email text not null check (char_length(email) <= 254),
  phone text not null check (char_length(phone) between 7 and 32),
  document_type text not null check (document_type in ('CC', 'TI', 'CE', 'PA', 'RC', 'PPT')),
  document_number text not null check (document_number ~ '^[A-Z0-9][A-Z0-9.-]{2,31}$'),
  birth_date date not null,
  is_baptized boolean not null,
  baptism_date date,
  filled_with_holy_spirit boolean not null,
  has_church_role boolean not null,
  church_role text,
  photo_path text,
  attendance_consent boolean not null default false,
  attendance_consent_at timestamptz,
  sensitive_data_consent boolean not null default false,
  sensitive_data_consent_at timestamptz,
  photo_consent boolean not null default false,
  photo_consent_at timestamptz,
  consent_version text not null,
  status text not null default 'pendiente' check (status in ('pendiente', 'aprobado', 'rechazado')),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by uuid references auth.users(id),
  constraint member_change_role_required check ((has_church_role and nullif(trim(church_role), '') is not null) or (not has_church_role and church_role is null)),
  constraint member_change_baptism_date_check check ((is_baptized and baptism_date is not null) or (not is_baptized and baptism_date is null))
);
create index if not exists member_change_requests_pending_idx on public.member_change_requests (status, created_at desc);
alter table public.member_change_requests enable row level security;
revoke all on public.member_change_requests from anon, authenticated;
grant select on public.member_change_requests to authenticated;
drop policy if exists "Admins review member changes" on public.member_change_requests;
create policy "Admins review member changes" on public.member_change_requests
  for select to authenticated using (public.is_ipuc_admin());
grant all on public.member_change_requests to service_role;

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
      updated_at = now()
    where id = request_row.member_id;
  end if;
  update public.member_change_requests set status = case when p_approve then 'aprobado' else 'rechazado' end,
    reviewed_at = now(), reviewed_by = auth.uid() where id = p_request_id;
end;
$$;
revoke all on function public.review_member_change_request(uuid, boolean) from public, anon;
grant execute on function public.review_member_change_request(uuid, boolean) to authenticated;
