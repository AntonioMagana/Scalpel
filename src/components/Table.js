import React from 'react';
import { TableHead, TableCell, TableRow, TableBody, TableContainer, Paper } from '@mui/material';
import TableMUI from '@mui/material/Table'
import '../styles/index.css'



const Table = (Id) => {
    console.log(Id[0],'hi21')
    // Rows hold an array of Objects
    const rows = []
    function createData(name, price, inStock) {
      return { name, price, inStock };
    }
    Id.map((i, index) =>
        //console.log(i.current_price)
        //console.log(i.seller.name)
        //console.log(i.condition)
        rows.push(createData(i.seller, i.current_price, i.condition))
    );
  //console.log(rows[0]);


  return (
     <TableContainer component={Paper}>
         <TableMUI sx={{ minWidth: 650 }} aria-label="simple table">
             <TableHead>
                 <TableRow>
                     <TableCell>Product Name</TableCell>
                     <TableCell align="left">Seller</TableCell>
                     <TableCell align="left">Price</TableCell>
                     <TableCell align="right">In-Stock</TableCell>
                 </TableRow>
             </TableHead>
             <TableBody>
                 {rows.map((row, index) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                    >
                        <TableCell component="th" scope="row">
                            {index}
                        </TableCell>
                    </TableRow>
                 ))}
             </TableBody>
         </TableMUI>
     </TableContainer>
  );
}
/*
   <div>
     <TableMUI class=''>
       <TableHead class='borders blue'>
         <TableCell> <h1> Hi </h1> </TableCell>
       </TableHead>
<TableRow>
 <TableCell> <h1> Hi </h1> </TableCell>
 <TableCell> <h1> Hi </h1> </TableCell>
 <TableCell> <h1> Hi </h1> </TableCell>
</TableRow>


     </TableMUI>
   </div>
   */
export default Table
