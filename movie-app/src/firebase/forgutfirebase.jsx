import { getAuth, sendPasswordResetEmail } from "firebase/auth";

async function forgutfirebase(email, setSonuc) {
  const auth = getAuth();

  await sendPasswordResetEmail(auth, email)
    .then(() => {
      setSonuc("Password reset email sent!");
    })
    .catch((error) => {
      setSonuc(error.code);
    });
}

export default forgutfirebase;
