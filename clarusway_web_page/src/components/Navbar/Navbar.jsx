import { Link, NavLink } from "react-router-dom";
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
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/services">
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
