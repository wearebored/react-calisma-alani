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
        <NavbarLink
          onClick={() => {
            setMaxwidth(true);
          }}
          to="/"
        >
          <Navbarh2>
            {"<WeAreBored/> "} <span>RECIPE</span>
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
          <NavbarLink
            onClick={() => {
              setMaxwidth(true);
            }}
            to="/about"
          >
            ABOUT
          </NavbarLink>
        </LinkDiv>
        <LinkDiv>
          {/* <NavbarLink
            onClick={() => {
              setMaxwidth(true);
            }}
            // to=""
          >
            GITHUB
          </NavbarLink> */}
          {/* <a href="https://github.com/wearebored"></a> */}

          <a target="_blank"
            onClick={() => {
              setMaxwidth(true);
            }}
            href="https://github.com/wearebored"
          >
            GITHUB
          </a>
        </LinkDiv>
        <LinkDiv>
          <NavbarLink
            onClick={() => {
              setUser("");
              setMaxwidth(true);
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
