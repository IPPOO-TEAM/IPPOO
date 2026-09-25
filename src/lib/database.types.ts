export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          auth0_id: string
          email: string
          created_at: string
          is_onboarded: boolean
          role: 'user' | 'admin' | 'moderator'
        }
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['users']['Insert']>
      }
      profiles: {
        Row: {
          id: string
          user_id: string
          auth0_id: string
          nom: string
          prenom: string
          telephone: string | null
          pays: string | null
          departement: string | null
          ville: string | null
          quartier: string | null
          domaines: string[]
          profession: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          espace: string
          plan: string
          status: 'active' | 'pending' | 'cancelled' | 'expired'
          started_at: string
          expires_at: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['subscriptions']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['subscriptions']['Insert']>
      }
      groupements: {
        Row: {
          id: string
          nom: string
          secteur: string
          description: string | null
          region: string | null
          responsable_id: string | null
          membres_count: number
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['groupements']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['groupements']['Insert']>
      }
      espaces_acces: {
        Row: {
          id: string
          user_id: string
          espace_code: string
          granted_at: string
          granted_by: string | null
        }
        Insert: Omit<Database['public']['Tables']['espaces_acces']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['espaces_acces']['Insert']>
      }
      parrainages: {
        Row: {
          id: string
          parrain_id: string
          filleul_id: string
          code_parrainage: string
          bonus_credited: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['parrainages']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['parrainages']['Insert']>
      }
      doleances: {
        Row: {
          id: string
          user_id: string | null
          sujet: string
          message: string
          statut: 'nouvelle' | 'en_cours' | 'resolue' | 'fermee'
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['doleances']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['doleances']['Insert']>
      }
      kaash_wallets: {
        Row: {
          id: string
          user_id: string
          balance: number
          currency: string
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['kaash_wallets']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['kaash_wallets']['Insert']>
      }
      contacts: {
        Row: {
          id: string
          nom: string
          email: string
          telephone: string | null
          sujet: string | null
          message: string
          statut: 'nouveau' | 'traite' | 'archive'
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['contacts']['Row'], 'id' | 'created_at' | 'statut'> & { statut?: string }
        Update: Partial<Database['public']['Tables']['contacts']['Insert']>
      }
      inscriptions: {
        Row: {
          id: string
          prenom: string
          nom: string
          email: string
          telephone: string
          ville: string | null
          pays: string | null
          secteur: string | null
          profil: string | null
          offre: string | null
          statut: 'nouveau' | 'contacte' | 'converti' | 'abandonne'
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['inscriptions']['Row'], 'id' | 'created_at' | 'statut'> & { statut?: string }
        Update: Partial<Database['public']['Tables']['inscriptions']['Insert']>
      }
      bourse_candidatures: {
        Row: {
          id: string
          nom: string
          entreprise: string | null
          profil: string | null
          secteur: string | null
          ville: string | null
          telephone: string
          email: string
          objet: string | null
          message: string | null
          statut: 'nouveau' | 'en_evaluation' | 'cote' | 'rejete'
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['bourse_candidatures']['Row'], 'id' | 'created_at' | 'statut'> & { statut?: string }
        Update: Partial<Database['public']['Tables']['bourse_candidatures']['Insert']>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
