import React from 'react';
import './widget.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const Widget = ({ type }) => {

    let data;
    const ammount = 100;
    const diff = 20;


    switch (type) {
        case "citizen":
            data = {
                title: "CITIZEN",
                isMoney: false,
                link: "See all Citizen",
                icon: <PersonOutlineIcon className='icon' />,
            };
            break;
        case "certificate":
            data = {
                title: "CERTIFICATE",
                isMoney: false,
                link: "All Issued Certificate",
                icon: <DocumentScannerIcon className='icon' />,
            };
            break;
        case "tax":
            data = {
                title: "TAX",
                isMoney: true,
                link: "All Collected Taxes",
                icon: <CurrencyExchangeIcon className='icon' />,
            };
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "Total Earnings",
                icon: <MonetizationOnIcon className='icon' />,
            };
            break;
        default:
            break;
    };


    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {ammount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;