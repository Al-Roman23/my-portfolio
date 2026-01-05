import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-5xl font-bold mb-6">Let's work together</h2>
                    <p className="text-xl text-gray-400">
                        Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid lg:grid-cols-2">
                        
                        {/* Contact Info Panel */}
                        <div className="p-10 md:p-14 bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
                                <div className="space-y-8">
                                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Email Me</p>
                                            <p className="text-lg font-medium text-white group-hover:text-blue-200 transition-colors">{personalInfo.email}</p>
                                        </div>
                                    </a>
                                    
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl text-white group-hover:bg-green-500 transition-all duration-300">
                                            <FaWhatsapp />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">WhatsApp</p>
                                            <p className="text-lg font-medium text-white">{personalInfo.whatsapp}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl text-white group-hover:bg-blue-500 transition-all duration-300">
                                            <FaPhone />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Call Me</p>
                                            <p className="text-lg font-medium text-white">{personalInfo.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Al-Roman. Built with passion.</p>
                            </div>
                        </div>

                        {/* Form Panel */}
                        <div className="p-10 md:p-14">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Name</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 text-white placeholder-gray-600 focus:outline-none transition-colors"
                                            placeholder="Mizuki Okada"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Email</label>
                                        <input 
                                            type="email" 
                                            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 text-white placeholder-gray-600 focus:outline-none transition-colors"
                                            placeholder="mizukiokada@gmail.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Subject</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 text-white placeholder-gray-600 focus:outline-none transition-colors"
                                        placeholder="Project Discussion"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Message</label>
                                    <textarea 
                                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 text-white placeholder-gray-600 focus:outline-none transition-colors h-32 resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <button className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                                    <FaPaperPlane /> Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
