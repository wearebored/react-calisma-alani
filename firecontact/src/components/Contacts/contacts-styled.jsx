import styled from "styled-components";
export const ContactsContainer = styled.div`
  /* background-color: white; */
  /* width: 70%; */
  height: 40vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const H2 = styled.h2`
  background-color: #ffffff;
  text-align: center;
  border-radius: 10px;
  padding: 0.7rem;
`;
// export const List = styled.div``;
export const Ul = styled.ul`
  display: flex;

  list-style-type: none;
  background-color: white;
  width: fit-content;
  /* border: solid 2px; */
  border-radius: 10px;

  li {
    text-align: center;

    p {
      background-color: #ececec;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 1rem 1.5rem;
    }
    div {
      padding: 1rem 0;
      border-top: solid 2px #b4b4b4;
    }
  }
`;
