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
    category: "Curry",
    favourite: false
  },
  {
    title: "Classic Spaghetti Bolognese",
    description: "A rich, savory Italian meat sauce served with spaghetti.",
    image: "/RecipeManager/assets/bolognese.jpg",
    ingredients: ["Ground beef", "Onion", "Garlic", "Tomato paste", "Spaghetti"],
    steps: ["Cook onion and garlic", "Add ground beef", "Stir in tomato paste", "Simmer", "Serve over spaghetti"],
    category: "Pasta",
    favourite: false
  },
  {
    title: "Veggie Stir Fry",
    description: "Colorful vegetables stir-fried in a savory sauce.",
    image: "/RecipeManager/assets/veg.jpg",
    ingredients: ["Broccoli", "Bell peppers", "Carrots", "Soy sauce", "Garlic"],
    steps: ["Chop vegetables", "Heat oil", "Add garlic", "Add vegetables", "Stir fry with sauce"],
    category: "Vegetarian",
    favourite: false
  },
  {
    title: "Chocolate Chip Cookies",
    description: "Classic homemade chocolate chip cookies.",
    image: "/RecipeManager/assets/chocochip.png",
    ingredients: ["Flour", "Butter", "Brown sugar", "Eggs", "Chocolate chips"],
    steps: ["Mix dry ingredients", "Cream butter and sugar", "Combine all", "Bake at 375°F for 10-12 minutes"],
    category: "Dessert",
    favourite: false
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
    favourite: false
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
    favourite: false
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
    favourite: false
  },
  {
    title: "Avocado Toast with Poached Egg",
    description: "Creamy avocado on crunchy toast topped with perfect poached eggs",
    image: "/RecipeManager/assets/avacado.jpg",
    ingredients: [
      "2 slices artisan bread",
      "1 ripe avocado",
      "2 fresh eggs",
      "1 tbsp lemon juice",
      "Red pepper flakes",
      "Salt and pepper to taste"
    ],
    steps: [
      "Toast bread until golden and crisp",
      "Mash avocado with lemon juice, salt, and pepper",
      "Poach eggs in simmering water for 3-4 minutes",
      "Spread avocado on toast, top with eggs",
      "Sprinkle with red pepper flakes"
    ],
    category: "Breakfast"
    , favourite: false

  },
  {
    title: "Creamy Garlic Mushroom Pasta",
    description: "Decadent pasta with wild mushrooms in garlic cream sauce",
    image: "/RecipeManager/assets/garlicpasta.jpg",
    ingredients: [
      "400g fettuccine",
      "300g mixed mushrooms",
      "3 garlic cloves (minced)",
      "1 cup heavy cream",
      "½ cup grated parmesan",
      "2 tbsp butter",
      "Fresh parsley (chopped)"
    ],
    steps: [
      "Cook pasta al dente, reserve 1 cup pasta water",
      "Sauté mushrooms in butter until golden",
      "Add garlic, cook 1 minute until fragrant",
      "Pour in cream and parmesan, simmer until thickened",
      "Toss with pasta, adding pasta water as needed",
      "Garnish with parsley"
    ],
    category: "Pasta", favourite: false

  },
  {
    title: "Chocolate Lava Cakes",
    description: "Individual molten chocolate cakes with gooey centers",
    image: "/RecipeManager/assets/chocolava.jpg",
    ingredients: [
      "170g dark chocolate",
      "115g butter",
      "2 eggs + 2 yolks",
      "½ cup sugar",
      "¼ cup flour",
      "1 tsp vanilla extract",
      "Pinch of salt"
    ],
    steps: [
      "Preheat oven to 220°C (425°F)",
      "Melt chocolate and butter together",
      "Whisk eggs, yolks, sugar until pale",
      "Fold in chocolate mixture, then flour",
      "Butter and sugar 4 ramekins",
      "Divide batter, bake 12-14 minutes",
      "Invert onto plates, dust with cocoa"
    ],
    category: "Dessert", favourite: false

  },
  {
    title: "Honey Sriracha Chicken Wings",
    description: "Crispy baked wings with sweet-spicy glaze",
    image: "/RecipeManager/assets/honeychicken.jpg",
    ingredients: [
      "1kg chicken wings",
      "3 tbsp sriracha",
      "3 tbsp honey",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tsp garlic powder",
      "1 tsp ginger powder"
    ],
    steps: [
      "Pat wings dry, season with salt",
      "Bake at 200°C (400°F) for 40 minutes, flipping halfway",
      "Whisk sauce ingredients in saucepan, simmer 5 minutes",
      "Toss wings in sauce, broil 2 minutes per side",
      "Garnish with sesame seeds and green onions"
    ],
    category: "Appetizer", favourite: false

  },
  {
    title: "Mango Coconut Chia Pudding",
    description: "Tropical overnight pudding with fresh mango",
    image: "/RecipeManager/assets/mangochia.jpg",
    ingredients: [
      "½ cup chia seeds",
      "2 cups coconut milk",
      "1 ripe mango",
      "2 tbsp honey",
      "1 tsp vanilla extract",
      "Toasted coconut flakes"
    ],
    steps: [
      "Whisk chia seeds, coconut milk, honey and vanilla",
      "Refrigerate overnight (or at least 4 hours)",
      "Puree mango with 1 tbsp water",
      "Layer pudding with mango puree in glasses",
      "Top with coconut flakes and mango cubes"
    ],
    category: "Healthy", favourite: false

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
