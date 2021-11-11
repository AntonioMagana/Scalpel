import axios from "axios";

require('dotenv').config();

export async function getRTX3090Data() {
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

export default getRTX3090Data;
