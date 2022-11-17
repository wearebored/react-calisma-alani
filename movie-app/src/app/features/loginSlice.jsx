import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstname: "",
  lastname: "",
  uid: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    },
    setLoginGoogle: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    },
    setRegister: (state, action) => {
      console.log(action.payload);

      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;

      console.log(state);
      console.log(initialState);
    },
    setLogout: (state, action) => {
      state.uid = "";
      state.email = "";
      state.firstname = "";
      state.lastname = "";
    },
  },
});

export const { setLogin, setRegister, setLoginGoogle,setLogout } = loginSlice.actions;

export default loginSlice.reducer;
