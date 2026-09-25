import { createClient } from '@supabase/supabase-js'
import { projectId, publicAnonKey } from '../../utils/supabase/info'
import type { Database } from './database.types'

const supabaseUrl = `https://${projectId}.supabase.co`

export const supabase = createClient<Database>(supabaseUrl, publicAnonKey)
