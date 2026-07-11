import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Terminal } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Header Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 text-left"
                    >
                        <div className="flex items-center gap-2 text-primary-red mb-2">
                            <Terminal size={16} />
                            <span className="text-xs font-black uppercase tracking-[0.3em]">Engineering Philosophy</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-black dark:text-white text-gray-955 uppercase tracking-tighter">
                            THE <span className="text-primary-red">SYS</span>TEMS <span className="text-primary-blue">MIND</span>SET
                        </h2>
                        <div className="w-20 h-2 bg-gradient-to-r from-primary-red to-primary-blue rounded-full"></div>
                        <p className="text-lg dark:text-gray-400 text-gray-600 font-medium leading-relaxed">
                            I design and scale backend architectures. My approach focuses on creating robust API contracts, optimizing database transaction queries, and writing testable, maintainable code using design patterns.
                        </p>
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-8 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-base md:text-lg dark:text-gray-300 text-gray-700 leading-relaxed font-medium"
                        >
                            <p>
                                I specialize in the <span className="text-primary-red font-black">Java Enterprise Ecosystem</span>. My engineering journey centers on understanding how network threads, memory heaps, and database transactional boundaries operate under load.
                            </p>
                            <p>
                                Rather than chasing quick hacks, I prioritize debugging database query plans, optimizing indexing strategies, and configuring resilient security filter chains using <span className="text-primary-blue font-black">Spring Security</span>.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Current Focus Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-[28px] dark:bg-gray-900/40 bg-gray-50 border border-gray-200 dark:border-gray-800 transition-all hover:border-primary-red/30"
                            >
                                <h3 className="text-xs font-black text-primary-red mb-4 uppercase tracking-widest">
                                    Primary Backend Stack
                                </h3>
                                <ul className="space-y-3 dark:text-gray-400 text-gray-600 text-xs font-bold uppercase tracking-wider">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0" />
                                        Java (JDK 17/21)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0" />
                                        Spring Boot & REST Core
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0" />
                                        Hibernate ORM / JPA
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0" />
                                        Spring Security (JWT/RBAC)
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Involvement Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-6 rounded-[28px] dark:bg-gray-900/40 bg-gray-50 border border-gray-200 dark:border-gray-800 transition-all hover:border-primary-blue/30"
                            >
                                <h3 className="text-xs font-black text-primary-blue mb-4 uppercase tracking-widest">
                                    System Competency
                                </h3>
                                <ul className="space-y-3 dark:text-gray-400 text-gray-600 text-xs font-bold uppercase tracking-wider">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-blue shrink-0" />
                                        Relational DB Design (SQL)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-blue shrink-0" />
                                        Docker Containers (Learning)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-blue shrink-0" />
                                        System Design Basics
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-blue shrink-0" />
                                        API Testing (Postman)
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
