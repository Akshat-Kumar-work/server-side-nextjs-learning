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

