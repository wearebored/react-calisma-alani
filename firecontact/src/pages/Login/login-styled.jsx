import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginDiv = styled.div`
  min-height: 100vh;
  background-image: url("https://picsum.photos/1600/900");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  div {
    background-color: #3b7a8a78;
    height: 30rem;
    width: 30rem;
    border-radius: 50%;
    border: solid 2px white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    h2 {
      font-size: 3rem;
      color: #000000;
      margin: 1rem;
    }
    input {
      font-size: 1.3rem;
      padding: 0.4rem;
      border-radius: 6px;
      border: solid 1px black;
      width: 17rem;
    }
    button {
      font-size: 1rem;
      padding: 0.4rem;
      border-radius: 6px;
      border: solid 1px black;
      width: 12rem;
    }
  }
`;

export const LoginLink = styled(Link)``;
