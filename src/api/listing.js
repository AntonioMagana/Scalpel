import axios from "axios";
import { useState } from "react";

require('dotenv').config();
/* Set asin first, then call getListing
function setListingASIN(str) {
    if (typeof str === "string") {
        console.log(asin);
        setAsin(asin);
    }
    else
        console.log('Error: not a string');
}

 */
export async function GetListing(str) {
    const results = await axios ({
        'method':'GET',
        'url':process.env.REACT_APP_LISTING_URL,
        'headers': {
                'x-rapidapi-host':process.env.REACT_APP_HOST,
                'x-rapidapi-key':process.env.REACT_APP_KEY
        },
        'params': {
                country: 'US',
                asin: str,
                page: '1'
        },
    });
    return results.data.results;
}

export default GetListing;
