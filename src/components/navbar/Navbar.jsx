import React, { useContext } from 'react';
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { DarkModeContext } from '../context/darkModeContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { host } from '../../host';

const Navbar = () => {

    const [admin, setAdmin] = useState();
    const { dispatch } = useContext(DarkModeContext);
    const phone = JSON.parse(sessionStorage.getItem('username'))



    useEffect(() => {
        const url = `${host}/admin/${phone}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data[0]))

    }, [phone])

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" name="" id="" placeholder='Search' />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({ type: "TOGGLE" })} />

                    </div>
                    <div className="item">
                        <NotificationsOutlinedIcon />
                        <div className="counter">1</div>

                    </div>


                    <div className="item">
                        <p>{admin.name}</p>

                    </div>

                    <div className="item">
                        <img
                            src={admin.image}
                            alt={admin.name}
                            className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;