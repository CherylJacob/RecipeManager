import mongoose, { Document } from "mongoose";

export interface IRecipe extends Document {
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
  category: string;
}

const RecipeSchema = new mongoose.Schema<IRecipe>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  steps: [{ type: String, required: true }],
  category: { type: String, required: true }
});

export default mongoose.model<IRecipe>("Recipe", RecipeSchema);