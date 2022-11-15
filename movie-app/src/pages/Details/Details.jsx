import { DetailsContainer,  DetailsP, Overview, Rate, VideoDiv } from "./details-styled"

function Details() {
  return (
    <div>
      <DetailsContainer>
        <h2>Minions: The Rise of Gru</h2>

        <VideoDiv>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9LukR30xKSQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoDiv>
        <main>
          <img
            src="https://cdn03.ciceksepeti.com/cicek/kcm199703-1/L/minions-the-rise-of-gru-2021-70-cm-x-100-cm-afis-poster-colemanat-kcm199703-1-7f4de8446abb4270bbf37758d2e97d04.jpg"
            alt=""
          />
          <DetailsP>
            <Overview>
              <h4>Overview</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aperiam maxime consequuntur quam assumenda eligendi qui sequi officia enim voluptatibus!</p>
            </Overview>
            <Rate>
              <p>date</p>
              <p>rate</p>
              <p>total vote</p>
              <p>Go back</p>
            </Rate>
          </DetailsP>
        </main>
      </DetailsContainer>
    </div>
  );
}

export default Details