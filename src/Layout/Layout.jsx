import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div className='h-[82px]'>  <Navbar/></div>
            <h1>Main layout</h1>
            <Outlet/>

        </div>
    );
};

export default Layout;