const express = require("express");
const router = express.Router();
const data = require("../data");
const recipesData = data.recipes;


router.get("/recipes/:id", async (req, res) => {
  try {
    const recipe = await recipesData.getRecipesById(req.params.id);
    res.json(recipe);
  } catch (e) {
    res.status(404).json({ message: "Post not found" });
  }
});

router.get("/recipes", async (req, res) => {
  try {
    const recipesList = await recipesData.getAllRecipes();
    res.json(recipesList);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/recipes", async (req, res) => {
  const recipesPostData = req.body;
  if(!recipesPostData){
    res.status(400).json({error:"You must provide data"});
    return;
  }

  if(!recipesPostData.title){
    res.status(400).json({error:"You must provide title"});
    return;
  }

  if(!recipesPostData.ingredients){
    res.status(400).json({error:"You must provide ingredients"});
    return;
  }

  if(!recipesPostData.steps){
    res.status(400).json({error:"You must provide steps"});
    return;
  }


  try{
      const {title,ingredients,steps} = recipesPostData;
      const newRecipe = await recipesData.addRecipes(title,ingredients,steps);

      res.json(newRecipe);
  }catch(e){
    res.status(500).json({ error: e });
  }
});

router.put("/recipes/:id", async (req, res) => {
    const updatedRecipeData = req.body;
    if(!updatedRecipeData){
      res.status(400).json({error:"You must provide data"});
      return;
    }

    if(!updatedRecipeData.title){
      res.status(400).json({error:"You must provide title"});
      return;
    }

    if(!updatedRecipeData.ingredients){
      res.status(400).json({error:"You must provide ingredients"});
      return;
    }

    if(!updatedRecipeData.steps){
      res.status(400).json({error:"You must provide steps"});
      return;
    }

    try {
      await recipesData.getRecipesById(req.params.id);
    } catch (e) {
      res.status(404).json({ error: "Post not found" });
    }
  
    try {
      const updatedRecipe = await recipesData.updateRecipes(req.params.id, updatedRecipeData);
      res.json(updatedRecipe);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });

  router.delete("/recipes/:id", async (req, res) => {
    try {
      await recipesData.getRecipesById(req.params.id);
    } catch (e) {
      res.status(404).json({ error: "Post not found" });
    }
    try {
      await recipesData.removeRecipes(req.params.id);
      res.status(200).json({deleted:"completed!"});
      // res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });

  router.patch("/recipes/:id",async (req,res) => {
    const updatedpatchData = req.body;
    try {
        await recipesData.getRecipesById(req.params.id);
      } catch (e) {
        res.status(404).json({ error: "Post not found" });
      }
    try {
        const updatedRecipePatch = await recipesData.updatePatch(req.params.id, updatedpatchData);
        res.json(updatedRecipePatch);
    } catch (e) {
        res.status(500).json({ error: e });
    }

  })

module.exports = router;