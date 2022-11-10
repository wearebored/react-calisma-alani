import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import axios from "axios";
import {
  Cards,
  Container,
  H2,
  Input,
  Search,
  SearchContainer,
  SearchDiv,
  Select,
} from "./Home-styled";
import Card from "../../components/Card/Card";
function Home() {
  const appid = process.env.REACT_APP_EDAMAMID;
  const appkey = process.env.REACT_APP_EDAMAMKEY;
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("");
  const [datas, setDatas] = useState("bos");
  const [buttonn, setButtonn] = useState(false);

  const { maxwidth, setMaxwidth } = useContext(LoginContext);
  // const { user, setUser } = useContext(LoginContext);

  const data = async () => {
    console.log(query);
    console.log(meal);
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appid}&app_key=${appkey}&mealType=${meal}`;
    try {
      const veri = await axios.get(url);

      setButtonn(false);

      if (veri.data.more) {
        setDatas(veri);
      } else {
        throw new Error("Incorrect Entry");
      }
    } catch (error) {
      setDatas(error);
      setButtonn(false);
    }
  };

  const searchClick = async () => {
    if (meal && query) {
      setButtonn(true);
      console.log(datas);
      data();
      console.log(datas);
    } else {
      setDatas("hata");
    }
  };
  return (
    <Container
      onClick={() => {
        setMaxwidth(true);
      }}
    >
      <SearchContainer>
        <H2>Food App</H2>
        <SearchDiv>
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
          />
          <Search disabled={buttonn} onClick={searchClick}>
            Search
          </Search>
          <Select
            onChange={(e) => {
              setMeal(e.target.value);
            }}
            defaultValue="types"
          >
            <option value="types" disabled>
              Meal Types
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </Select>
        </SearchDiv>
      </SearchContainer>

      {datas == "bos" ? (
        <div></div>
      ) : datas == "hata" ? (
        <div>Enter The Required Information</div>
      ) : datas.name == "Error" ? (
        <div>{datas.message}</div>
      ) : datas.request.status == 0 ? (
        <div>{datas.message}</div>
      ) : (
        <Cards>
          {datas.data.hits.map((e, index) => (
            <Card key={index} e={e} />
          ))}
        </Cards>
      )}
    </Container>
  );
}

export default Home;
