import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { projects } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle, FaRocket, FaTools } from 'react-icons/fa';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
                <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
                <Link to="/" className="px-6 py-2 bg-white text-black rounded-lg">Back Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pb-20">
            {/* Header / Hero for Project */}
            <div className="relative h-[50vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 container mx-auto">
                     <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                        <FaArrowLeft /> Back to Projects
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{project.title}</h1>
                    <div className="flex gap-4">
                        {project.liveLink && project.liveLink !== "#" && (
                            <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                        <a href={project.repoLink} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2 backdrop-blur-md">
                            <FaGithub /> View Code
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 grid lg:grid-cols-3 gap-16">
                
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="text-blue-500">01.</span> Overview
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                            {project.description}
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="text-purple-500">02.</span> Key Features
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {project.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10">
                            <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                                <FaTools /> Challenges
                            </h3>
                            <p className="text-gray-400">{project.challenges}</p>
                        </div>
                         <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                            <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                <FaRocket /> Future Plans
                            </h3>
                            <p className="text-gray-400">{project.improvements}</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-8">
                        <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/10">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Built With</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 text-center">
                            <h3 className="text-lg font-bold mb-2">Like this project?</h3>
                            <p className="text-gray-400 text-sm mb-6">Check out my other work or get in touch!</p>
                            <Link to="/" className="w-full block py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">
                                Browse Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
