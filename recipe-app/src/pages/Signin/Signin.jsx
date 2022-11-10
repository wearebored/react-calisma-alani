import { useState, useContext } from "react";
import { useNavigate, Navigate, NavLink } from "react-router-dom";
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
} from "../../components/styled-components";
import { LoginContext } from "../../context/LoginContext";
import { register } from "../../firebase";


function Signin() {
  const {  setMaxwidth } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(LoginContext);
  const [errors, setErrors] = useState("");
  const [showhide, setShowhide] = useState(true);
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
      <BackgroundLogin
        onClick={() => {
          setMaxwidth(true);
        }}
      >
        <Container>
          <H1>{"<WeAreBored/> RECIPE"}</H1>
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
            onClick={signinClick}
          >
            SIGN IN
          </Button>
          <hr style={{ width: "20rem" }} />
          <NavLink to="/login">
            <Button>LOGIN</Button>
          </NavLink>
          <div className="hata">{errors ? errors : ""}</div>
        </Container>
      </BackgroundLogin>
    );
  }
}

export default Signin;
