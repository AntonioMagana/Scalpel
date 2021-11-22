/*
import db from "../../firebase/firebase";
import {useState} from "react";

function SiteTraffic() {
    const [site, setSite] = useState([]);
    const siteRef = db.firestore().collection("items");
    let nSite = 0;
    siteRef.where("web_traffic", "array-contains", "siteClicked")
        .get().then((doc) => {
          setSite(doc.data());
        });

    db.firestore().collection("items").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
        })
    })

    return site;
}

export default SiteTraffic;

 */