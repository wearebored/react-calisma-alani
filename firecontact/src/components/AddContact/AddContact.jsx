import {
  contactsChange,
  dataPull,
  dataPush,
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
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../firebase";
import { useEffect } from "react";


function AddContact() {
  const dispatch = useDispatch();
  const db = getFirestore(app);
  // ------------------------

  // -------------------
  const okuma = async () => {
    const docRef = doc(db, "cities", "data");
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    dispatch(dataPull(data))
   

   
  };

  useEffect(() => {
    okuma();
  }, []);

;

  const { name, phone, gender } = useSelector((store) => store.addcontact);
  const veri = useSelector((store) => store);
  const buttonOnclick = () => {
    if (name && phone && gender) {
      dispatch(contactsChange({ name, phone, gender }));
      dispatch(dataReset());
      dispatch(dataPush())
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
            maxLength="12"
            onChange={(e) => dispatch(nameChange(e.target.value))}
            value={name}
            type="text"
            placeholder="Name"
          />

          <User />
        </Input>
        <Input>
          <input
            maxLength="12"
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
