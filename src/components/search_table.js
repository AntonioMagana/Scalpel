import '../styles/index.css'
import {Fragment, useEffect, useState} from "react";
import {Box, LinearProgress, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TableMUI from "@mui/material/Table";


export default function SearchTable(docRef) {
    const [loading, setLoad] = useState(true);
    const [data, setData] = useState([]);
    var stores= ["Amazon", "Best Buy", "Wal-Mart"];
    var arr = [];
    var map = new Map();
    function createData(title, prices, out_of_stock, image, asin, full_link, ship_info) {
        return {title, prices, out_of_stock, image, asin, full_link, ship_info}
    }
    useEffect(async () => {
        await docRef.get().then((doc) => {
            arr.push(createData(
                doc.data().title,
                doc.data().prices,
                doc.data().out_of_stock,
                doc.data().image,
                doc.data().asin,
                doc.data().full_link,
                doc.data().ship_info
            ));
            console.log("asin is" + arr[0].asin);
        })
        setData(arr);
        setLoad(false);
    }, []);

    if (loading) {
        return <Fragment> <LinearProgress /> </Fragment>
    }
    console.log(data);

    return (
        <Fragment>
            <TableContainer component={Paper}>
                <TableMUI sx={{minWidth: 200}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}}/>
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}}>
                                Store
                            </TableCell>
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}}>
                                Product
                            </TableCell>
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}} align="left">
                                MSRP
                            </TableCell>
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}} align="left">
                                Out-of-Stock
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {data.map((i, index) => (
                            <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell align="left">
                                    <a href={i.full_link}>
                                        <img src={i.image} alt='pic' width="55" height="auto"/>
                                    </a>
                                </TableCell>
                                <TableCell align="left">
                                    {stores[index]}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {i.title}
                                </TableCell>
                                <TableCell align="left">
                                    ${i.prices.current_price}
                                </TableCell>
                                <TableCell align="left">
                                    {i.out_of_stock.toString()}
                                </TableCell>
                            </TableRow>
                        ))}


                    </TableBody>
                </TableMUI>
            </TableContainer>
        </Fragment>
    );

}

