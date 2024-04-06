import { NextRequest,NextResponse } from "next/server"

export  async function GET(req:NextRequest,{params}:{ params:{authRoutes:string[]}}) {
    //getting value of dynamic parameter
        console.log(params)
    return(
        NextResponse.json(
           { mess:"all good"}
        )
    )
}