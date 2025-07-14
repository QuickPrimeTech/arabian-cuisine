import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Secure environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!;
const clientId = process.env.NEXT_PUBLIC_CLIENT_USER_ID!; // The authenticated user ID tied to RLS

const supabase = createClient(supabaseUrl, serviceRoleKey);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, date, time, guests, notes } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !guests) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const status = "confirmed";
    // Insert reservation with associated client user_id
    const { data, error } = await supabase.from("reservations").insert([
      {
        name,
        email,
        phone,
        date,
        time,
        guests: parseInt(guests),
        notes,
        status: status,
        user_id: clientId, // associate with specific user/client
      },
    ]);

    if (error) {
      console.error("Insert error:", error);
      return NextResponse.json(
        { error: "Failed to submit reservation" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Reservation submitted", data },
      { status: 200 }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
