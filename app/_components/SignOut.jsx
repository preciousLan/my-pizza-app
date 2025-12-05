"use client"

import { signOut } from "next-auth/react"

const SignOut = () => {

    return (
        <button onClick={() => signOut("google")} className="font-bold border border-white p-3 rounded-full">SignOut</button>
    )
}

export default SignOut