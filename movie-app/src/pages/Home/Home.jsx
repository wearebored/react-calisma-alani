import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPage } from "../../app/features/pagesSlice";
import Card from "../../components/Card/Card";
import { MovieData, MovieSearch } from "../../data/movie-data";

import { CardsContainer, HomeSearch } from "./home-styled";

function Home() {
  const data = useSelector((store) => store.login);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage("home"));
    MovieData(setMovie, setError);
    
  }, [dispatch]);

  return (
    <div>
      <HomeSearch>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Search a movie..."
        />
        <button
          onClick={() => {
            MovieSearch(search, setMovie, setError);
          }}
        >
          Search
        </button>
      </HomeSearch>
      <CardsContainer>
        
        {movie.data?.results.map((result) => 
          <Card key={result.id} result={result} />
        )}
      </CardsContainer>
    </div>
  );
}

export default Home;
