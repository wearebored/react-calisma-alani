import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavbarContainer = styled.div`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;

    flex-direction: column;
  }

  background-color: #e6fdfd;
`;
export const NavbarContainer2 = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;

  background-color: #e6fdfd;
`;
export const Navbarh2 = styled.h2`
  color: #1f1414;
  margin-left: 2rem;
  span {
    color: #2ca8da;
  }
`;
export const NavbarList = styled.ul`
  margin-right: 2rem;
  display: flex;

  @media (max-width: 1000px) {
    display: ${(props) => (props.maxwidth ? "none" : "flex")};

    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
`;
export const LinkDiv = styled.div`
  padding: 1rem;
  a {
    color: #085866;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
  }
  @media (max-width: 1000px) {
    padding: 1rem;
    width: 80vw;
    border-top: solid 1px;

    display: flex;
    justify-content: center;
  }
`;
export const NavbarLink = styled(Link)`
  color: #085866;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
`;
export const Menu = styled(GiHamburgerMenu)`
  height: 2rem;
  width: 2rem;
  display: none;
  color: #085866;
  margin-right: 2rem;
  @media (max-width: 1000px) {
    display: block;
  }
  h1 {
    color: white;
  }
`;
