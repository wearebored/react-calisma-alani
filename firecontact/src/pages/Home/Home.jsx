import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AddContact from "../../components/AddContact/AddContact";
import Contacts from "../../components/Contacts/Contacts";
import { logoutRedux } from "../../redux/action/reducerAction";
import { Container } from "./home-styled";

function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <AddContact />
        <Contacts />
      </Container>
      <Link to="/signin">login</Link>
      <button
        onClick={() => {
          dispatch(logoutRedux());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Home;
