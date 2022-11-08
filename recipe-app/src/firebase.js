import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STROGE,
  messagingSenderId: process.env.REACT_APP_SENDID,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export const register = async (email, password) => {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.code);
    return error.code;
  }
};
export const login = async (email, password) => {
  try {
    const login = await signInWithEmailAndPassword(auth, email, password);
    console.log(login);
    return login;
  } catch (error) {
    console.log(error.code);
    return error.code;
  }
};
