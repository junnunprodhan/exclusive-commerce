import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface GetUser extends User {
    id: string;
    created_at: Date;
    updated_at: Date;
  }
  interface Session extends DefaultSession {
    user?: GetUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    role: "admin" | "user";
  }
}
