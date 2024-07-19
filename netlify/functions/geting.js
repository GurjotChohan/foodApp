//netlify/functions/geting.js 
//require("dotenv").config();

//import { get } from "axios";

const get = require('axios'); 

async function handler(event, context) {
  try {
    const ing = event.queryStringParameters.ing;

    let response = await get(
        `https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.REACT_APP_YOUR_APP_KEY}&query=${ing}&addChildren=false`,
      {
        headers: { Accept: "application/json", "Accept-Encoding": "identity" },
        params: { trophies: true },
      }
    );

    let inginfo = response.data.results;

    return {
      statusCode: 200,
      body: JSON.stringify({ inginfo }),
    };
  } catch (error) {
    return {
      statusCode: 500,
    };
  }
}

module.exports.handler = handler;