import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img src={logo} alt="Recipe Manager Logo" className="navbar-logo-img" />
        <div className="navbar-title">Recipe Manager</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;