import pancakesImg from '../assets/pancake.jpg';
import pasta from '../assets/pasta.png';
import salad from '../assets/caprese-salad.png';
import chocochip from '../assets/chocochip.png';

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
        image: pancakesImg,
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
        image: pasta,
        ingredients: ["Spaghetti", "Garlic", "Olive oil", "Chili flakes", "Parsley"],
        steps: [
            "Cook spaghetti until al dente.",
            "Sauté garlic and chili in olive oil.",
            "Mix spaghetti with the garlic oil, top with parsley."
        ],
        category: "Lunch"
    },
    {
        id: 3,
        title: "Caprese Salad",
        image: salad,
        description: "Healthy Salad Recipe",

        ingredients: [
            "Fresh mozzarella",
            "Tomatoes",
            "Fresh basil leaves",
            "Olive oil",
            "Balsamic glaze",
            "Salt and pepper"
        ],
        steps: [
            "Slice tomatoes and mozzarella",
            "Arrange on a plate with basil leaves",
            "Drizzle with olive oil and balsamic glaze",
            "Season with salt and pepper to taste."
        ], category: "Lunch"
    },
    {
        id: 4,
        title: "Chocolate Chip Pancakes",
        description: "Yummy Chocolate Chip Pancakes",
        image: chocochip,
        ingredients: [
            "1 cup flour",
            "2 tbsp sugar",
            "1 tsp baking powder",
            "1/2 tsp baking soda",
            "1 cup buttermilk",
            "1 egg",
            "1/2 cup chocolate chips",
            "Butter for cooking"
        ],
        steps: [
            "Mix dry ingredients",
            " Whisk in buttermilk and egg until just combined",
            " Fold in chocolate chips. Cook on a greased skillet until bubbles form",
            " flip and cook until golden."
        ],
        category: "Lunch"
    }
];
export default recipes;