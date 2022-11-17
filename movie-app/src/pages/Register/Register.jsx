import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setLoginGoogle, setRegister } from "../../app/features/loginSlice";
import { setPage } from "../../app/features/pagesSlice";
import logingoogle from "../../firebase/logingoogle";
import { registerfirebase } from "../../firebase/registerfirebase";
import {
  Hata,
  LeftRight,
  LoginPage,
  LoginRight,
  Uyari,
} from "../Login/login-styled";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const datas = { firstname, lastname, email };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data1 = useSelector((store) => store.login);

  useEffect(() => {
    
    dispatch(setPage("register"));
  }, [dispatch]);
  


  if (data1.uid) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <LoginPage>
          <LeftRight></LeftRight>
          <LeftRight>
            <LoginRight>
              <h3>Register</h3>
              <label htmlFor="name">First name</label>
              <input
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                type="text"
                id="name"
                placeholder="Enter your first name..."
              />
              <label htmlFor="lastname">Last name</label>
              <input
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                type="lastname"
                id="lastname"
                placeholder="Enter your last name..."
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                id="email"
                placeholder="Enter your email address..."
              />
              <label htmlFor="password1">Password</label>
              <input
                onChange={(e) => setPassword1(e.target.value)}
                value={password1}
                type="text"
                id="password1"
                placeholder="Enter your password..."
              />
              <label htmlFor="password2">
                Confirm Password
                {password1 === password2 ? (
                  <div></div>
                ) : (
                  <Uyari>Incompatible Password</Uyari>
                )}
              </label>
              <input
                onChange={(e) => setPassword2(e.target.value)}
                value={password2}
                type="text"
                id="password2"
                placeholder="Enter your password..."
              />

              
              <button
                disabled={
                  firstname &&
                  lastname &&
                  email &&
                  password1.length >= "6" &&
                  password2.length >= "6" &&
                  password1 === password2
                    ? false
                    : true
                }
                onClick={() => {
                  registerfirebase(
                    email,
                    password1,
                    setError,
                    navigate,
                    dispatch,
                    setRegister,
                    datas
                  );
                }}
              >
                Register
                {error && <Hata>{error.code}</Hata>}
              </button>

              <button 
              onClick={()=>{
                logingoogle(dispatch,navigate,setLoginGoogle,setError)
              }}
              >Continue with Google</button>
            </LoginRight>
          </LeftRight>
        </LoginPage>
      </div>
    );
  }
}
export default Register;
