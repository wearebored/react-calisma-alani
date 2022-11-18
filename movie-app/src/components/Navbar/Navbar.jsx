import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../../app/features/loginSlice";
import {
  Links,
  LoginContainer,
  NavbarContainer,
  UserName,
} from "./navbar-styled";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = useSelector((store) => store.pages);
  const user = useSelector((store) => store.login);
 
  return (
    <div>
      <NavbarContainer>
        <h1 onClick={() => navigate("/")}>React Movie App</h1>
        <LoginContainer>
          {user.uid ? (
            <UserName>
              <div>{`(` + user.firstname + " " + user.lastname + `)`}</div>
              <div
                onClick={() => {
                  dispatch(setLogout());
                }}
              >
                <span>LOGOUT</span>
              </div>
            </UserName>
          ) : page.page === "login" ? (
            <div>
              <Links to="/">HOME</Links>
              <Links to="/register">REGİSTER</Links>
            </div>
          ) : page.page === "register" ? (
            <div>
              <Links to="/">HOME</Links>
              <Links to="/login">LOGIN</Links>
            </div>
          ) : (
            <Links to="/login">LOGIN</Links>
          )}
        </LoginContainer>
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
