import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,

        })
    ],
    callbacks: {


        async redirect({ url, baseUrl }) {
            return "/products"; // always send to products
        },
    },

    pages: {  //controls where users go to login
        signIn: "/",   // 👈 your custom page here
    },

})