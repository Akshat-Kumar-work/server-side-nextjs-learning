"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div className=' flex flex-col'> custom sign in page
        <button onClick={async()=>{signIn("google")}}>Login with Google</button>
        <button onClick={async()=>{signIn("credentials",{
            username:"",password:"",redirect:false
        })}}>Login with email</button>
    </div>
  )
}

export default page