import React from "react";

function Card({ data }) {
  const { name, img, options } = data;

  if (false) {
    return (
      <div className="imgs">
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          {options.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Card;
