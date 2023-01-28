import React from 'react';
import './featured.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Earnings</h1>
                <MoreVertIcon fontSize='small' />
            </div>

            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>
                <p className="title">Total Tax Collected</p>
                <p className="ammount">$400</p>
                <p className="desc">This is at today</p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult">
                            <KeyboardArrowUpIcon fontSize='small' />
                            <div className="resultAmount">$12.4k</div>

                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult">
                            <KeyboardArrowUpIcon fontSize='small' />
                            <div className="resultAmount">$12.4k</div>

                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Last Year</div>
                        <div className="itemResult">
                            <KeyboardArrowUpIcon fontSize='small' />
                            <div className="resultAmount">$12.4k</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;