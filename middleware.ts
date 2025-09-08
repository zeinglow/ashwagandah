import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to admin routes only for admin users
        if (req.nextUrl.pathname.startsWith("/admin/dashboard")) {
          return token?.role === "ADMIN"
        }
        return true
      },
    },
  }
)

export const config = {
  matcher: ["/admin/dashboard/:path*"]
}
