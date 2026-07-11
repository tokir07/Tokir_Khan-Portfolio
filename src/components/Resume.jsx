import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ShieldCheck } from 'lucide-react';

const Resume = () => {
    const professionalSummary = "Dedicated Computer Science Engineering student specializing in Java Backend Development with a 9.37 CGPA. Proven expertise in building secure REST APIs with Spring Boot, Spring Security (JWT), and optimizing database persistence layers using Hibernate and Spring Data JPA. Active problem solver with 150+ LeetCode problems solved.";

    return (
        <section id="resume" className="section-padding relative">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary-red/5 to-primary-blue/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden group p-[1px] rounded-[56px] bg-gradient-to-br from-white/20 via-primary-red/10 to-primary-blue/10 dark:from-white/5 dark:via-primary-red/5 dark:to-primary-blue/5"
                >
                    <div className="relative dark:bg-gray-950/85 bg-white/90 backdrop-blur-3xl rounded-[55px] p-8 md:p-20 flex flex-col items-center gap-12">

                        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl">
                            <div className="flex items-center gap-4">
                                <ShieldCheck className="text-primary-red w-6 h-6" />
                                <span className="text-sm font-black uppercase tracking-[0.4em] text-primary-red">Verified Professional Index</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black dark:text-white text-gray-950 uppercase tracking-tighter leading-none mb-4">
                                CORE.<span className="text-primary-blue">RESU</span>ME
                            </h2>

                            <div className="p-8 rounded-[32px] dark:bg-white/[0.02] bg-black/[0.01] border border-black/5 dark:border-white/5">
                                <p className="dark:text-gray-300 text-gray-600 font-medium text-xl leading-relaxed italic">
                                    "{professionalSummary}"
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
                            <motion.a
                                href="/Tokir_Khan_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-12 py-7 bg-primary-red rounded-[32px] overflow-hidden flex items-center justify-center gap-4"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                <div className="relative flex items-center justify-center gap-4 text-white font-black uppercase tracking-[0.2em] text-sm">
                                    <Eye size={22} className="group-hover:rotate-12 transition-transform" />
                                    <span>Execute view</span>
                                </div>
                            </motion.a>

                            <motion.a
                                href="/Tokir_Khan_Resume.pdf"
                                download
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-12 py-7 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-[32px] flex items-center justify-center gap-4 dark:text-white text-gray-955 hover:border-primary-blue hover:text-primary-blue transition-all"
                            >
                                <div className="flex items-center justify-center gap-4 font-black uppercase tracking-[0.2em] text-sm">
                                    <Download size={22} className="group-hover:translate-y-1 transition-transform" />
                                    <span>Pull Archive</span>
                                </div>
                            </motion.a>
                        </div>

                        {/* Quick Stats Overlay (Minimalist) */}
                        <div className="flex flex-wrap justify-center gap-12 mt-4 pt-12 border-t border-black/5 dark:border-white/5 w-full">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-black dark:text-white text-gray-950">9.37</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">CGPA</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-black dark:text-white text-gray-955">Backend</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Focus</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-black dark:text-white text-gray-955">150+</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">LeetCode Solved</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
