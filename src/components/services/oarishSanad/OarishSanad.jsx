import './oarishSanad.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Sidebar from '../../sidebar/Sidebar';
import { host } from '../../../host';

const OarishSanad = () => {

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
        <div className='oarishSanad'>
            <Sidebar />
            <div className="oarishContainer">
                <Navbar />
                <div className="oarishSanadContainer">
                    this is Oarish Sanad for {citizen.name}
                </div>
            </div>

        </div>
    );
};

export default OarishSanad;