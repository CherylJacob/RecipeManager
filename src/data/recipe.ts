interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
  category: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Classic Pancakes",
    description: "Fluffy, easy pancakes for your breakfast.",
    image: "",
    ingredients: ["Flour", "Eggs", "Milk", "Baking powder", "Sugar"],
    steps: [
      "Mix all dry ingredients.",
      "Add milk and eggs, whisk well.",
      "Cook on a hot pan until golden on both sides."
    ],
    category: "Breakfast"
  },
  {
    id: 2,
    title: "Spaghetti Aglio e Olio",
    description: "Simple Italian pasta with garlic and chili.",
    image: "",
    ingredients: ["Spaghetti", "Garlic", "Olive oil", "Chili flakes", "Parsley"],
    steps: [
      "Cook spaghetti until al dente.",
      "Sauté garlic and chili in olive oil.",
      "Mix spaghetti with the garlic oil, top with parsley."
    ],
    category: "Lunch"
  }
];

export default recipes;