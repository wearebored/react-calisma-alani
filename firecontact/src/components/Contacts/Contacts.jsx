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
          {/* {contacts.map((data) => (
            <List key={data.id} data={data.name} />
          ))} */}
        </li>
        <li>
          <p>Phone Number</p>
          {/* {contacts.map((data) => (
            <List key={data.id} data={data.phone} />
          ))} */}
        </li>
        <li>
          <p>Gender</p>
          {/* {contacts.map((data) => (
            <List key={data.id} data={data.gender} />
          ))} */}
        </li>
        <li>
          <p>Delete</p>
          {/* {contacts.map((data) => (
            <List key={data.id} data2={"delete"} />
          ))} */}
        </li>
        <li>
          <p>Edit</p>
          {/* {contacts.map((data) => (
            <List key={data.id} data2={"edit"} />
          ))}  */}
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
