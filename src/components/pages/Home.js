import { Box, Grid, Container, Typography } from '@mui/material';

import Popular_products from "../popular_products";
import WebTraffic from "../web_traffic";


const Home = () => {
    return (
        <div>
            <br/>
            <Container maxWidth="md" spacing={3}>
                <Box sx={{pb: 5}}>
                    <Typography variant="h5">Welcome to Scalpel</Typography>
                </Box>
 {/**POPULAR PRODUCTS**/}
                <Popular_products />
                <br />
{/**WEB TRAFFIC **/}
                <WebTraffic />
            </Container>
        </div>
    )
}

export default Home
