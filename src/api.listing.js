import axios from 'axios'

require('dotenv').config();

// Returns a list of available offers for the specified product (New, Used etc.)
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
        'url':process.env.REACT_APP_LISTING_URL,
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
        'url':process.env.REACT_APP_LISTING_URL,
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
        'url':process.env.REACT_APP_LISTING_URL,
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
        'url':process.env.REACT_APP_LISTING_URL,
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
        'url':process.env.REACT_APP_LISTING_URL,
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
        'url':process.env.REACT_APP_LISTING_URL,
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