import Dashboard from './components/dashboard'
import BestBuyForm from './components/_body/BestBuy.form'
import AmazonForm from './components/_body/Amazon.form'
import WalmartForm from './components/_body/Walmart.form'
import HowToForm from './components/_body/HowTo.form'
import AboutUsForm from './components/_body/AboutUs.form'
import {useEffect, useState} from "react";
import GetProduct from "./api/product";

const AppRoute = ({bStock, bBB, bAma, bWal, bHow, bAbout}) => {
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const results = await GetProduct("B07VGRJDFY");
            setData(results);
        } catch (err) { console.log(err); }
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
