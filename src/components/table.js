import '../styles/index.css'
import {Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TableMUI from "@mui/material/Table";
import {createTheme} from "@mui/material/styles";
import {blue} from "@mui/material/colors";

export default function Table(data) { // returns [Object, Object ...]
    console.log(data) // test if listing object works
    /*
    const rows = []
    function createData(name, price, condition) {
        return { name, price, condition };
    }
    // store JSON response object into an array
    data.map((d) =>
        rows.push(createData(
            d.seller.name,
            d.current_price,
            d.condition
        ))
    );

     */
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
    );
}
