import { useNavigate } from "react-router-dom";
import "./card.scss";
// const { e } = useParams();
function Card({ e }) {
  const navigate = useNavigate();
  const cardClick = () => {
    navigate(e.name, { state: e });
    
  };
  return (
    <div onClick={cardClick} className="card">
      <img onClick={cardClick} src={e.img} alt="" />
      <h4>{e.title}</h4>
      <p>{e.text}</p>
    </div>
  );
}

export default Card;
