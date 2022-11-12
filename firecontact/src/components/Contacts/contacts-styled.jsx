import styled from "styled-components";
export const ContactsContainer = styled.div`
  /* background-color: white; */
  /* width: 70%; */
  height: 40vh;
  
  grid-template-columns: 1fr 1fr 1fr 1fr;

  
`;
export const H2 = styled.h2`
  background-color: #ffffff;
  text-align: center;
  border-radius: 10px;
  padding: 0.7rem;
  margin-bottom: 2rem;
  
`;

export const Ul = styled.ul`
  
  display: flex;
  list-style-type: none;
  /* background-color: #ececec; */
  background-color: red;

  border-radius: 10px 10px 0 0;

  li {
    
    /* min-width: 4rem; */
    /* width: 20%; */
    min-width: 7rem;
    text-align: center;
    padding: 1rem 1.5rem;
  }
`;
export const NoData = styled.div`
  background-color: aqua;
  text-align: center;
  padding: 2rem;
`;
