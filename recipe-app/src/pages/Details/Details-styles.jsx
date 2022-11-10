import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #188f8f;
  min-height: 90vh;
`;
export const Contents = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  gap: 5rem;
  border: solid 1px white;
  border-radius: 5px;
  padding: 3rem 5rem;
  img {
    height: 15rem;
    border-radius: 5px;
    margin: 0.5rem;
  }
  .cerceve {
    border: solid 1px white;
    border-radius: 3px;
    display: flex;
    
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;

  align-content: center;
  gap: 8rem;
  padding: 5rem;
  img {
    height: 10rem;
  }
  h3 {
    font-size: 2rem;
    text-align: center;
  }
`;
export const Feature = styled.div`
  width: 33%;
  text-align: center;
  p {
    font-size: 1.3rem;
    margin: 0.5rem 0;
  }
`;
export const Material = styled.div`
  font-size: 1.3rem;
  width: 33%;
  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: none;
    text-align: center;
  }
`;
