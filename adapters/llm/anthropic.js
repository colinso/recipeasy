Anthropic = require('@anthropic-ai/sdk')
const { RecipePrompt } = require('./prompt')

class AnthropicAIAdapter {
    constructor(api_key) {
        this.anthropic = new Anthropic({
            apiKey: api_key,
        })
    }

    async getResponseForMessage(text) {
        try {
            const msg = await this.anthropic.messages.create({
                model: "claude-3-opus-20240229",
                max_tokens: 1024,
                messages: [
                    { role: "user", content: prompt + '/n' + text }
                ],
              });
            //   console.log(msg.content[0].text);
              try {
                return JSON.parse(msg.content[0].text);
              } catch (error) {
                console.log("Error parsing JSON");
              }
              return msg.content[0].text;
        } catch (error) {
            console.log("AnthropicAPI error", error);
        }
    }
}

module.exports = AnthropicAIAdapter;