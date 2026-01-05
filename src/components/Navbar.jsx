import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (id) => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="container mx-auto px-4 flex justify-center">
                <nav className={`relative flex items-center justify-between gap-2 px-3 p-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-lg transition-all ${scrolled ? 'scale-95' : 'scale-100'} w-full sm:w-auto`}>
                    
                    <button 
                        onClick={() => handleScrollTo('hero')}
                        className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-300 font-semibold text-white flex items-center gap-2 group shrink-0"
                    >
                         <span className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-pulse"></span>
                         {personalInfo.name}
                    </button>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
                        <ul className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <button 
                                        onClick={() => handleScrollTo(item.id)}
                                        className="px-4 py-2 rounded-full text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden md:block pl-2">
                        <a 
                            href="#contact" 
                            onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
                            className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors"
                        >
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button 
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-full"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    {/* Mobile Dropdown */}
                    {mobileMenuOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl flex flex-col gap-2 md:hidden">
                            {navItems.map((item) => (
                                <button 
                                    key={item.name}
                                    onClick={() => handleScrollTo(item.id)}
                                    className="w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <a 
                                href="#contact" 
                                onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
                                className="w-full text-center px-4 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors mt-2"
                            >
                                Let's Talk
                            </a>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
