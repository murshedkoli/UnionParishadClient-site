import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const AdminTable = ({ adminList }) => {
    return (
        <TableContainer className='citizenTable' component={Paper}>
            <h1 style={{ textAlign: 'center' }}>Admin List</h1>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>ছবি</TableCell>
                        <TableCell className='tableCell'>নাম</TableCell>
                        <TableCell className='tableCell'>পিতা</TableCell>
                        <TableCell className='tableCell'>মাতা</TableCell>
                        <TableCell className='tableCell'>আইডি নাম্বার</TableCell>
                        <TableCell className='tableCell'>মোবাইল নাম্বার</TableCell>
                        <TableCell className='tableCell'>পাসওয়ার্ড</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {adminList.map((admin) => (
                        <TableRow
                            key={admin._id}
                        >
                            <TableCell className='tableCell' component="th" scope="row">
                                <img src={admin.image} alt="" />
                            </TableCell>
                            <TableCell className='tableCell' component="th" scope="row">
                                {admin.nameBn}
                            </TableCell>
                            <TableCell className='tableCell'>{admin.father}</TableCell>
                            <TableCell className='tableCell'>{admin.mother}</TableCell>
                            <TableCell className='tableCell'>{admin.nid}</TableCell>
                            <TableCell className='tableCell'>{admin.phone}</TableCell>
                            <TableCell className='tableCell'>{admin.password}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>

    );
};

export default AdminTable;