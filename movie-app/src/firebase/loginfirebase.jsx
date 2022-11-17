import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const names = (fullname) => {
  const index = fullname.indexOf(" ");
  const firstname = fullname.slice(0, index + 1);
  const lastname = fullname.slice(index + 1);
  return { firstname, lastname };
};
async function loginfirebase(
  email,
  password,
  dispatch,
  navigate,
  setLogin,
  setError
) {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const namem = names(user.displayName);
      dispatch(
        setLogin({
          email: user.email,
          firstname: namem.firstname,
          lastname: namem.lastname,
          uid: user.uid,
        })
      );
      navigate("/");

      console.log(user);
    })
    .catch((error) => {
      setError(error);
    });
}

export default loginfirebase;
