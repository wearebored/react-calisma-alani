import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LeftRight, LoginPage, LoginRight } from "./login-styled";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <LoginPage>
        <LeftRight></LeftRight>
        <LeftRight>
          <LoginRight>
            <h3>Login</h3>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="Enter your email address..."
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              placeholder="Enter your password..."
            />

            <NavLink to="/forgot">Forgot password?</NavLink>
            <button disabled={email&&password.length >= "6"?false:true}>
              Login
            </button>
            <button>Continue with Google</button>
          </LoginRight>
        </LeftRight>
      </LoginPage>
    </div>
  );
}

export default Login;
