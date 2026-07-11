import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, ShieldCheck, Database, Server, Key, Cpu, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ProjectSkillGraph = () => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const techStack = [
        { name: 'Java', type: 'Language' },
        { name: 'Spring Boot', type: 'Backend Framework' },
        { name: 'Spring Security', type: 'Authentication Core' },
        { name: 'Spring Data JPA', type: 'ORM Data Layer' },
        { name: 'Hibernate', type: 'Persistence Provider' },
        { name: 'PostgreSQL', type: 'Primary Database' },
        { name: 'GitHub API v3', type: 'Integration Endpoint' },
        { name: 'React', type: 'Frontend library' },
        { name: 'Tailwind CSS', type: 'UI System' }
    ];

    const architectureNodes = [
        { title: 'Client UI', desc: 'React App (Tailwind & Framer)', icon: <Cpu className="w-5 h-5 text-primary-blue" /> },
        { title: 'Security Proxy', desc: 'Spring Security Filter (JWT)', icon: <Key className="w-5 h-5 text-primary-red" /> },
        { title: 'Core Services', desc: 'Spring Boot REST Controller & Services', icon: <Server className="w-5 h-5 text-primary-blue" /> },
        { title: 'Rate Limiter', desc: 'Token-Bucket Algorithm (Resilience)', icon: <Zap className="w-5 h-5 text-primary-red" /> },
        { title: 'Database Core', desc: 'PostgreSQL (Hibernate & JPA)', icon: <Database className="w-5 h-5 text-primary-blue" /> }
    ];

    return (
        <div className="min-h-screen dark:bg-gray-950 bg-white transition-colors duration-500 pb-32">
            
            {/* Custom Header Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 dark:bg-gray-950/80 bg-white/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a 
                        href="/" 
                        className="flex items-center gap-2 text-sm font-black uppercase tracking-wider dark:text-gray-300 text-gray-700 hover:text-primary-red transition"
                    >
                        <ArrowLeft size={16} /> Back to Portfolio
                    </a>
                    
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary-red px-3 py-1 bg-primary-red/5 rounded-full border border-primary-red/10">
                            Dedicated Project Space
                        </span>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-black/5 dark:bg-white/5 text-gray-800 dark:text-gray-100 border border-black/10 dark:border-white/10 hover:scale-105 transition-all"
                        >
                            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto pt-32 px-6 space-y-20">
                
                {/* Hero / Cover */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 text-center md:text-left"
                >
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <ShieldCheck className="text-primary-red w-8 h-8" />
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">Production Case Study</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-8xl font-black dark:text-white text-gray-950 uppercase tracking-tighter leading-none">
                        SKILL.<span className="text-primary-blue">GRAPH</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl font-bold dark:text-gray-400 text-gray-600 max-w-3xl leading-relaxed">
                        Developer Identity Platform & Verification Engine aggregating technical footprints, GitHub metadata, and coding patterns into a unified developer profile.
                    </p>

                    {/* Tech Badges Grid */}
                    <div className="flex flex-wrap gap-2.5 pt-4">
                        {techStack.map((tech, idx) => (
                            <div key={idx} className="p-3 rounded-2xl dark:bg-gray-900/50 bg-gray-50 border border-gray-200 dark:border-gray-800 text-left">
                                <p className="text-xs font-black dark:text-white text-gray-950">{tech.name}</p>
                                <p className="text-[8px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">{tech.type}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Core Overview Grid */}
                <section className="grid md:grid-cols-2 gap-12 border-t border-black/5 dark:border-white/5 pt-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black dark:text-white text-gray-950 uppercase tracking-tight">
                            The Challenge & Core Problem
                        </h2>
                        <p className="text-base dark:text-gray-300 text-gray-600 font-medium leading-relaxed">
                            Traditional engineer portfolios are self-reported and suffer from validation issues. Recruiters face difficulties verifying whether a candidate actually has hands-on experience with specific languages or frameworks, leading to a long and costly screening process. Traditional resume documents fail to show dynamic coding velocity, repository management, or architectural skills.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-black dark:text-white text-gray-950 uppercase tracking-tight">
                            The Engineered Solution
                        </h2>
                        <p className="text-base dark:text-gray-300 text-gray-600 font-medium leading-relaxed">
                            SkillGraph solves this by integrating directly with the GitHub API. The backend client parses public repositories, analyzing commit frequencies, language splits, and repository size. It aggregates this data and maps it against a customizable skills framework, creating a verified, tamper-proof profile. The profile is hosted and served via secure endpoints using Spring Security and JWT.
                        </p>
                    </div>
                </section>

                {/* System Architecture Section */}
                <section className="space-y-8 border-t border-black/5 dark:border-white/5 pt-12">
                    <div>
                        <h2 className="text-3xl font-black dark:text-white text-gray-950 uppercase tracking-tight">
                            System Architecture
                        </h2>
                        <p className="text-sm dark:text-gray-400 text-gray-500 font-medium mt-1">
                            Data flow mapping client request authorization, controller routing, token rate-limiting, and relational database persistence.
                        </p>
                    </div>

                    {/* Architecture Flowchart Diagram */}
                    <div className="grid md:grid-cols-5 gap-4 items-center">
                        {architectureNodes.map((node, idx) => (
                            <React.Fragment key={idx}>
                                <div className="p-6 rounded-3xl dark:bg-gray-900/50 bg-gray-50 border border-gray-200 dark:border-gray-800 text-center space-y-3 relative shadow-md">
                                    <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center mx-auto">
                                        {node.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black dark:text-white text-gray-900 leading-none">{node.title}</h4>
                                        <p className="text-[10px] dark:text-gray-400 text-gray-500 font-medium mt-1.5 leading-snug">{node.desc}</p>
                                    </div>
                                </div>
                                {idx < architectureNodes.length - 1 && (
                                    <div className="hidden md:flex justify-center text-primary-red font-black text-xl animate-pulse">
                                        &rarr;
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                {/* Technical Challenges & Optimization */}
                <section className="space-y-8 border-t border-black/5 dark:border-white/5 pt-12">
                    <div>
                        <h2 className="text-3xl font-black dark:text-white text-gray-950 uppercase tracking-tight">
                            Technical Challenges & Backend Resolution
                        </h2>
                        <p className="text-sm dark:text-gray-400 text-gray-500 font-medium mt-1">
                            How complex systems and performance obstacles were identified, debugged, and optimized.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Challenge 1 */}
                        <div className="p-8 rounded-[36px] dark:bg-gray-900/30 bg-gray-50/50 border border-gray-200 dark:border-gray-800 space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary-red px-2.5 py-1 bg-primary-red/10 rounded-full border border-primary-red/20">
                                Challenge 01
                            </span>
                            <h3 className="text-xl font-black dark:text-white text-gray-950">
                                GitHub API Rate Limits
                            </h3>
                            <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed font-medium">
                                Fetching comprehensive, deep-level commit data, code languages, and contributors for multiple repositories in real-time quickly exhausted the GitHub public API rate limits (5,000 requests/hour for authenticated users). This resulted in API dropouts and profile loading timeouts.
                            </p>
                            <h4 className="text-xs font-black uppercase tracking-widest text-primary-blue pt-2 border-t border-black/5 dark:border-white/5">
                                Resolution Implementation:
                            </h4>
                            <p className="text-xs dark:text-gray-300 text-gray-700 leading-relaxed font-medium">
                                Implemented a dual caching and throttling system. Dynamic developer profiles are cached in PostgreSQL with a 24-hour expiration cycle. To handle active, uncached profiling requests, I developed a token-bucket rate limiter. Requests are queued, ensuring API utilization is optimized and requests never trigger GitHub's abuse limits.
                            </p>
                        </div>

                        {/* Challenge 2 */}
                        <div className="p-8 rounded-[36px] dark:bg-gray-900/30 bg-gray-50/50 border border-gray-200 dark:border-gray-800 space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary-blue px-2.5 py-1 bg-primary-blue/10 rounded-full border border-primary-blue/20">
                                Challenge 02
                            </span>
                            <h3 className="text-xl font-black dark:text-white text-gray-950">
                                Hibernate N+1 Query Problems
                            </h3>
                            <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed font-medium">
                                Initial versions of the profile aggregator suffered from severe database read performance drops. When querying developer details, Hibernate executed independent sub-queries to fetch lists of linked repositories, skills, and certifications, triggering over 20 sub-queries per profile read.
                            </p>
                            <h4 className="text-xs font-black uppercase tracking-widest text-primary-red pt-2 border-t border-black/5 dark:border-white/5">
                                Resolution Implementation:
                            </h4>
                            <p className="text-xs dark:text-gray-300 text-gray-700 leading-relaxed font-medium">
                                Resolved by using JPA EntityGraphs (`@EntityGraph`) to force Hibernate to perform eager outer joins in a single SELECT query during retrieval of profiles. Additionally, configured `@BatchSize` on lazy loaded collections to batch retrieve associated entities when lazy references are navigated, dropping the query footprint from N+1 down to 2 operations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Features */}
                <section className="space-y-8 border-t border-black/5 dark:border-white/5 pt-12">
                    <h2 className="text-3xl font-black dark:text-white text-gray-950 uppercase tracking-tight">
                        Platform Features & Backend Execution
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-3xl dark:bg-gray-900/20 bg-gray-50 border border-gray-200 dark:border-gray-800 space-y-3">
                            <h4 className="text-lg font-black dark:text-white text-gray-950">Dynamic Profile Synthesis</h4>
                            <p className="text-xs dark:text-gray-400 text-gray-500 leading-relaxed">
                                Automatically maps a user's GitHub username to profile tables, parsing repository structures, readmes, and languages, then translating this data into database fields.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl dark:bg-gray-900/20 bg-gray-50 border border-gray-200 dark:border-gray-800 space-y-3">
                            <h4 className="text-lg font-black dark:text-white text-gray-950">Skill Verification Algorithms</h4>
                            <p className="text-xs dark:text-gray-400 text-gray-500 leading-relaxed">
                                Processes the repository language distribution (via code line sizes) and tags to verify skill weights, validating that a candidate's profile matches their actual code footprints.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl dark:bg-gray-900/20 bg-gray-50 border border-gray-200 dark:border-gray-800 space-y-3">
                            <h4 className="text-lg font-black dark:text-white text-gray-950">Recruiter Filter Engine</h4>
                            <p className="text-xs dark:text-gray-400 text-gray-500 leading-relaxed">
                                Exposes REST query parameters to allow filtering developer records by specific verified skill categories, minimum LeetCode scores, or academic CGPA metrics.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Action CTA buttons */}
                <section className="pt-12 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-6 justify-center">
                    <motion.a
                        href="https://github.com/tokir07"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-primary-red rounded-3xl font-black text-white shadow-lg flex items-center gap-3 uppercase tracking-widest text-xs"
                    >
                        <Github size={18} /> Inspect Source Code
                    </motion.a>
                    
                    <motion.a
                        href="https://github.com/tokir07"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 border-2 border-gray-200 dark:border-gray-800 rounded-3xl font-black dark:text-white text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-3 uppercase tracking-widest text-xs"
                    >
                        <ExternalLink size={18} /> Launch Simulation
                    </motion.a>
                </section>

            </main>
        </div>
    );
};

export default ProjectSkillGraph;
