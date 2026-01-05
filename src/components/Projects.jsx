import React, { useRef } from 'react';
import { projects } from '../data/portfolioData';
import { Link } from 'react-router';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Works</h2>
                        <p className="text-gray-400 max-w-xl">
                            A showcase of projects that demonstrate my passion for building robust and scalable applications.
                        </p>
                    </div>
                    <a href="https://github.com/Al-Roman23" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white border-b border-white pb-1 hover:text-gray-300 transition-colors">
                        View All on GitHub <FaArrowRight className="text-sm"/>
                    </a>
                </div>

                <div className="grid gap-16">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`group grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                            
                            {/* Project Image Panel */}
                            <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-video cursor-pointer lg:order-${index % 2 === 1 ? '2' : '1'}`}>
                                <Link to={`/projects/${project.id}`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </Link>
                            </div>

                            {/* Project Details Panel */}
                            <div className={`space-y-6 lg:order-${index % 2 === 1 ? '1' : '2'}`}>
                                <div className="flex items-center gap-2 text-blue-400 font-mono text-sm">
                                    <span>0{index + 1}</span>
                                    <span className="h-px w-8 bg-blue-500/50"></span>
                                    <span>Featured Project</span>
                                </div>
                                <h3 className="text-4xl font-bold group-hover:text-blue-400 transition-colors">
                                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 4).map(tech => (
                                        <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 4 && (
                                         <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">+{project.techStack.length - 4}</span>
                                    )}
                                </div>

                                <div className="flex items-center gap-6 pt-4">
                                    <Link to={`/projects/${project.id}`} className="flex items-center gap-2 text-white font-medium hover:gap-4 transition-all">
                                        Case Study <FaArrowRight />
                                    </Link>
                                    <div className="flex gap-4">
                                        <a href={project.repoLink} className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                                            <FaGithub />
                                        </a>
                                        {project.liveLink && project.liveLink !== "#" && (
                                            <a href={project.liveLink} className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
