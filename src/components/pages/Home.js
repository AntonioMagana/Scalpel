import { Box, Grid, Container, Typography } from '@mui/material';

import Popular_products from "../popular_products";


const Home = () => {
    return (
        <div>
            <br/>
            <Container maxWidth="lg" spacing={3}>
                <Box sx={{pb: 5}}>
                    <Typography variant="h5">Welcome to Scalpel</Typography>
                </Box>
                <Popular_products />
            </Container>
        </div>
    )
}

export default Home
