import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/icon.png";

type NavbarProps = {
  onHomeClick: () => void; 
};

const Navbar = ({ onHomeClick }: NavbarProps) => {  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" onClick={onHomeClick} className="navbar-logo">
        <img src={logo} alt="Recipe Manager Logo" className="navbar-logo-img" />
        <div className="navbar-title">Cheryl's Recipes</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;