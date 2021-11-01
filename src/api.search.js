import axios from 'axios'

require('dotenv').config();

// Get all the details for a Product
export async function getProductDetails(my_asin) {
    const params = {
        country: 'US',
        asin: my_asin
    }
    const results = await axios({
        'method':'GET',
        'url':process.env.REACT_APP_PRODUCT_DETAILS_URL,
        'headers': {
                'x-rapidapi-host':process.env.REACT_APP_HOST,
                'x-rapidapi-key':process.env.REACT_APP_KEY
        },
        'params': params
    });
    return results.data;
}
export default getProductDetails;