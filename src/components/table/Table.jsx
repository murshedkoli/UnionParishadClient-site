import React from 'react';
import './table.css';
import Table1 from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import { host } from '../../host';

const Table = ({ nid }) => {

    const [licenseWithNid, setLicenseWithNid] = useState([])

    useEffect(() => {
        const url = `${host}/licenseWithNid/${nid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLicenseWithNid(data))


    }, [nid])





    return (

        <TableContainer component={Paper} className='table'>
            <Table1 sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Image</TableCell>
                        <TableCell className='tableCell'>Name</TableCell>
                        <TableCell className='tableCell'>Service</TableCell>
                        <TableCell className='tableCell'>Date</TableCell>
                        <TableCell className='tableCell'>Amount</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {licenseWithNid.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <img src={row.img} alt={row.citizen} />
                            </TableCell>
                            <TableCell className='tableCell'>{row.citizen}</TableCell>
                            <TableCell className='tableCell'>{row.service}</TableCell>
                            <TableCell className='tableCell'>{row.date}</TableCell>
                            <TableCell className='tableCell'>{row.amount}</TableCell>
                            <TableCell className='tableCell' >
                                <span className={`status ${row.status}`}> {row.status}
                                </span>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table1>
        </TableContainer>

    );
};

export default Table;