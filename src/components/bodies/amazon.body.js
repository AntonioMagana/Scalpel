import {TableHead, TableCell, TableRow, TableBody, TableContainer, Paper, Grid, Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TableMUI from '@mui/material/Table'
import {blue} from '@mui/material/colors';
import Button from '@mui/material/Button';
import Chart from "../chart";
import AveragePrice from "../averagePrice";

const AmazonBody = () => {
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

    return (
        <div>
{/** PRODUCT NAME AND STATUS ----------------------------------------------------------------------*/}
            <ThemeProvider theme={theme}>
                <Button>Nintendo Switch w/ Smite</Button>
                <Button color="secondary">In-Stock</Button>
            </ThemeProvider>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
{/** CHART ----------------------------------------------------------------------*/}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', height: 290,}}>
                            <Chart />
                        </Paper>
                    </Grid>
{/** AVERAGE_PRICE ----------------------------------------------------------------------*/}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper sx={{p: 1, display: 'flex', flexDirection: 'column', height: 150,}}>
                            <AveragePrice />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

{/** TABLE ----------------------------------------------------------------------*/}
            <TableContainer component={Paper}>
                <TableMUI sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize:'h6.fontSize' }}>
                                smite
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize:'h6.fontSize' }} align="left">
                                smite
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize:'h6.fontSize' }} align="left">
                                smite
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableCell component="th" scope="row">smite</TableCell>
                        <TableCell align="left">smite</TableCell>
                        <TableCell align="left">smite</TableCell>
                    </TableBody>
                </TableMUI>
            </TableContainer>
        </div>
    )
}

export default AmazonBody
