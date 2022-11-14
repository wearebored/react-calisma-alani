import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { signin } from "../../private/privateLoginSignin";
import { IconEmail, IconEye1, IconEye2, IconPassword, InputDiv, LoginDiv, LoginLink } from "../Login/login-styled";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [veri, setVeri] = useState("");
  const [error, setError] = useState("");
  const { logindata } = useSelector((store) => store.loginsignin);
 const [eye,setEye]=useState(false)
  if (logindata) {
    return <Navigate to="/" />;
  } else {
    return (
      <LoginDiv>
        <main>
          <h2>SIGN IN</h2>
          <InputDiv>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <IconEmail />
          </InputDiv>
          <InputDiv>
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={eye ? "text" : "password"}
            />
            <IconPassword />
            
            {eye ? (
              <IconEye2 onClick={() => setEye(!eye)} />
            ) : (
              <IconEye1 onClick={() => setEye(!eye)} />
            )}
          </InputDiv>

          <button
            disabled={email && password.length >= "6" ? false : true}
            onClick={() => {
              signin(email, password, setVeri, setError, navigate, dispatch);

              
              // veri.operationType=="signIn"&&navigate("/")
            }}
          >
            SIGN IN
          </button>
          <LoginLink to="/login">
            <button>LOGIN</button>
          </LoginLink>
          <p>{error.code}</p>
        </main>
      </LoginDiv>
    );
  }
}

export default Signin;
