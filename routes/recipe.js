const recipeRouter = require('express').Router();
const { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipe');

recipeRouter.get('/', getRecipes);
recipeRouter.get('/:id', getRecipe);
recipeRouter.post('/', createRecipe);
recipeRouter.put('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);

module.exports = recipeRouter;