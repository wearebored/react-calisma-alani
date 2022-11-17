import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase";
export const registerfirebase = async (
  email,
  password,
  setError,
  navigate,
  dispatch,
  setRegister,
  datas
) => {
  const auth = getAuth();
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    const { uid } = data.user;
    updateProfile(auth.currentUser, {
      displayName: `${datas.firstname} ${datas.lastname}`,
    });
    dispatch(setRegister({ ...datas, uid }));
    navigate("/");
  } catch (error) {
    setError(error);
  }
  
};
