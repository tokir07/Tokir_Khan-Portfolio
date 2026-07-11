import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, GitCommit, GitBranch, GitPullRequest } from 'lucide-react';

const Journey = () => {
    const commits = [
        {
            hash: '4a6b2c8',
            phase: 'Phase 01',
            date: 'Jan 2024',
            title: 'Initialize Java Core & OOP',
            author: 'Tokir Khan <tokirkhan00291@gmail.com>',
            details: [
                'Mastered foundational OOP design patterns, inheritance, polymorphism, and class loading abstractions.',
                'Developed basic execution scripts utilizing Java Collections (HashMap, ArrayList) and thread safety protocols.',
                'Constructed exception handlers and basic file read/write serialization tasks.'
            ],
            color: 'text-primary-red',
            bgColor: 'bg-primary-red/10',
            borderColor: 'border-primary-red/20'
        },
        {
            hash: 'f9c7e3a',
            phase: 'Phase 02',
            date: 'Apr 2024',
            title: 'Algorithmic Optimization (DSA)',
            author: 'Tokir Khan <tokirkhan00291@gmail.com>',
            details: [
                'Solved over 200+ computational data structures problems (150+ verified on LeetCode profile).',
                'Mastered sliding window arrays, dynamic programming recursion trees, and cyclic graph traversals.',
                'Refined memory complexity and code runtime speeds on core sorting algorithms.'
            ],
            color: 'text-primary-blue',
            bgColor: 'bg-primary-blue/10',
            borderColor: 'border-primary-blue/20'
        },
        {
            hash: 'd3b8f5c',
            phase: 'Phase 03',
            date: 'Jul 2024',
            title: 'Database Schema Design & ORM',
            author: 'Tokir Khan <tokirkhan00291@gmail.com>',
            details: [
                'Wrote normalized relational schemas with optimized foreign key mappings.',
                'Configured Hibernate object-relational mapping frameworks with JPA persistence units.',
                'Analyzed SQL query plans, indices tuning, and transaction isolation states.'
            ],
            color: 'text-primary-red',
            bgColor: 'bg-primary-red/10',
            borderColor: 'border-primary-red/20'
        },
        {
            hash: 'e7a2d9b',
            phase: 'Phase 04',
            date: 'Oct 2024',
            title: 'Spring Boot Framework Integration',
            author: 'Tokir Khan <tokirkhan00291@gmail.com>',
            details: [
                'Wired components using Spring Inversion of Control (IoC) and dependency injection contexts.',
                'Configured Spring Boot auto-configuration profiles and application settings properties.',
                'Integrated Spring Data JPA repositories with custom derived search methods.'
            ],
            color: 'text-primary-blue',
            bgColor: 'bg-primary-blue/10',
            borderColor: 'border-primary-blue/20'
        },
        {
            hash: '9f8e1c3',
            phase: 'Phase 05',
            date: 'Jan 2025',
            title: 'Secure REST APIs & JWT filter Chains',
            author: 'Tokir Khan <tokirkhan00291@gmail.com>',
            details: [
                'Designed clean REST controllers supporting validation triggers and consistent JSON schemas.',
                'Wired Spring Security filter chains handling stateless JWT extraction, user validation, and CORS gates.',
                'Configured Role-Based Access Control filters protecting administrative routes.'
            ],
            color: 'text-primary-red',
            bgColor: 'bg-primary-red/10',
            borderColor: 'border-primary-red/20'
        },
        {
            hash: 'b4d9a6f',
            phase: 'Phase 06',
            date: 'Active',
            title: 'DevOps Virtualization & Scaling',
            author: 'Tokir Khan <tokirkhan00291@gmail.com>',
            details: [
                'Currently study Docker setups, Dockerfiles, and container bridge network setups.',
                'Analyzing distributed system load balancers, caching configurations (Redis), and microservice discovery.',
                'Deploying local container clusters for service boundaries evaluation.'
            ],
            color: 'text-primary-blue',
            bgColor: 'bg-primary-blue/10',
            borderColor: 'border-primary-blue/20'
        }
    ];

    return (
        <section id="journey" className="section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto text-left">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <div className="h-px w-12 bg-primary-red"></div>
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">Git Commit Tree</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black dark:text-white text-gray-955 uppercase tracking-tighter leading-none mb-6">
                        GIT.<span className="text-primary-blue">LOG</span>.<span className="text-primary-red">GRAPH</span>
                    </h2>
                    <div className="h-2 w-32 bg-gradient-to-r from-primary-red to-primary-blue rounded-full"></div>
                </motion.div>

                {/* Git Log tree wrapper */}
                <div className="relative font-mono max-w-5xl mx-auto">
                    {/* Visual Vertical Graph line */}
                    <div className="absolute left-[20px] md:left-[30px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-primary-red via-primary-blue to-primary-red opacity-15"></div>

                    <div className="space-y-16">
                        {commits.map((commit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="flex gap-6 md:gap-10 relative"
                            >
                                {/* Left branch column with commit dot */}
                                <div className="relative z-10 shrink-0 w-10 md:w-16 flex justify-center pt-2">
                                    <motion.div 
                                        whileHover={{ scale: 1.2 }}
                                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${commit.bgColor} border-2 border-black/20 dark:border-white/10 flex items-center justify-center`}
                                    >
                                        <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${commit.color.replace('text-', 'bg-')}`}></div>
                                    </motion.div>
                                </div>

                                {/* Content: Git Commit Output Box */}
                                <div className="flex-1 p-6 md:p-8 rounded-3xl dark:bg-gray-900/40 bg-gray-50/50 border border-gray-200 dark:border-gray-800 hover:border-primary-red/35 transition-all shadow-xl">
                                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-4 mb-4 text-xs md:text-sm">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-primary-red font-black">commit</span>
                                                <span className="dark:text-white text-gray-900 font-bold">{commit.hash}</span>
                                                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-primary-blue/5 border border-primary-blue/15 text-primary-blue">{commit.phase}</span>
                                            </div>
                                            <p className="dark:text-gray-400 text-gray-500 font-medium">Author: {commit.author}</p>
                                            <p className="dark:text-gray-400 text-gray-500 font-medium">Date:   {commit.date}</p>
                                        </div>
                                        <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400">
                                            <GitCommit size={14} />
                                            <span>{"HEAD -> main"}</span>
                                        </div>
                                    </div>

                                    {/* Commit message / details */}
                                    <div className="space-y-4">
                                        <h3 className="text-base md:text-lg font-black dark:text-white text-gray-950 uppercase tracking-tight leading-tight">
                                            {commit.title}
                                        </h3>
                                        <ul className="space-y-2.5 pl-4 list-disc font-sans font-medium dark:text-gray-300 text-gray-700 text-sm leading-relaxed">
                                            {commit.details.map((detail, dIdx) => (
                                                <li key={dIdx} className="marker:text-primary-red">
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
