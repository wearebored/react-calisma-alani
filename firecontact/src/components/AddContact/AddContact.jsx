import {
  AddcontactContainer,
  Button,
  Gender,
  H1,
  H2,
  Input,
  InputContainer,
  Phone,
  User,
} from "./addcontact-styled";

function AddContact() {
  return (
    <AddcontactContainer>
      <H1>
        <span>{"<WeAreBored/>"}</span> DESIGN
      </H1>
      <H2>Add Contact</H2>
      <InputContainer>
        <Input>
          <input type="text" placeholder="Name" />

          <User />
        </Input>
        <Input>
          <input type="text" placeholder="Phone Number" />
          <Phone />
        </Input>
        <Gender defaultValue="gender">
          <option disabled value="gender">
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Gender>

        <Button>Add</Button>
      </InputContainer>
    </AddcontactContainer>
  );
}

export default AddContact;
