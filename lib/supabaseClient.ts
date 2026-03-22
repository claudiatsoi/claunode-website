import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hswsxgekwdecpevsienv.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhzd3N4Z2Vrd2RlY3BldnNpZW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxODMwMzEsImV4cCI6MjA4OTc1OTAzMX0.fiEHoboxiImEQvK8ohGhCcx9NWu2iiFuvczfT7SZWfs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
