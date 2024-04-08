"use client"


//to get the authentication details from  next auth library  for client side component
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

