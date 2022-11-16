import { createSlice } from "@reduxjs/toolkit";
import { registerfirebase } from "../../firebase/registerfirebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const initialState = {
  logindata: "",
  firebase: "",
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.logindata = action.payload;
    },
    setRegister: (state, action) => {
      state.logindata = action.payload;

      const data = registerfirebase(
        action.payload.email,
        action.payload.password1
      );

      console.log(data);
    },
  },
});

export const { setLogin, setRegister } = loginSlice.actions;

export default loginSlice.reducer;
