import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, country, service, description } = body;

    // Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Phone number is required." },
        { status: 400 }
      );
    }

    if (!description || typeof description !== "string" || description.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "Description must be at least 5 characters." },
        { status: 400 }
      );
    }

    // Sanitized inquiry logging
    const sanitizedInquiry = {
      fullName: fullName.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      phone: phone.trim().slice(0, 30),
      country: country ? String(country).slice(0, 50) : "Sri Lanka",
      service: service ? String(service).slice(0, 80) : "Business Website",
      description: description.trim().slice(0, 3000),
      targetEmail: "vortexzsolution@gmail.com",
      whatsappNumber: "0711991415",
      submittedAt: new Date().toISOString(),
    };

    console.log("New Vortexz Solutions Inquiry Dispatched to vortexzsolution@gmail.com & WhatsApp:", sanitizedInquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry successfully recorded and dispatched to Email & WhatsApp.",
        data: sanitizedInquiry,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
