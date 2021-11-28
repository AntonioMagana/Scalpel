import { Box, Grid, Container, Typography } from '@mui/material';
import Popular_products from "../popular_products";
import WebTraffic from "../web_traffic";
import db from "../../firebase/firebase";
import Time from "../utils/time";
import News from "../news";


const Home = () => {
    const collectionRef = db.firestore().collection("items");
    var today = Time();

    return (
        <div>
            <br/>
            <Container maxWidth="md" spacing={3}>
                <Box sx={{pb: 5}}>
                    <Typography variant="h5">Popular Items</Typography>
                    <Typography variant="subtitle1" align="right"> Last Update: { today }</Typography>
                </Box>
 {/**POPULAR PRODUCTS**/}
                { Popular_products(collectionRef) }
                <br /> <br /> <br />
{/**WEB TRAFFIC **/}
                <Box sx={{pb: 5}}>
                    <Typography variant="h5">Web Traffic</Typography>
                </Box>
                <WebTraffic />

            </Container>
        </div>
    )
}

export default Home
