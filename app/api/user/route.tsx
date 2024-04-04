import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


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
    const result = await prisma.user.create({
        data:{
            username: body.username,
            password: body.password
        }
    })
    console.log(body)
    return Response.json({
        mess:"user created",
        result: result
    })
}
