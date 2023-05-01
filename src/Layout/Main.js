import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footerr from '../Components/Footerr/Footerr';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footerr></Footerr>
        </div>
    );
};

export default Main;