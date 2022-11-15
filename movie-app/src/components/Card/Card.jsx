import { CardContainer, ImageContainer, NameDiv } from "./card-styled"

function Card() {
  return (
    <div>
      <CardContainer>
        <ImageContainer>
          <p>RESİMER</p>
        </ImageContainer>
        <NameDiv>
          <p>başlıkalar</p>
        </NameDiv>
      </CardContainer>

    </div>
  )
}

export default Card