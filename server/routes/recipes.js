const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.get('/', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

router.post('/', async (req, res) => {
  const recipe = new Recipe(req.body);
  await recipe.save();
  res.json(recipe);
});

module.exports = router;