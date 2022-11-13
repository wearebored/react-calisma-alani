import AddContact from "../../components/AddContact/AddContact";
import Contacts from "../../components/Contacts/Contacts";
import { Container } from "./home-styled";

function Home() {
    
  return (
  <div>
    
    <Container>
        <AddContact/>
        <Contacts/>
    </Container>

  </div>
    )
}

export default Home;
