import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            
            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs font-medium text-blue-300 tracking-wide uppercase">Open to Opportunities</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        <span className="block text-gray-300">Hi, I'm {personalInfo.name}.</span>
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x bg-300%">
                            MERN Stack Dev.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-8 leading-relaxed">
                        I build pixel-perfect, secure, and scalable web applications. Transforming complex problems into elegant solutions with the power of the MERN stack.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                            <span className="relative z-10">View Projects</span>
                        </a>
                        <a href="#" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
                             Download CV
                        </a>
                    </div>
                    
                    {/* Tech Stack Marquee (Static for now, but visual) */}
                    <div className="mt-12">
                        <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-semibold">Tech Stack</p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 opacity-70 cursor-default">
                             {['React', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'Tailwind'].map(tech => (
                                 <span key={tech} className="px-3 py-1 rounded border border-white/10 text-gray-400 text-sm hover:text-white hover:border-blue-500/50 transition-colors">
                                     {tech}
                                 </span>
                             ))}
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center relative">
                     <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 rounded-full border border-blue-500/20 w-full h-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute -inset-4 rounded-full border border-purple-500/20 w-[110%] h-[110%] animate-[spin_15s_linear_infinite_reverse]"></div>
                        
                        {/* Image Container */}
                        <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl z-10">
                            <img 
                                src={personalInfo.profileImg} 
                                alt="Profile" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>

                         {/* Floating Orbs */}
                         <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full blur-xl opacity-50 animate-bounce"></div>
                         <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                     </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
                <FaArrowDown />
            </div>
        </section>
    );
};

export default Hero;
