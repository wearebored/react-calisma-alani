import { Container, H3, Img, Linkedln, Paragraf } from "./About-styled";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
function About() {
  const { setMaxwidth } = useContext(LoginContext);
  return (
    <Container
      onClick={() => {
        setMaxwidth(true);
      }}
    >
      <Img src="./image/coding.svg" alt="coding" />

      <H3>
        About Full-stack Web Developer <span>WeAreBored</span>
      </H3>
      <Paragraf>
        <h6>I'm Bored.</h6>
        <p>I'm currently learning full-stack development languages.</p>
        <p>I've already known JS, ReactJS, React Native, Node MYSQL,Python.</p>

        <a target="_blank" href="https://www.linkedin.com/in/enes-goktas/">
          <Linkedln />
        </a>
      </Paragraf>
    </Container>
  );
}

export default About;
