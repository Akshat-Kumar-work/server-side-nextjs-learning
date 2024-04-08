"use client"

import { useRouter } from "next/navigation";
import { signIn,signOut } from "next-auth/react";

const Navbar = () => {
    const router= useRouter();
    const handleSignIn = () => {
        router.push("/api/auth/signin");
      };
  return (
    <div className="flex flex-col">
        <button onClick={handleSignIn}>
            Signin by pushing route
        </button>
        <button onClick={()=>signOut()}>
           signOut
        </button>
        <button onClick={()=>signIn()}>
            Signin
        </button>
    </div>
  )
}

export default Navbar

