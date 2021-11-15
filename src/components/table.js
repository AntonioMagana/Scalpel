import '../styles/index.css'
import {Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TableMUI from "@mui/material/Table";
import {createTheme} from "@mui/material/styles";
import {blue} from "@mui/material/colors";
import {Fragment, useEffect, useState} from "react";


// Conditionally renders empty table until data is received
export default function Table(collectionRef) {
    const [isLoading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);

    // Get all documents in a collection
    var rows = [];
    function createData(title, prices, out_of_stock, image, asin, full_link, ship_info) {
        return {title, prices, out_of_stock, image, asin, full_link, ship_info}
    }

    useEffect(() => {
        collectionRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                rows.push(createData(
                    doc.data().title,
                    doc.data().prices,
                    doc.data().out_of_stock,
                    doc.data().image,
                    doc.data().asin,
                    doc.data().full_link,
                    doc.data().ship_info
                ));
                //console.log(rows);
            })
            setInfo(rows);
            setLoading(false);
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
                            <TableCell sx={{fontWeight: 'bold', fontSize: 'h6.fontSize'}}/>
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
                        {info.map((i) => (
                            <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell align="left"> <img src={i.image} alt='pic' width="55" height="auto"/></TableCell>
                                <TableCell component="th" scope="row"> {i.title} </TableCell>
                                <TableCell align="left"> ${i.prices.current_price} </TableCell>
                                <TableCell align="left">{i.out_of_stock.toString()} </TableCell>
                            </TableRow>
                        ))}

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

