alter table public.church_members add column if not exists sensitive_data_consent boolean not null default false;
alter table public.church_members add column if not exists sensitive_data_consent_at timestamptz;
