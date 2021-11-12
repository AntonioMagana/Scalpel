import { Box, Grid, Container, Typography } from '@mui/material';

import PopularProducts from "../_dashboard/PopularProducts";
import LatestUpdates from "../_dashboard/LatestUpdates";
import AppNewsUpdate from "../_dashboard/AppNewsUpdate";

const HomeBody = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Dashboard</Typography>
                </Box>

                <PopularProducts />
                <br/>
                <LatestUpdates />
                <AppNewsUpdate />

            </Container>
        </div>
    )
}

export default HomeBody
