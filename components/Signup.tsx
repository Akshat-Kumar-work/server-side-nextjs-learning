"use client"
import { useState } from "react";
import axios from "axios";
import { createUser } from "@/app/actions/user";

const Signup = () => {
    const [username,setUsername] =  useState("");
    const [password,setPassword] = useState("");

   async function handleClick(e:React.MouseEvent){
        e.preventDefault();
        console.log("clicked")

    // const result =  await axios.post("http://localhost:3000/api/user",{
    //         username,password
    //     });
        //console.log("response from post request of signup",result.data);
     const data =  await  createUser(username,password);
        console.log("signup data without api ",data)
    }

    return (
      <div className=" flex flex-col justify-center items-center p-6">
          <input type="text" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}></input>
          <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
          <button onClick={handleClick}>Signup</button>
      </div>
    )
  }
  
  export default Signup;