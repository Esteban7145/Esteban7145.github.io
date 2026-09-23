create index if not exists member_attendance_recorded_by_idx
  on public.member_attendance (recorded_by)
  where recorded_by is not null;
