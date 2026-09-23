create table if not exists public.church_members (
  id uuid primary key default gen_random_uuid(),
  member_number text not null unique default ('IPUC-VR-' || to_char(now(), 'YYYY') || '-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 8))),
  full_name text not null check (char_length(full_name) between 3 and 140),
  address text not null check (char_length(address) between 5 and 240),
  email text not null check (char_length(email) <= 254),
  phone text not null check (char_length(phone) between 7 and 32),
  has_church_role boolean not null default false,
  church_role text,
  photo_path text not null,
  status text not null default 'pendiente' check (status in ('pendiente', 'activo', 'inactivo')),
  consent_version text not null,
  consent_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint church_members_role_required check ((has_church_role and nullif(trim(church_role), '') is not null) or (not has_church_role and church_role is null))
);

create index if not exists church_members_status_created_idx on public.church_members (status, created_at desc);
create index if not exists church_members_name_idx on public.church_members (lower(full_name));
alter table public.church_members enable row level security;
revoke all on public.church_members from anon, authenticated;
grant select, update, delete on public.church_members to authenticated;
drop policy if exists "Admins manage church members" on public.church_members;
create policy "Admins manage church members" on public.church_members for all to authenticated
  using (public.is_ipuc_admin()) with check (public.is_ipuc_admin());

create table if not exists public.member_attendance (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.church_members(id) on delete cascade,
  event_id text not null,
  event_title text not null,
  attended_at timestamptz not null default now(),
  recorded_by uuid references auth.users(id),
  unique (member_id, event_id)
);
create index if not exists member_attendance_event_idx on public.member_attendance (event_id, attended_at desc);
alter table public.member_attendance enable row level security;
revoke all on public.member_attendance from anon, authenticated;
grant select, insert, update, delete on public.member_attendance to authenticated;
drop policy if exists "Admins manage member attendance" on public.member_attendance;
create policy "Admins manage member attendance" on public.member_attendance for all to authenticated
  using (public.is_ipuc_admin()) with check (public.is_ipuc_admin());

create table if not exists public.member_signup_limits (
  fingerprint text primary key check (char_length(fingerprint) = 64),
  window_started_at timestamptz not null default now(),
  attempts integer not null default 0
);
revoke all on public.member_signup_limits from anon, authenticated;

create or replace function public.take_member_signup_slot(p_fingerprint text)
returns integer
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare current_attempts integer;
begin
  if p_fingerprint !~ '^[a-f0-9]{64}$' then raise exception 'invalid fingerprint'; end if;
  delete from public.member_signup_limits where window_started_at < now() - interval '24 hours';
  insert into public.member_signup_limits (fingerprint, window_started_at, attempts)
  values (p_fingerprint, now(), 1)
  on conflict (fingerprint) do update set
    attempts = case when now() - public.member_signup_limits.window_started_at >= interval '15 minutes' then 1 else public.member_signup_limits.attempts + 1 end,
    window_started_at = case when now() - public.member_signup_limits.window_started_at >= interval '15 minutes' then now() else public.member_signup_limits.window_started_at end
  returning attempts into current_attempts;
  return current_attempts;
end;
$$;
revoke all on function public.take_member_signup_slot(text) from public, anon, authenticated;
grant execute on function public.take_member_signup_slot(text) to service_role;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('membership-photos', 'membership-photos', false, 3145728, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;
drop policy if exists "IPUC admins view member photos" on storage.objects;
create policy "IPUC admins view member photos" on storage.objects for select to authenticated
  using (bucket_id = 'membership-photos' and public.is_ipuc_admin());
drop policy if exists "IPUC admins delete member photos" on storage.objects;
create policy "IPUC admins delete member photos" on storage.objects for delete to authenticated
  using (bucket_id = 'membership-photos' and public.is_ipuc_admin());
