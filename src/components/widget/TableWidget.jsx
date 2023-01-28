import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'


const TableWidget = ({ citizens }) => {
    return (
        <TableContainer className='citizenTable' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>ছবি</TableCell>
                        <TableCell className='tableCell'>নাম</TableCell>
                        <TableCell className='tableCell'>পিতা</TableCell>
                        <TableCell className='tableCell'>মাতা</TableCell>
                        <TableCell className='tableCell'>আইডি নাম্বার</TableCell>
                        <TableCell className='tableCell'>মোবাইল নাম্বার</TableCell>
                        <TableCell className='tableCell'>পাড়া</TableCell>
                        <TableCell className='tableCell'>বাটন</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {citizens.map((citizen) => (
                        <TableRow
                            key={citizen._id}
                        >
                            <TableCell className='tableCell' component="th" scope="row">
                                <img src={citizen.image} alt="" />
                            </TableCell>
                            <TableCell className='tableCell' component="th" scope="row">
                                {citizen.nameBn}
                            </TableCell>
                            <TableCell className='tableCell'>{citizen.father}</TableCell>
                            <TableCell className='tableCell'>{citizen.mother}</TableCell>
                            <TableCell className='tableCell'>{citizen.nid}</TableCell>
                            <TableCell className='tableCell'>{citizen.phone}</TableCell>
                            <TableCell className='tableCell'>{citizen.village}</TableCell>
                            <TableCell className='tableCell'><Link to={`/citizens/${citizen.nid}`}><button className='viewButton'>View</button></Link></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>

    );
};

export default TableWidget;