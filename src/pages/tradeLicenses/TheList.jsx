import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'

const TheList = ({ tradeLicenses }) => {

    // const [tradeLicenses, setTradeLicense] = useState([]);
    // useEffect(() => {
    //     const url = `${host}/tradeLicense`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setTradeLicense(data)
    //         })

    // }, [])



    return (
        <TableContainer className='citizenTable' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>প্রতিষ্ঠানের নাম</TableCell>
                        <TableCell className='tableCell'>লাইসেন্স ধারীর নাম</TableCell>
                        <TableCell className='tableCell'>ব্যবসায়ের ধরণ</TableCell>
                        <TableCell className='tableCell'>লাইসেন্স ফি</TableCell>
                        <TableCell className='tableCell'>লাইসেন্স নং</TableCell>
                        <TableCell className='tableCell'>ইস্যুর তারিখ</TableCell>
                        <TableCell className='tableCell'>অর্থ বছর</TableCell>
                        <TableCell className='tableCell'>বাটন</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {tradeLicenses.map((license) => (
                        <TableRow
                            key={license._id}
                        >
                            <TableCell className='tableCell' component="th" scope="row">
                                {license.organizationName}
                            </TableCell>
                            <TableCell className='tableCell' component="th" scope="row">
                                {license.nameBn}
                            </TableCell>
                            <TableCell className='tableCell'>{license.businessType}</TableCell>
                            <TableCell className='tableCell'>{license.licenseFee}</TableCell>
                            <TableCell className='tableCell'>{license.tradeLicenseNo}</TableCell>
                            <TableCell className='tableCell'>{license.issuedDate}</TableCell>
                            <TableCell className='tableCell'>{license.financialYear}</TableCell>
                            <TableCell className='tableCell'><Link to={`licenselist/${license.tradeLicenseNo}`}><button className='viewButton'>View</button></Link></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>

    );
};

export default TheList;