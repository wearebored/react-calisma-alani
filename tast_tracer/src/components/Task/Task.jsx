import React, { useState } from "react";
import "./task.scss";
function Task({ a, setDataa, data1 }) {
  const [width, setWidth] = useState(true);

  const taskDelete = (e) => {
    let counter = 0;
    for (let i of data1) {
      if (Number(i.id) === Number(e.target.className)) {
        data1.splice(counter, 1);
        break;
      } else {
        counter++;
      }
    }
    setDataa([...data1]);
    
  };
  const taskOk = (e) => {
    setWidth(!width);
  };
  return (
    <div className="task" onClick={taskOk}>
      <div
        className="onay"
        style={{
          // backgroundColor: "red",
          width: width ? "0px" : "10px",
        }}
      ></div>
      <div className="veri">
        <div
          style={{
            textDecoration: width ? "none" : "line-through",
            fontWeight: 700,
            fontSize: "1.2rem",
          }}
        >
          {a.task}
        </div>
        <div
          style={{
            textDecoration: width ? "none" : "line-through",
          }}
        >
          {a.time}
        </div>
      </div>
      <button className={a.id} onClick={taskDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
