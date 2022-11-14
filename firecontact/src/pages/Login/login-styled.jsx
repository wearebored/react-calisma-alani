import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdEmail, MdPassword } from "react-icons/md";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
export const LoginDiv = styled.div`
  min-height: 90vh;
  background-image: url("https://picsum.photos/1600/900");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  main {
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
    position: relative;
    p {
      position: absolute;
      bottom: 2rem;
      font-size: 1.2rem;
      color: red;
    }
    h2 {
      font-size: 3rem;
      color: #000000;
      margin: 1rem;
    }
    input {
      font-size: 1.3rem;
      padding: 0.4rem 2rem 0.4rem 2rem;
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
      &:disabled {
        &:hover {
          background-color: #ffffff44;
          
        }
        &:active {
          transform: scale(1);
        }
      }
      &:hover {
        background-color: #5a2929;
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
`;
export const InputDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const IconPassword = styled(MdPassword)`
  position: absolute;
  left: 6px;
  font-size: 1.5rem;
  
  
`;
export const IconEmail = styled(MdEmail)`
  position: absolute;
  left:6px;
  font-size: 1.5rem;
`;
export const IconEye1 = styled(AiFillEye)`
  position: absolute;
  right: 6px;
  font-size: 1.5rem;
`;
export const IconEye2 = styled(AiFillEyeInvisible)`
  position: absolute;
  right: 6px;
  font-size: 1.5rem;
`;

export const LoginLink = styled(Link)``;
