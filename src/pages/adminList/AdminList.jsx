import React, { useEffect, useState } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import './adminList.css';
import { host } from '../../host';
import AdminTable from '../../components/widget/AdminTable';
import Navbar from '../../components/navbar/Navbar';




const AdminList = () => {
    document.title = `Admin List Of Kalikaccha Union Parishad `




    const [admin, setAdmin] = useState([])
    useEffect(() => {
        fetch(`${host}/adminList`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data);


            })
    }, [])






    return (
        <div className='adminList'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />

                <div className="adminListContainer">
                    <div className='datatable '>






                        <AdminTable adminList={admin} />



                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminList;