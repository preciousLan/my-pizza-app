// middleware.ts
import { auth } from "@/app/_lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const session = req.auth;       // session info from NextAuth
  const { pathname } = req.nextUrl;

  // If logged-in user visits /login → redirect them
  if (pathname === "/login" && session?.user) {
    return NextResponse.redirect(new URL("/products", req.url));
  }

  // Allow request
  return NextResponse.next();
});

export const config = {
  matcher: ["/login"],
};
