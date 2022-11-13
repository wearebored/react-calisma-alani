import { LOGIN, LOGOUT, SIGNIN } from "../types/reducersType";

const initialState = {
    login:""

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNIN:
      return { ...state, login:payload };
    case LOGIN:
      return { ...state, login:payload };
    case LOGOUT:
        return{...state,login:""}
    default:
      return state;
  }
};
