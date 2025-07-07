import express from 'express';
import Recipe from '../models/Recipes';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
    console.error(err); // add this to see the real error
    const errorMessage = err instanceof Error ? err.message : String(err);
    res.status(500).json({ message: "Server error fetching recipes", error: errorMessage });
}});

export default router;
