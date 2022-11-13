import "./App.css";
import Home from "./pages/Home/Home";
import { store } from "./redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import  PrivateRouter  from "./private/PrivateRouter";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/" element={<PrivateRouter />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
