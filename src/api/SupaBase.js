import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wvnuyrdksxahgzayadqh.supabase.co";
const SERVICE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2bnV5cmRrc3hhaGd6YXlhZHFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxNzI1NTQsImV4cCI6MjAzNTc0ODU1NH0.2-4AhR8fL2feDcMCb8-SNMngzZUMurJsrghoxNgh1JA";

const SupaBase = createClient(SUPABASE_URL, SERVICE_KEY);

export default SupaBase;
