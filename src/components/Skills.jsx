import React, { useState, useRef } from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
    const categories = {
        "Languages & DSA": skills.filter(s => s.category === 'Languages & DSA'),
        "Web Technologies": skills.filter(s => s.category === 'Web Technologies'),
    };

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
             
            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-6">Technical Arsenal</h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        I constantly explore new technologies to build better software. Here is my current stack.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {Object.entries(categories).map(([category, items]) => (
                        <div key={category} className="space-y-6">
                            <h3 className="text-xl font-semibold text-gray-200 border-l-4 border-blue-500 pl-4">
                                {category}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {items.map((skill) => (
                                    <SpotlightCard key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SpotlightCard = ({ skill }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div 
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-xl border border-white/10 bg-black/20 overflow-hidden group"
        >
            {/* The Spotlight Glow */}
            <div 
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
                }}
            />
            
            <div className="relative p-4 h-full flex flex-col justify-between z-10">
                <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-gray-200">{skill.name}</span>
                    <span className="text-xs font-mono text-blue-400">{skill.percentage}%</span>
                </div>
                
                {/* Visual Bar */}
                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000 group-hover:bg-blue-400"
                        style={{ width: `${skill.percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
