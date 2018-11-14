const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

let exportedMethods = {

    async getAllRecipes(){
        // const recipesCollection = await recipes();
        // return await recipesCollection.find({}).toArray();

        const recipesCollection = await recipes();
        recipesCollectionArray = await recipesCollection.find({}).toArray();
        recipesIdTitle = [];
        for(let i=0;i<recipesCollectionArray.length;i++){
            info = {};
            info._id = recipesCollectionArray[i]._id;
            info.title = recipesCollectionArray[i].title; 
            recipesIdTitle.push(info);
        }
        return recipesIdTitle;  
    },

    async getRecipesById(id){
        if(!id) throw "You must provide an id to search for";

        const recipesCollection= await recipes();
        const recipe = await recipesCollection.findOne({_id:id});
        if(recipe == null)throw " No recipe with that id";

        return recipe;
    },

    async addRecipes(title,ingredients,steps){
        if(typeof title !== "string")throw "No title provided";
        if(!Array.isArray(ingredients)){
            ingredients=[];
        }
        if(!Array.isArray(steps)){
            steps = [];
        }

        const recipesCollection = await recipes();
        const newRecipesInfo = {
            _id:uuid.v4(),
            title:title,
            ingredients:ingredients,
            steps:steps
        }

        const insertInfo = await recipesCollection.insertOne(newRecipesInfo);
        if(insertInfo.insertedCount === 0)throw "Could not add a recipe";

        const newRecipe = await this.getRecipesById(insertInfo.insertedId);
        return newRecipe;
    },

    async removeRecipes(id){
        if(!id) throw "You must provide an id to delete ";
        const recipesCollection = await recipes();
        const deleteInfo = await recipesCollection.removeOne({_id:id});

        if(deleteInfo.deletedCount === 0){
            throw 'Could not delete recipe with id of ${id}';
        }
        return null;
    },

    async updateRecipes(id,updatedRecipe){
        if(!id) throw "You must provide an id to update";
        if(!updatedRecipe) throw"You must give information";
        const recipeCollection = await recipes();
        const updatedRecipeData = {};

        if(updatedRecipe.title){
            updatedRecipeData.title = updatedRecipe.title;
        }
        if(updatedRecipe.ingredients){
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }
        if(updatedRecipe.steps){
            updatedRecipeData.steps = updatedRecipe.steps;
        }

        let updateCommend = {
            $set:updatedRecipeData
        };

        const query ={
            _id:id
        };
        await recipeCollection.updateOne(query,updateCommend);
        return await this.getRecipesById(id);
    },
    async updatePatch(id,updatedPatchData){
        if(!id) throw "You must provide an id to update";
        const recipeCollection = await recipes();
        const updatedPatchDataObj = {};
        const originalData = await recipeCollection.findOne({_id:id});
        if(updatedPatchData.title){
            updatedPatchDataObj.title = updatedPatchData.title;
        }else{
            updatedPatchDataObj.title = originalData.title;
        }

        if(updatedPatchData.ingredients){
            updatedPatchDataObj.ingredients = updatedPatchData.ingredients;
        }else{
            updatedPatchDataObj.ingredients = originalData.ingredients;
        }

        if(updatedPatchData.steps){
            updatedPatchDataObj.steps = updatedPatchData.steps;
        }else{
            updatedPatchDataObj.steps = originalData.steps;
        }

        let updateCommendPatch = {
            $set:updatedPatchDataObj
        };

        const queryPatch ={
            _id:id
        };
        await recipeCollection.updateOne(queryPatch,updateCommendPatch);
        return await this.getRecipesById(id);
    }
}

module.exports = exportedMethods;