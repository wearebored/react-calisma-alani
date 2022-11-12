import { CONTACTS, GENDER, NAME, PHONE, RESET } from "../types/reducersType";

const initialState = {
  name: "",
  phone: "",
  gender: "",
  contacts: [],
};

const addcontact = (state = initialState, { type, payload }) => {
  switch (type) {
    case NAME:
      return { ...state, name: payload };
    case PHONE:
      return { ...state, phone: payload };
    case GENDER:
      return { ...state, gender: payload };
    case CONTACTS:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          { ...payload, id: state.contacts.length + 1 },
        ],
      };
    case RESET:
      return { ...state, name: "", phone: "" };

    default:
      return state;
  }
};
export default addcontact;
