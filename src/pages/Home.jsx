import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { useLocation } from 'react-router';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle Scroll To Hash Even If We Landed Here Directly
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                 setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                 }, 0);
            }
        }
    }, [location]);

    return (
        <div className="flex flex-col">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
