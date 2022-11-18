import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, DetailCard, ImageContainer, NameDiv, RateCard } from "./card-styled"

function Card({result}) {
  const [hover,setHover]=useState(false)
  

  const navigate= useNavigate()
console.log(result)
  return (
    <div>
      <CardContainer
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        onClick={()=>navigate(`/details/${result.id}`)}
      >
        <ImageContainer>
          <img
            src={`https://image.tmdb.org/t/p/w1280${result.poster_path}`}
            alt=""
          />
        </ImageContainer>
        <DetailCard hover={hover}>
          <h4>Overview</h4>
          <p>{result.overview}</p>
        </DetailCard>
        <NameDiv>
          <p>{result.title}</p>
        </NameDiv>
        <RateCard>
          <p>{result.vote_average}</p>
        </RateCard>
      </CardContainer>
    </div>
  );
}

export default Card