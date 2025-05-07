import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://edyrvcvugwltlycnflxw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkeXJ2Y3Z1Z3dsdGx5Y25mbHh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MTYzMzUsImV4cCI6MjA2MjE5MjMzNX0.xHL-MFUTWOpdC0cwj4Q4naGwSXDuS96PYj08VRKIeT0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
