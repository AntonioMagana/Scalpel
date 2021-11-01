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

/**
 * ASIN TABLE
 * -----------
 * B07VGRJDFY = Nintendo Switch (Red/Blue)
 * B097MYTZMW = MSI Gaming GeForce RTX 3070 LHR 8GB GDRR6
 * B08V1ZWGVR = ZOTAC Gaming GeForce RTX 3080 Ti AMP Holo 12GB GDDR6X
 * B08HR6ZBYJ = NVIDIA GeForce RTX 3090 Founders Edition Graphics Card
 * B08H75RTZ8 = Xbox Series X Console
 * B08FC5L3RG = PlayStation 5 Console
 * **/
// All-in-one api calls for ITEM LISTINGS into one function, returns json object
// NOTE: THE API LIMIT CALLS IS 25,000/MONTH
export function getListing(item) {
    let data = null;
    switch (item) {
        case 'nintendo_switch':
            data = getNintendoSwitchData();
            break;
        case 'nvidia_3070':
            data = getRTX3070Data();
            break;
        case 'nvidia_3080':
            data = getRTX3080Data();
            break;
        case 'nvidia_3090':
            data = getRTX3090Data();
            break;
        case 'xbox_series_x':
            data = getXboxSeriesXData();
            break;
        case 'playstation_5':
            data = getPlayStationData();
            break;
        default:
            console.log("Error, data not found");
    }
    return data;
}

async function getNintendoSwitchData() {
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

async function getRTX3070Data() {
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
                asin: 'B097MYTZMW',
                page: '1'
            },
    });
    return results.data.results;
}

async function getRTX3080Data() {
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
                asin: 'B08V1ZWGVR',
                page: '1'
            },
    });
    return results.data.results;
}

async function getRTX3090Data() {
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
                asin: 'B08HR6ZBYJ',
                page: '1'
            },
    });
    return results.data.results;
}

async function getXboxSeriesXData() {
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
                asin: 'B08H75RTZ8',
                page: '1'
            },
    });
    return results.data.results;
}

async function getPlayStationData() {
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
                asin: 'B08FC5L3RG',
                page: '1'
            },
    });
    return results.data.results;
}

export default getListing;