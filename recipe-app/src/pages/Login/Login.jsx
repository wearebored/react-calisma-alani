import { useContext, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import {
  BackgroundLogin,
  Button,
  Container,
  H1,
  Input,
  LoginImage,
} from "../../components/styled-components";
import { LoginContext } from "../../context/LoginContext";
import { login } from "../../firebase";
function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(LoginContext);
  const [errors, setErrors] = useState("");
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
      console.log(errors);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <BackgroundLogin>
        <Container>
          <LoginImage src="image/meal2.svg" alt="meal2" />

          <H1>{"<ENES/> RECIPE"}</H1>

          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="EMAİL"
            id="email"
          ></Input>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            value={password}
            placeholder="PASSWORD"
            id="password"
          ></Input>
          <Button onClick={loginClick}>LOGIN</Button>

          <NavLink to="/signin">
            <Button>SING IN</Button>
          </NavLink>
        </Container>
      </BackgroundLogin>
    );
  }
}

export default Login;
