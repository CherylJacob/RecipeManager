import { Link } from "react-router-dom";
import recipes from "./data/recipe";
import './styles.css';

const HomePage = () => {
  return (
    <div className="container">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          className="nav">
          {}
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <h2 style={{ color: 'Black', fontSize: '24px', marginBottom: '10px' }}>🍳{recipe.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;