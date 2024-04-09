import { NextRequest, NextResponse } from "next/server";

let reqCount = 0;
//keeping  count of each and every request 
export  function  middleware(req:NextRequest){

    //getting request url
    console.log(req.nextUrl.pathname)
    //agar req ka url /admin se start hota hai toh usko signin route p redirect krdo
  if (req.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/signin', req.url))
  }
 
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }


    reqCount++;
    const res = NextResponse.next();
    console.log("reqcount is ",reqCount)
    return res;
}

//selective middleware
//this means if the route will hit signup/* etc then only this middleware will run otherwise no
export const config = {
    matcher: '/signup/:path*'
}

 

