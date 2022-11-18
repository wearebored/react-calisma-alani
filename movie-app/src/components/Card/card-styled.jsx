import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #2471ff;
  height: 40rem;
  width: 24rem;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
`;
export const ImageContainer = styled.div`
  background-color: white;
  height: 35rem;
  display: flex;
  p {
    margin: 0;
  }
  img {
    /* height: 40rem; */
    height: 35rem;
    width: 24rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;
export const NameDiv = styled.div`
  /* background-color: red; */
  height: 5rem;
  p {
    margin: 0;
    font-size: 1.5rem;
    margin: 0.5rem;
    text-align: center;
    color: white;
  }
`;
export const DetailCard = styled.div`
  background-color: #ffffff96;
  /* height: 25rem; */
  transition-duration: 0.5s;
  transform: translateX(${(p) => (p.hover ? "0rem" : "24rem")});
  position: absolute;
  right: 0;
  bottom: 5rem;
  h4 {
    font-size: 2.3rem;
    font-weight: 400;
    margin: 1rem;
  }
  p {
    font-size: 1.2rem;
    margin: 0 1rem 1rem 1rem;
  }
`;
export const RateCard = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.5rem;
  border-radius: 5px;
  height: 2.5rem;
  width: 2.5rem;
  background-color: #ff5c20;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.5rem;
    color: white;
  }
`;
