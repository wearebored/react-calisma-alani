import React from "react";

// -------yaz
import { doc, setDoc, getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
// --------oku
import { collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "./firebase";
import { useDispatch, useSelector } from "react-redux";

function FireBaseData() {
 
  const db = getFirestore(app);

  // ------------yazma----------------
  const yazma = async () => {
    await setDoc(doc(db, "cities", "data"),"data");
  };
  yazma();
  // -------------------------
  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Alan",
  //     middle: "Mathison",
  //     last: "Turing",
  //     born: 1912
  //   });

  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

  // ----------------------------
  // ---------------okuma------------
  const okuma = async () => {
    const querySnapshot = await getDocs(collection(db, "user"));

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };
  // okuma()

  return <div>FireBaseData</div>;
}

export default FireBaseData;
