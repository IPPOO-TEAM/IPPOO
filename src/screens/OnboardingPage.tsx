import { useState } from 'react'
import { Check, ChevronRight, User, Phone, MapPin, Briefcase, ArrowLeft } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { supabase } from '@/lib/supabase'

const STEPS = [
  { id: 1, label: 'Identité', Icon: User, color: '#FF2D7A' },
  { id: 2, label: 'Activité', Icon: Briefcase, color: '#7C3AED' },
  { id: 3, label: 'Contact', Icon: Phone, color: '#16A34A' },
  { id: 4, label: 'Localisation', Icon: MapPin, color: '#0891B2' },
]

const DOMAINES = [
  'Agriculture & Agroalimentaire', 'Commerce & Distribution', 'Artisanat & Savoir-faire',
  'Finance & Assurance', 'Santé & Bien-être', 'Mode & Textile', 'Technologie & Numérique',
  'Transport & Logistique', 'Événementiel', 'Immobilier', 'Éducation & Formation',
  'Tourisme & Hôtellerie', 'Médias & Communication', 'BTP & Construction', 'Autre',
]

const PROFILS = [
  'Producteur / Agriculteur', 'Commerçant / Vendeur', 'Artisan / Créateur', 'Prestataire de Services',
  'Entrepreneur / Chef d\'entreprise', 'Freelance / Consultant', 'Étudiant / Jeune diplômé',
  'Salarié', 'Transformateur', 'Distributeur / Grossiste', 'Importateur / Exportateur',
]

const PAYS = [
  'Bénin', 'Togo', 'Côte d\'Ivoire', 'Sénégal', 'Mali', 'Burkina Faso', 'Niger',
  'Ghana', 'Nigeria', 'Cameroun', 'Gabon', 'Congo', 'RDC', 'France', 'Belgique', 'Autre',
]

interface FormData {
  nom: string; prenom: string
  domaines: string[]; profession: string
  telephone: string
  pays: string; departement: string; ville: string; quartier: string
}

