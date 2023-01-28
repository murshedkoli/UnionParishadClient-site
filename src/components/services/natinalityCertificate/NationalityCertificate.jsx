import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { host } from '../../../host';
import Navbar from '../../navbar/Navbar';
import Sidebar from '../../sidebar/Sidebar';
import './nationalityCertificate.css';

const NationalityCertificate = () => {

    const { nid } = useParams();



    const [citizen, setCitizen] = useState({});
    console.log(citizen)

    useEffect(() => {
        const url = `${host}/citizen/${nid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCitizen(data[0]))

    }, [nid])


    return (
        <div className='nationalityCertificate'>
            <Sidebar />
            <div className="nationalityContainer">
                <Navbar />
                <div className="nationalityCertificateContainer">
                    this is nationalityCertificate for {citizen.name}
                </div>
            </div>

        </div>
    );
};

export default NationalityCertificate;