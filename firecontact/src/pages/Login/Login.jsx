import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { login } from "../../private/privateLoginSignin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logindata } = useSelector((store) => store.loginsignin);
  const fata = useSelector((store) => store.loginsignin);
  const dispatch = useDispatch();
  console.log(fata);
  if (logindata) {
    return (
      <Navigate to="/" />
    );
  } else {
    return (
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
        />
        <button
          onClick={() => {
            login(email, password, dispatch, navigate, setError);
          }}
        >
          Login
        </button>
        <Link to="/signin" >SIGNIN</Link>
      </div>
    );
    // return <Navigate to="/" />;
  }
}

export default Login;
