const RecipePrompt = `Parse the following text and give me only the recipe and instructions for it. 
Return it in JSON format with fields for 
    "name", 
    "author", 
    "prep_time", 
    "cook_time", 
    "total_time", 
    "servings", 
    "ingredients" (array),
    "sub_ingredients" (array of objects which is populated with any sub recipes included in the ingredients),
    "instructions" (array).
The instructions and ingredients should be word for word unless there are cases of missing spaces or punctuation. Only return raw json in a single line that will be parsable by a Javascript JSON.parse() method.`

module.exports = { RecipePrompt };