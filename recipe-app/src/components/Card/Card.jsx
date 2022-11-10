import { Link, useNavigate } from "react-router-dom";
import { CardContainer } from "./Card-styled";

function Card({ e }) {
 const navigate= useNavigate()
  return (
    <CardContainer>
      <h3>{e.recipe.label}</h3>
      <img src={e.recipe.image} alt="" />
     
      
        <button onClick={()=>{navigate("/details",{state:e});}}>View More</button>
      
    </CardContainer>
  );
}

export default Card;
