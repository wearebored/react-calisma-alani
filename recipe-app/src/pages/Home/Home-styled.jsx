import styled from "styled-components";

export const Container = styled.div`
  background-color: #14b8b8;
  min-height: 90vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;
export const H2 = styled.h2`
  margin: 1rem;
  font-size: 2rem;
`;
export const SearchDiv = styled.div`
  margin-bottom: 1rem;
  border: solid 1px white;
  padding: 3px;
  display: flex;
  gap: 0.3rem;
  border-radius: 3px;
`;
export const Input = styled.input`
  height: 2.4rem;
  border-radius: 4px;
  border: solid 1px grey;
  padding-left: 7px;
  font-size: 1rem;
  font-weight: 700;
`;
export const Search = styled.button`
  font-weight: 900;
  padding: 0 0.5rem;
  background-color: #0000;
  border: solid white 1px;
  border-radius: 3px;
  color: black;
  &:disabled {
    opacity: 0.7;
  }
  &:active {
    background-color: red;
  }
`;
export const Select = styled.select`
  font-weight: 700;
  border-radius: 4px;
  border: solid 1px gray;
`;

export const Cards = styled.div`
  background-color: #e6fdfd;
  padding: 0.5rem 1.5rem 2rem 1.5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
