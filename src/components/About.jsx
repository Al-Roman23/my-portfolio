import React from 'react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12">
                    
                    {/* Left Column: Title & Intro */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <h2 className="text-5xl font-bold mb-8 leading-tight">
                                Passionate about <br/>
                                <span className="text-gray-500">creating for the web.</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed mb-8">
                                I specialize in building responsive, accessible, and performant web applications that solve real-world problems.
                            </p>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                                <h3 className="text-white font-bold mb-2">My Philosophy</h3>
                                <p className="text-gray-400 italic">
                                    "Good design is obvious. Great design is transparent."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Detailed Content */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="prose prose-lg prose-invert text-gray-400">
                             <p className="text-lg leading-relaxed whitespace-pre-line">
                                {personalInfo.about}
                             </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-blue-500/30 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 text-2xl mb-4">
                                    🎯
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-white">Focus</h4>
                                <p className="text-gray-400">
                                    Frontend development, React ecosystem, and Modern UI/UX implementation.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-purple-500/30 transition-colors">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 text-2xl mb-4">
                                    🚀
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-white">Goals</h4>
                                <p className="text-gray-400">
                                    Contributing to open source and learning backend technologies to become a full FSD.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
