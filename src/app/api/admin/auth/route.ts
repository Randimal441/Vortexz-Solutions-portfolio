import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "vortexz-super-secret-jwt-key-32chars-min"
);
const COOKIE_NAME = "vortexz-admin-token";

// POST /api/admin/auth — login
export async function POST(request: Request) {
  const body = await request.json() as { email?: string; password?: string };
  const { email, password } = body;

  const validEmail = process.env.ADMIN_EMAIL ?? "admin@vortexzsolutions.com";
  const validPassword = process.env.ADMIN_PASSWORD ?? "VortexzAdmin2026!";

  if (email !== validEmail || password !== validPassword) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = await new SignJWT({ sub: email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(SECRET);

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
    sameSite: "lax",
  });

  return Response.json({ ok: true });
}

// DELETE /api/admin/auth — logout
export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
  return Response.json({ ok: true });
}

// GET /api/admin/auth — verify session
export async function GET(request: Request) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  const token = match?.[1];

  if (!token) {
    return Response.json({ authenticated: false }, { status: 401 });
  }

  try {
    await jwtVerify(token, SECRET);
    return Response.json({ authenticated: true });
  } catch {
    return Response.json({ authenticated: false }, { status: 401 });
  }
}
