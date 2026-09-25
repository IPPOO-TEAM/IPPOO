-- ============================================================
--  IPPOO — Schéma global de base de données
--  Propriété de APTDC-Z-UP/TDO/LIMITED
-- ============================================================

-- Extension UUID
create extension if not exists "uuid-ossp";

-- ── Table: users ──────────────────────────────────────────────
create table if not exists public.users (
  id          uuid primary key default uuid_generate_v4(),
  auth0_id    text unique not null,
  email       text unique not null,
  created_at  timestamptz not null default now(),
  is_onboarded boolean not null default false,
  role        text not null default 'user' check (role in ('user','admin','moderator'))
);

-- ── Table: profiles ───────────────────────────────────────────
create table if not exists public.profiles (
  id          uuid primary key default uuid_generate_v4(),
  user_id     text not null,                -- auth0_id FK
  auth0_id    text unique not null,
  nom         text not null,
  prenom      text not null,
  telephone   text,
  pays        text,
  departement text,
  ville       text,
  quartier    text,
  domaines    text[] not null default '{}',
  profession  text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ── Table: subscriptions ──────────────────────────────────────
create table if not exists public.subscriptions (
  id          uuid primary key default uuid_generate_v4(),
  user_id     text not null,               -- auth0_id
  espace      text not null,               -- ex: 'assurance', 'market', 'kaash'…
  plan        text not null default 'basic',
  status      text not null default 'pending' check (status in ('active','pending','cancelled','expired')),
  started_at  timestamptz not null default now(),
  expires_at  timestamptz,
  created_at  timestamptz not null default now()
);

-- ── Table: groupements ────────────────────────────────────────
create table if not exists public.groupements (
  id              uuid primary key default uuid_generate_v4(),
  nom             text not null,
  secteur         text not null,
  description     text,
  region          text,
  responsable_id  text,                    -- auth0_id du responsable
  membres_count   int not null default 0,
  created_at      timestamptz not null default now()
);

-- ── Table: espaces_acces ──────────────────────────────────────
create table if not exists public.espaces_acces (
  id          uuid primary key default uuid_generate_v4(),
  user_id     text not null,               -- auth0_id
  espace_code text not null,
  granted_at  timestamptz not null default now(),
  granted_by  text,                        -- auth0_id admin
  unique (user_id, espace_code)
);

-- ── Table: parrainages ────────────────────────────────────────
create table if not exists public.parrainages (
  id                uuid primary key default uuid_generate_v4(),
  parrain_id        text not null,          -- auth0_id
  filleul_id        text not null,          -- auth0_id
  code_parrainage   text unique not null,
  bonus_credited    boolean not null default false,
  created_at        timestamptz not null default now()
);

-- ── Table: doleances ─────────────────────────────────────────
create table if not exists public.doleances (
  id          uuid primary key default uuid_generate_v4(),
  user_id     text,                         -- nullable (anonymous allowed)
  sujet       text not null,
  message     text not null,
  statut      text not null default 'nouvelle' check (statut in ('nouvelle','en_cours','resolue','fermee')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ── Table: kaash_wallets ──────────────────────────────────────
create table if not exists public.kaash_wallets (
  id          uuid primary key default uuid_generate_v4(),
  user_id     text unique not null,         -- auth0_id
  balance     numeric(12,2) not null default 0,
  currency    text not null default 'XOF',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ── Table: kaash_transactions ────────────────────────────────
create table if not exists public.kaash_transactions (
  id            uuid primary key default uuid_generate_v4(),
  wallet_id     uuid not null references public.kaash_wallets(id),
  montant       numeric(12,2) not null,
  type          text not null check (type in ('credit','debit','transfert','paiement')),
  description   text,
  reference     text unique,
  statut        text not null default 'en_attente' check (statut in ('en_attente','validee','refusee')),
  created_at    timestamptz not null default now()
);

-- ── Table: actualites ────────────────────────────────────────
create table if not exists public.actualites (
  id          uuid primary key default uuid_generate_v4(),
  titre       text not null,
  contenu     text not null,
  image_url   text,
  auteur_id   text,                         -- auth0_id admin
  publie      boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ── Table: formations ────────────────────────────────────────
create table if not exists public.formations (
  id            uuid primary key default uuid_generate_v4(),
  titre         text not null,
  description   text,
  date_debut    date,
  date_fin      date,
  lieu          text,
  max_inscrits  int,
  created_at    timestamptz not null default now()
);

-- ── Table: inscriptions_formations ───────────────────────────
create table if not exists public.inscriptions_formations (
  id            uuid primary key default uuid_generate_v4(),
  formation_id  uuid not null references public.formations(id),
  user_id       text not null,              -- auth0_id
  statut        text not null default 'inscrit' check (statut in ('inscrit','confirme','annule')),
  created_at    timestamptz not null default now(),
  unique (formation_id, user_id)
);

-- ── Row Level Security ────────────────────────────────────────

alter table public.users             enable row level security;
alter table public.profiles          enable row level security;
alter table public.subscriptions     enable row level security;
alter table public.espaces_acces     enable row level security;
alter table public.kaash_wallets     enable row level security;
alter table public.kaash_transactions enable row level security;
alter table public.doleances         enable row level security;

-- Users: chacun voit uniquement son propre enregistrement
create policy "Users: own row" on public.users
  for all using (auth0_id = current_setting('app.current_user_id', true));

-- Profiles: lecture/écriture sur son propre profil
create policy "Profiles: own row" on public.profiles
  for all using (auth0_id = current_setting('app.current_user_id', true));

-- Subscriptions: lecture de ses propres souscriptions
create policy "Subs: own rows" on public.subscriptions
  for select using (user_id = current_setting('app.current_user_id', true));

-- Kaash: wallet personnel uniquement
create policy "Kaash wallets: own" on public.kaash_wallets
  for all using (user_id = current_setting('app.current_user_id', true));

-- Doleances: chacun voit les siennes, peut en créer anonymement
create policy "Doleances: own or anon" on public.doleances
  for select using (user_id = current_setting('app.current_user_id', true) or user_id is null);
create policy "Doleances: insert" on public.doleances
  for insert with check (true);

-- Groupements: lecture publique
create policy "Groupements: read all" on public.groupements
  for select using (true);

-- Actualités: lecture publique des publiées
create policy "Actualites: read published" on public.actualites
  for select using (publie = true);

-- Formations: lecture publique
create policy "Formations: read all" on public.formations
  for select using (true);

-- ── Triggers updated_at ───────────────────────────────────────

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();

create trigger doleances_updated_at before update on public.doleances
  for each row execute function public.set_updated_at();

create trigger kaash_wallets_updated_at before update on public.kaash_wallets
  for each row execute function public.set_updated_at();

create trigger actualites_updated_at before update on public.actualites
  for each row execute function public.set_updated_at();

-- ── Indexes ───────────────────────────────────────────────────

create index if not exists idx_users_auth0       on public.users(auth0_id);
create index if not exists idx_profiles_auth0    on public.profiles(auth0_id);
create index if not exists idx_subs_user         on public.subscriptions(user_id);
create index if not exists idx_subs_espace       on public.subscriptions(espace);
create index if not exists idx_espaces_user      on public.espaces_acces(user_id);
create index if not exists idx_kaash_user        on public.kaash_wallets(user_id);
create index if not exists idx_transactions_wid  on public.kaash_transactions(wallet_id);