export function OnboardingPage({ onComplete }: { onComplete: () => void }) {
  const { user } = useAuth0()
  const [step, setStep] = useState(1)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState<FormData>({
    nom: '', prenom: '',
    domaines: [], profession: '',
    telephone: '',
    pays: 'Bénin', departement: '', ville: '', quartier: '',
  })

  const update = (k: keyof FormData, v: string | string[]) => setData(d => ({ ...d, [k]: v }))
  const toggleDomaine = (d: string) =>
    update('domaines', data.domaines.includes(d) ? data.domaines.filter(x => x !== d) : [...data.domaines, d])

  const canNext = () => {
    if (step === 1) return data.nom.trim() && data.prenom.trim()
    if (step === 2) return data.domaines.length > 0 && data.profession
    if (step === 3) return data.telephone.trim().length >= 8
    if (step === 4) return data.pays && data.ville.trim()
    return false
  }

  const handleNext = () => {
    if (!canNext()) return
    if (step < 4) { setStep(s => s + 1); return }
    handleSubmit()
  }

  const handleSubmit = async () => {
    if (!user?.sub) return
    setSaving(true)
    setError('')
    try {
      /* Upsert user row */
      const userRow = {
        auth0_id: user.sub,
        email: user.email ?? '',
        is_onboarded: true,
        role: 'user' as const,
      }
      await supabase.from('users').upsert(userRow as never, { onConflict: 'auth0_id' })

      /* Insert profile */
      const profileRow = {
        auth0_id: user.sub,
        user_id: user.sub,
        nom: data.nom,
        prenom: data.prenom,
        telephone: data.telephone,
        pays: data.pays,
        departement: data.departement,
        ville: data.ville,
        quartier: data.quartier,
        domaines: data.domaines,
        profession: data.profession,
      }
      const { error: profileError } = await supabase.from('profiles').upsert(profileRow as never, { onConflict: 'auth0_id' })

      if (profileError) throw profileError
      onComplete()
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Erreur lors de la sauvegarde.')
    } finally {
      setSaving(false)
    }
  }

  const activeStep = STEPS[step - 1]

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#FFF8F2', paddingBottom: 80 }}>
      {/* Header */}
      <div className="relative overflow-hidden px-4 pt-12 pb-8"
        style={{ background: `linear-gradient(135deg, ${activeStep.color}EE 0%, ${activeStep.color}99 100%)` }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, white 0%, transparent 50%)' }} />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
            <span className="text-white text-[11px] font-black uppercase tracking-widest">Étape {step}/4</span>
          </div>
          <h1 className="text-white font-black text-[26px] leading-tight">Complétez votre profil</h1>
          <p className="text-white/70 text-[13px] mt-1">Pour personnaliser votre expérience IPPOO</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-6 rounded-t-3xl" style={{ background: '#FFF8F2' }} />
      </div>

      {/* Step indicators */}
      <div className="px-4 -mt-2 max-w-md mx-auto w-full">
        <div className="flex items-center gap-2 mb-6">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2 flex-1">
              <div className="relative flex-1">
                <div className="w-full h-1.5 rounded-full transition-all"
                  style={{ background: s.id <= step ? s.color : '#F3E8D8' }} />
              </div>
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${s.id === step ? 'scale-110 shadow-lg' : ''}`}
                style={{ background: s.id < step ? '#16A34A' : s.id === step ? s.color : '#F3E8D8' }}>
                {s.id < step
                  ? <Check size={14} className="text-white" strokeWidth={3} />
                  : <s.Icon size={13} className={s.id <= step ? 'text-white' : 'text-[#9CA3AF]'} />}
              </div>
            </div>
          ))}
        </div>

        {/* Step title */}
        <h2 className="font-black text-[20px] mb-4 flex items-center gap-2" style={{ color: activeStep.color }}>
          <activeStep.Icon size={20} /> {activeStep.label}
        </h2>

        {error && (
          <div className="px-4 py-3 rounded-2xl text-[13px] font-medium text-[#E10600] mb-4"
            style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
            {error}
          </div>
        )}

        {/* ── Step 1: Identité ── */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <Field label="Nom de famille" value={data.nom} onChange={v => update('nom', v)} placeholder="Ex: KOUDOSSOU" color={activeStep.color} />
            <Field label="Prénom(s)" value={data.prenom} onChange={v => update('prenom', v)} placeholder="Ex: Amivi Grace" color={activeStep.color} />
            <p className="text-[12px] text-[#9CA3AF]">Ces informations seront affichées sur votre profil IPPOO.</p>
          </div>
        )}

        {/* ── Step 2: Activité ── */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-[11px] font-black uppercase tracking-wider text-[#6B7280] mb-2 block">
                Domaine(s) d'activité <span className="text-[#FF2D7A]">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {DOMAINES.map(d => (
                  <button key={d} onClick={() => toggleDomaine(d)}
                    className="px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all"
                    style={{
                      background: data.domaines.includes(d) ? activeStep.color : 'white',
                      color: data.domaines.includes(d) ? 'white' : '#374151',
                      border: `1.5px solid ${data.domaines.includes(d) ? activeStep.color : '#F3E8D8'}`,
                    }}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-[11px] font-black uppercase tracking-wider text-[#6B7280] mb-2 block">
                Profil / Profession <span className="text-[#FF2D7A]">*</span>
              </label>
              <select value={data.profession} onChange={e => update('profession', e.target.value)}
                className="w-full px-4 py-3 rounded-2xl text-[14px] outline-none appearance-none"
                style={{ background: 'white', border: `1.5px solid ${data.profession ? activeStep.color : '#F3E8D8'}`, color: data.profession ? '#111827' : '#9CA3AF' }}>
                <option value="">Sélectionnez votre profil</option>
                {PROFILS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>
        )}

        {/* ── Step 3: Contact ── */}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-[11px] font-black uppercase tracking-wider text-[#6B7280] mb-1.5 block">
                Numéro de téléphone <span className="text-[#FF2D7A]">*</span>
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 px-3 py-3 rounded-2xl text-[14px] shrink-0 font-semibold"
                  style={{ background: 'white', border: '1.5px solid #F3E8D8', color: '#374151' }}>
                  🇧🇯 +229
                </div>
                <input type="tel" value={data.telephone} onChange={e => update('telephone', e.target.value)}
                  placeholder="01 41 52 10 92"
                  className="flex-1 px-4 py-3 rounded-2xl text-[14px] outline-none"
                  style={{ background: 'white', border: '1.5px solid #F3E8D8', color: '#111827' }}
                  onFocus={e => (e.target.style.borderColor = activeStep.color)}
                  onBlur={e => (e.target.style.borderColor = '#F3E8D8')} />
              </div>
              <p className="text-[12px] text-[#9CA3AF] mt-2">Votre numéro est confidentiel et ne sera pas partagé.</p>
            </div>
          </div>
        )}

        {/* ── Step 4: Localisation ── */}
        {step === 4 && (
          <div className="flex flex-col gap-4">
            <SelectField label="Pays" value={data.pays} onChange={v => update('pays', v)} options={PAYS} color={activeStep.color} required />
            <Field label="Département / Région" value={data.departement} onChange={v => update('departement', v)} placeholder="Ex: Alibori, Atacora…" color={activeStep.color} />
            <Field label="Ville / Commune" value={data.ville} onChange={v => update('ville', v)} placeholder="Ex: Parakou, Cotonou…" color={activeStep.color} required />
            <Field label="Quartier" value={data.quartier} onChange={v => update('quartier', v)} placeholder="Ex: Banikanni, Dépôt…" color={activeStep.color} />
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center gap-3 mt-8">
          {step > 1 && (
            <button onClick={() => setStep(s => s - 1)}
              className="flex items-center gap-1.5 px-4 py-3 rounded-2xl font-semibold text-[14px] transition-all"
              style={{ background: 'white', border: '1.5px solid #F3E8D8', color: '#374151' }}>
              <ArrowLeft size={15} /> Précédent
            </button>
          )}
          <button onClick={handleNext} disabled={!canNext() || saving}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-[14px] text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-40"
            style={{ background: `linear-gradient(135deg, ${activeStep.color}, ${activeStep.color}BB)`, boxShadow: `0 4px 16px ${activeStep.color}44` }}>
            {saving ? 'Enregistrement…' : step === 4 ? 'Terminer mon profil ✓' : 'Suivant'}
            {!saving && step < 4 && <ChevronRight size={16} />}
          </button>
        </div>

        <div className="flex justify-center gap-1.5 mt-6">
          {STEPS.map(s => (
            <div key={s.id} className="h-1.5 rounded-full transition-all"
              style={{ width: s.id === step ? 24 : 8, background: s.id <= step ? activeStep.color : '#F3E8D8' }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, placeholder, color, required }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder: string; color: string; required?: boolean
}) {
  return (
    <div>
      <label className="text-[11px] font-black uppercase tracking-wider text-[#6B7280] mb-1.5 block">
        {label} {required && <span className="text-[#FF2D7A]">*</span>}
      </label>
      <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full px-4 py-3 rounded-2xl text-[14px] outline-none transition-all"
        style={{ background: 'white', border: `1.5px solid ${value ? color : '#F3E8D8'}`, color: '#111827' }}
        onFocus={e => (e.target.style.borderColor = color)}
        onBlur={e => (e.target.style.borderColor = value ? color : '#F3E8D8')} />
    </div>
  )
}

function SelectField({ label, value, onChange, options, color, required }: {
  label: string; value: string; onChange: (v: string) => void;
  options: string[]; color: string; required?: boolean
}) {
  return (
    <div>
      <label className="text-[11px] font-black uppercase tracking-wider text-[#6B7280] mb-1.5 block">
        {label} {required && <span className="text-[#FF2D7A]">*</span>}
      </label>
      <select value={value} onChange={e => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-2xl text-[14px] outline-none appearance-none"
        style={{ background: 'white', border: `1.5px solid ${value ? color : '#F3E8D8'}`, color: '#111827' }}>
        <option value="">Sélectionner</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
