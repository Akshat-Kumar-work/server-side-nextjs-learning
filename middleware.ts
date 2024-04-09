import { NextRequest, NextResponse } from "next/server";

let reqCount = 0;
//keeping  count of each and every request 
export  function  middleware(req:NextRequest){
    reqCount++;
    const res = NextResponse.next();
    console.log("reqcount is ",reqCount)
    return res;
}