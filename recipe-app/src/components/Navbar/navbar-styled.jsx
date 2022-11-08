import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavbarContainer = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #c71515;
`;
export const Navbarh2 = styled.h2`
  color: #ffffff;
  span {
    color: royalblue;
  }
`;
export const NavbarList = styled.ul``;
export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
