const RecipeParser = require('../services/recipe')

module.exports = (app, db) => {
    const service = new RecipeParser(db);

    app.post('/recipe', async (req,res,next) => {
        const { url } = req.body;
        if (!url) {
            throw new Error('Please provide a url');
        }
        const data = await service.retrieveAndParse(url)
        console.log(data);
        res.json(data);
    });

    app.get('/recipe/:id', async (req,res,next) => {
        const { id } = req.params;
        if (!id) {
            throw new Error('Please provide an id');
        }
        console.log("Retrieving recipe with id", id)
        const data = await service.getRecipe(id);
        res.json(data);
    });
}