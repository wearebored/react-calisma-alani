import React, { useState } from "react";

function Card({ data }) {
  const { name, img, options } = data;
const [remove,setRemove]=useState(true)
const degistir=()=>{
    setRemove(!remove)

}
  if (remove) {
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
