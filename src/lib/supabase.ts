import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://xpuajyxmosjwyjdnsvkr.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwdWFqeXhtb3Nqd3lqZG5zdmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MTUyNzIsImV4cCI6MjA0NjI5MTI3Mn0.c_1K2gWV1DuTVuwulZVTOeRzRhZVRpxyLqFNE5D0LCw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);