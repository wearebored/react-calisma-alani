import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { NavbarContainer, Navbarh2, NavbarList } from "./navbar-styled";

function Navbar() {
  const { user, setUser} = useContext(LoginContext);
  
 
  return (
    <NavbarContainer>
      <Link to="/about">
        <Navbarh2>
          {"<ENES/> "} <span>RECIPE</span>
        </Navbarh2>
      </Link>

      <NavbarList>
        <Link to="/about">ABOUT</Link>
        <Link to="/github">GITHUB</Link>
        <Link
          onClick={() => {
            setUser("");
          
          }}
          to="/login"
        >
          {user?"LOGOUT":"LOGIN"}
        </Link>
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
