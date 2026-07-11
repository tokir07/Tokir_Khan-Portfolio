import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, X, Server, Database, Shield, Zap, Terminal } from 'lucide-react';

const Projects = () => {
    const [activeModalProject, setActiveModalProject] = useState(null);

    const projects = [
        {
            title: 'SkillGraph',
            subtitle: 'Developer Identity Platform',
            overview: 'Centralizes developer achievements from GitHub, LeetCode, Codeforces, and HackerRank into a single verified public portfolio.',
            techStack: ['Java', 'Spring Boot', 'Spring Security', 'OAuth2', 'JWT', 'MySQL', 'React', 'Tailwind CSS'],
            accent: 'border-primary-red',
            icon: <Shield className="w-5 h-5 text-primary-red" />,
            isDedicatedPage: true,
            path: '/project/skillgraph',
            github: 'https://github.com/tokir07'
        },
        {
            title: 'Badri Apparels',
            subtitle: 'B2C E-Commerce Platform',
            overview: 'Full-stack online clothing storefront featuring secure JWT authentication, order processing, inventory tracking, and sales analytics.',
            techStack: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'MySQL', 'React', 'Tailwind CSS'],
            accent: 'border-primary-blue',
            icon: <Zap className="w-5 h-5 text-primary-blue" />,
            github: 'https://github.com/tokir07',
            caseStudy: {
                problem: 'Building a secure checkout flow with transactional order calculations (price, coupon discounts, regional tax rates, and dynamic shipping charges) while protecting administrative inventory updates.',
                solution: 'Designed Spring Security filters enforcing JWT-based Role-Based Access Control (Admin vs. Customer). Implemented transactional checkout services at the backend boundary to guarantee price consistency and stock deductions.',
                architecture: 'Decoupled full-stack setup: React client SPA communicating via Axios REST APIs to Spring Boot services, interacting with a normalized MySQL database through Hibernate ORM.',
                features: ['JWT Auth Subsystem', 'Transactional Cart Calculations', 'Image Upload & Stock Manager', 'Coupon & Sales Analytics Dashboard'],
                challenges: 'Concurrent checkouts caused database locking overhead and database leaks. Solved by tuning `@Transactional` isolation boundaries and isolating stock audits from general catalog browsing queries.'
            }
        },
        {
            title: 'Student Management System',
            subtitle: 'Academic Database Portal',
            overview: 'Enterprise-grade administrative database managing course enrollments, departments, and addresses using layered JPA mappings.',
            techStack: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'PostgreSQL'],
            accent: 'border-primary-red',
            icon: <Database className="w-5 h-5 text-primary-red" />,
            github: 'https://github.com/tokir07',
            caseStudy: {
                problem: 'Digitizing educational records with complex entity linkages (Many-to-Many between Students & Courses, One-to-Many between Department & Students) without triggering database timeouts or cyclical references in JSON payloads.',
                solution: 'Implemented a layered REST architecture separating API representations from database entities using Data Transfer Objects (DTOs), protected with Jakarta Bean validations and localized exception advisors.',
                architecture: 'Controller-Service-Repository layout utilizing a PostgreSQL database, structuring One-to-One, One-to-Many, and Many-to-Many entity relationships.',
                features: ['JPA Entity Mappings (O2O, O2M, M2M)', 'Jakarta Bean Validations', 'Centralized Global Error Advice', 'Profile Photo Upload Storage'],
                challenges: 'Loading course entities with student lists initially triggered infinite JSON serialization loops and N+1 query overhead. Solved by decoupling query projections using DTO records and utilizing JPA EntityGraphs for eager join fetches.'
            }
        },
        {
            title: 'Mind Saarthi',
            subtitle: 'AI Mental Wellness Companion',
            overview: 'AI-driven wellness platform offering mood logs, wellness assessments, self-care prompts, and 24/7 natural language conversations.',
            techStack: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'LLM API Client', 'React', 'Tailwind CSS'],
            accent: 'border-primary-blue',
            icon: <Server className="w-5 h-5 text-primary-blue" />,
            github: 'https://github.com/tokir07',
            caseStudy: {
                problem: 'Providing immediate, empathetic conversational support and daily wellness suggestions while securing sensitive user journal logs against access leaks.',
                solution: 'Integrated Large Language Model (LLM) endpoints via a secure API client at the service boundary. Protected journal repository resources using Spring Security JWT filters, confining access to authenticated account owners.',
                architecture: 'React user dashboard communicating with Spring Boot REST controllers, utilizing JWT token extractions to authenticate wellness assessments and mood history feeds.',
                features: ['LLM Natural Chat Subsystem', 'Mood Trend Analytics', 'Wellness Assessment Engine', 'Encrypted Session Journal DB'],
                challenges: 'Synchronizing timezone-dependent daily mood entries and parsing multi-line AI responses. Resolved using UTC database normalization and custom Jackson date serialization converters.'
            }
        }
    ];

    return (
        <section id="projects" className="section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto text-left">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary-red mb-2">
                            <Terminal size={16} />
                            <span className="text-xs font-black uppercase tracking-[0.3em]">Code Portfolio Registry</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black dark:text-white text-gray-955 uppercase tracking-tighter">
                            CORE.<span className="text-primary-red">PROJ</span>ECTS
                        </h2>
                        <div className="w-32 h-2 bg-gradient-to-r from-primary-red to-primary-blue rounded-full"></div>
                    </div>
                    <p className="dark:text-gray-400 text-gray-600 font-medium max-w-md leading-relaxed text-sm">
                        Enterprise API designs, transactional database applications, and performance optimizations.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`group relative p-1 rounded-[40px] border-2 border-transparent hover:${project.accent} transition-all duration-500 shadow-md`}
                        >
                            <div className="h-full p-8 rounded-[38px] dark:bg-gray-900/60 bg-gray-50/80 border border-gray-200 dark:border-gray-800 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 rounded-xl dark:bg-gray-800 bg-white shadow-md">
                                            {project.icon}
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Case Study</span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-black mb-1 dark:text-white text-gray-955 group-hover:text-primary-red transition-colors uppercase tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs font-bold text-primary-blue mb-4 tracking-wide">{project.subtitle}</p>
                                    
                                    <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-8">
                                        {project.overview}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="text-[9px] font-black uppercase tracking-wider dark:text-gray-400 text-gray-605 px-2.5 py-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-lg">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-black/5 dark:border-white/5">
                                    {project.isDedicatedPage ? (
                                        <Link
                                            to={project.path}
                                            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-red hover:underline"
                                        >
                                            Learn More &rarr;
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => setActiveModalProject(project)}
                                            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-red hover:underline cursor-pointer font-sans"
                                        >
                                            Learn More &rarr;
                                        </button>
                                    )}
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        className="dark:text-gray-400 text-gray-605 hover:text-primary-blue dark:hover:text-primary-blue transition-colors"
                                    >
                                        <Github size={20} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Case Study Details Modal */}
                <AnimatePresence>
                    {activeModalProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
                            onClick={() => setActiveModalProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative bg-white dark:bg-gray-955 rounded-[40px] w-full max-w-4xl max-h-[85vh] overflow-y-auto border border-gray-200 dark:border-gray-800 shadow-3xl flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header */}
                                <div className="sticky top-0 z-20 flex justify-between items-center p-8 border-b border-black/5 dark:border-white/5 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary-red px-2.5 py-0.5 bg-primary-red/5 rounded border border-primary-red/10">
                                            System Case Study
                                        </span>
                                        <h3 className="text-3xl font-black dark:text-white text-gray-955 uppercase tracking-tight mt-1.5">
                                            {activeModalProject.title}
                                        </h3>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{activeModalProject.subtitle}</p>
                                    </div>
                                    <button
                                        onClick={() => setActiveModalProject(null)}
                                        className="p-3 bg-gray-100 dark:bg-gray-900 rounded-2xl dark:text-white text-gray-900 hover:bg-red-500 hover:text-white transition-all shadow-md cursor-pointer"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Modal Content */}
                                <div className="p-8 space-y-8">
                                    
                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-2 pb-4 border-b border-black/5 dark:border-white/5">
                                        {activeModalProject.techStack.map((tech, i) => (
                                            <span key={i} className="text-xs font-black uppercase tracking-wider dark:text-primary-blue text-primary-red bg-black/5 dark:bg-white/5 px-3.5 py-1.5 rounded-xl border border-black/5 dark:border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Problem vs Solution columns */}
                                    <div className="grid md:grid-cols-2 gap-8 text-left">
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-black uppercase tracking-widest text-primary-red flex items-center gap-2">
                                                <Terminal size={14} /> The Problem
                                            </h4>
                                            <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed font-medium">
                                                {activeModalProject.caseStudy.problem}
                                            </p>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-black uppercase tracking-widest text-primary-blue flex items-center gap-2">
                                                <Terminal size={14} /> The Solution
                                            </h4>
                                            <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed font-medium">
                                                {activeModalProject.caseStudy.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Architecture & Challenges */}
                                    <div className="space-y-6 pt-6 border-t border-black/5 dark:border-white/5 text-left">
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-black uppercase tracking-widest text-gray-500">System Architecture</h4>
                                            <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed font-medium">
                                                {activeModalProject.caseStudy.architecture}
                                            </p>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-black uppercase tracking-widest text-primary-red">Technical Challenges & Optimization</h4>
                                            <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed font-medium">
                                                {activeModalProject.caseStudy.challenges}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Features Bullet List */}
                                    <div className="space-y-4 pt-6 border-t border-black/5 dark:border-white/5 text-left">
                                        <h4 className="text-sm font-black uppercase tracking-widest text-gray-500">Key Subsystems</h4>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {activeModalProject.caseStudy.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl dark:bg-white/[0.02] bg-black/[0.01] border border-black/5 dark:border-white/5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-red shrink-0"></div>
                                                    <span className="text-xs font-black uppercase tracking-wider dark:text-gray-300 text-gray-700">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Footer */}
                                <div className="p-6 bg-gray-50 dark:bg-black/20 border-t border-black/5 dark:border-white/5 flex justify-end gap-4 mt-auto">
                                    <motion.a
                                        href={activeModalProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-6 py-3.5 bg-primary-red text-white font-black uppercase tracking-widest text-xs rounded-xl flex items-center gap-2"
                                    >
                                        <Github size={14} /> Repository Code
                                    </motion.a>
                                    <button
                                        onClick={() => setActiveModalProject(null)}
                                        className="px-6 py-3.5 bg-gray-200 dark:bg-gray-900 dark:text-white text-gray-950 font-black uppercase tracking-widest text-xs rounded-xl cursor-pointer"
                                    >
                                        Close Case Study
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Projects;
