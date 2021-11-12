import { Box, Grid, Container, Typography } from '@mui/material';

import PopularProducts from "./_dashboard/PopularProducts";


const Dashboard = () => {
    return (
        <div>
            <br/>
            <Container maxWidth="lg" spacing={3}>
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h5">Dashboard</Typography>
                </Box>
                <PopularProducts />
            </Container>
        </div>
    )
}

export default Dashboard
