import { useParams, Link } from "react-router-dom";
import recipes from "./data/recipe";

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="p-4">
        <h2>Recipe not found</h2>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" className="tcontainer">← Back to Home</Link>
      <h1 className="container">{recipe.title}</h1>
      {/* <img src={recipe.image} alt={recipe.title} className="rounded mb-4" /> */}
      <p>{recipe.description}</p>
      <h3 className="container">Ingredients:</h3>
      <ul className="container">
        {recipe.ingredients.map((ing) => (
          <li>{ing}</li>
        ))}
      </ul>
      <h3 className="container">Steps:</h3>
      <ol className="container">
        {recipe.steps.map((step) => (
          <li>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipePage;