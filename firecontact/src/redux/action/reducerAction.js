import {
  CONTACTEDİT,
  CONTACTS,
  DATAPULL,
  DATAPUSH,
  GENDER,
  IDDELETE,
  LOGIN,
  LOGOUT,
  NAME,
  PHONE,
  RESET,
  SIGNIN,
} from "../types/reducersType";

export const nameChange = (payload) => {
  return { type: NAME, payload };
};
export const phoneChange = (payload) => {
  return { type: PHONE, payload };
};
export const genderChange = (payload) => {
  return { type: GENDER, payload };
};
export const contactsChange = (payload) => {
  return { type: CONTACTS, payload };
};
export const dataReset = () => {
  return { type: RESET };
};
export const idDelete = (payload) => {
  return { type: IDDELETE, payload };
};
export const contactEdit = (payload) => {
  return { type: CONTACTEDİT, payload };
};
export const dataPull = (payload) => {
  return { type: DATAPULL, payload };
};
export const dataPush = () => {
  return { type: DATAPUSH };
};
export const signinRedux = (payload) => {
  return { type: SIGNIN, payload };
};
export const loginRedux = (payload) => {
  return { type: LOGIN, payload };
};
export const logoutRedux = () => {
  return { type: LOGOUT };
};
