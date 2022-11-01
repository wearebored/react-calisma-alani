import { useState } from "react";
import AddTask from "./components/Addtask/AddTask";
import Header from "./components/Header/Header";
import "./app.scss";
function App() {
  const [data1, setDataa] = useState(0);
  return (
    <div className="App">
      <div className="container">
        <h1>Task Tracer</h1>
        <Header setDataa={setDataa} data1={data1} />
        <AddTask setDataa={setDataa} data1={data1} />
      </div>
    </div>
  );
}

export default App;
