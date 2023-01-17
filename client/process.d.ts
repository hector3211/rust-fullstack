declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    DISCORD_ID: string;
    DISCORD_SECRET: string;
  }
}
