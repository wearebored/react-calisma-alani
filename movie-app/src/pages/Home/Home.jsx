import Card from "../../components/Card/Card"
import {  CardsContainer, HomeSearch } from "./home-styled"

function Home() {
  return (
    <div>
      <HomeSearch>
        <input type="text" placeholder="Search a movie..." />
        <button>Search</button>
      </HomeSearch>
      <CardsContainer>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </CardsContainer>
    </div>

  )
}

export default Home