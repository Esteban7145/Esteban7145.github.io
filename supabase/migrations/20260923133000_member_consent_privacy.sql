alter table public.church_members alter column photo_path drop not null;
alter table public.church_members add column if not exists photo_consent boolean not null default false;
alter table public.church_members add column if not exists photo_consent_at timestamptz;
alter table public.church_members add column if not exists attendance_consent boolean not null default false;
alter table public.church_members add column if not exists attendance_consent_at timestamptz;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'church_members_photo_opt_in') then
    alter table public.church_members add constraint church_members_photo_opt_in check (photo_path is null or photo_consent);
  end if;
end $$;
grant all on public.church_members to service_role;
grant all on public.member_attendance to service_role;
grant all on public.member_signup_limits to service_role;

drop policy if exists "IPUC admins view member photos" on storage.objects;
create policy "IPUC admins view member photos" on storage.objects for select to authenticated
  using (bucket_id = 'membership-photos' and public.is_ipuc_admin());
drop policy if exists "IPUC admins delete member photos" on storage.objects;
create policy "IPUC admins delete member photos" on storage.objects for delete to authenticated
  using (bucket_id = 'membership-photos' and public.is_ipuc_admin());
