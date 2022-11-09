import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavbarContainer = styled.div`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;

    flex-direction: column;
  }

  background-color: #c71515;
`;
export const NavbarContainer2 = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;

  background-color: #c71515;
`;
export const Navbarh2 = styled.h2`
  color: #ffffff;
  margin-left: 2rem;
  span {
    color: royalblue;
  }
`;
export const NavbarList = styled.ul`
  margin-right: 2rem;
  display: flex;

  @media (max-width: 800px) {
    display: ${(props) => (props.maxwidth ? "none" : "flex")};

    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
`;
export const LinkDiv = styled.div`
  padding: 1rem;
  @media (max-width: 800px) {
    padding: 1rem;
    width: 80vw;
    border-top: solid 1px;

    display: flex;
    justify-content: center;
  }
`;
export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
export const Menu = styled(GiHamburgerMenu)`
  height: 2rem;
  width: 2rem;
  display: none;
  color: white;
  margin-right: 2rem;
  @media (max-width: 800px) {
    display: block;
  }
  h1 {
    color: white;
  }
`;
