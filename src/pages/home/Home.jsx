import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
import './home.css'

const Home = () => {

    document.title = `Dashboard of Kalikaccha Union Parishad`

    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="citizen" />
                    <Widget type="certificate" />
                    <Widget type="tax" />
                    <Widget type="earnings" />


                </div>

                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title="Revenue In Last 6 Month" />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Services</div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Home;