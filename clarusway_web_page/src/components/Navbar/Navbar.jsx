import { NavLink } from "react-router-dom";
import "./navbar.scss";
function Navbar() {
  return (
    <nav>
      <div>
        <h1>
          <span>Clarusway</span> Web Design
        </h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "rgb(219, 80, 166)" : "" };
              }}
              className="link"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "rgb(219, 80, 166)" : "" };
              }}
              className="link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "rgb(219, 80, 166)" : "" };
              }}
              className="link"
              to="/services"
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
