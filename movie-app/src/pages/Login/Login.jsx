import {  NavLink } from "react-router-dom";
import { LeftRight, LoginPage, LoginRight } from "./login-styled";

function Login() {
  return (
    <div>
      <LoginPage>
        <LeftRight></LeftRight>
        <LeftRight>
          <LoginRight>
            <h3>Login</h3>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email address..." />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password..." />

            <NavLink to="/forgot">Forgot password?</NavLink>
            <button>Login</button>
            <button>Continue with Google</button>



          </LoginRight>
        </LeftRight>
      </LoginPage>
    </div>
  );
}

export default Login;
