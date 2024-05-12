import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials, {
  CredentialsProvider,
} from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismaClient } from "@pushlogs/db";

export const authOptions = {
  adapter: PrismaAdapter(prismaClient),
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prismaClient.user.findUnique({
          where: { email: credentials?.email },
        });

        if (user && user.password === credentials?.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
