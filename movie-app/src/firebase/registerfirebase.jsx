import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

 
export const registerfirebase = async (email, password) => {
 const auth = getAuth();
  try {
      
    const data = await createUserWithEmailAndPassword(auth, email, password);
   return data
  } catch (error) {
    return error
  }
};
