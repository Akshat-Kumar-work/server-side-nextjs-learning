import { NextRequest } from "next/server"

//this is how we write the route handler in express
// app.get("/api/user",(req,res)=>{
//     req.json({
//         email:"akshat@gmail.com",
//         name:"akshat"
//     })
// }) 

//if developer want to create a get handler for api/user/
//dev have to export function named get()
export async function GET(){
    return Response.json({
        name:"akshat",
        email:"akshat.tech@gmail.com"
    })
}

export async function POST(req:NextRequest){
    //extract body
    //here we are parsing req to json format because we are not using express and dont have express middlewares like express.json() to parse the all req globally
    const body = await req.json();
    console.log(body)
    //store the body in db
    return Response.json({
        mess:"data received"
    })
}
