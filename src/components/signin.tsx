import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
 const [username ,setUsername ] =useState ("")
 const [password ,setPassword ] =useState ("")
 const navigate =useNavigate();

async function handleSignin() {
  const response = await axios.post("http://localhost:3000/signin", {
      username,
      password
    })
      if (response.data.token){
        localStorage.setItem("token",response.data.token)
        alert("signup successfully")
        navigate ("/todos")
  }
      else  {
       alert (response.data.message || response.data)
      }
    }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor : "black"

      }}
    >
      <div>
        <div>
          <input value={username} onChange = {(e) =>setUsername(e.target.value)} 
          type ="text" placeholder="username/email" 
          style={{margin : "10px",padding : "10px",borderRadius:"10px"}}  />
        </div>

        <div>
          <input value={password} onChange = {(e) =>setPassword(e.target.value)} 
          type="password" placeholder="password" 
           style={{margin : "10px",padding : "10px",borderRadius:"10px"}} />
        </div>

        <div>
          <button onClick = {handleSignin} 
          style={{alignItems : "center",padding :"10px",margin :"10px"}}>Login</button>
        </div>
      </div>
    </div>
  );
}