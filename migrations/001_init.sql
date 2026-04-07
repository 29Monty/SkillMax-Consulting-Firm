-- Supabase schema for SkillMax Consulting

create table profiles (
  id uuid references auth.users on delete cascade,
  full_name text,
  role text default 'user',
  primary key (id)
);

create table bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  name text not null,
  email text not null,
  service text not null,
  date timestamptz not null,
  status text default 'pending',
  created_at timestamptz default now()
);

create table messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  role text not null,
  content text not null,
  created_at timestamptz default now()
);
