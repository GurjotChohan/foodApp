//netlify/functions/getrecipes.js 
//require("dotenv").config();

//import { get } from "axios";

const get = require('axios'); 

async function handler(event, context) {
  try {
    const ingliststring = event.queryStringParameters.ingliststring;
    const value = event.queryStringParameters.value;
    const value2 = event.queryStringParameters.value2;
    const value3 = event.queryStringParameters.value3;
    const value4 = event.queryStringParameters.value4;
    const checked = event.queryStringParameters.checked;

    let response = await get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_YOUR_APP_KEY}&includeIngredients=${ingliststring}&type=${value}&diet=${value2}&cuisine=${value3}&sort=${value4}&number=9&fillIngredients=true&addRecipeInformation=true&ignorePantry=${checked}`,
      {
        headers: { Accept: "application/json", "Accept-Encoding": "identity" },
        params: { trophies: true },
      }
    );

    let recipeURL = response.data.results;

    return {
      statusCode: 200,
      body: JSON.stringify({ recipeURL }),
    };
  } catch (error) {
    return {
      statusCode: 500,
    };
  }
}

module.exports.handler = handler;