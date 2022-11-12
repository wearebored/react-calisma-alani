import { ContactsContainer, H2, NoData, Ul } from "./contacts-styled";
import { useDispatch, useSelector } from "react-redux";
import List from "./List/List";

function Contacts() {
  const dispatch = useDispatch();
  const { name, phone, gender, contacts } = useSelector((store) => store);

  return (
    <ContactsContainer>
      <H2>Contacts</H2>

      <Ul>
        <li>
          <p>Username</p>
        </li>
        <li>
          <p>Phone Number</p>
        </li>
        <li>
          <p>Gender</p>
        </li>
        <li>
          <p>Delete</p>
        </li>
        <li>
          <p>Edit</p>
        </li>
      </Ul>

      {contacts.map((data) => (
        <List key={data.id} data={data} dispatch={dispatch} />
      ))}

      {contacts.length === 0 && <NoData>LİSTENİZ BOŞ</NoData>}
    </ContactsContainer>
  );
}

export default Contacts;
