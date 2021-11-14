import Dashboard from './components/dashboard'
import BestBuyForm from './components/_body/BestBuy.form'
import AmazonForm from './components/_body/Amazon.form'
import WalmartForm from './components/_body/Walmart.form'
import HowToForm from './components/_body/HowTo.form'
import AboutUsForm from './components/_body/AboutUs.form'
import {useEffect, useState} from "react";
import GetProduct from "./api/product";
//-----------Nintendo Switch,---3070,---------3080,---------3090,---------Xbox,------PlayStation
const asin = ["B07VGRJDFY", 'B097MYTZMW', 'B08V1ZWGVR', 'B08HR6ZBYJ', 'B08H75RTZ8', 'B08FC5L3RG'];

const AppRoute = ({bStock, bBB, bAma, bWal, bHow, bAbout}) => {
    const [data, setData] = useState([]);
    const items = []

    function createData(title, image, asin, full_link, current_price, out_of_stock, ship_info) {
        return { title, image, asin, full_link, current_price, out_of_stock, ship_info };
    }


    // store selected data into map
    const getData = async () => {
        for(let i = 0; i < asin.length; i++) {
            try {
                const map = new Map();
                const results = await GetProduct(asin[i]);

                map.set('title', results.title);
                map.set('images', results.images);
                map.set('asin', results.asin);
                map.set('full_link', results.full_link);
                map.set('prices', results.prices);
                map.set('out_of_stock', results.out_of_stock);
                map.set('ship_info', results.ship_info);

                items.push(map);
            } catch (err) { console.log(err); }
        }
        setData(items);
    }
    useEffect(() => getData(), []);

    // HOME == DASHBOARD
    return (
        <div className='body'>
            {bStock &&  <Dashboard/>}
            {bBB &&     <BestBuyForm/>}
            {bAma &&    AmazonForm(data) }
            {bWal &&    <WalmartForm/>}
            {bHow &&    <HowToForm/>}
            {bAbout &&  <AboutUsForm/>}
        </div>
    )
}

export default AppRoute
