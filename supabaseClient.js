// MHSS Public Calendar - Supabase client
// Uses the public publishable key.
// NEVER use a service_role/secret key here.

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://miugvibogwwvkmbhocnw.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_VFsiy0GqQFzBuTamr5-dCg_a85ypcnM";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);