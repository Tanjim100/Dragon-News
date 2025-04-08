import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftNavbar from '../components/LayoutComponents/LeftNavbar';
import RightNavbar from '../components/LayoutComponents/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header className=''>
                <Header></Header>
                <section className='w-11/12 mx-auto m-4'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-11/12 mx-auto'>
                <NavBar></NavBar>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid grid-cols-12'>
                <aside className='col-span-2'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-8 mx-4'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-2'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;