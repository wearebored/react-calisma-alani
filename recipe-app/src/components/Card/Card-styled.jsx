import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #14b8b8;
  box-shadow: 8px 8px 6px #000000a4;

  width: 22rem;
  min-height: 25rem;
  border-radius: 5px;
  h3 {
    margin: 1.5rem;
    text-align: center;
  }
  img {
    height: 13rem;
    border-radius: 20px;
  }
  button {
    background-color: #a3f8ea;
    border: solid 0;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 5px;
    margin: 1.5rem;
    font-weight: 700;
  }
`;
