import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import {Link , useLocation} from "react-router-dom";

const RecipePage: React.FC = () => {
  const location = useLocation();
  const recipe = location.state?.recipe; 
  console.log({recipe});

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
      <p>{recipe.description}</p>
      <h3 className="container">Ingredients:</h3>
      <ul className="container">
        {recipe.ingredients.map((ing: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
          <li>{ing}</li>
        ))}
      </ul>
      <h3 className="container">Steps:</h3>
      <ol className="container">
        {recipe.steps.map((step: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
          <li>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipePage;



