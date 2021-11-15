import '../styles/index.css'
import {Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TableMUI from "@mui/material/Table";
import {createTheme} from "@mui/material/styles";
import {blue} from "@mui/material/colors";
import {Fragment, useEffect, useState} from "react";


// Conditionally renders empty table until data is received
export default function Table(docRef) {
    const [isLoading, setLoading] = useState(true);
    const [info, setInfo] = useState();

    function createData(title, price, out_of_stock) {
        return {title, price, out_of_stock}
    }

    useEffect(() => {
        docRef.get().then((doc) => {
            if (doc.exists) {
                const data = createData(doc.data().title, doc.data().price, doc.data().out_of_stock);
                setInfo(data);
                setLoading(false);
                console.log(data);
            }
        })
    }, []);

    if (isLoading) {
        return <Fragment>
            <TableContainer component={Paper}>
                <TableMUI sx={{minWidth: 200}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}}>
                                Product
                            </TableCell>
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}} align="left">
                                ($)MSRP
                            </TableCell>
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}} align="left">
                                In-Stock
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell component="th" scope="row"> loading.. </TableCell>
                            <TableCell align="left"> loading.. </TableCell>
                            <TableCell align="left"> loading.. </TableCell>
                        </TableRow>
                    </TableBody>
                </TableMUI>
            </TableContainer>
        </Fragment>
    }

    return (
        <Fragment>
            <TableContainer component={Paper}>
                <TableMUI sx={{minWidth: 200}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}}>
                                Product
                            </TableCell>
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}} align="left">
                                ($)MSRP
                            </TableCell>
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}} align="left">
                                Out-of-Stock
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell component="th" scope="row"> {info.title} </TableCell>
                            <TableCell align="left"> {info.price} </TableCell>
                            <TableCell align="left">{info.out_of_stock.toString()} </TableCell>
                        </TableRow>
                    </TableBody>
                </TableMUI>
            </TableContainer>
        </Fragment>
    );
}


/*
    let rows = [];
    function getFirebaseData() {


        let data;
        docRef.get().then((doc) => {
            if (doc.exists) {
                data = createData(doc.data().title, doc.data().price, doc.data().out_of_stock);
                setInfo(data);
                setLoading(false);
                console.log("firebase data received");
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error)
        })
        return data;
    }
    rows.push(getFirebaseData());

     */

/*
const realTable =
    <div>
        <TableContainer component={Paper}>
            <TableMUI sx={{minWidth: 200}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}}>
                            Product
                        </TableCell>
                        <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}} align="left">
                            ($)MSRP
                        </TableCell>
                        <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}} align="left">
                            In-Stock
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell component="th" scope="row"> {row.title} </TableCell>
                            <TableCell align="left"> {row.asin} </TableCell>
                            <TableCell align="left"> {row.out_of_stock} </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableMUI>
        </TableContainer>
    </div>

 */

