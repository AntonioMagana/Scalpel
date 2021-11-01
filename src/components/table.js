import React from 'react';
import {TableHead, TableCell, TableRow, TableBody, TableContainer, Paper, Grid, Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TableMUI from '@mui/material/Table'
import {blue} from '@mui/material/colors';
import Button from '@mui/material/Button';
import AveragePrice from "./averagePrice";
import Chart from "./chart";
import '../styles/index.css'

const Table = (Id) => { // returns [Object, Object ...]
    console.log(Id) // test if listing object works
    const rows = []
    function createData(name, price, condition) {
      return { name, price, condition };
    }
    // store JSON response object into an array
    Id.map((i) =>
        rows.push(createData(i.seller.name, i.current_price, i.condition))
    );
    // PRIMARY AND SECONDARY BUTTONS COLOR THEME
    const theme = createTheme({
        palette: {
            primary: {
                main: blue[500],
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#11cb5f',
            },
        },
    });
    return (
      <div>
          {/* PRODUCT NAME AND STATUS */}
          <ThemeProvider theme={theme}>
              <Button>Nintendo Switch</Button>
              <Button color="secondary">In-Stock</Button>
          </ThemeProvider>

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {/* CHART */}
              <Grid container spacing={2}>
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', height: 290,}}>
                        <Chart />
                    </Paper>
                  </Grid>
                  {/* AVERAGE_PRICE */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper sx={{p: 1, display: 'flex', flexDirection: 'column', height: 150,}}>
                        <AveragePrice />
                    </Paper>
                  </Grid>
              </Grid>
          </Container>

          {/* TABLE */}
          <TableContainer component={Paper}>
              <TableMUI sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell sx={{ fontWeight: 'bold', fontSize:'h6.fontSize' }}>
                              Seller(s)
                          </TableCell>
                          <TableCell sx={{ fontWeight: 'bold', fontSize:'h6.fontSize' }} align="left">
                              Price(s)
                          </TableCell>
                          <TableCell sx={{ fontWeight: 'bold', fontSize:'h6.fontSize' }} align="left">
                              Condition(s)
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows.map((row) => (
                          <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0} }}>
                              <TableCell component="th" scope="row">{row.name}</TableCell>
                              <TableCell align="left">$ {row.price.toFixed(2)}</TableCell>
                              <TableCell align="left">{row.condition}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </TableMUI>
          </TableContainer>
      </div>
  );
}
export default Table
