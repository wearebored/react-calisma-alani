import styled from "styled-components";

export const Container = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  background-image: url("https://picsum.photos/1600/900");
  background-size: cover;
  background-position: center;
  /* background-repeat: repeat-y; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 5rem;
  padding: 15rem 0 5rem 0;
  @media (max-width: 1300px) {
    padding: 7rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
