import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "vortexz-super-secret-jwt-key-32chars-min"
);

const COOKIE_NAME = "vortexz-admin-token";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow login page and its POST (api route) through without auth
  if (
    pathname === "/admin/login" ||
    pathname.startsWith("/api/admin/auth")
  ) {
    return NextResponse.next();
  }

  // Protect all /admin/* routes
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      await jwtVerify(token, SECRET);
      return NextResponse.next();
    } catch {
      // Invalid/expired token
      const response = NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
      response.cookies.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
