import axios from "axios";

//data fetching is happening on next js server , 
//this file is server side not client side 
//so the data will fetch into server side and then return to client 
//server component can directly talk to another backend


async function getUserDetails(){
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data;
}

//creating an async components only in server side
export default async function Home() {
  const userDetails = await getUserDetails();
  return (
 <div className=" flex flex-col items-center ">
       <div> home page</div> 
        {userDetails.email}
        {userDetails.name}
 </div>
  );
}
