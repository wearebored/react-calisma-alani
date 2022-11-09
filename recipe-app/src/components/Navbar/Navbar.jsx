import { useContext, useState } from "react";

import { LoginContext } from "../../context/LoginContext";
import {
  LinkDiv,
  Menu,
  NavbarContainer,
  NavbarContainer2,
  Navbarh2,
  NavbarLink,
  NavbarList,
} from "./navbar-styled";

function Navbar() {
  const { user, setUser, maxwidth, setMaxwidth } = useContext(LoginContext);

  return (
    <NavbarContainer>
      <NavbarContainer2>
        <NavbarLink to="/about">
          <Navbarh2>
            {"<ENES/> "} <span>RECIPE</span>
          </Navbarh2>
        </NavbarLink>
        <Menu
          onClick={() => {
            setMaxwidth(!maxwidth);
          }}
        ></Menu>
      </NavbarContainer2>

      <NavbarList maxwidth={maxwidth}>
        <LinkDiv>
          <NavbarLink to="/about">ABOUT</NavbarLink>
        </LinkDiv>
        <LinkDiv>
          <NavbarLink to="/github">GITHUB</NavbarLink>
        </LinkDiv>
        <LinkDiv>
          <NavbarLink
            onClick={() => {
              setUser("");
            }}
            to="/login"
          >
            {user ? "LOGOUT" : "LOGIN"}
          </NavbarLink>
        </LinkDiv>
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
