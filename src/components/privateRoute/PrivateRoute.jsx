import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';



const PrivateRoute = () => {
    const isLogged = JSON.parse(sessionStorage.getItem('username'))

    return isLogged == 'murshedkoli@gmail.com' ? <Outlet /> : <Navigate to="/login" />
};

export default PrivateRoute;