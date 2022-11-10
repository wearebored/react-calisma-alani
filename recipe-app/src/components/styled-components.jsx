import styled from "styled-components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
export const BackgroundLogin = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  background-size: cover;
  background-position: center;
  min-height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const IconContainer = styled.div`
  display: flex;
  margin: 0 10px;
  position: absolute;
  right: 0px;
`;
export const Icon = styled(AiFillEye)`
  font-size: 2rem;
  color: white;
`;
export const Icon2 = styled(AiFillEyeInvisible)`
  font-size: 2rem;
  color: white;
`;
export const InputConteiner = styled.div`
  background-color: #000000b9;
  border-radius: 5px;
  position: relative;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  input {
    width: 100%;
    background-color: #03030300;
    border: solid 0;
    padding: 18px 10px;
    font-size: 1.5rem;
    font-family: "Times New Roman", Times, serif;
    color: white;
  }
`;
export const Input = styled.input`
  background-color: #000000b9;
  font-size: 1.5rem;
  border-radius: 5px;
  border: solid 0;
  padding: 18px 10px;
  width: 20rem;
  font-family: "Times New Roman", Times, serif;
  color: white;
`;
export const Button = styled.button`
  background-color: #000000b9;
  font-size: 1.5rem;
  border-radius: 5px;
  border: solid 0;
  padding: 10px 10px;
  width: 10rem;
  color: white;
  &:hover {
    background-color: #550909;
  }
  &:active {
    background-color: #015516;
  }
  &:disabled {
    opacity: 0.6;
    border: solid 1px white;
  }
`;
export const H1 = styled.h1`
  color: white;
`;
export const Container = styled.div`
  background-color: #00d9ff61;
  height: 40rem;
  width: 40rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem;
  border: solid 2px white;
  .hata {
    height: 0px;
    margin: 0px;
    padding: 0px;
    font-size: 1.3rem;
    color: red;
    transform: translateY(-128px);
  }
`;
export const LoginImage = styled.img`
  height: 10rem;
`;
