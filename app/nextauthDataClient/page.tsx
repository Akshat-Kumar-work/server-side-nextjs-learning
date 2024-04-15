"use client"


//to get the authentication details about the user in client side component from  next auth library  for client side component use useSession hook
import { useSession } from "next-auth/react"


   const page = ()=>{
    const session = useSession();
return(
    <div>
        session authentication data for client component
        {
            JSON.stringify(session)
        }
    </div>
)
}

export default page;

