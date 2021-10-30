import axios from 'axios'
/**
 * Holds the Axios call.
 * This file creates an object that we import as 'api' in 'index.js'.
 * Used by a function called 'getData' on the obj
 *
 * Axios call takes config object as the argument which needs:
 * HTTP Method, URL, headers, query parameters (params)
 * **/
require('dotenv').config();

export async function getData() {
    const results = await axios({
        'method':'GET',
        'url':process.env.REACT_APP_URL,
        'headers':
        {
            'x-rapidapi-host':process.env.REACT_APP_HOST,
            'x-rapidapi-key':process.env.REACT_APP_KEY
        },
        'params':
        {
            country: 'US',
            asin: "B07VGRJDFY",
            page: '1'
        },
    });
    return results.data.results;
}