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
