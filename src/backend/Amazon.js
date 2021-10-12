let axios = require("axios").default;

function Amazon()
{
    //require('dotenv').config();
    const options =
    {
        method: 'GET',
        url: 'https://amazon-products1.p.rapidapi.com/product',
        params:
        {
            country: 'US',
            asin: 'B084TM4XKG',
        },
        headers:
        {
            'x-rapidapi-host': 'amazon-products1.p.rapidapi.com',
            'x-rapidapi-key': '57fdc1e7e7msh3a13637e9291288p159360jsnce2e7b3801c3'
        }
    };

    axios.request(options)
        .then(function (response)
        {
            // Display price history and if product is prime exclusive discounts
            const priceData = response.data.prices;

            console.log(`CURRENT_PRICE: ${priceData.current_price}`);
	        console.log(`PREVIOUS_PRICE: ${priceData.previous_price}`);
            console.log(`PRIME_ONLY_DISCOUNT: ${priceData.prime_only_discount}`); // Returns -1 if false
        })
        .catch(function (error)
        {
	        console.error(error);
        });
}

export default Amazon;
// Amazon('B084TM4XKG');