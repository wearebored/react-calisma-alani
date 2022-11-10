import { useLocation } from "react-router-dom";
import { Container, Contents, Title } from "./Details-styles";

function Details() {
  const { state } = useLocation();
  console.log(state);
  return (
    <Container>
      <Title></Title>
      <Contents></Contents>
    </Container>
  );
}

export default Details;
