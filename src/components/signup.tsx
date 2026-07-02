import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function Signup() {
      const [ username,setUsername] =useState ("")
      const [ password,setPassword ] =useState ("")
      const navigate = useNavigate();

  async function handleSignup (){
    const response =await axios.post("http://localhost:3000/signup",{
      username,
      password
    } )
    if (response.data.message) {
    alert("Signup Successful");
    navigate("/signin");
  } else {
    alert("Signup Failed");
  }
}
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
    
      <div style={{color : "red",margin :"10px",padding :"10px"}}>
        <div>
          <input value = {username} onChange= {(e) => setUsername (e.target.value) } 
          type="text" placeholder="username"
           style={{margin : "10px",padding : "10px",borderRadius:"10px"}}/>
        </div>

        <div>
          <input value ={password} onChange ={(e)=> setPassword (e.target.value)}
          type="password" placeholder="password"
           style={{margin : "10px",padding : "10px",borderRadius:"10px"}} />
        </div>

        <div>
          <button onClick = {handleSignup}>Signup</button>
        </div>
      </div>
    </div>
  );
}