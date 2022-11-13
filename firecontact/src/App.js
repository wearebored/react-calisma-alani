import "./App.css";
import Home from "./pages/Home/Home";
import { store } from "./redux";

import { Provider } from "react-redux";
import FireBaseData from "./FireBaseData";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
      {/* <Provider store={store}>
        <FireBaseData />
      </Provider> */}
    </div>
  );
}

export default App;
