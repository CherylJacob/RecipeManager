import React from "react";

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="border rounded shadow p-4 bg-white">
      {/* <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded w-full h-48 object-cover mb-2"
      /> */}
      <h2 className="text-xl font-semibold">🍳{recipe.title}</h2>
      <p className="text-gray-600">{recipe.description}</p>
      <h3 className="text-xl font-semibold">Ingredients :</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold">Steps :</h3>
      <ul>
        {recipe.steps.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;