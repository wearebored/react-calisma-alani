import styled from "styled-components";
import { FaUser, FaPhone } from "react-icons/fa";

export const AddcontactContainer = styled.div`
  /* width: 30%; */
  /* height: 40vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const H1 = styled.h1`
  transform: translateY(-2rem);
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 10px;
  span{
    color: #20b8b8;
  }
`;
export const H2 = styled.h2`
  background-color: white;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  border-radius: 10px;
`;
export const InputContainer = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;
export const Input = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  border: solid 0px;

  input {
    width: 100%;
    height: 3rem;
    padding-left: 2.5rem;
    font-size: 1.2rem;
    border-radius: 4px;
    border: solid 2px gray;
  }
`;
export const Gender = styled.select`
  height: 3rem;
  width: 100%;
  padding: 0 10px;
  font-size: 1.2rem;
  border-radius: 4px;
`;
export const Button = styled.button`
  height: 3rem;
  width: 100%;
  background-color: #219c9c;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 4px;
  border: solid 0px;
  &:disabled{
    opacity: 0.5;
  }
`;
export const Phone = styled(FaPhone)`
  position: absolute;
  left: 0;
  margin: 0 15px;
  color: #585858;
`;
export const User = styled(FaUser)`
  position: absolute;
  left: 0;
  margin: 0 15px;
  color: #5e5e5e;
`;
