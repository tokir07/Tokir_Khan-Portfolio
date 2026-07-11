import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Terminal, Flame, Award, Code2 } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    // Terminal States
    const [history, setHistory] = useState([]);
    const [typedText, setTypedText] = useState('');
    const [isInteractive, setIsInteractive] = useState(false);
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [terminalInput, setTerminalInput] = useState('');
    const terminalEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        let isCancelled = false;
        
        const runSimulation = async () => {
            // Step 1: Type whoami
            const cmd1 = 'whoami';
            for (let i = 0; i <= cmd1.length; i++) {
                if (isCancelled) return;
                setTypedText(cmd1.substring(0, i));
                await new Promise(resolve => setTimeout(resolve, 80));
            }
            await new Promise(resolve => setTimeout(resolve, 150));
            if (isCancelled) return;
            setHistory(prev => [
                ...prev, 
                { type: 'input', text: 'whoami' }, 
                { type: 'output', text: 'tokir07 (Backend Software Engineer)' }
            ]);
            setTypedText('');
            await new Promise(resolve => setTimeout(resolve, 400));

            // Step 2: Type load_profile
            const cmd2 = 'load_profile';
            for (let i = 0; i <= cmd2.length; i++) {
                if (isCancelled) return;
                setTypedText(cmd2.substring(0, i));
                await new Promise(resolve => setTimeout(resolve, 80));
            }
            await new Promise(resolve => setTimeout(resolve, 150));
            if (isCancelled) return;
            setHistory(prev => [
                ...prev, 
                { type: 'input', text: 'load_profile' }, 
                { type: 'output', text: 'Accessing secure profiling index...' }
            ]);
            setTypedText('');
            await new Promise(resolve => setTimeout(resolve, 300));

            // Step 3: Animate Progress Bar In-Place
            for (let p = 0; p <= 100; p += 10) {
                if (isCancelled) return;
                const blocks = Math.floor(p / 10);
                const barText = `[${'█'.repeat(blocks)}${' '.repeat(10 - blocks)}] ${p}%`;
                
                setHistory(prev => {
                    const filtered = prev.filter(l => !l.isProgress);
                    return [...filtered, { type: 'output', text: barText, isProgress: true }];
                });
                await new Promise(resolve => setTimeout(resolve, 120));
            }

            if (isCancelled) return;
            // Finalize loading state
            setHistory(prev => [
                ...prev,
                { type: 'output', text: 'Clearance granted. Profile unlocked.' }
            ]);
            setIsProfileVisible(true);
            await new Promise(resolve => setTimeout(resolve, 500));
            
            if (isCancelled) return;
            setIsInteractive(true);
        };

        runSimulation();
        return () => { isCancelled = true; };
    }, []);

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history, typedText, isProfileVisible]);

    const handleCommand = (cmd) => {
        const trimmed = cmd.trim().toLowerCase();
        let response = '';
        
        if (trimmed === 'help') {
            response = 'Available scripts:\n- whoami   : Profile info\n- stack    : Tech dependencies\n- status   : Server health\n- skills   : Technical categories\n- projects : Registry listing\n- contact  : Comm channels\n- resume   : Pull verified archive\n- clear    : Purge log buffers';
        } else if (trimmed === 'whoami') {
            response = 'Developer: Tokir Khan\nBranch: Computer Science Engineering (CSE)\nCGPA: 9.37\nTarget: Backend Developer / SWE Internships';
        } else if (trimmed === 'stack') {
            response = 'Java • Spring Boot • Spring Security • Hibernate • Spring Data JPA • MySQL • PostgreSQL • React • Tailwind CSS';
        } else if (trimmed === 'status') {
            response = '🟢 Health: ONLINE\nLatency: 4ms\nMemory Allocation: Heap optimized\nFocus: Spring Security JWT filter chains & System Design';
        } else if (trimmed === 'skills') {
            response = 'Backend: Spring Boot REST APIs, JWT Security, Hibernate ORM\nDatabase: PostgreSQL, MySQL, relational indexing\nTools: Git, Postman, Maven, Docker (learning)';
        } else if (trimmed === 'projects') {
            response = 'Aggregated Case Studies:\n1. SkillGraph (Developer Identity Platform)\n2. Badri Apparels (B2C E-Commerce)\n3. Student Management System (Academic Portal)\n4. Mind Saarthi (AI Wellness Companion)';
        } else if (trimmed === 'contact') {
            response = 'Email: tokirkhan00291@gmail.com\nMobile: +91 9079968792\nGitHub: github.com/tokir07\nLinkedIn: linkedin.com/in/tokirkhan07';
        } else if (trimmed === 'resume') {
            response = 'Redirecting to view verified resume archive...';
            window.open('/Tokir_Khan_Resume.pdf', '_blank');
        } else if (trimmed === 'clear') {
            setHistory([]);
            setIsProfileVisible(false); // Clear photo if cleared
            return;
        } else if (trimmed === '') {
            response = '';
        } else {
            response = `bash: command not found: ${trimmed}. Type "help" for scripts.`;
        }

        setHistory(prev => [
            ...prev,
            { type: 'input', text: cmd },
            { type: 'output', text: response }
        ]);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isInteractive) {
            handleCommand(terminalInput);
            setTerminalInput('');
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center pt-40 md:pt-48 pb-20 relative overflow-hidden px-6 md:px-12 lg:px-24"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                {/* Left: Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8 text-left"
                >
                    <motion.div variants={itemVariants} className="space-y-4">
                        <div className="flex items-center gap-2 text-primary-red mb-2 animate-pulse">
                            <Terminal size={16} />
                            <span className="text-xs font-black uppercase tracking-[0.3em]">Developer Workspace Initialized</span>
                        </div>
                        
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter"
                        >
                            I build scalable <br />
                            <span className="text-primary-red">Backend Systems</span>
                        </motion.h1>
                        
                        <p className="text-xl md:text-2xl font-bold dark:text-gray-400 text-gray-600">
                            Java Engineer focused on <span className="text-primary-blue">Spring Boot</span> & <span className="text-primary-red">System Design</span>
                        </p>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg dark:text-gray-300 text-gray-700 leading-relaxed max-w-xl font-medium"
                    >
                        Developing reliable REST APIs, implementing secure OAuth2/JWT authorization workflows, and optimizing JPA/Hibernate SQL operations. Rooted in strong algorithmic patterns and structured database designs.
                    </motion.p>

                    {/* Stats Grid */}
                    <motion.div 
                        variants={itemVariants}
                        className="grid grid-cols-3 gap-4 border-y border-black/5 dark:border-white/5 py-6 max-w-xl"
                    >
                        <div className="space-y-1">
                            <div className="flex items-center gap-1.5 dark:text-white text-gray-905">
                                <Flame className="w-4 h-4 text-primary-red animate-bounce" />
                                <span className="text-2xl font-black">150+</span>
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">LeetCode Solved</p>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-1.5 dark:text-white text-gray-905">
                                <Award className="w-4 h-4 text-primary-blue" />
                                <span className="text-2xl font-black">9.37</span>
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Academic CGPA</p>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-1.5 dark:text-white text-gray-905">
                                <Code2 className="w-4 h-4 text-primary-red" />
                                <span className="text-2xl font-black">200+</span>
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">DSA Core Solved</p>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-6"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-4 bg-primary-red rounded-2xl font-black uppercase tracking-widest text-xs text-white shadow-lg shadow-primary-red/10 hover:bg-red-600 transition-all"
                        >
                            Inspect Code bases
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-4 border-2 border-gray-200 dark:border-gray-800 rounded-2xl font-black uppercase tracking-widest text-xs dark:text-white text-gray-955 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                        >
                            Contact Engineer
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right: Interactive Terminal Hero */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex justify-center w-full"
                >
                    <div className="w-full max-w-lg rounded-3xl overflow-hidden border border-black/15 dark:border-white/10 shadow-2xl bg-gray-950/90 font-mono text-left flex flex-col h-[540px] relative backdrop-blur-md">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-5 py-3.5 bg-black/40 border-b border-black/10 dark:border-white/5 shrink-0 select-none">
                            <div className="flex items-center gap-2">
                                <span className="w-3.5 h-3.5 rounded-full bg-red-500 block"></span>
                                <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 block"></span>
                                <span className="w-3.5 h-3.5 rounded-full bg-green-500 block"></span>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest dark:text-gray-400 text-gray-500">
                                bash - tokir@dev-box: ~
                            </span>
                            <div className="w-12"></div>
                        </div>

                        {/* Terminal Body */}
                        <div 
                            className="flex-1 p-6 overflow-y-auto space-y-4 text-xs select-text cursor-text"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {/* Welcome Banner */}
                            <div className="text-gray-500 text-[10px] select-none leading-relaxed border-b border-white/5 pb-2">
                                Welcome to developer workspace v4.0.0.
                                <br />
                                Type 'help' to see executing commands.
                            </div>

                            {/* Rendered History */}
                            {history.map((line, idx) => (
                                <div key={idx} className="space-y-1.5 leading-relaxed font-mono">
                                    {line.type === 'input' ? (
                                        <div className="flex items-center gap-2 text-primary-blue font-bold">
                                            <span className="text-primary-red select-none">$</span>
                                            <span>{line.text}</span>
                                        </div>
                                    ) : (
                                        <div className="text-gray-300 pl-4 whitespace-pre-wrap font-medium leading-relaxed">
                                            {line.text}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Inline Fading profile photo after loading completes */}
                            <AnimatePresence>
                                {isProfileVisible && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="flex flex-col items-center gap-2.5 py-4 border-t border-b border-white/5 my-4"
                                    >
                                        <div className="relative w-52 h-72 rounded-2xl overflow-hidden border-2 border-primary-red/50 shadow-xl bg-black">
                                            <img
                                                src="/Profile.png"
                                                alt="Profile"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/150/030712/ffffff?text=TK';
                                                }}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-primary-blue">ID: TOKIR_KHAN_SWE</p>
                                            <p className="text-[8px] font-black uppercase tracking-widest text-gray-500 mt-0.5">Status: Authorized Clearance</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Current input animation / interactive input */}
                            {!isInteractive ? (
                                <div className="flex items-center gap-2 text-primary-blue font-bold font-mono">
                                    <span className="text-primary-red select-none">$</span>
                                    <span>{typedText}</span>
                                    <span className="w-1.5 h-4 bg-primary-red inline-block animate-pulse"></span>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="flex items-center gap-2 text-primary-blue font-bold leading-none font-mono">
                                    <span className="text-primary-red select-none">$</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={terminalInput}
                                        onChange={(e) => setTerminalInput(e.target.value)}
                                        className="flex-1 bg-transparent border-none outline-none text-primary-blue text-xs font-mono font-bold p-0 m-0 caret-transparent"
                                        autoFocus
                                    />
                                    <span className="w-1.5 h-4 bg-primary-blue inline-block animate-pulse -ml-[6px]"></span>
                                </form>
                            )}
                            <div ref={terminalEndRef} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
