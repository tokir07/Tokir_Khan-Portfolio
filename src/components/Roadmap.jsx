import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, PlayCircle, Calendar, Sparkles, Server, Database, Key, ShieldAlert } from 'lucide-react';

const Roadmap = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const phases = [
        {
            title: 'Completed Core',
            accent: 'border-green-500/20 text-green-400 bg-green-500/5',
            badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
            icon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
            items: [
                {
                    name: 'Java (Core & OOP)',
                    desc: 'OOP concepts, Multi-threading, Collections framework, Exception handling, Stream API, Lambda expressions.',
                    subtopics: ['Inheritance & Polymorphism', 'Java Collections (Map, List, Set)', 'Concurrency & ExecutorService', 'Java 8 Streams & Lambdas', 'Generics & Lambda expressions']
                },
                {
                    name: 'Spring Boot REST APIs',
                    desc: 'Designing and building industrial REST endpoints, Request/Response body mapping, custom exceptions, validation.',
                    subtopics: ['Controllers & Services', 'DTO Pattern & Model Mapper', 'Exception Handling (@ControllerAdvice)', 'Spring Validation Framework', 'Maven Dependency Management']
                },
                {
                    name: 'Spring Security & JWT',
                    desc: 'Implementing secure authentication & authorization protocols, security filters, role-based access, JWT integration.',
                    subtopics: ['JWT Token Creation & Parsing', 'UserDetailsService Implementation', 'Role-Based Authorization (RBAC)', 'CORS & CSRF Configuration', 'Security Filter Chains']
                },
                {
                    name: 'Spring Data JPA & Hibernate',
                    desc: 'ORM mapping configurations, query optimization, database entity linkages, entity graph fetches, dynamic query methods.',
                    subtopics: ['Hibernate Mapping (@OneToMany, @ManyToMany)', 'Derived Query Methods', 'JPQL & Native Queries', 'Lazy Loading vs Eager Loading', 'EntityGraphs & N+1 fix']
                },
                {
                    name: 'Relational SQL Databases',
                    desc: 'Designing relational database models, schema writing, query optimization, indexes, complex join transactions.',
                    subtopics: ['Relational Joins (Inner, Left, Right)', 'Index Optimizations', 'Database Transactions (@Transactional)', 'Constraints & Foreign Keys', 'PostgreSQL & MySQL engines']
                }
            ]
        },
        {
            title: 'In Progress / Active',
            accent: 'border-primary-blue/20 text-primary-blue bg-primary-blue/5',
            badgeColor: 'bg-primary-blue/10 text-primary-blue border-primary-blue/20',
            icon: <PlayCircle className="w-5 h-5 text-primary-blue" />,
            items: [
                {
                    name: 'Docker & Containerization',
                    desc: 'Writing Dockerfiles, image caching optimizations, local multi-container network configurations using Docker Compose.',
                    subtopics: ['Dockerfile construction', 'Docker Compose files', 'Multi-stage Builds', 'Docker Volumes & persistence', 'Network bridging']
                },
                {
                    name: 'System Design Foundations',
                    desc: 'Understanding monolithic architectures vs distributed networks, REST vs gRPC protocols, vertical vs horizontal scaling.',
                    subtopics: ['Load Balancing algorithms', 'Caching policies (Redis, Memcached)', 'Horizontal vs Vertical scaling', 'Monolithic vs Microservice logic', 'CAP Theorem & Database choices']
                }
            ]
        },
        {
            title: 'Planned Roadmap',
            accent: 'border-primary-red/20 text-primary-red bg-primary-red/5',
            badgeColor: 'bg-primary-red/10 text-primary-red border-primary-red/20',
            icon: <Calendar className="w-5 h-5 text-primary-red" />,
            items: [
                {
                    name: 'Microservices & Discovery',
                    desc: 'Designing decoupled services, central configurations, gateway proxies, and discovery networks.',
                    subtopics: ['Eureka Service Registry', 'Spring Cloud Gateway API', 'Resilience4j Circuit Breaker', 'Distributed tracing (Zipkin/Sleuth)', 'Event-Driven Message Queues']
                },
                {
                    name: 'AWS Cloud Integration',
                    desc: 'Integrating cloud object storages, compute nodes, and database deployments.',
                    subtopics: ['AWS S3 API Client', 'EC2 deployments', 'RDS configurations', 'AWS IAM permissions', 'Elastic Beanstalk']
                },
                {
                    name: 'Kubernetes Orchestration',
                    desc: 'Configuring load distributions, node configurations, cluster definitions, and automatic deployments.',
                    subtopics: ['Deployment definitions', 'Service mapping & Pods', 'ConfigMaps & Secrets Management', 'Kubernetes Ingress Controllers', 'Auto-scaling configurations']
                }
            ]
        }
    ];

    return (
        <section id="roadmap" className="section-padding relative overflow-hidden">
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
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">Knowledge Roadmap</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black dark:text-white text-gray-950 uppercase tracking-tighter leading-none mb-6">
                        SYS.<span className="text-primary-blue">ROA</span>DMAP
                    </h2>
                    <div className="h-2 w-32 bg-gradient-to-r from-primary-red to-primary-blue rounded-full"></div>
                </motion.div>

                {/* Interactive Grid Columns */}
                <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
                    {phases.map((phase, pIdx) => (
                        <div key={pIdx} className="space-y-6">
                            {/* Column Header */}
                            <div className={`p-4 rounded-2xl border flex items-center gap-3 font-black uppercase tracking-wider text-xs ${phase.accent}`}>
                                {phase.icon}
                                <span>{phase.title}</span>
                            </div>

                            {/* Roadmap Cards */}
                            <div className="space-y-4">
                                {phase.items.map((item, iIdx) => (
                                    <motion.div
                                        key={iIdx}
                                        onClick={() => setSelectedTopic(item)}
                                        whileHover={{ y: -3, scale: 1.02 }}
                                        className={`p-6 rounded-3xl dark:bg-gray-900/40 bg-gray-50/50 border border-gray-200 dark:border-gray-800 transition-all cursor-pointer shadow-md flex flex-col justify-between ${
                                            selectedTopic?.name === item.name ? 'border-primary-red/60 dark:border-primary-red/60 bg-primary-red/[0.02]' : 'hover:border-primary-blue/30'
                                        }`}
                                    >
                                        <div className="space-y-2">
                                            <h4 className="text-base font-black dark:text-white text-gray-950 uppercase tracking-tight">
                                                {item.name}
                                            </h4>
                                            <p className="text-xs dark:text-gray-400 text-gray-500 font-medium leading-relaxed line-clamp-2">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between">
                                            <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${phase.badgeColor}`}>
                                                Details
                                            </span>
                                            <span className="text-[10px] dark:text-primary-blue text-primary-red font-bold">
                                                Expand &rarr;
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detail View Drawer */}
                <AnimatePresence>
                    {selectedTopic && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            className="p-8 md:p-12 rounded-[40px] dark:bg-gray-950/60 bg-white border border-primary-red/20 shadow-2xl backdrop-blur-xl space-y-6 relative"
                        >
                            {/* Close Button */}
                            <button 
                                onClick={() => setSelectedTopic(null)}
                                className="absolute top-6 right-6 p-2 rounded-full dark:bg-white/5 bg-black/5 text-gray-400 hover:text-white transition-all text-xs font-black uppercase tracking-widest px-4 border border-black/10 dark:border-white/10"
                            >
                                Close
                            </button>

                            <div className="space-y-2">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red bg-primary-red/5 border border-primary-red/15 px-3 py-1 rounded-full">
                                    Knowledge Deep Dive
                                </span>
                                <h3 className="text-3xl font-black dark:text-white text-gray-950 uppercase tracking-tight mt-2">
                                    {selectedTopic.name}
                                </h3>
                                <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed font-medium">
                                    {selectedTopic.desc}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-black/5 dark:border-white/5 space-y-4">
                                <h4 className="text-xs font-black uppercase tracking-widest text-primary-blue">
                                    Mastered Core Concepts:
                                </h4>
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {selectedTopic.subtopics.map((sub, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5 p-3.5 rounded-xl dark:bg-white/[0.02] bg-black/[0.01] border border-black/5 dark:border-white/5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-red shrink-0"></div>
                                            <span className="text-xs font-bold dark:text-gray-300 text-gray-700">
                                                {sub}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Roadmap;
