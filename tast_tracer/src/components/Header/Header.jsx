import { useState } from "react";
import data from "../../helper/data";
function Header({ data1, setData }) {
  const [button, setButton] = useState(true);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const clickButton = () => {
    setButton(!button);
  };
  //   ---------------
  const clickSubmit = (e) => {
    e.preventDefault();
    if (value1 && value2) {
      //   data.push({
      //     id: new Date().valueOf(),
      //     task: value1,
      //     time: value2,
      //   });

      data.push({
        id: new Date().valueOf(),
        task: value1,
        time: value2,
      });
      setData(data);
    }
    setValue1("");
    setValue2("");
    console.log(data);
  };
  //   ---------------
  const value1Change = (e) => {
    setValue1(e.target.value);
  };
  //   ---------------
  const value2Change = (e) => {
    setValue2(e.target.value);
  };
  //   ---------------
  if (button) {
    return (
      <div>
        <button onClick={clickButton}>Show Add Task Bar</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={clickButton}>Close Add Task Bar</button>
        <form action="addtask">
          <label htmlFor="task">Task</label>
          <br />
          <input
            type="text"
            name="task"
            id="task"
            onChange={value1Change}
            value={value1}
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
