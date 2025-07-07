// server/seed.ts

import mongoose from "mongoose";
import dotenv from "dotenv";
import Recipe from "./models/Recipes";

dotenv.config({ path: './server/.env' });

const seedRecipes = [
  {
    title: "Thai Green Curry",
    description: "A fragrant Thai green curry with chicken and vegetables.",
    image: "/RecipeManager/assets/thaicurry.jpg",
    ingredients: ["Chicken", "Green curry paste", "Coconut milk", "Bamboo shoots", "Thai basil"],
    steps: ["Slice chicken", "Fry curry paste", "Add coconut milk", "Add chicken and vegetables", "Simmer until cooked"],
    category: "Curry"
  },
  {
    title: "Classic Spaghetti Bolognese",
    description: "A rich, savory Italian meat sauce served with spaghetti.",
    image: "/RecipeManager/assets/bolognese.jpg",
    ingredients: ["Ground beef", "Onion", "Garlic", "Tomato paste", "Spaghetti"],
    steps: ["Cook onion and garlic", "Add ground beef", "Stir in tomato paste", "Simmer", "Serve over spaghetti"],
    category: "Pasta"
  },
  {
    title: "Veggie Stir Fry",
    description: "Colorful vegetables stir-fried in a savory sauce.",
    image: "/RecipeManager/assets/veg.jpg",
    ingredients: ["Broccoli", "Bell peppers", "Carrots", "Soy sauce", "Garlic"],
    steps: ["Chop vegetables", "Heat oil", "Add garlic", "Add vegetables", "Stir fry with sauce"],
    category: "Vegetarian"
  },
  {
    title: "Chocolate Chip Cookies",
    description: "Classic homemade chocolate chip cookies.",
    image: "/RecipeManager/assets/chocochip.png",
    ingredients: ["Flour", "Butter", "Brown sugar", "Eggs", "Chocolate chips"],
    steps: ["Mix dry ingredients", "Cream butter and sugar", "Combine all", "Bake at 375°F for 10-12 minutes"],
    category: "Dessert",
  },
  {
    title: "Caprese Salad",
    description: "Classic Italian salad with fresh mozzarella, tomatoes, and basil",
    image: "/RecipeManager/assets/caprese-salad.png",
    ingredients: [
      "4 large ripe tomatoes",
      "250g fresh mozzarella cheese",
      "1 bunch fresh basil",
      "3 tbsp extra virgin olive oil",
      "1 tbsp balsamic glaze",
      "Salt and pepper to taste"
    ],
    steps: [
      "Slice tomatoes and mozzarella into 1/4-inch thick slices",
      "Arrange on a platter alternating tomato, mozzarella, and basil leaves",
      "Drizzle with olive oil and balsamic glaze",
      "Season with salt and pepper",
      "Serve immediately"
    ],
    category: "Salad",
  },
  {
    title: "Pasta Aglio e Olio",
    description: "Simple garlic and oil pasta - a Roman classic",
    image: "/RecipeManager/assets/pasta.png",
    ingredients: [
      "400g spaghetti",
      "6 cloves garlic, thinly sliced",
      "1/2 cup extra virgin olive oil",
      "1 tsp red pepper flakes",
      "1/2 cup fresh parsley, chopped",
      "Salt to taste",
      "1/2 cup grated Parmesan cheese (optional)"
    ],
    steps: [
      "Cook pasta in salted boiling water until al dente",
      "Meanwhile, heat olive oil in a large pan over medium heat",
      "Add garlic and cook until golden (about 2 minutes)",
      "Add red pepper flakes and cook for 30 seconds more",
      "Drain pasta, reserving 1/2 cup pasta water",
      "Add pasta to the pan with garlic oil, toss to coat",
      "Add pasta water as needed to create a light sauce",
      "Stir in parsley and season with salt",
      "Serve with Parmesan if desired"
    ],
    category: "Pasta",
  },
  {
    title: "Classic Pancakes",
    description: "Fluffy homemade pancakes perfect for breakfast",
    image: "/RecipeManager/assets/pancake.jpg",
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "3 1/2 tsp baking powder",
      "1 tbsp sugar",
      "1/4 tsp salt",
      "1 1/4 cups milk",
      "1 egg",
      "3 tbsp melted butter",
      "1 tsp vanilla extract"
    ],
    steps: [
      "Whisk together flour, baking powder, sugar, and salt",
      "In another bowl, beat milk, egg, melted butter and vanilla",
      "Mix wet ingredients into dry ingredients until just combined",
      "Heat a lightly oiled griddle over medium-high heat",
      "Pour 1/4 cup batter for each pancake",
      "Cook until bubbles form and edges are dry (about 2-3 minutes)",
      "Flip and cook until browned on the other side",
      "Serve warm with maple syrup and butter"
    ],
    category: "Breakfast",
  }
];

async function seed() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not defined in .env");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding.");

    await Recipe.deleteMany({});
    console.log("Cleared existing recipes.");

    await Recipe.insertMany(seedRecipes);
    console.log("Seeded recipes successfully.");

    process.exit(0);
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
}

seed();
