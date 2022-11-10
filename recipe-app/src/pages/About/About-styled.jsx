import styled from "styled-components";
import { AiFillLinkedin } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: #029faa;
  padding: 2rem;
`;
export const Img = styled.img`
  margin: 3rem;
  height: 18rem;
`;
export const H3 = styled.h3`
  font-size: 2rem;
  span {
    color: white;
  }
`;
export const Paragraf = styled.div`
  margin: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  border: solid 1px white;
  border-radius: 5px;
  padding: 2rem;
  width: 70%;
  h6 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.2rem;
  }
`;
export const Linkedln = styled(AiFillLinkedin)`
  font-size: 3rem;
  color: #292525;
  &:hover {
    color: #550909;
  }
  &:active {
    color: #c40c0c;
  }
`;
