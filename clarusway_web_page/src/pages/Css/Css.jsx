import "./css.scss";
import { useLocation, useNavigate } from "react-router-dom";

function Css() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const backClick = () => {
    navigate("/");
  };
  return (
    <main className="csspage">
      <img src={state.img} alt={state.img} />
      <h3>{state.title}</h3>
      <p>{state.information1}</p>
      <p>{state.information2}</p>
      <div className="cssbutton">
        <button onClick={backClick}>Go Back</button>
      </div>
    </main>
  );
}

export default Css;
