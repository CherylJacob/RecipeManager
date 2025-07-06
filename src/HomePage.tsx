import { Link } from "react-router-dom";
import recipes from "./data/recipe";
import './styles.css';

const HomePage = () => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recipe-card">
          <img src={recipe.image} alt={recipe.title}/>
          <h2>{recipe.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;