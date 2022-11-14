import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { login } from "../../private/privateLoginSignin";
import { IconEmail, IconEye1, IconEye2, IconPassword, InputDiv, LoginDiv, LoginLink } from "./login-styled";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [eye,setEye]=useState(false)
 
  const navigate = useNavigate();
  const { logindata } = useSelector((store) => store.loginsignin);

  const dispatch = useDispatch();

  if (logindata) {
    return <Navigate to="/" />;
  } else {
    return (
      <LoginDiv>
        <main>
          <h2>LOGIN</h2>
          <InputDiv>
            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
            <IconEmail />
          </InputDiv>

          <InputDiv>
            <input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
              login(email, password, dispatch, navigate, setError);
            }}
          >
            LOGIN
          </button>

          <LoginLink to="/signin">
            <button>SIGNIN</button>
          </LoginLink>
          <p>{error.code}</p>
        </main>
      </LoginDiv>
    );
    // return <Navigate to="/" />;
  }
}

export default Login;
