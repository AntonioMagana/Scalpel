import axios from "axios";

require('dotenv').config();

export async function GetProduct(str) {
    const results = await axios ({
        'method':'GET',
        'url':process.env.REACT_APP_PRODUCT_URL,
        'headers': {
            'x-rapidapi-host':process.env.REACT_APP_HOST,
            'x-rapidapi-key':process.env.REACT_APP_KEY
        },
        'params': {
            country: 'US',
            asin: str,
        },
    });
    return results.data;
}

export default GetProduct;
