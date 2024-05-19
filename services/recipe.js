const WebScraper = require('../adapters/web/scraper')
const LLMFactory = require('../adapters/llm/llm_factory')

class RecipeParser {
    constructor(db) {
        this.scraper = new WebScraper()
        this.llm = new LLMFactory().getLLMAdapter();
        this.db = db;
    }

    async retrieveAndParse(url) {
        try {
            const pageText = await this.scraper.getPageText(url);
            console.log(pageText)
            var recipe = await this.llm.getResponseForMessage(pageText)
            return await this.db.createRecipe(recipe);
        } catch (error) {
            console.log(error)
        }
    }

    async getRecipe(id) {
        try {
            return await this.db.getRecipe(id);
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = RecipeParser;