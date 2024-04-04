"use client"
import { useState } from "react";

const Signup = () => {
    const [username,setUsername] =  useState("");
    const [password,setPassword] = useState("");

    function handleClick(e:React.MouseEvent){
        e.preventDefault();
        console.log("clicked")
    }

    return (
      <div>
          <input type="text" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}></input>
          <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
          <button onClick={handleClick}>Signup</button>
      </div>
    )
  }
  
  export default Signup;