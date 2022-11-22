import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  DetailsContainer,
  DetailsP,
  Overview,
  Rate,
  VideoDiv,
} from "./details-styled";
import { MovieDetail, MovieVideo } from "../../data/movie-data";
import { useSelector } from "react-redux";
function Details() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [detail, setDetail] = useState("");
  const navigate = useNavigate();
  const { uid } = useSelector((store) => store.login);

  useEffect(() => {
    MovieVideo(id, setData);
    MovieDetail(id, setDetail);
  }, [id]);
  if (!uid) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <DetailsContainer>
          <h2>Minions: The Rise of Gru</h2>

          <VideoDiv>
            {data && (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${data.data?.results[0]?.key}?autoplay=1&mute=1`}
                title="YouTube video"
                allowFullScreen
              ></iframe>
            )}
          </VideoDiv>
          <main>
            <img
              src={`https://image.tmdb.org/t/p/w1280${detail.data?.poster_path}`}
              alt=""
            />
            <DetailsP>
              <Overview>
                <h4>Overview</h4>
                <p>{detail.data?.overview}</p>
              </Overview>
              <Rate>
                <p>Release Date:{detail.data?.release_date}</p>
                <p>Rate:{detail.data?.vote_average}</p>
                <p>Total Vote:{detail.data?.vote_count}</p>
                <p>
                  <Link to="" onClick={() => navigate(-1)}>
                    <span>Go Back</span>
                  </Link>
                </p>
              </Rate>
            </DetailsP>
          </main>
        </DetailsContainer>
      </div>
    );
  }
}

export default Details;
