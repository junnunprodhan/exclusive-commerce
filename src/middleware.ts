import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    const { pathname, origin } = req.nextUrl;
    const { token } = req.nextauth;
    
    // already authenticated to redirect home from login page
    if (pathname.startsWith("/auth") && token) {
      return NextResponse.redirect(new URL("/", origin));
    }

    // Dashboard protected routes
    if (pathname.startsWith("/dashboard") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/", origin));
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith("/auth")) return true;
        return !!token;
      },
    },
  }
);
export const config = {
  matcher: [
    "/cart",
    "/wishlist",
    "/account/:path*",
    "/auth/:path*",
    "/dashboard/:path*",
  ],
};
