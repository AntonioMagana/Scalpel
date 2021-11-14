import { Paper, Grid, Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Chart from "../chart";
import AveragePrice from "../_dashboard/AveragePrice";
import Table from "../table";
import GetProduct from "../../api/product";

const asin = ["B07VGRJDFY", 'B097MYTZMW', 'B08V1ZWGVR', 'B08HR6ZBYJ', 'B08H75RTZ8', 'B08FC5L3RG'];

const AmazonForm = (data) => {
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
    const arr =[]
    function createData(title, image, asin, full_link, current_price, out_of_stock, sold_by, shipped_by) {
        return { title, image, asin, full_link, current_price, out_of_stock, sold_by, shipped_by };
    }

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
                            { Chart("chart called") }
                        </Paper>
                    </Grid>
{/** AVERAGE_PRICE ----------------------------------------------------------------------*/}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper sx={{p: 1, display: 'flex', flexDirection: 'column', height: 150,}}>
                            <AveragePrice />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8} lg={9}>
                        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', height: 300}}>
                            { Table() }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

{/** TABLE ----------------------------------------------------------------------*/}

        </div>
    )
}

export default AmazonForm
