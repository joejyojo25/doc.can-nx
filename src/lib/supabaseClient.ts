import { createClient } from '@supabase/supabase-js'
import { projectId, publicAnonKey } from '../utils/supabase/info'

// Supabase configuration from auto-generated info
const supabaseUrl = `https://${projectId}.supabase.co`
const supabaseAnonKey = publicAnonKey

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
