import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




 const  GetInstrument=(props)=>{
   
  const table=
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          
          
          <TableCell align="left">Instrument Name</TableCell>
          <TableCell align="left">Instrument Id</TableCell>
          <TableCell align="left">Face Value</TableCell>
          <TableCell align="left">Min Qty.</TableCell>
        </TableRow>

      </TableHead>
      <TableBody>
        
          <TableRow>
            <TableCell align="left">{props.instrument.instrumentName}</TableCell>
            <TableCell align="left">{props.instrument.instrumentId}</TableCell>
            <TableCell align="left">{props.instrument.faceValue}</TableCell>
            <TableCell align="left">{props.instrument.minQuantity}</TableCell>
           
          </TableRow>
        
      </TableBody>
    </Table>
  </TableContainer>
  if ( props.status===4 && props.error===false )
  return  <div>{table}</div>
  if( props.status===4 && props.error===true )
   return <div></div>
   return <div></div>
}


export default GetInstrument;