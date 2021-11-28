import db from "../../firebase/firebase";
import {Box, Container, Grid, Paper} from "@mui/material";
import SearchTable from "../search_table";
import Chart from "../chart";
import Average_price from "../average_price";
import News from "../news";

const SearchPage = () => {
    const docRef = db.firestore().collection("items").doc("NintendoSwitch");

    return (
        <div>
            <Container maxWidth="xl" sx={{mt: 4, mb: 4}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={9}>
                         <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', height: 290,}}>
                             { Chart() }
                        </Paper>
                    </Grid>
                    <br/>

                    <Grid item xs={12} md={4} lg={3}>
                        <Paper sx={{p: 1, display: 'flex', flexDirection: 'column', height: 150,}}>
                            { Average_price() }
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4} lg={3}>
                        <Paper sx={{p: 1, display: 'flex', flexDirection: 'column', height: 150,}}>
                            { News() }
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8} lg={9}>
                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', height: 600}}>
                            {SearchTable(docRef)}
                        </Paper>
                    </Grid>


                </Grid>
            </Container>
        </div>
    )
}

export default SearchPage