import React, { useState } from "react";

function Card({ data }) {
  const { name, img, options } = data;
const [change, setChange] = useState(true);
const degistir=()=>{
    setChange(!change);

}
  if (change) {
    return (
      <div onClick={degistir} className="imgs">
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
    );
  } else {
    return (
      <div onClick={degistir}>
        <ul>
          {options.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Card;
