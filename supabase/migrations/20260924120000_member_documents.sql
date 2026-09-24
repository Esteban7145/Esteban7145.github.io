-- Document details are required by the registration endpoint for new role holders.
-- Existing members remain valid until their details can be verified by an administrator.
alter table public.church_members
  add column if not exists document_type text,
  add column if not exists document_number text;

alter table public.church_members
  add constraint church_members_document_pair check (
    (document_type is null and document_number is null)
    or (has_church_role and document_type in ('CC', 'TI', 'CE', 'PA', 'RC', 'PPT')
        and document_number ~ '^[A-Z0-9][A-Z0-9.-]{2,31}$')
  );
