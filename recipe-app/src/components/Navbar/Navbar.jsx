import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { NavbarContainer, Navbarh2, NavbarLink, NavbarList } from "./navbar-styled";

function Navbar() {
  const { user, setUser } = useContext(LoginContext);

  return (
    <NavbarContainer>
      <NavbarLink to="/about">
        <Navbarh2>
          {"<ENES/> "} <span>RECIPE</span>
        </Navbarh2>
      </NavbarLink>

      <NavbarList>
        <NavbarLink to="/about">ABOUT</NavbarLink>
        <NavbarLink to="/github">GITHUB</NavbarLink>
        <NavbarLink
          onClick={() => {
            setUser("");
          }}
          to="/login"
        >
          {user ? "LOGOUT" : "LOGIN"}
        </NavbarLink>
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
