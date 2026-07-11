import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitPullRequest, GitFork, Star, Eye } from 'lucide-react';

const GitHub = () => {
    return (
        <section id="github" className="section-padding relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <div className="h-px w-12 bg-primary-red"></div>
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">Open Source Metrics</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black dark:text-white text-gray-950 uppercase tracking-tighter leading-none mb-6">
                        GIT.<span className="text-primary-blue">ACT</span>IVITY
                    </h2>
                    <div className="h-2 w-32 bg-gradient-to-r from-primary-red to-primary-blue rounded-full"></div>
                </motion.div>

                {/* GitHub stats widgets and repository showcase */}
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Left: GitHub widgets */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        <div className="p-8 rounded-[40px] dark:bg-gray-900/40 bg-gray-50/50 border border-gray-200 dark:border-gray-800 shadow-xl space-y-8 flex-1">
                            <div>
                                <h3 className="text-2xl font-black dark:text-white text-gray-950 uppercase tracking-tight mb-2">
                                    Contribution Engine
                                </h3>
                                <p className="text-sm font-medium dark:text-gray-400 text-gray-600">
                                    Dynamic metrics tracked directly on GitHub representing daily code iterations and development velocity.
                                </p>
                            </div>

                            {/* Contribution Widget Embeds */}
                            <div className="grid gap-6">
                                <div className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/5 bg-black/40 flex justify-center items-center p-4">
                                    <img 
                                        src="https://github-readme-stats.vercel.app/api?username=tokir07&show_icons=true&theme=dark&bg_color=030712&border_color=1e293b&title_color=ee4444&text_color=94a3b8&icon_color=3b82f6" 
                                        alt="GitHub Stats" 
                                        className="w-full max-w-lg object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <div className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/5 bg-black/40 flex justify-center items-center p-4">
                                    <img 
                                        src="https://github-readme-streak-stats.herokuapp.com/?user=tokir07&theme=dark&background=030712&border=1e293b&fire=ee4444&ring=ee4444&currStreakLabel=ee4444&currStreakNum=3b82f6" 
                                        alt="GitHub Streak" 
                                        className="w-full max-w-lg object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Repository Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 p-8 md:p-12 rounded-[40px] dark:bg-gray-950/50 bg-white border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-primary-blue">
                                <Github size={32} />
                                <span className="text-sm font-black uppercase tracking-[0.3em]">Codebase Registry</span>
                            </div>
                            
                            <h3 className="text-3xl font-black dark:text-white text-gray-950 uppercase tracking-tight leading-tight">
                                Explore Open Projects
                            </h3>
                            
                            <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed font-medium">
                                My GitHub repository houses implementation details of core logic systems, fintech simulation models, and backend databases. I structure repositories with distinct directories, documentation files, and clean package structures.
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-3 text-sm font-bold dark:text-gray-300 text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-red"></div>
                                    <span>Spring Boot REST architecture designs</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold dark:text-gray-300 text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
                                    <span>SQL schema models and migrations</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold dark:text-gray-300 text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-red"></div>
                                    <span>Systematic dependency tracking via Maven</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex items-center justify-between mt-8">
                            <div className="flex gap-4">
                                <span className="flex items-center gap-1.5 text-xs font-bold dark:text-gray-500 text-gray-400">
                                    <Star size={14} /> Core repos
                                </span>
                                <span className="flex items-center gap-1.5 text-xs font-bold dark:text-gray-500 text-gray-400">
                                    <GitFork size={14} /> Projects
                                </span>
                            </div>
                            <motion.a
                                href="https://github.com/tokir07"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-4 border-2 border-primary-red dark:border-primary-red rounded-2xl font-black uppercase tracking-widest text-xs dark:text-white text-gray-950 hover:bg-primary-red hover:text-white transition-all flex items-center gap-2"
                            >
                                <span>Inspect Registry</span>
                                <Github size={14} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GitHub;
