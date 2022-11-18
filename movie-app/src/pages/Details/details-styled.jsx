import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 2rem 0;
  }
  padding: 0 5rem;
  main {
    height: 80vh;
    margin-top: 2rem;
    display: flex;
    margin-bottom: 4rem;
    border: solid 2px #d8d8d8;
    overflow: hidden;
    img {
      height: 80vh;
    }
  }
`;
export const VideoDiv = styled.div`
  height: max-content;
  width: max-content;
  padding: 0.8rem;
  border-radius: 5px;
  background-color: #f0f0f0;
  border: solid 1px #c4c4c4;
  display: flex;
`;
export const DetailsP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Overview = styled.div`
  padding: 1rem;
  p {
    font-size: 1.2rem;
  }
  h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;
export const Rate = styled.div`
  p {
    padding: 0.7rem 1rem;
    border-top: solid 2px #d8d8d8;
    border-left: solid 2px #d8d8d8;
  }
`;
