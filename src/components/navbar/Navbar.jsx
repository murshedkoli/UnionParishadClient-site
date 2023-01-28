import React, { useContext } from 'react';
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { DarkModeContext } from '../context/darkModeContext';

const Navbar = () => {

    const { dispatch } = useContext(DarkModeContext);

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
                        <MenuOutlinedIcon />

                    </div>

                    <div className="item">
                        <img
                            src="https://murshedkoli-portfolio.web.app/static/media/murshedalmain.20bae363.jpg"
                            alt="Profile"
                            className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;