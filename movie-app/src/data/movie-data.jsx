import axios from "axios";

const key = process.env.REACT_APP_MOVIEKEY;

export const MovieData = async (setMovie, setError) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}`;
  try {
    const data = await axios.get(url);

    if (data.status == "200") {
      setMovie(data);
    } else {
      setError("Error");
    }
  } catch (error) {
    setError(error);
  }
};

export const MovieSearch = async (search, setMovie, setError) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}`;
  try {
    const data = await axios.get(url);
    if (data.status == "200") {
      setMovie(data);
    } else {
      setError("Error");
    }
  } catch (error) {
    setError(error);
  }
};

export const MovieDetail = async (id, setDetail) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
  try {
    const data = await axios.get(url);
    if (data.status == "200") {
      // setMovie(data);
      setDetail(data);
      
    } else {
      // setError("Error");
    }
  } catch (error) {
    //   setError(error);
    
  }
};

export const MovieVideo = async (id, setData) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`;
  try {
    const data = await axios.get(url);
    if (data.status == "200") {
      // setMovie(data);
      setData(data);
      // console.log(data)
    } else {
      // setError("Error");
    }
  } catch (error) {
    //   setError(error);
    
  }
};
