import React from 'react';
import './list.css'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Datatable from '../../components/datatable/Datatable';



const List = () => {

    document.title = `Citizen Page of Kalikaccha Union Parishad `

    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable />
            </div>
        </div>
    );
};

export default List;