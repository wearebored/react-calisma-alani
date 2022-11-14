import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutRedux, logoutReset } from "../../redux/action/reducerAction";
import { NavbarDiv } from "./navbar-styled";

function Navbar() {
  const { logindata } = useSelector((store) => store.loginsignin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <NavbarDiv>
      <h1>
        {"<WeAreBored/> "} <span>Contact</span>
      </h1>
      <button
        onClick={() => {
          dispatch(logoutRedux());
          dispatch(logoutReset());
          navigate("/login");
        }}
      >
        {logindata ? "LOGOUT" : "LOGIN"}
      </button>
    </NavbarDiv>
  );
}

export default Navbar;
