import { CardContainer } from "./Card-styled";

function Card({ e }) {
 
  return (
    <CardContainer>
        <h3>{e.recipe.label}</h3>
        <img src={e.recipe.image} alt="" />
        <button>View More</button>
    </CardContainer>
  )
}

export default Card;
