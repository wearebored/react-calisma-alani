import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { Yeni } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root.render( <Yeni/>);
root2.render(<App />);


