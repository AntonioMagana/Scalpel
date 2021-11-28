import db from "../../firebase/firebase";
import {Container, Grid, Paper} from "@mui/material";
import SearchTable from "../search_table";

const SearchPage = () => {
    const docRef = db.firestore().collection("items").doc("NintendoSwitch");

    return (
        <div>
            <Container maxWidth="xl" sx={{mt: 4, mb: 4}}>
                <Grid>
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