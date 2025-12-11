import { createAuthClient } from "better-auth/react"

export const authClient =  createAuthClient()

export async function SignIn() {

    await authClient.signIn.social({

        provider: "google",
        callbackURL: "/"
    })
}


export async function SignOut() {

    await authClient.signOut()
}