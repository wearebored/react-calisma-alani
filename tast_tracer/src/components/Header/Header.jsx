import { useRef, useState } from "react";
import "./header.scss";
function Header({ setDataa, data1 }) {
  const [button, setButton] = useState(true);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const searchInput = useRef(null);

  const clickButton = () => {
    setButton(!button);
  };
  //   ---------------
  const clickSubmit = (e) => {
    e.preventDefault();
    if (value1 && value2) {
      setDataa([
        ...data1,
        {
          id: new Date().valueOf(),
          task: value1,
          time: value2,
        },
      ]);
      console.log(data1);
    }
    setValue1("");
    setValue2("");
    searchInput.current.focus();
  };
  //   ---------------
  const value1Change = (e) => {
    setValue1(
      e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase()
    );
  };
  //   ---------------
  const value2Change = (e) => {
    setValue2(
      e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase()
    );
  };
  //   ---------------
  if (button) {
    return (
      <div className="header">
        <button className="showbar" onClick={clickButton}>
          Show Add Task Bar
        </button>
      </div>
    );
  } else {
    return (
      <div className="header">
        <button className="closebar" onClick={clickButton}>
          Close Add Task Bar
        </button>
        <form action="addtask">
          <label htmlFor="task">Task</label>
          <br />
          <input
            ref={searchInput}
            autoFocus
            type="text"
            name="task"
            id="task"
            onChange={value1Change}
            value={value1}
            placeholder="Add Task"
          />
          <br />
          <label htmlFor="time">Day & Time</label>
          <br />
          <input
            type="text"
            name="time"
            id="time"
            onChange={value2Change}
            value={value2}
            placeholder="Add Day & Time"
          />
          <br />
          <button onClick={clickSubmit} type="submit">
            Save Task
          </button>
        </form>
      </div>
    );
  }
}

export default Header;
