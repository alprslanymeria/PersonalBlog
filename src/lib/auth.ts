// BETTER AUTH
import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
// LIBRARY
import {prisma} from "@/lib/prisma"
import { nextCookies } from "better-auth/next-js"

const adapter = prismaAdapter(prisma, {
    
    provider: "sqlserver"
})

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string

export const auth = betterAuth({

    database: adapter,
    socialProviders: {

        google: {
            prompt: "select_account",
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        }
    },
    plugins: [nextCookies()]
});