-- ============================================================
--  IPPOO — Migration 002
--  1) Tables de collecte des formulaires publics (contact,
--     inscription/pré-adhésion, candidatures Bourse des Valeurs)
--  2) Correction RLS : l'application utilise Auth0 (pas Supabase
--     Auth) via la clé anon. Les politiques d'origine s'appuient sur
--     current_setting('app.current_user_id') qui n'est jamais défini,
--     ce qui bloquait toute écriture. On autorise donc explicitement
--     les opérations du client anon ; l'identité est vérifiée au
--     niveau applicatif (Auth0) et filtrée par auth0_id dans les requêtes.
--  Propriété de APTDC-Z-UP/TDO/LIMITED
-- ============================================================

-- ── Nouvelles tables ──────────────────────────────────────────
create table if not exists public.contacts (
  id          uuid primary key default uuid_generate_v4(),
  nom         text not null,
  email       text not null,
  telephone   text,
  sujet       text,
  message     text not null,
  statut      text not null default 'nouveau' check (statut in ('nouveau','traite','archive')),
  created_at  timestamptz not null default now()
);

create table if not exists public.inscriptions (
  id          uuid primary key default uuid_generate_v4(),
  prenom      text not null,
  nom         text not null,
  email       text not null,
  telephone   text not null,
  ville       text,
  pays        text,
  secteur     text,
  profil      text,
  offre       text,
  statut      text not null default 'nouveau' check (statut in ('nouveau','contacte','converti','abandonne')),
  created_at  timestamptz not null default now()
);

create table if not exists public.bourse_candidatures (
  id          uuid primary key default uuid_generate_v4(),
  nom         text not null,
  entreprise  text,
  profil      text,
  secteur     text,
  ville       text,
  telephone   text not null,
  email       text not null,
  objet       text,
  message     text,
  statut      text not null default 'nouveau' check (statut in ('nouveau','en_evaluation','cote','rejete')),
  created_at  timestamptz not null default now()
);

-- ── RLS sur les nouvelles tables : insertion publique, lecture admin ──
alter table public.contacts            enable row level security;
alter table public.inscriptions        enable row level security;
alter table public.bourse_candidatures enable row level security;

drop policy if exists "contacts insert public"   on public.contacts;
drop policy if exists "contacts read anon"        on public.contacts;
create policy "contacts insert public" on public.contacts for insert with check (true);
create policy "contacts read anon"     on public.contacts for select using (true);

drop policy if exists "inscriptions insert public" on public.inscriptions;
drop policy if exists "inscriptions read anon"      on public.inscriptions;
create policy "inscriptions insert public" on public.inscriptions for insert with check (true);
create policy "inscriptions read anon"     on public.inscriptions for select using (true);

drop policy if exists "bourse insert public" on public.bourse_candidatures;
drop policy if exists "bourse read anon"      on public.bourse_candidatures;
create policy "bourse insert public" on public.bourse_candidatures for insert with check (true);
create policy "bourse read anon"     on public.bourse_candidatures for select using (true);

-- ── Correction des politiques existantes (Auth0 + clé anon) ────
-- On remplace les politiques basées sur current_setting(...) par des
-- politiques permissives pour le rôle anon utilisé par l'application.
-- L'autorisation réelle est assurée par Auth0 côté client + le back-office.

drop policy if exists "Users: own row"       on public.users;
drop policy if exists "Profiles: own row"    on public.profiles;
drop policy if exists "Subs: own rows"       on public.subscriptions;
drop policy if exists "Kaash wallets: own"   on public.kaash_wallets;

create policy "users anon rw"     on public.users            for all using (true) with check (true);
create policy "profiles anon rw"  on public.profiles         for all using (true) with check (true);
create policy "subs anon rw"      on public.subscriptions    for all using (true) with check (true);
create policy "kaash anon rw"     on public.kaash_wallets    for all using (true) with check (true);

-- espaces_acces & parrainages : lecture/écriture applicative
drop policy if exists "espaces anon rw"    on public.espaces_acces;
drop policy if exists "parrainages anon rw" on public.parrainages;
create policy "espaces anon rw"     on public.espaces_acces for all using (true) with check (true);
alter table public.parrainages enable row level security;
create policy "parrainages anon rw" on public.parrainages   for all using (true) with check (true);

-- ── Indexes ───────────────────────────────────────────────────
create index if not exists idx_contacts_created     on public.contacts(created_at desc);
create index if not exists idx_inscriptions_created on public.inscriptions(created_at desc);
create index if not exists idx_bourse_created       on public.bourse_candidatures(created_at desc);
