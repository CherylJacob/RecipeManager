import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { Link, useLocation } from "react-router-dom";
import "./RecipePage.css";

const RecipePage: React.FC = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;
  console.log({ recipe });

  if (!recipe) {
    return (
      <div className="p-4">
        <h2>Recipe not found</h2>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div >
      <Link to="/" className="tcontainer">
        <i className='bx bx-chevron-left'></i>
        Back to Home
      </Link>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} style={{ width: '30%', height: '30%', objectFit: 'cover' }} />
      </div>

      <h1 className="section-title">{recipe.title}</h1>
      <p className="container">{recipe.description}</p>
      <h3 className="section-title">Ingredients :</h3>
      <ul className="ingredients-list">
        {recipe.ingredients.map((ing: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
          <li key={index} className="ingredient-item">
            <label>
              <input type="checkbox" className="ingredient-checkbox" />
              <span className="checkmark"></span>
              <span className="ingredient-text">{ing}</span>
            </label>
          </li>
        ))}
      </ul>
      <div>
        <h3 className="section-title">Steps :</h3>
        <ol className="steps-list">
          {recipe.steps.map((step: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: number) => (
            <li key={index} className="step-item">
              <div className="step-text">{step}</div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipePage;



