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
    prepTime: 15,
    cookTime: 12
  },
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
