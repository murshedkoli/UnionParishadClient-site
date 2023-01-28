import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import certificate from '../../photo/certificate.png'

const Services = ({ citizen }) => {
    return (
        <div className='services'>
            <Link className="linkBtn" to={`/citizens/${citizen.nid}/ncertificate`}>
                <button>নাগরিকত্ব সনদ</button>
            </Link>

            <Link to={`/citizens/${citizen.nid}/oarish`}>
                <button>ওয়ারিশ সনদ</button>
            </Link>

            <Link to={`/citizens/${citizen.nid}/taxreceipt`}>
                <button>হোল্ডিং টেক্স রশিদ</button>
            </Link>

            <Link to={`/citizens/${citizen.nid}/charitrtiksanad`}>
                <button>চারিত্রিক সনদ</button>
            </Link>

            <Link to={`/citizens/${citizen.nid}/tradelicense`}>
                <button>ট্রেড লাইসেন্স</button>
            </Link>



        </div>
    );
};

export default Services;