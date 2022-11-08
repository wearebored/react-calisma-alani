import { async } from "@firebase/util";
import { useContext, useState } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { login } from "../../firebase";
function Login() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(LoginContext);
  const [errors,setErrors]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginClick = async () => {
    console.log(email);
    console.log(password);
    const logindata = await login(email, password);
    if (logindata.operationType === "signIn") {
      setUser(logindata);
      navigate("/");
    } else {
      setErrors(logindata);
    }
  };
  
  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <div>
          <img src="image/meal2.svg" alt="meal2" />
          <h1>{"<ENES/> RECIPE"}</h1>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="EMAİL"
            id="email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            value={password}
            placeholder="PASSWORD"
            id="password"
          />
          <button onClick={loginClick}>LOGIN</button>

          <NavLink to="/singin">
            <button>SING IN</button>
          </NavLink>
          <NavLink to="/">
            <button>HOME</button>
          </NavLink>
          <NavLink to="/about">
            <button>ABOUT</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Login;
