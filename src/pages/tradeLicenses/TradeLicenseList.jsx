import React, { useEffect, useState } from 'react';
import './tradeLicenseList.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import { host } from '../../host';
import TheList from './TheList';

const TradeLicenseList = () => {
    document.title = 'Trade License List'

    const [tradeLicenses, setTradeLicense] = useState([]);
    useEffect(() => {
        const url = `${host}/tradeLicense`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTradeLicense(data.reverse())
            })

    }, [])

    return (
        <div className='tradeLicensList'>
            <Sidebar />
            <div className="tradeListContainer">
                <Navbar />
                <div className="theListofTrade">



                    <div  >
                        <h2 style={{ textAlign: 'center' }}> এ যাবৎ প্রদান করা সকল ট্রেড লাইসেন্স সমূহ</h2>

                    </div>


                    <TheList tradeLicenses={tradeLicenses} />


                </div>
            </div>


        </div>
    );
};

export default TradeLicenseList;