import {Paper, Grid, Container, TableHead, TableRow, TableCell, TableBody, TableContainer} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Chart from "../chart";
import Average_price from "../average_price";
import Table from "../table";
import db from "../../firebase/firebase";
import TableMUI from "@mui/material/Table";
import {useEffect} from "react";


const AmazonForm = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: blue[500],
            },
            secondary: {
                main: '#11cb5f', // color green in hex.
            },
        },
    });
    const collectionRef = db.firestore().collection("items");

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button>Amazon Store</Button>
                <Button color="secondary">Active</Button>
            </ThemeProvider>
            <Container maxWidth="xl" sx={{mt: 4, mb: 4}}>
                <Grid>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', height: 600}}>
                            {Table(collectionRef)}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AmazonForm
