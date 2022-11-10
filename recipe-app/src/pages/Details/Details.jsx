import { useLocation } from "react-router-dom";
import {
  Container,
  Contents,
  Feature,
  Material,
  Title,
} from "./Details-styles";

function Details() {
  const { state } = useLocation();

  const recipe = state.recipe;
  console.log(recipe);
  return (
    <Container>
      <Title>
        <h3>{recipe.label}</h3>
        <img src="./image/diet.svg" alt="" />
      </Title>
      <Contents>
        <Feature>
          <p style={{ margin: "1rem 0" }}>NUTRİENTS</p>
          <p>
            {recipe.totalNutrients.CA.label} :{" "}
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipe.totalWeight}</p>
          <p>Calories: {Math.round(recipe.calories)}</p>
        </Feature>
        <div className="cerceve">
          <img src={recipe.image} alt="" />
        </div>
        <Material>
          <ol>
            {recipe.ingredients.map((e) => (
              <li>{e.text}</li>
            ))}
          </ol>
        </Material>
      </Contents>
    </Container>
  );
}

export default Details;
