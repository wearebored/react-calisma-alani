import "./html.scss";
import { useLocation, useNavigate } from "react-router-dom";
function Html() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const backClick = () => {
    navigate("/");
  };
  return (
    <main className="htmlpage">
      <img src={state.img} alt={state.img} />
      <h3>{state.title}</h3>
      <p>{state.information1}</p>
      <p>{state.information2}</p>
      <div className="htmlbutton">
        <button onClick={backClick}>Go Back</button>
      </div>
    </main>
  );
}

export default Html;
