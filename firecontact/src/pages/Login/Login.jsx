import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { login } from "../../private/privateLoginSignin";
import { LoginDiv, LoginLink } from "./login-styled";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  const navigate = useNavigate();
  const { logindata } = useSelector((store) => store.loginsignin);

  const dispatch = useDispatch();

  if (logindata) {
    return <Navigate to="/" />;
  } else {
    return (
      <LoginDiv>
        <div>
          <h2>LOGIN</h2>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
          />
          <button
            disabled={email&&password.length>="6"?false:true}
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
        </div>
      </LoginDiv>
    );
    // return <Navigate to="/" />;
  }
}

export default Login;
