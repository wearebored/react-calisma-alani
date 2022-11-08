import { useState, useContext } from "react";
import {  useNavigate, Navigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { register } from "../../firebase";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(LoginContext);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const signinClick = async () => {
    console.log(email);
    console.log(password);
    const regist = await register(email, password);
    if (regist.operationType === "signIn") {
      setUser(regist);
      navigate("/");
    } else {
      setErrors(regist);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <div>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors("");
            }}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors("");
            }}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div style={{ height: "20px" }}>{errors ? errors : ""}</div>
          <button onClick={signinClick}>SIGN IN</button>
        </div>
      </div>
    );
  }
}

export default Signin;
