import { Bekleme, ContactsContainer, H2, NoData, Ul } from "./contacts-styled";
import { useDispatch, useSelector } from "react-redux";
import List from "./List/List";

function Contacts({bekle}) {
  const dispatch = useDispatch();
  const { name, phone, gender, contacts } = useSelector(
    (store) => store.addcontact
  );
  // const data = useSelector((store) => store.addcontact);
  // console.log(data);
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
      
      {contacts.length===0&&bekle?<Bekleme></Bekleme>:contacts.length === 0 && <NoData>LİSTENİZ BOŞ</NoData>}
      {/* {contacts.length === 0 && <NoData>LİSTENİZ BOŞ</NoData>} */}
    </ContactsContainer>
  );
}

export default Contacts;
