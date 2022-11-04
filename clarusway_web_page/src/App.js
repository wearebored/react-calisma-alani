import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Logo from "./pages/Logo/Logo";
import Html from "./pages/Html/Html";
import Css from "./pages/Css/Css";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/css" element={<Css />} />
          <Route path="/html" element={<Html />} />
          <Route path="/logo" element={<Logo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
