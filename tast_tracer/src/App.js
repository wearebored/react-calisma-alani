import { useState } from "react";
import AddTask from "./components/Addtask/AddTask";
import Header from "./components/Header/Header";
import data from "./helper/data";
function App() {

  const [data1, setData] = useState(data);

  return (
    <div className="App">
      <div className="container">
        <h1>Task Tracer</h1>
        <Header setData={setData}  />
        <AddTask data1={data1} />
      </div>
    </div>
  );
}

export default App;
