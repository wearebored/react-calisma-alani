import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLogout } from "../../app/features/loginSlice";
import { LoginContainer, NavbarContainer } from "./navbar-styled";

function Navbar() {
  const dispatch=useDispatch()
  
  const page = useSelector((store) => store.pages);
  const user = useSelector((store) => store.login);
  console.log(page.page);
  return (
    <div>
      <NavbarContainer>
        <h1>React Movie App</h1>
        <LoginContainer>
          {user.uid ? (
            <div>
              <div>{user.firstname+" "+user.lastname}</div>
              <div onClick={()=>{
                  dispatch(setLogout())
              }}>LOGOUT</div>
            </div>
          ) : page.page === "login" ? (
            <Link to="/register">REGİSTER</Link>
          ) : (
            <Link to="/login">LOGİN</Link>
          )}
          {/* <div>LOGİN</div>
          <div>REGİSTER</div> */}
        </LoginContainer>
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
