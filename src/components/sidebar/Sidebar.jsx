import React, { useContext } from 'react';
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Link, useNavigate } from 'react-router-dom'
import { DarkModeContext } from '../context/darkModeContext';


const Sidebar = () => {

    const navigate = useNavigate();

    const { dispatch } = useContext(DarkModeContext)

    const logOut = () => {
        sessionStorage.removeItem('username');
        navigate('/login')
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">Kalikaccha Udnion</span>
                </Link>

            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Deshboard</span>
                        </li>
                    </Link>
                    <p className="title">CITIZEN</p>
                    <Link to="/citizens" style={{ textDecoration: 'none' }}>

                        <li>
                            <PersonIcon className='icon' />
                            <span>Citizen</span>
                        </li>
                    </Link>

                    <Link to="/citizens/new" style={{ textDecoration: 'none' }}>

                        <li>
                            <PersonAddAltIcon className='icon' />
                            <span>Add Citizen</span>
                        </li>
                    </Link>
                    <p className="title">SERVICES</p>

                    <li>
                        <CurrencyExchangeIcon className='icon' />
                        <span>Holding Tax</span>
                    </li>
                    <li>
                        <ReceiptIcon className='icon' />
                        <span>Prottoyon</span>
                    </li>
                    <li to="/ncertificates">
                        <DocumentScannerIcon className='icon' />
                        <span>Certificate</span>
                    </li>
                    <Link to="/licenselist" style={{ textDecoration: 'none' }}>
                        <li >
                            <DocumentScannerIcon className='icon' />
                            <span>Trade License</span>
                        </li>
                    </Link>
                    <p className="title">ADMIN SECTION</p>

                    <Link to="/admins" style={{ textDecoration: 'none' }}>

                        <li>
                            <PersonIcon className='icon' />
                            <span>Admin List</span>
                        </li>
                    </Link>
                    <Link to="/admins/new" style={{ textDecoration: 'none' }}>

                        <li>
                            <PersonAddAltIcon className='icon' />
                            <span>Add Admin</span>
                        </li>
                    </Link>
                    <p className="title">SYSTEM</p>

                    <li>
                        <NotificationsActiveIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <AccountCircleIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icon' />
                        <span onClick={logOut}>Log Out</span>
                    </li>

                </ul>
            </div>
            <div className="bottom">

                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })} > </div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>

            </div>
        </div>
    );
};

export default Sidebar;