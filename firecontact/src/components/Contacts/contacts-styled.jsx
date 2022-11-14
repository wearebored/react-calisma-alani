import styled from "styled-components";
export const ContactsContainer = styled.div`
  /* background-color: white; */
  /* width: 70%; */
  /* height: 40vh; */

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
  background-color: #ececec;

  border-radius: 10px 10px 0 0;
  p {
    padding: 1rem 0;
  }
  li {
    width: 9rem;
    text-align: center;
  }
`;
export const NoData = styled.div`
  background-color: #21bdbd;
  text-align: center;
  padding: 2rem;
  color: white;
  font-weight: 700;
`;
export const Bekleme = styled.div`
  background-image: url("image/spinner.gif");
  background-color: white;
  height: 6rem;
  width: 45rem;
  background-size: cover;
  background-position: center;
  background-size: 15rem;
  background-repeat: no-repeat;
`;
