import { LeftRight, LoginPage, LoginRight } from "../Login/login-styled";

function Register() {
  return (
    <div>
      <LoginPage>
        <LeftRight></LeftRight>
        <LeftRight>
          <LoginRight>
            <h3>Register</h3>
            <label htmlFor="name">First name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your first name..."
            />
            <label htmlFor="lastname">Last name</label>
            <input
              type="lastname"
              id="lastname"
              placeholder="Enter your last name..."
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address..."
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password..."
            />
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password..."
            />

            {/* <NavLink to="/forgot">Forgot password?</NavLink> */}
            <button>Register</button>
            <button>Continue with Google</button>
          </LoginRight>
        </LeftRight>
      </LoginPage>
    </div>
  );
}

export default Register;
