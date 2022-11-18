import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { setLogin, setLoginGoogle } from "../../app/features/loginSlice";
import { setPage } from "../../app/features/pagesSlice";
import loginfirebase from "../../firebase/loginfirebase";
import logingoogle from "../../firebase/logingoogle";
import { Hata, LeftRight, LoginPage, LoginRight} from "./login-styled";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((store) => store.login);


  useEffect(() => {
    dispatch(setPage("login"));
    
  }, [dispatch]);  

  if (data.uid) {
    return <Navigate to="/" />;
  } else {
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
              <button
                disabled={email && password.length >= "6" ? false : true}
                onClick={() => {
                  loginfirebase(
                    email,
                    password,
                    dispatch,
                    navigate,
                    setLogin,
                    setError
                  );
                }}
              >
                Login
                <Hata>{error.code}</Hata>
              </button>

              <button
                onClick={() => {
                  logingoogle(dispatch, navigate, setLoginGoogle, setError);
                }}
              >
                Continue with Google
              </button>
            </LoginRight>
          </LeftRight>
        </LoginPage>
      </div>
    );
  }
}

export default Login;
