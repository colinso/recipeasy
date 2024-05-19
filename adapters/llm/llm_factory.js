const { AI_PROVIDER, AI_PROVIDER_API_KEY } = require('../../config');
const AnthropicAIAdapter = require('./anthropic');
const { RecipePrompt } = require('./prompt')
const AIProviders = require('./providers');
const {hbh_chickenkatsu} = require('./testresponse');

class LLMFactory {
    getLLMAdapter() {
        switch (AI_PROVIDER) {
            case AIProviders.Anthropic:
                return new AnthropicAIAdapter(AI_PROVIDER_API_KEY);
            default:
                console.log("Using dummy adapter")
                return new class {
                    getResponseForMessage(text) {
                        console.log(RecipePrompt);
                        return hbh_chickenkatsu;
                    }
                }
        }
    }
}

module.exports = LLMFactory;