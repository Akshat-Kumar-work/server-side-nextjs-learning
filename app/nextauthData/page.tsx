"use client"


//to get the authentication details of next auth library
import { useSession } from "next-auth/react"


   const page = ()=>{
    const session = useSession();
return(
    <div>
        session data
        {
            JSON.stringify(session)
        }
    </div>
)
}

export default page;

