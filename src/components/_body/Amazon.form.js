import {Paper, Grid, Container, TableHead, TableRow, TableCell, TableBody, TableContainer} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Chart from "../chart";
import AveragePrice from "../_dashboard/AveragePrice";
import Table from "../table";
import db from "../../firebase";
import TableMUI from "@mui/material/Table";


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
    const docRef = db.firestore().collection("items").doc("PlayStation5");

    return (
        <div>
{/** PRODUCT NAME AND STATUS ----------------------------------------------------------------------*/}
            <ThemeProvider theme={theme}>
                <Button>Amazon Products</Button>
                <Button color="secondary">Active</Button>
            </ThemeProvider>

            <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
{/** CHART ----------------------------------------------------------------------*/}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', height: 290,}}>
                            { Chart("chart called") }
                        </Paper>
                    </Grid>
{/** AVERAGE_PRICE ----------------------------------------------------------------------*/}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper sx={{p: 1, display: 'flex', flexDirection: 'column', height: 150,}}>
                            <AveragePrice/>
                        </Paper>
                    </Grid>
{/** TABLE ----------------------------------------------------------------------*/}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', height: 300}}>
                            { Table(docRef) }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AmazonForm
