import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,argument:any){

    //getting dynamic route parameter
    console.log(argument.params.dynamicRoute)

    return NextResponse.json({
        mess:"ok"
    })
}