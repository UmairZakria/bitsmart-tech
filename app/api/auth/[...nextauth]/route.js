import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Admin from "@/app/models/Admin";
import connectMongo from "@/lib/mongodb";
import bcrypt from 'bcryptjs';


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectMongo();
        const user = await Admin.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("Invalid email");
        }
        const pass = await bcrypt.compare(credentials.password, user.password)
        if (!pass) {
          throw new Error("Invalid password");
        }

        return { id: user._id, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/Login",  
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  secret: process.env.KEY,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
