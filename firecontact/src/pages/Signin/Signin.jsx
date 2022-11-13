import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signin } from "../../private/privateLoginSignin";
import { signinRedux } from "../../redux/action/reducerAction";

function Signin() {
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [veri,setVeri]=useState("")
  const [error,setError]=useState("")
  
  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
      />
      <button onClick={()=>{
        signin(email, password, setVeri, setError, navigate, dispatch);
        
        console.log(veri.operationType);
        // veri.operationType=="signIn"&&navigate("/")
      }}>signin</button>
    </div>
  );
}

export default Signin;
