/* ══════════════════════════════════════════════════════════════
   IPPOO — Persistance des formulaires vers Supabase
   Toutes les soumissions publiques (contact, inscription, doléances,
   bourse des valeurs) sont enregistrées dans Supabase. WhatsApp / e-mail
   restent des canaux de confirmation complémentaires côté écran.

   Les helpers ne lèvent jamais d'exception : ils renvoient { ok, error }
   pour que l'UI puisse afficher un état sans jamais planter, même si la
   table n'est pas encore migrée ou si le réseau échoue.
══════════════════════════════════════════════════════════════ */
import { supabase } from './supabase'

export interface SubmitResult {
  ok: boolean
  error?: string
}

async function insertRow(table: string, row: Record<string, unknown>): Promise<SubmitResult> {
  try {
    /* Insertion dynamique : on contourne le typage table-par-table du client. */
    const client = supabase as unknown as {
      from: (t: string) => { insert: (r: Record<string, unknown>) => Promise<{ error: { message: string } | null }> }
    }
    const { error } = await client.from(table).insert(row)
    if (error) return { ok: false, error: error.message }
    return { ok: true }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Erreur réseau' }
  }
}

/* ── Contact ──────────────────────────────────────────────────── */
export interface ContactInput {
  nom: string; email: string; telephone?: string; sujet?: string; message: string
}
export const submitContact = (i: ContactInput) =>
  insertRow('contacts', {
    nom: i.nom,
    email: i.email,
    telephone: i.telephone || null,
    sujet: i.sujet || null,
    message: i.message,
  })

/* ── Inscription (lead / pré-adhésion) ────────────────────────── */
export interface InscriptionInput {
  prenom: string; nom: string; email: string; telephone: string
  ville?: string; pays?: string; secteur?: string; profil?: string; offre?: string
}
export const submitInscription = (i: InscriptionInput) =>
  insertRow('inscriptions', {
    prenom: i.prenom,
    nom: i.nom,
    email: i.email,
    telephone: i.telephone,
    ville: i.ville || null,
    pays: i.pays || null,
    secteur: i.secteur || null,
    profil: i.profil || null,
    offre: i.offre || null,
  })

/* ── Doléance ─────────────────────────────────────────────────── */
export interface DoleanceInput {
  type: string; nom: string; contact: string; espace?: string; description: string
  userId?: string | null
}
export const submitDoleance = (i: DoleanceInput) =>
  insertRow('doleances', {
    user_id: i.userId ?? null,
    sujet: [i.type, i.espace].filter(Boolean).join(' — ') || 'Doléance',
    message: `De : ${i.nom} (${i.contact})\n\n${i.description}`,
  })

/* ── Bourse des valeurs (candidature à la cotation) ───────────── */
export interface BourseInput {
  nom: string; entreprise?: string; profil?: string; secteur?: string; ville?: string
  tel: string; email: string; objet?: string; message?: string
}
export const submitBourse = (i: BourseInput) =>
  insertRow('bourse_candidatures', {
    nom: i.nom,
    entreprise: i.entreprise || null,
    profil: i.profil || null,
    secteur: i.secteur || null,
    ville: i.ville || null,
    telephone: i.tel,
    email: i.email,
    objet: i.objet || null,
    message: i.message || null,
  })
