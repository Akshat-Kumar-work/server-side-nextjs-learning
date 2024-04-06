import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:any){
    console.log(params)

    return NextResponse.json({
        mess:"ok"
    })
}