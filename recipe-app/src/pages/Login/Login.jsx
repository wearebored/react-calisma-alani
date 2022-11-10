import { useContext, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import {
  BackgroundLogin,
  Button,
  Container,
  H1,
  Icon,
  Icon2,
  IconContainer,
  Input,
  InputConteiner,
  LoginImage,
} from "../../components/styled-components";
import { LoginContext } from "../../context/LoginContext";
import { login } from "../../firebase";
function Login() {
  const { maxwidth, setMaxwidth } = useContext(LoginContext);
  const navigate = useNavigate();
  const { user, setUser } = useContext(LoginContext);
  const [errors, setErrors] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showhide, setShowhide] = useState(true);
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
      <BackgroundLogin
        onClick={() => {
          setMaxwidth(true);
        }}
      >
        <Container>
          <LoginImage src="image/meal2.svg" alt="meal2" />

          <H1>{"<WeAreBored/> RECIPE"}</H1>

          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Email"
            id="email"
          />
          <InputConteiner>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors("");
              }}
              type={showhide ? "password" : "text"}
              name="password"
              id="password"
              placeholder="Password"
            />
            <IconContainer
              onClick={() => {
                setShowhide(!showhide);
              }}
            >
              {showhide ? <Icon /> : <Icon2 />}
            </IconContainer>
          </InputConteiner>
          <Button
            disabled={email && password.length >= 6 ? false : true}
            onClick={loginClick}
          >
            LOGIN
          </Button>
          <hr style={{ width: "20rem" }} />
          <NavLink to="/signin">
            <Button>SIGN IN</Button>
          </NavLink>
          <div className="hata">{errors ? errors : ""}</div>
        </Container>
      </BackgroundLogin>
    );
  }
}

export default Login;
