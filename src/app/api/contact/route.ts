import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tüm alanlar zorunludur." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase.from("contacts").insert([
      {
        name,
        email,
        subject,
        message,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error.message);
      return NextResponse.json(
        { error: "Mesaj kaydedilemedi: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mesajınız başarıyla gönderildi!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Bir hata oluştu." },
      { status: 500 }
    );
  }
}
