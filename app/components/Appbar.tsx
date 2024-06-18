"use client";
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Appbar() {
    const session =  useSession();
  return (
    <div>
        <button className="m-2 p-2 bg-black text-white" onClick={() => signIn()}>Signin</button>
        <button className="m-2 p-2 bg-black text-white" onClick={() => signOut()}>Sign out</button>
        {JSON.stringify(session)}
    </div>
  )
}
