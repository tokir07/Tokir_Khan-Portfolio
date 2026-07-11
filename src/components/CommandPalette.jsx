import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Cpu, BarChart3, Briefcase, Map, ShieldCheck, Send, Sun, Moon, FileText, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CommandPalette = ({ isOpen: propIsOpen, onClose: propOnClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { theme, toggleTheme } = useTheme();
    const inputRef = useRef(null);
    const listRef = useRef(null);

    // Sync with optional props
    const isControlled = propIsOpen !== undefined;
    const activeIsOpen = isControlled ? propIsOpen : isOpen;
    const activeOnClose = isControlled ? propOnClose : () => setIsOpen(false);

    const commands = [
        { name: 'Scroll to Home', action: () => scrollToSection('#home'), icon: <Home className="w-4 h-4" /> },
        { name: 'Scroll to About', action: () => scrollToSection('#about'), icon: <User className="w-4 h-4" /> },
        { name: 'Scroll to Skills', action: () => scrollToSection('#skills'), icon: <Cpu className="w-4 h-4" /> },
        { name: 'Scroll to DSA Core', action: () => scrollToSection('#dsa'), icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Scroll to Projects', action: () => scrollToSection('#projects'), icon: <Briefcase className="w-4 h-4" /> },
        { name: 'Scroll to Roadmap', action: () => scrollToSection('#roadmap'), icon: <Map className="w-4 h-4" /> },
        { name: 'Scroll to Credentials', action: () => scrollToSection('#certificates'), icon: <ShieldCheck className="w-4 h-4" /> },
        { name: 'Scroll to Contact', action: () => scrollToSection('#contact'), icon: <Send className="w-4 h-4" /> },
        { name: 'Toggle Light/Dark Theme', action: () => { toggleTheme(); activeOnClose(); }, icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" /> },
        { name: 'View Verified Resume', action: () => { window.open('/Tokir_Khan_Resume.pdf', '_blank'); activeOnClose(); }, icon: <FileText className="w-4 h-4 text-primary-red" /> },
    ];

    const scrollToSection = (hash) => {
        activeOnClose();
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/' + hash;
        }
    };

    // Toggle overlay on hotkey
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                if (isControlled) {
                    if (activeIsOpen) propOnClose();
                    else inputRef.current?.focus(); // If open state handles elsewhere
                } else {
                    setIsOpen((prev) => !prev);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isControlled, activeIsOpen, propOnClose]);

    // Handle custom toggle event
    useEffect(() => {
        const handleToggleEvent = () => {
            if (isControlled) {
                if (activeIsOpen) propOnClose();
            } else {
                setIsOpen((prev) => !prev);
            }
        };
        window.addEventListener('toggle-command-palette', handleToggleEvent);
        return () => window.removeEventListener('toggle-command-palette', handleToggleEvent);
    }, [isControlled, activeIsOpen, propOnClose]);

    // Focus input on open
    useEffect(() => {
        if (activeIsOpen) {
            setSearch('');
            setSelectedIndex(0);
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [activeIsOpen]);

    const filteredCommands = commands.filter((cmd) =>
        cmd.name.toLowerCase().includes(search.toLowerCase())
    );

    // Keyboard Navigation
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredCommands[selectedIndex]) {
                filteredCommands[selectedIndex].action();
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            activeOnClose();
        }
    };

    // Scroll selected item into view
    useEffect(() => {
        const selectedElement = listRef.current?.children[selectedIndex];
        if (selectedElement) {
            selectedElement.scrollIntoView({ block: 'nearest' });
        }
    }, [selectedIndex]);

    return (
        <AnimatePresence>
            {activeIsOpen && (
                <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={activeOnClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md"
                    />

                    {/* Palette Shell */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="relative w-full max-w-xl dark:bg-gray-950/90 bg-white/95 border border-black/10 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl"
                        onKeyDown={handleKeyDown}
                    >
                        {/* Search Input Bar */}
                        <div className="flex items-center gap-3 px-6 py-4 border-b border-black/5 dark:border-white/5">
                            <Search className="w-5 h-5 text-gray-400 shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setSelectedIndex(0);
                                }}
                                placeholder="Type a command or search..."
                                className="w-full bg-transparent border-none outline-none dark:text-white text-gray-900 text-sm placeholder-gray-400 py-1"
                            />
                            <div className="flex items-center gap-1 shrink-0">
                                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-gray-400">ESC</span>
                            </div>
                        </div>

                        {/* List Items */}
                        <div className="max-h-[320px] overflow-y-auto p-2" ref={listRef}>
                            {filteredCommands.length > 0 ? (
                                filteredCommands.map((cmd, index) => {
                                    const isSelected = selectedIndex === index;
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => cmd.action()}
                                            onMouseEnter={() => setSelectedIndex(index)}
                                            className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all ${
                                                isSelected
                                                    ? 'bg-primary-red text-white shadow-lg shadow-primary-red/15'
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/10' : 'bg-black/5 dark:bg-white/5'}`}>
                                                    {cmd.icon}
                                                </div>
                                                <span className="text-xs font-black uppercase tracking-wider">{cmd.name}</span>
                                            </div>
                                            {isSelected && (
                                                <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                                                    RUN <ArrowRight className="w-3.5 h-3.5" />
                                                </span>
                                            )}
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="py-12 text-center text-xs font-black uppercase tracking-widest text-gray-500">
                                    No commands matched
                                </div>
                            )}
                        </div>

                        {/* Footer Tips */}
                        <div className="px-6 py-3 bg-gray-50/50 dark:bg-black/20 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-gray-500">
                            <span>Use arrows to navigate</span>
                            <span>press Enter to select</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
