import { LOGIN, LOGOUT, SIGNIN } from "../types/reducersType";

const initialState = {
    logindata:false
    
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNIN:
      return { ...state, logindata:true,payload };
    case LOGIN:
      return { ...state, logindata:true,payload };
    case LOGOUT:
        return{...state,logindata:false}
    default:
      return state;
  }
};
