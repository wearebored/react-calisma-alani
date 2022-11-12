import styled from "styled-components";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
export const Liste = styled.div`
  background-color: white;
  display: flex;

  p {
    border-top: solid 2px gray;
    padding: 0.8rem;
    width: 9rem;
  
    display: flex;
    align-items: center;
    justify-content: center;
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
