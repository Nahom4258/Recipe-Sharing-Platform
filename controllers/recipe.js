const Recipe = require('../models/Recipe');

// create recipe, write whole
const createRecipe = async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).send(recipe);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

// edit recipe, write whole
const editRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        recipe.title = req.body.title;
        recipe.ingredients = req.body.ingredients;
        recipe.instructions = req.body.instructions;
        recipe.prep_time = req.body.prep_time;
        await recipe.save();
        res.send(recipe);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

// delete recipe, write whole
const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        await recipe.remove();
        res.send(recipe);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

// get recipes, add these filters: title, ingredients, prep_time from query params
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find(req.query);
        res.send(recipes);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

module.exports = { createRecipe, editRecipe, deleteRecipe, getRecipes };