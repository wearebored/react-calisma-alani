import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 10vh;
  /* width: 100%; */
  background-color: #2471ff;
  h1 {
    color: white;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
`;
export const LoginContainer = styled.div`
  div {
    color: white;
  }
  display: flex;
  gap: 2rem;
`;
export const Links = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 2rem;
  font-size: 1.3rem;
`;
export const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  div {
    font-size: 1.2rem;
    span {
      font-size: 1.3rem;
    }
  }
`;
