import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const names = (fullname) => {
  const index = fullname.indexOf(" ");
  const firstname = fullname.slice(0, index + 1);
  const lastname = fullname.slice(index + 1);
  return { firstname, lastname };
};

function logingoogle(dispatch, navigate, setLoginGoogle, setError) {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const google = async () => {
    const data = await signInWithPopup(auth, provider)
      .then((result) => {
       
        const user = result.user;

        const namem = names(user.displayName);

        dispatch(
          setLoginGoogle({
            email: user.email,
            firstname: namem.firstname,
            lastname: namem.lastname,
            uid: user.uid,
          })
        );
        navigate("/");
      })
      .catch((error) => {
       
        setError(error);
        console.log(error);
      });
  };
  google();
}

export default logingoogle;
