import Login from "./pages/Login/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Singin from "./pages/Singin/Singin";
import LoginProvider from "./context/LoginContext";
import PrivateRouter from "./context/PrivateRouter";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/singin" element={<Singin />} />
            <Route path="/" element={<PrivateRouter />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>

            {/* <Route path="/" element={<Home/>}/> */}
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </div>
  );
}

export default App;
