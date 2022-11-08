import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

function Home() {
  const { user, setUser } = useContext(LoginContext);
  return (
    <div>
      Home
      <div>
        <NavLink to="/">HOME</NavLink>
        <br />
        <NavLink to="/login">LOGIN</NavLink>
        <br />
        <NavLink to="/about">ABOUT</NavLink>
      </div>
      <div>
        <NavLink
          onClick={() => {
            setUser("");
          }}
          to="/login"
        >
          LOGOUT
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
