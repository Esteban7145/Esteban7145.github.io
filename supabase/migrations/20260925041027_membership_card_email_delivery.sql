alter table public.church_members
  add column if not exists card_email_sent_at timestamptz,
  add column if not exists card_email_sending_at timestamptz,
  add column if not exists card_email_error text;

comment on column public.church_members.card_email_sent_at is
  'Fecha de envío del carnet al correo del miembro, únicamente tras aprobación administrativa.';
