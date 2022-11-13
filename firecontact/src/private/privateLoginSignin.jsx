import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRedux, signinRedux } from "../redux/action/reducerAction";

const auth = getAuth();

export const signin = async (
  email,
  password,
  setVeri,
  setError,
  navigate,
  dispatch
) => {
  try {
    const signdata = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (signdata.operationType === "signIn") {
      setVeri(signdata);
     
      dispatch(signinRedux(signdata));
      navigate("/");
    } else {
      return new Error(signdata);
    }
  } catch (error) {
    setError(error);
  }
};

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

export const login = async (email, password,dispatch,navigate,setError) => {
  try{
    const logindata = await signInWithEmailAndPassword(auth, email, password);
    if(logindata.operationType==="signIn"){
        dispatch(loginRedux(logindata))
        navigate("/")
    }
    console.log(logindata);
}catch(error){
    console.log(error);
}
};

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
export const logout = async () => {
  const logoutdata = await signOut(auth);
};

// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
