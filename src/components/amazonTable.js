/**Display Amazon products, availability, etc.**/
import React from 'react';
import {TableHead, TableCell, TableRow, TableBody, TableContainer, Paper, Grid, Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TableMUI from '@mui/material/Table'
import {blue} from '@mui/material/colors';
import Button from '@mui/material/Button';
import '../styles/index.css'


const AmazonTable = (amaz) => {
    amaz.map((ama, index) => (
        ama[0].map((am) =>(
            console.log(am)
        ))
    ));
    //console.log(amaz + 'amazT')
    const rows = []
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

    function createData(
        error, title, image, link, curr_price, prev_price,
        out_of_stock, prime, sold_by, stars, category
    ) {
        return {
            error, title, image, link, curr_price, prev_price,
            out_of_stock, prime, sold_by, stars, category
        };
    }

    amaz.map((i) =>
        rows.push(createData(
            i.error, i.title, i.images, i.full_link,
            i.prices.current_price, i.prices.previous_price,
            i.out_of_stock, i.prime, i.ship_info.sold_by, i.reviews.stars, i.category
        ))
    );

    return (
        <div>
            {/* AMAZON TITLE AND API STATUS */}
            <ThemeProvider theme={theme}>
                <Button>Amazon</Button>
                <Button color="secondary">Live</Button>
            </ThemeProvider>
            {/*TODO: AMAZON PRODUCT IMAGE */}
            {/*TODO: CATEGORY BUTTON TAGS */}

            {/* TABLE */}
            <TableContainer component={Paper}>
                <TableMUI sx={{ minWidth: 75 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight:'bold',fontSize:'h6.fontSize'}}>
                                Product
                            </TableCell>
                            <TableCell sx={{fontWeight:'bold',fontSize:'h6.fontSize'}} align="left">
                                Prime
                            </TableCell>
                            <TableCell sx={{fontWeight:'bold',fontSize:'h6.fontSize'}} align="left">
                                Current Price
                            </TableCell>
                            <TableCell sx={{fontWeight:'bold',fontSize:'h6.fontSize'}} align="left">
                               Stars
                            </TableCell>
                            <TableCell sx={{fontWeight:'bold',fontSize:'h6.fontSize'}} align="left">
                                Out of Stock
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row} sx={{ '&:last-child td, &:last-child th': { border: 0} }}>
                                <TableCell component="th" scope="row">{ row.title }</TableCell>
                                <TableCell align="left">$ { row.prime }</TableCell>
                                <TableCell align="left">{ row.curr_price }</TableCell>
                                <TableCell align="left">{ row.stars }</TableCell>
                                <TableCell align="left">{ row.out_of_stock }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableMUI>
            </TableContainer>
        </div>
    );
}
export default AmazonTable