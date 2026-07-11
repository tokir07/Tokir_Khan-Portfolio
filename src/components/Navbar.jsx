import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Home, User, Cpu, Briefcase, ShieldCheck, Send, BarChart3, Map } from 'lucide-react';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home', icon: <Home size={15} /> },
        { name: 'About', href: '#about', icon: <User size={15} /> },
        { name: 'Skills', href: '#skills', icon: <Cpu size={15} /> },
        { name: 'DSA', href: '#dsa', icon: <BarChart3 size={15} /> },
        { name: 'Projects', href: '#projects', icon: <Briefcase size={15} /> },
        { name: 'Roadmap', href: '#roadmap', icon: <Map size={15} /> },
        { name: 'Credentials', href: '#certificates', icon: <ShieldCheck size={15} /> },
        { name: 'Contact', href: '#contact', icon: <Send size={15} /> },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="floating-nav px-6 flex items-center justify-between gap-4 pointer-events-auto w-full max-w-[1024px] md:h-16"
            >
                {/* Logo / Identity */}
                <a href="#home" className="flex items-center gap-1.5 shrink-0">
                    <span className="text-primary-red font-black text-lg">T</span>
                    <span className="dark:text-white text-gray-900 transition-colors text-xs font-black tracking-widest uppercase">KHAN</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center justify-center flex-1 gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100 hover:text-primary-red dark:hover:text-primary-red hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                        >
                            <span className="opacity-80">{item.icon}</span>
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>

                {/* Tablet Icons - Visible on medium screens */}
                <div className="hidden sm:flex lg:hidden items-center justify-around flex-1 gap-1">
                    {navItems.slice(0, 6).map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="p-2 rounded-xl dark:text-gray-400 text-gray-600 hover:text-primary-red dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                            title={item.name}
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2.5 shrink-0">
                    {/* Resume CTA */}
                    <a
                        href="#resume"
                        className="hidden sm:inline-flex px-4 py-2 bg-primary-red hover:bg-red-600 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-md shadow-primary-red/10 active:scale-95 transition-all"
                    >
                        Resume
                    </a>

                    {/* Command Palette Trigger */}
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('toggle-command-palette'))}
                        className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 dark:text-gray-400 text-gray-600 hover:text-primary-red dark:hover:text-white hover:scale-105 active:scale-95 transition-all text-[9px] font-black uppercase tracking-widest cursor-pointer"
                        title="Open command palette (Ctrl+K)"
                    >
                        <span>Palette</span>
                        <kbd className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[8px] font-sans">⌘K</kbd>
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-black/5 dark:bg-white/5 text-gray-800 dark:text-gray-100 transition-all hover:scale-105 active:scale-95 border border-black/10 dark:border-white/10"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="sm:hidden p-2 rounded-full bg-primary-red text-white shadow-lg active:scale-95 transition-transform"
                        aria-label="Toggle Mobile Menu"
                    >
                        {isOpen ? <X size={16} /> : <Menu size={16} />}
                    </button>
                </div>

                {/* Mobile Full Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="absolute top-20 left-0 right-0 p-4 rounded-[32px] bg-white/95 dark:bg-gray-950/95 border border-black/10 dark:border-white/10 backdrop-blur-3xl shadow-2xl sm:hidden"
                        >
                            <div className="grid grid-cols-2 gap-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-6 py-4 rounded-2xl dark:bg-white/5 bg-black/5 text-[10px] font-black uppercase tracking-widest dark:text-white text-gray-900 hover:bg-primary-red hover:text-white transition-all"
                                    >
                                        {item.icon}
                                        {item.name}
                                    </a>
                                ))}
                                <a
                                    href="#resume"
                                    onClick={() => setIsOpen(false)}
                                    className="col-span-2 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-primary-red text-[10px] font-black uppercase tracking-widest text-white shadow-md"
                                >
                                    View Resume
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default Navbar;
