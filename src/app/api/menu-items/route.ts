// app/api/menu/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const clientUserId = process.env.NEXT_PUBLIC_CLIENT_USER_ID!;

  const { data, error } = await supabase
    .from("menu_items")
    .select(
      "id, name, description, price, category, dietary_preference, image_url,is_available"
    )
    .eq("user_id", clientUserId);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
