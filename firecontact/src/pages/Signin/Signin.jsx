import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link, useNavigate } from "react-router-dom";

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
  console.log(logindata);
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
        </div>
      </LoginDiv>
    );
  }
}

export default Signin;
