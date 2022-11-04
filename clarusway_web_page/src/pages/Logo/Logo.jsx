import "./logo.scss";
import { useLocation, useNavigate } from "react-router-dom";
function Logo() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const backClick = () => {
    navigate("/");
  };
  return (
    <main className="logopage">
      <img src={state.img} alt={state.img} />
      <h3>{state.title}</h3>
      <p>{state.information1}</p>
      <p>{state.information2}</p>
      <div className="logobutton">
        <button onClick={backClick}>Go Back</button>
      </div>
    </main>
  );
}

export default Logo;
