import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <div className="flex-grow pt-16">
                {/* Pt-16 To Offset Fixed Navbar */}
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
