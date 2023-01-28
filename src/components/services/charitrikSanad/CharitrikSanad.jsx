import './charitrikSanad.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Sidebar from '../../sidebar/Sidebar';
import { host } from '../../../host';

const CharitrikSanad = () => {

    const { nid } = useParams();



    const [citizen, setCitizen] = useState({});

    useEffect(() => {
        const url = `${host}/citizen/${nid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCitizen(data[0]))

    }, [nid])

    return (
        <div className='charitrikSanad'>
            <Sidebar />
            <div className="charitrikContainer">
                <Navbar />
                <div className="charitrikSanadContainer">
                    this is Charitrik sanad for {citizen.name}
                </div>
            </div>

        </div>
    );
};

export default CharitrikSanad;