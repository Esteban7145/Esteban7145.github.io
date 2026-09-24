create unique index if not exists member_change_requests_one_pending_per_member_idx
  on public.member_change_requests (member_id) where status = 'pendiente';
