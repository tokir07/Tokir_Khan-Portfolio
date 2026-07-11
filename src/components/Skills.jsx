import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, Zap, Terminal } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <Code2 className="w-6 h-6 text-primary-red" />,
            skills: ['Java', 'SQL', 'JavaScript (JSX)', 'HTML5 / CSS3'],
            accent: 'text-primary-red',
            desc: 'Foundational syntax and schema-definition skills.'
        },
        {
            title: 'Backend Engine',
            icon: <Server className="w-6 h-6 text-primary-blue" />,
            skills: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs'],
            accent: 'text-primary-blue',
            desc: 'Enterprise services, persistence mappings, and secure endpoints.'
        },
        {
            title: 'Databases',
            icon: <Database className="w-6 h-6 text-primary-red" />,
            skills: ['PostgreSQL', 'MySQL', 'Relational DB Design', 'SQL Query Tuning'],
            accent: 'text-primary-red',
            desc: 'Data normalization, constraint optimization, and indexing.'
        },
        {
            title: 'Tools & Platforms',
            icon: <Wrench className="w-6 h-6 text-primary-blue" />,
            skills: ['Git & GitHub', 'Postman API Client', 'Maven Build Tool', 'Vercel'],
            accent: 'text-primary-blue',
            desc: 'Version control, dependency injection packaging, and testing.'
        },
        {
            title: 'Currently Learning',
            icon: <Zap className="w-6 h-6 text-primary-red" />,
            skills: ['Docker (Containers)', 'System Design', 'Microservices Architecture'],
            accent: 'text-primary-red',
            desc: 'Virtualization, load balancing policies, and scalability patterns.'
        }
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-2 text-primary-red mb-2">
                        <Terminal size={16} />
                        <span className="text-xs font-black uppercase tracking-[0.3em]">Skill Classification Matrix</span>
                    </div>
                    <h2 className="text-5xl font-black mb-4 dark:text-white text-gray-950 uppercase tracking-tighter">
                        TECH.<span className="text-primary-red">CAPA</span>BILITIES
                    </h2>
                    <div className="h-2 w-32 bg-gradient-to-r from-primary-red to-primary-blue mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group p-8 rounded-[32px] dark:bg-gray-900/40 bg-gray-50/50 border border-gray-200 dark:border-gray-800 hover:border-primary-red transition-all duration-500 shadow-xl"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-4 rounded-2xl dark:bg-gray-800 bg-white shadow-md transition-transform group-hover:rotate-6">
                                    {category.icon}
                                </div>
                                <span className={`text-[10px] uppercase font-black tracking-widest ${category.accent}`}>
                                    {category.title}
                                </span>
                            </div>

                            <h3 className="text-2xl font-black mb-2 dark:text-white text-gray-955 uppercase tracking-tight">
                                {category.title}
                            </h3>
                            <p className="text-xs dark:text-gray-400 text-gray-500 font-medium mb-6 leading-relaxed">
                                {category.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 dark:bg-gray-800 bg-white dark:text-gray-300 text-gray-700 rounded-xl text-xs font-bold border border-gray-200 dark:border-gray-700 group-hover:border-primary-red/30 transition-all font-sans"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
