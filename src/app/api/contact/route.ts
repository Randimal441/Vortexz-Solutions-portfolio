import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, company, email, phone, country, service, budget, description } = body;

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

    if (!description || typeof description !== "string" || description.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Description must be at least 10 characters." },
        { status: 400 }
      );
    }

    // In production, integrate email provider (Resend, SendGrid, etc.) or CRM here
    // Logging sanitized inquiry (no secrets)
    const sanitizedInquiry = {
      fullName: fullName.trim().slice(0, 100),
      company: company ? String(company).trim().slice(0, 100) : "",
      email: email.trim().toLowerCase().slice(0, 100),
      phone: phone ? String(phone).trim().slice(0, 30) : "",
      country: country ? String(country).slice(0, 50) : "Sri Lanka",
      service: service ? String(service).slice(0, 50) : "Business Website",
      budget: budget ? String(budget).slice(0, 50) : "",
      description: description.trim().slice(0, 2000),
      submittedAt: new Date().toISOString(),
    };

    console.log("New Vortexz Solutions Inquiry Received:", {
      name: sanitizedInquiry.fullName,
      email: sanitizedInquiry.email,
      service: sanitizedInquiry.service,
      country: sanitizedInquiry.country,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry. The Vortexz Solutions team will respond within 24 hours.",
        data: {
          fullName: sanitizedInquiry.fullName,
          service: sanitizedInquiry.service,
        },
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
