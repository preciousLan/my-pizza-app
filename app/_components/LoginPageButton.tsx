"use client"
import { signIn } from 'next-auth/react'


const LoginPageButton = () => {
  return (
   <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-red-800 text-white rounded mt-10 hover:bg-red-700 transition-all"
      >
        Sign in with Google
      </button>
  )
}

export default LoginPageButton