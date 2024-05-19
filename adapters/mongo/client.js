const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connection = null;
    this.recipe = null;
  }

  async connect() {
    try {
      this.connection = await mongoose.connect(
        "mongodb://localhost:27017/recipeasy"
      );
      const subIngredientsSchema = new mongoose.Schema({
        name: String,
        ingredients: [String],
      });

      const RecipeModel = mongoose.model(
        "recipe",
        new mongoose.Schema({
          id: String,
          name: String,
          prep_time: String,
          cook_time: String,
          total_time: String,
          servings: String,
          ingredients: [String],
          sub_ingredients: [subIngredientsSchema],
          instructions: [String],
        })
      );

      this.recipe = RecipeModel;
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    } catch (error) {
      console.error("Error disconnecting from MongoDB:", error);
    }
  }

  async createRecipe(recipe) {
    try {
      return await this.recipe.create(recipe);
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  }

  async getRecipe(id) {

    try {
      return await this.recipe.findOne({ _id: id });
    } catch (error) {
      console.error("Error querying recipes:", error);
    }
  }
}

module.exports = Database;
