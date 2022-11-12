import styled from "styled-components";
import { AiFillDelete, AiFillEdit, AiFillSave } from "react-icons/ai";
export const Liste = styled.div`
  background-color: white;
  display: flex;
  height: 3.3rem;

  p {
    border-top: solid 2px gray;
    padding: 0 0.5rem;
    width: 9rem;

    display: flex;
    align-items: center;
    justify-content: center;
    input {
      /* background-color: red; */
      width: 100%;
      height: 2rem;
      font-size: 1rem;
      text-align: center;
      border-radius: 3px;
      border: solid 2px black;
    }
    select {
      width: 6rem;
      height: 2rem;
      font-size: 1rem;
      option {
        text-align: center;
      }
    }
  }
`;
export const DeleteIcon = styled(AiFillDelete)`
  text-align: center;
  font-size: 1.5rem;
`;
export const EditIcon = styled(AiFillEdit)`
  text-align: center;
  font-size: 1.5rem;
`;
export const SaveIcon = styled(AiFillSave)`
  text-align: center;
  font-size: 1.5rem;
`;
