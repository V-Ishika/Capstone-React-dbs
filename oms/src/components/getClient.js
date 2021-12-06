import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function GetClient(props) {
 
  const table=
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="center">Client Id</TableCell>
            <TableCell align="center">Client Name</TableCell>
            <TableCell align="center">Custodian Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell align="left">{props.client.clientId}</TableCell>
              <TableCell align="left">{props.client.clientName}</TableCell>
              <TableCell align="left">{props.custodian.custodianName}</TableCell>
             
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    if ( props.status===6 && props.error===false)
    return  <div>{table}</div>
    if (props.status===6 && props.error===true)
    return  <div></div>
   return <div></div>
}