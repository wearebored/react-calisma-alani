import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../private/privateLoginSignin";

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const navigate= useNavigate()
const dispatch = useDispatch()

    return (
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
        />
        <button onClick={()=>{
            login(email,password,dispatch,navigate,setError)
        }} >Login</button>
      </div>
    );
}

export default Login;
