import { auth } from "./app/api/auth/[...nextauth]/route";
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/", "/admin"],
};
