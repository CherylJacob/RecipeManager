import { Link } from "react-router-dom";
import recipes from "./data/recipe";

const HomePage = () => {
  return (
    <div className="container">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          className="container"
        >
          {/* <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t" /> */}
          <h2 className="container">🍳{recipe.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;