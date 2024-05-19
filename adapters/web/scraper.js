const axios = require('axios');
const cheerio = require('cheerio');

const recipeSkipText = [
    "skip to recipe",
    "jump to recipe"
]

class WebScraper {
    getPageText = async(url) => {
        return axios.get(url)
            .then((response) => {
                if (response.status === 200) {
                    const getVisibleText = (element) => {
                        return $(element).find('*').not('script, style, noscript').contents()
                            .filter(function () {
                                return this.type === 'text' && $(this).parent().css('display') !== 'none';
                            })
                            .text();
                    };
                    
                    const $ = cheerio.load(response.data);
                    const skipToRecipe = $('a').filter(function() {
                        return recipeSkipText.includes($(this).text().trim().toLowerCase());
                    });
                    var targetElement = 'body';
                    if (skipToRecipe.attr('href').length > 0) {
                        let skipToRecipeAnchor = skipToRecipe.attr('href').replace('#', '');
                        targetElement = $(`#${skipToRecipeAnchor}`);
                    }
                    const textContent = getVisibleText(targetElement).replace(/[\n\t\r]+/g, ' ');
                    return textContent;
                } else {
                    throw new Error("invalid response from webpage: ", response.status)
                }
            })
            .catch((err) => {
                throw new Error(err);
            });
    }
}

module.exports = WebScraper;