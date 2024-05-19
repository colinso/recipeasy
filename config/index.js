const dotEnv = require("dotenv");
const AIProviders = require("../adapters/llm/providers");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT ?? "8080",
  AI_PROVIDER: process.env.AI_PROVIDER ?? AIProviders.Anthropic,
  AI_PROVIDER_API_KEY: process.env.AI_PROVIDER_API_KEY,
};