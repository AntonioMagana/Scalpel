import axios from 'axios'


export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':process.env.RAPIDAPI_URL,
        'headers':
        {
            'x-rapidapi-host':process.env.RAPIDAPI_HOST,
            'x-rapidapi-key':process.env.RAPIDAPI_KEY
        },
        'params':
        {
            country: 'US',
            asin: "B07VGRJDFY",
            page: '1'
        },
    })
}