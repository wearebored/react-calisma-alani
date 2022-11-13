import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { signin } from "../../private/privateLoginSignin";
import { LoginDiv, LoginLink } from "../Login/login-styled";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [veri, setVeri] = useState("");
  const [error, setError] = useState("");
  const { logindata } = useSelector((store) => store.loginsignin);
 
  if (logindata) {
    return <Navigate to="/" />;
  } else {
    return (
      <LoginDiv>
        <div>
          <h2>SIGN IN</h2>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
          />
          <button
            disabled={email && password.length >= "6" ? false : true}
            onClick={() => {
              signin(email, password, setVeri, setError, navigate, dispatch);

              console.log(veri.operationType);
              // veri.operationType=="signIn"&&navigate("/")
            }}
          >
            SIGN IN
          </button>
          <LoginLink to="/login">
            <button>LOGIN</button>
          </LoginLink>
          <p>{error.code}</p>
        </div>
      </LoginDiv>
    );
  }
}

export default Signin;
