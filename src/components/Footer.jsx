import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-20 border-t border-gray-200 dark:border-gray-900 bg-white dark:bg-gray-950 transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div className="space-y-6">
                        <div className="text-3xl font-black text-gray-950 dark:text-white uppercase tracking-tighter">
                            DESIGNED & <span className="text-primary-red">DEVELOPED</span> BY <span className="text-primary-red">TOKIR</span> KHAN
                        </div>
                        <p className="max-w-xs dark:text-gray-500 text-gray-400 font-medium text-sm leading-relaxed">
                            Built on the pillars of discipline, clean architectures, and structural consistency. Currently refining foundations in System Design & Distributed Networks.
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end gap-4">
                        <div className="flex gap-8 text-[11px] uppercase font-black tracking-[0.2em] dark:text-gray-400 text-gray-600">
                            <a href="#home" className="hover:text-primary-red transition-colors">Home</a>
                            <a href="#projects" className="hover:text-primary-red transition-colors">Projects</a>
                            <a href="#contact" className="hover:text-primary-red transition-colors">Connect</a>
                            <a href="#about" className="hover:text-primary-red transition-colors">About</a>
                            <a href="#skills" className="hover:text-primary-red transition-colors">Skills</a>
                            <a href="#experience" className="hover:text-primary-red transition-colors">Experience</a>
                            <a href="#education" className="hover:text-primary-red transition-colors">Education</a>
                        </div>
                        <p className="text-[10px] uppercase font-black tracking-widest text-gray-300 dark:text-gray-800">
                            © {currentYear} Architectural Build V4.0.0
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
