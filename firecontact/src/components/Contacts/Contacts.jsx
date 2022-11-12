import { ContactsContainer, H2, Ul } from "./contacts-styled";

function Contacts() {
  return (
    <ContactsContainer>
      <H2>Contacts</H2>

      <Ul>
        <li>
          <p>Username</p>
          <div>asd</div>
          <div>asdawwadd</div>
        </li>
        <li>
          <p>Phone Number</p> <div>asdawwadd</div> <div>asdawwadd</div>{" "}
        </li>
        <li>
          <p>Gender</p>
          <div>asdawwadd</div>
          <div>asdawwadd</div>
        </li>
        <li>
          <p>Delete</p>
          <div>asdawwadd</div>
          <div>asdawwadd</div>
        </li>
        <li>
          <p>Edit</p>
          <div>asdawwadd</div>
          <div>asdawwadd</div>
        </li>
      </Ul>
    </ContactsContainer>
  );
}

export default Contacts;
