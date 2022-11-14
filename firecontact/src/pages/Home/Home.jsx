import { useEffect, useState } from "react";
import AddContact from "../../components/AddContact/AddContact";
import Contacts from "../../components/Contacts/Contacts";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../firebase";
import { Container } from "./home-styled";
import { dataPull } from "../../redux/action/reducerAction";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const [bekle,setBekle]=useState(true)
  const { payload } = useSelector((store) => store.loginsignin);
  
  useEffect(() => {
    
    const okuma = async (id) => {
      const db = getFirestore(app);
      const docRef = doc(db, "data", id);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if(data){
        dispatch(dataPull(data));
        // setBekle(false);
      }
      // dispatch(dataPull(data));
      setBekle(false);
      
    };
    okuma(payload.user.uid);
    
    }, []);

  return (
    <div>
      <Container>
        <AddContact />
        <Contacts bekle={bekle} />
      </Container>
    </div>
  );
}

export default Home;
