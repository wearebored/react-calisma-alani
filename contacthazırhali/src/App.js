import "./App.css";
import Home from "./pages/Home/Home";
import { store } from "./redux";

import { Provider } from "react-redux";
function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
