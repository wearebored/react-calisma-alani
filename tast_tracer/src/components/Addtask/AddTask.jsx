import { data } from "../../helper/data";
import Task from "../Task/Task";
import "./addtask.scss";

function AddTask({ setDataa, data1 }) {
  if (data.length === 0) {
    return <div className="noveri">No Tasks to Show</div>;
  } else {
    return (
      <div className="tasks">
        {data.map((a) => (
          <Task key={a.id} a={a} setDataa={setDataa} data1={data1} />
        ))}
      </div>
    );
  }
}

export default AddTask;
