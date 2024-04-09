import { NextRequest, NextResponse } from "next/server";

let reqCount = 0;

export  function  middleware(req:NextRequest){

    //getting request url
    console.log(req.nextUrl.pathname)
    //agar req ka url /admin se start hota hai toh usko signin route p redirect krdo
  if (req.nextUrl.pathname.startsWith('/admin')) {
    console.log("inside admin")
    return NextResponse.redirect(new URL('/middlewareRoute', req.url))
  }
 
  if (req.nextUrl.pathname.startsWith('/akshat')) {
    return NextResponse.next()
  }

//keeping  count of each and every request 

    reqCount++;
    const res = NextResponse.next();
   //console.log("reqcount is ",reqCount)
    return res;
}

//selective middleware
//run middleware only selective path
//this means if the route will hit signup/* etc then only this whole middleware will run otherwise it will not affect any requests
// export const config = {
//     matcher: '/signup/:path*'
// }

 

