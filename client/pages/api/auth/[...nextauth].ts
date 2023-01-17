import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
