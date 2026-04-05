import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Server-side admin client (service_role key - sadece API route'larda kullan)
export function getSupabaseAdmin(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Supabase environment variables are not set.");
  }

  return createClient(url, key);
}

// Client-side kullanım için (anon key)
export function getSupabase(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Supabase environment variables are not set.");
  }

  return createClient(url, key);
}
