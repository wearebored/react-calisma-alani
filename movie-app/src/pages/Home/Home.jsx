
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPage } from "../../app/features/pagesSlice";
import Card from "../../components/Card/Card";

import { CardsContainer, HomeSearch } from "./home-styled";



function Home() {
 const data= useSelector((store)=>store.login)
const dispatch = useDispatch();
useEffect(() => {
  dispatch(setPage("home"));
}, [dispatch]);



  return (
    <div>
      <HomeSearch>
        <input type="text" placeholder="Search a movie..." />
        <button onClick={()=>{
          console.log(data);

        }} >Search</button>
      </HomeSearch>
      <Link to="/login" >regidter</Link>
      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
    </div>
  );
}

export default Home;
