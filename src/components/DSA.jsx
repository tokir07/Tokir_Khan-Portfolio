import React from 'react';
import { motion } from 'framer-motion';
import { Binary, CheckCircle2, Code2, Award, ExternalLink, Flame, Activity, Zap, Cpu } from 'lucide-react';

const DSA = () => {
    const metrics = [
        { 
            label: 'LEETCODE.QUERIES', 
            value: '150+ OK', 
            sub: 'Medium/Hard execution cycles', 
            status: '🟢 STABLE', 
            latency: '34ms', 
            icon: <Flame className="w-4 h-4 text-primary-red" /> 
        },
        { 
            label: 'ALGORITHMS.REGISTRY', 
            value: '200+ COMPLETED', 
            sub: 'Standard structures indexed', 
            status: '🟢 ACTIVE', 
            latency: '12ms', 
            icon: <Binary className="w-4 h-4 text-primary-blue" /> 
        },
        { 
            label: 'COMPILER.CGPA', 
            value: '9.37 / 10', 
            sub: 'Academic standing checks', 
            status: '🟢 VERIFIED', 
            latency: '100% SUCCESS', 
            icon: <Award className="w-4 h-4 text-primary-red" /> 
        },
    ];

    const patterns = [
        { name: 'Two Pointers & Sliding Window', status: 'Mastered', desc: 'Array optimization and linear sequence analysis.' },
        { name: 'Dynamic Programming', status: 'Proficient', desc: 'Memoization, tabulation, and optimal substructure solutions.' },
        { name: 'Graph Theory (BFS/DFS)', status: 'Mastered', desc: 'Network traversals, shortest path algorithms, and cyclic checks.' },
        { name: 'Recursion & Backtracking', status: 'Proficient', desc: 'Combinatorial searches, N-Queens, and state-space exploration.' },
        { name: 'Tree Traversals & BST', status: 'Mastered', desc: 'Binary search trees, heap systems, and level order operations.' },
        { name: 'Greedy Algorithms', status: 'Mastered', desc: 'Interval scheduling, huffman coding, and local optimization.' }
    ];

    return (
        <section id="dsa" className="section-padding relative overflow-hidden font-mono">
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-left"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <div className="h-px w-12 bg-primary-red"></div>
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">Performance Monitors</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black dark:text-white text-gray-955 uppercase tracking-tighter leading-none mb-6">
                        DSA.<span className="text-primary-blue">ENG</span>INE
                    </h2>
                    <div className="h-2 w-32 bg-gradient-to-r from-primary-red to-primary-blue rounded-full"></div>
                </motion.div>

                {/* Grafana Dashboard Monitor Grid */}
                <div className="space-y-4 mb-16 text-left">
                    <div className="flex items-center justify-between p-4 rounded-2xl dark:bg-gray-900/60 bg-gray-50 border border-black/5 dark:border-white/5 text-xs text-gray-400">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-green-500 animate-pulse" /> ENGINE.STATUS: 🟢 Healthy</span>
                            <span className="hidden sm:inline">Uptime: 99.98%</span>
                            <span className="hidden md:inline">CPU Temp: 32°C</span>
                        </div>
                        <div>
                            <span>Metrics update: Realtime</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-3xl dark:bg-gray-950/60 bg-white border border-gray-200 dark:border-gray-800 flex flex-col justify-between hover:border-primary-red/40 transition-all duration-300 shadow-xl"
                            >
                                <div className="flex justify-between items-start mb-4 text-[10px] uppercase text-gray-500 border-b border-black/5 dark:border-white/5 pb-3">
                                    <div className="flex items-center gap-2">
                                        {metric.icon}
                                        <span className="font-bold tracking-wider">{metric.label}</span>
                                    </div>
                                    <span className="font-bold text-green-500 bg-green-500/5 px-2 py-0.5 rounded border border-green-500/10 select-none">
                                        {metric.status}
                                    </span>
                                </div>
                                <div className="py-2">
                                    <h3 className="text-4xl font-black dark:text-white text-gray-950 tracking-tight mb-2">
                                        {metric.value}
                                    </h3>
                                    <p className="text-[10px] dark:text-gray-400 text-gray-500 font-medium font-sans">
                                        {metric.sub}
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex justify-between text-[9px] text-gray-400">
                                    <span>LATENCY: {metric.latency}</span>
                                    <span>PID: {2000 + index * 14}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Patterns Grid */}
                <div className="grid lg:grid-cols-2 gap-8 items-stretch font-sans text-left">
                    
                    {/* Left: Mastered Patterns Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-12 rounded-[40px] dark:bg-gray-950/50 bg-white border border-gray-200 dark:border-gray-800 shadow-2xl space-y-8"
                    >
                        <div className="font-mono">
                            <h3 className="text-2xl font-black dark:text-white text-gray-955 uppercase tracking-tight mb-2">
                                Pattern Abstractions
                            </h3>
                            <p className="text-xs dark:text-gray-400 text-gray-600 font-medium">
                                Algorithmic classes configured and tested during local query execution processes.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {patterns.map((pattern, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-primary-red shrink-0" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <h4 className="text-base font-black dark:text-white text-gray-950 leading-none">
                                                {pattern.name}
                                            </h4>
                                            <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20 font-mono">
                                                {pattern.status}
                                            </span>
                                        </div>
                                        <p className="text-xs dark:text-gray-400 text-gray-500 font-medium leading-relaxed">
                                            {pattern.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: LeetCode Verification Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="h-full flex flex-col justify-between gap-8"
                    >
                        <div className="p-8 md:p-12 rounded-[40px] dark:bg-gray-900/30 bg-gray-50/50 border border-gray-200 dark:border-gray-800 shadow-xl space-y-6 flex-1 flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-primary-red mb-4">
                                <Code2 size={32} />
                                <span className="text-sm font-black uppercase tracking-[0.3em] font-mono">Algorithm Verify</span>
                            </div>
                            
                            <h3 className="text-3xl md:text-4xl font-black dark:text-white text-gray-950 uppercase tracking-tight leading-tight">
                                Systematic Query Analysis
                            </h3>
                            
                            <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed font-medium">
                                My approach to DSA is not about memory; it is about recognizing patterns. By mastering core frameworks (two-pointers, prefix sums, tree-traversals, graph cycles), I can design low-complexity algorithms that maximize resource utilization. I maintain daily consistency to keep code-execution speed and clean-code implementation sharp.
                            </p>

                            <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-4 items-center justify-between font-mono">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">LeetCode Username</p>
                                    <p className="text-base font-bold dark:text-white text-gray-900">i2Nu3KiZre</p>
                                </div>
                                <motion.a
                                    href="https://leetcode.com/u/i2Nu3KiZre/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3.5 bg-primary-red hover:bg-red-600 rounded-xl font-black uppercase tracking-widest text-xs text-white shadow-lg flex items-center gap-2"
                                >
                                    <span>Verify Profile</span>
                                    <ExternalLink size={14} />
                                </motion.a>
                            </div>
                        </div>

                        {/* Striver SDE sheet block */}
                        <div className="p-8 rounded-[32px] dark:bg-gray-950 bg-white border border-gray-200 dark:border-gray-800 flex items-center justify-between gap-6 shadow-md font-mono">
                            <div>
                                <h4 className="text-sm font-black dark:text-white text-gray-955 uppercase tracking-widest mb-1">Striver's SDE Sheet</h4>
                                <p className="text-xs dark:text-gray-400 text-gray-600 font-medium font-sans">Solving curated industrial-standard questions covering trees, graphs, and dynamic programming.</p>
                            </div>
                            <span className="text-lg font-black text-primary-blue bg-primary-blue/5 border border-primary-blue/20 px-4 py-2 rounded-xl shrink-0 uppercase tracking-wider">
                                ACTIVE
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DSA;
