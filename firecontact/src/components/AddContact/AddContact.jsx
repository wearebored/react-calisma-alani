import {
  contactsChange,
  dataReset,
  genderChange,
  nameChange,
  phoneChange,
} from "../../redux/action/reducerAction";
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
import { useDispatch, useSelector } from "react-redux";

function AddContact() {
  const dispatch = useDispatch();
  const { name, phone, gender } = useSelector((store) => store);
  

  const buttonOnclick = () => {
    if (name && phone && gender) {
      dispatch(contactsChange({ name, phone, gender }));
      dispatch(dataReset());
    }
    
  };
  
  return (
    <AddcontactContainer>
      <H1>
        <span>{"<WeAreBored/>"}</span> DESIGN
      </H1>
      <H2>Add Contact</H2>
      <InputContainer>
        <Input>
          <input
            onChange={(e) => dispatch(nameChange(e.target.value))}
            value={name}
            type="text"
            placeholder="Name"
          />

          <User />
        </Input>
        <Input>
          <input
            onChange={(e) => dispatch(phoneChange(e.target.value))}
            value={phone}
            type="text"
            placeholder="Phone Number"
          />
          <Phone />
        </Input>
        <Gender
          onChange={(e) => dispatch(genderChange(e.target.value))}
          defaultValue="gender"
        >
          <option disabled value="gender">
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Gender>

        <Button onClick={buttonOnclick}>Add</Button>
      </InputContainer>
    </AddcontactContainer>
  );
}

export default AddContact;
