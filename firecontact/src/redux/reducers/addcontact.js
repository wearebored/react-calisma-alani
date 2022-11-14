import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../../firebase";
import {
  CONTACTEDİT,
  CONTACTS,
  DATAPULL,
  DATAPUSH,
  DATARESET,
  GENDER,
  IDDELETE,
  NAME,
  PHONE,
  RESET,
} from "../types/reducersType";

const initialState = {
  name: "",
  phone: "",
  gender: "",
  contacts: [],
  elemansayi: 0,
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
          {
            ...payload,
            id: state.elemansayi + 1,
          },
        ],
        elemansayi: state.elemansayi + 1,
      };
    case RESET:
      return { ...state, name: "", phone: "" };

    case IDDELETE:
      let counter = 0;

      for (let i of state.contacts) {
        if (i.id == payload) {
          
          break;
        } else {
          counter += 1;
        }
      }

      state.contacts.splice(counter, 1);
      return { ...state };
    case CONTACTEDİT:
      let counter2 = 0;
      for (let i of state.contacts) {
        if (i.id == payload.id) {
          
          break;
        } else {
          counter2 += 1;
        }
      }
      const data2 = state.contacts.splice(counter2, 1);
      data2[0].name = payload.contactname;
      data2[0].phone = payload.contactphone;
      data2[0].gender = payload.contactgender;
      const data1 = state.contacts.splice(0, counter2);

      return {
        ...state,
        contacts: [...data1, ...data2, ...state.contacts],
      };
    case DATAPULL:
      return {
        ...payload,
      };

    case DATAPUSH: 
    const datas = { ...state, gender: "" };
    const db = getFirestore(app);
    const yazma = async (data, uid) => {
      await setDoc(doc(db, "data", uid), data);
    };
    
    yazma(datas, payload.uid);
    
    
    return{
      ...state
    }
    case DATARESET:
      return {
        ...payload,
        name: "",
        phone: "",
        gender: "",
        contacts: [],
        elemansayi: 0,
      };

    default:
      return state;
  }
};
export default addcontact;

//  const db = getFirestore(app);
// const yazma = async (data) => {
//   await setDoc(doc(db, "cities", "data"), data);
// };
