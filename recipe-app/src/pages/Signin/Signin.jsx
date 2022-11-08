import { useState, useContext } from "react";
import { useNavigate, Navigate, NavLink } from "react-router-dom";
import {
  BackgroundLogin,
  Button,
  Container,
  H1,
  Input,
} from "../../components/styled-components";
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
      <BackgroundLogin>
        <Container>
          <H1>{"<ENES/> RECIPE"}</H1>
          <h2>SING IN</h2>
          <Input
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
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors("");
            }}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <Button onClick={signinClick}>SIGN IN</Button>
          {/* <div style={{ height: "20px" }}>{errors ? errors : ""}</div> */}
          <hr style={{ width: "20rem" }} />
          <NavLink to="/login">
            <Button>LOGIN</Button>
          </NavLink>
        </Container>
      </BackgroundLogin>
    );
  }
}

export default Signin;
