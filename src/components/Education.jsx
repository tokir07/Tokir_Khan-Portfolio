import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            type: 'university',
            institution: 'JECRC University, Jaipur',
            degree: 'Bachelor of Technology (B.Tech)',
            branch: 'Computer Science Engineering',
            specialization: 'Backend Software Engineering & Systems',
            duration: '2024 - Present',
            status: 'Ongoing',
            highlight: '9.37 CGPA',
            details: [
                'Rigorous focus on Object-Oriented Programming (OOP) architectures and database design principles.',
                'Maintaining academic excellence (9.37 CGPA) while developing production-ready API services.',
                'Detailed coursework covering Data Structures, Relational Database Management Systems (RDBMS), Operating Systems, and Network Protocols.'
            ],
            icon: <GraduationCap className="w-6 h-6" />,
            color: 'text-primary-red',
            borderColor: 'border-primary-red/30'
        },
        {
            type: 'school',
            level: 'Class 12th (Senior Secondary)',
            institution: "St. Paul's Senior Secondary School, Banswara",
            board: 'Central Board of Secondary Education (CBSE)',
            stream: 'Mathematics & Science (PCM)',
            duration: '2022 - 2023',
            icon: <School className="w-6 h-6" />,
            color: 'text-primary-blue',
            borderColor: 'border-primary-blue/30'
        },
        {
            type: 'school',
            level: 'Class 10th (Secondary)',
            institution: "St. Paul's Senior Secondary School, Banswara",
            board: 'Central Board of Secondary Education (CBSE)',
            duration: '2020 - 2021',
            icon: <School className="w-6 h-6" />,
            color: 'text-gray-400',
            borderColor: 'border-gray-500/20'
        }
    ];

    return (
        <section id="education" className="section-padding relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px w-12 bg-primary-red"></div>
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">Academic Foundation</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black dark:text-white text-gray-950 uppercase tracking-tighter leading-none">
                        EDUCAT<span className="text-primary-blue">ION</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
                    {/* Main highlight - University */}
                    <div className="lg:col-span-12">
                        {educationData.filter(e => e.type === 'university').map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative group rounded-[48px] p-[1px] bg-gradient-to-br from-primary-red/20 to-primary-blue/20"
                            >
                                <div className="dark:bg-gray-950 bg-white rounded-[47px] p-8 md:p-16 relative overflow-hidden h-full">
                                    {/* Glass reflection */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                                    <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                                        <div className="flex-1 space-y-8">
                                            <div className="flex flex-wrap items-center gap-4">
                                                <div className="px-6 py-2 rounded-full bg-primary-red/10 border border-primary-red/20 flex items-center gap-2">
                                                    <Award className="w-5 h-5 text-primary-red" />
                                                    <span className="text-xl font-black text-primary-red">{edu.highlight}</span>
                                                </div>
                                                <div className="px-6 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20">
                                                    <span className="text-sm font-black text-primary-blue uppercase tracking-widest">{edu.status}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-4xl md:text-5xl font-black dark:text-white text-gray-950 uppercase tracking-tight">
                                                    {edu.institution}
                                                </h3>
                                                <p className="text-2xl font-bold dark:text-gray-300 text-gray-700 italic">
                                                    {edu.degree} in {edu.branch}
                                                </p>
                                                <div className="flex items-center gap-6 dark:text-gray-400 text-gray-600 font-bold uppercase tracking-widest text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4" /> Jaipur, India
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-4 h-4" /> {edu.duration}
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-lg font-black dark:text-primary-blue text-primary-red uppercase tracking-widest">
                                                Focus: {edu.specialization}
                                            </p>

                                            <ul className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                                                {edu.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start gap-4">
                                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-primary-red shrink-0"></div>
                                                        <p className="dark:text-gray-400 text-gray-600 font-medium text-lg leading-relaxed">{detail}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Visual decoration for the big card */}
                                        <div className="hidden lg:flex w-1/3 items-center justify-center">
                                            <div className="relative">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                                    className="w-80 h-80 rounded-[80px] border-[20px] border-primary-red/5 border-t-primary-red/20 blur-xs flex items-center justify-center"
                                                >
                                                    <GraduationCap className="w-32 h-32 text-gray-100/10 -rotate-[360deg] transition-all" />
                                                </motion.div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-8xl font-black dark:text-white text-gray-955 opacity-5">JECRC</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Secondary Education - Schools */}
                    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        {educationData.filter(e => e.type === 'school').map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-[40px] dark:bg-gray-950/50 bg-white border border-gray-200 dark:border-gray-800 hover:border-primary-blue transition-all duration-500"
                            >
                                <div className="space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div className={`p-4 rounded-2xl dark:bg-gray-900 bg-gray-50 ${edu.color}`}>
                                            {edu.icon}
                                        </div>
                                        <span className="text-xs font-black dark:text-gray-500 text-gray-400 uppercase tracking-widest">{edu.duration}</span>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-sm font-black text-primary-blue uppercase tracking-widest">{edu.level}</h4>
                                        <h3 className="text-3xl font-black dark:text-white text-gray-955 uppercase tracking-tight line-clamp-2">
                                            {edu.institution}
                                        </h3>
                                        <p className="dark:text-gray-400 text-gray-600 font-bold uppercase tracking-tight text-xs">{edu.board}</p>
                                    </div>

                                    {edu.stream && (
                                        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                                            <p className="text-sm dark:text-gray-400 text-gray-600 font-medium">
                                                Stream: <span className="font-black text-primary-red">{edu.stream}</span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
