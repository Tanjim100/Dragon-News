import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const AuthLayout = () => {
    return (
        <div className='bg-[#E7E7E7] font-poppins min-h-screen'>
            <header className='w-11/12 mx-auto py-4'>
                <NavBar></NavBar>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;