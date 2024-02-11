import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismaClient } from "@/config/prismadb";

function login(credentials: Object | String) {
  console.log(credentials);
  return null;
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prismaClient),
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log(credentials);
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
});
