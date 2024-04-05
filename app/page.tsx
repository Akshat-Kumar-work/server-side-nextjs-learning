import axios from "axios";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

//data fetching is happening on next js server , 
//this file is server side not client side 
//so the data will fetch into server side and then return to client 
//server component can directly talk to another backend



//interacting with database through api call of next js server
async function getUserDetails(){
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data;
}

//interacting with database directly not from next js server api call
async function fetchData(){
  const user = await prisma.user.findFirst();
  return{
    name:user?.username,
    password:user?.password
  }
}

//creating an async components only in server side
export default async function Home() {
  const userDetails = await getUserDetails();
  const data = await fetchData();
  return (
 <div className=" flex flex-col items-center p-8 gap-6 ">
       <div> home page</div> 

      {/* data of api call of next js backend server throught http endpoints */}
       <div className=" flex flex-col">
       Data from next js server api call
       <div className=" flex justify-between">
      <div> {userDetails.email}</div>
        <div>{userDetails.name}</div>
       </div>
       </div>


      {/* getting data directly from server to db */}
       <div className=" flex flex-col">
        data from direct interaction with db without next js server api call
          <div className=" flex justify-between">
          <div>{data.name}</div>
          <div>{data.password}</div>
          </div>
     </div>
     </div>
     )
  
}
