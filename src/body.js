//TODO: -----------Nintendo Switch,---3070,---------3080,---------3090,---------Xbox,------PlayStation
//TODO: const asin = ["B07VGRJDFY", 'B097MYTZMW', 'B08V1ZWGVR', 'B08HR6ZBYJ', 'B08H75RTZ8', 'B08FC5L3RG'];
import Home from './components/pages/Home'
import BestBuyPage from './components/pages/BestBuyPage'
import AmazonForm from './components/pages/AmazonPage'
import WalmartPage from './components/pages/WalmartPage'
import HowToPage from './components/pages/HowToPage'
import AboutUsPage from './components/pages/AboutUsPage'
import db from "./firebase/firebase"
import Time from "./components/utils/time";
import GetProduct from "./api/product";
import {useEffect} from "react";

// Displays the page the user clicks
// Contains Home, BestBuy, Amazon, Walmart, HowTo, AboutUs
const Body = ({bStock, bBB, bAma, bWal, bHow, bAbout}) => {
    // Increment siteClicked by one in web-traffic document
    const siteRef = db.firestore().collection("items").doc("web_traffic");
    let nSite = 0;
    let nAmazonSite = 0;
    siteRef.get().then((doc) => {
        // Only increments if doc exists
        if(doc.exists) {
            nSite = doc.data().siteClicked;
            nAmazonSite = doc.data().amazonClicked;
            nSite+=1;
            if(bAma && <AmazonForm />) {
                nAmazonSite+=1;
            }
            db.firestore().collection("items")
                .doc("web_traffic")
                .update({
                    siteClicked: nSite,
                    amazonClicked: nAmazonSite,
                })
                .then(() => {
                    console.log("web traffic updated");
                });
        }
        else{
            console.log("No such document found!");
        }
    })

    // MM-DD-YYYY-HH-MM
    const time = Time();

    return (
        <div className='body'>
            {bStock && <Home/>}
            {bBB && <BestBuyPage/>}
            {bAma && <AmazonForm/>}
            {bWal && <WalmartPage/>}
            {bHow && <HowToPage/>}
            {bAbout && <AboutUsPage/>}
        </div>
    )
}

export default Body;

//TODO: Print all documents in "items" collection
/*
db.firestore().collection("items").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
    })
})
 */

//TODO: Print 'web_traffic' document
/*
db.firestore().collection("items").doc("web_traffic").set(webDataModel).then(() => {
    console.log("Web Traffic document created.");
    }

 */

//TODO: Update/Create an item in firebase document
/*
   const getData = async () => {
       try {
           const map = new Map();
           const results = await GetProduct("B08H75RTZ8");

           var docData = {
               title: results.title,
               image: results.images[0],
               asin: results.asin,
               full_link: results.full_link,
               prices: results.prices,
               out_of_stock: results.out_of_stock,
               ship_info: results.ship_info
           };
           setData(items);
           // Update firebase data
           db.firestore().collection("items").doc("XboxSeriesX").set(docData).then(() => {
               console.log("Document successfully written!");
           });
       } catch (err) {console.log(err);}

       useEffect(() => getData(), []);
       */

//TODO: Update/Create web-traffic document
/*
const webDataModel = {
    title: "web-traffic",
    siteClicked: 0,
    amazonClicked: 0,
    bestBuyClicked: 0,
    walmartClicked: 0,
    date: time,
};
// Create firebase document "web_traffic"

});
});
 */
