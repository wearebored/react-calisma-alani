import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  background-image: url("https://picsum.photos/1600/900");
  background-position: center;
  background-size: cover;
  justify-content: space-evenly;
`;
export const LeftRight = styled.div`
  min-height: 90vh;
  width: 40%;
`;
export const LoginRight = styled.div`
  background-color: white;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 10rem;

  h3 {
    text-align: center;
    font-size: 4rem;
    font-weight: 400;
    margin: 2rem 0;
  }
  input {
    height: 2rem;
    font-size: 1rem;
    padding: 0 10px;
  }
  button {
    height: 2rem;
    font-size: 1rem;
    color: white;
    background-color: #1e5aff;
    border-radius: 5px;
    border: solid 0px;
    margin: 0.3rem 0;
    &:disabled {
      opacity: 0.6;
    }
  }
  label {
    font-size: 1.5rem;
  }
`;
export const ImgDiv = styled.div`
  text-align: center;
  img {
    height: 12rem;
    transform: scale(1.3);
  }
`;
export const Uyari = styled.p`
  height: 0;
  font-size: 1rem;
  transform: translateY(3.6rem);
  color: red;
`;
export const Hata = styled.p`
  height: 0;
  color: red;
  transform: translateY(1rem);
`;

