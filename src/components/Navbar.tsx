import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">Recipe Manager</Link>
      </h1>
      <Link to="/" className="hover:underline">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;