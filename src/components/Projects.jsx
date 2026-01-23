import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Zap } from 'lucide-react';

const projects = [
    {
        title: 'WashEase',
        description: 'Experience hassle-free laundry service with real-time tracking, premium quality care, and lightning-fast delivery.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        highlights: ['Real-time Order Tracking', 'Premium Laundry Care', 'Fast Delivery System', 'Smart Management Dashboard'],
        image: '/washease.png',
        links: {
            github: 'https://github.com/Prajjwaltripathi20/WashEase',
            live: 'https://wash-ease.vercel.app/'
        }
    },
    {
        title: 'Dhan Raksha — Personal Finance Manager',
        description: 'A full-stack personal finance management application designed to track income, expenses, and savings in a structured way.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        highlights: ['Secure user authentication', 'Expense and income tracking', 'Clean and intuitive dashboard', 'Scalable backend API architecture'],
        image: '/dhanraksha.png',
        links: {
            github: 'https://github.com/Prajjwaltripathi20/DhanRaksha',
            live: 'https://dhan-raksha-three.vercel.app/dashboard'
        }
    },
    {
        title: 'Recipedia',
        description: 'A modern recipe discovery platform that allows users to browse, explore, and save recipes with smooth animations and interactions.',
        tech: ['React', 'React Router', 'Context API', 'Spoonacular API'],
        highlights: ['Animated recipe cards', 'Favorites management system', 'Detailed recipe views', 'Framer Motion–powered transitions'],
        image: '/recipedia.png',
        links: {
            github: 'https://github.com/Prajjwaltripathi20/receipediea',
            live: 'https://receipediea.vercel.app/'
        }
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="container" style={{ maxWidth: '1400px' }}> {/* Increased width for 3 cols */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <h2 className="section-title">Selected Work</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        A collection of projects that showcase my passion for building clean, scalable web applications.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem',
                    justifyContent: 'center'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            style={{
                                background: '#121212',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                                position: 'relative'
                            }}
                        >
                            {/* Project Image Area */}
                            <div style={{
                                width: '100%',
                                height: '280px',
                                background: '#1a1a1a',
                                position: 'relative',
                                overflow: 'hidden',
                                borderBottom: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                        opacity: 0.95 // Slightly brighter
                                    }}
                                    className="project-img"
                                />
                            </div>

                            {/* Content Area */}
                            <div style={{
                                padding: '2rem',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem' // Consistent spacing
                            }}>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h3 style={{
                                        fontSize: '1.75rem',
                                        fontWeight: '700',
                                        color: 'var(--text-primary)',
                                        lineHeight: 1.2,
                                        letterSpacing: '-0.02em'
                                    }}>
                                        {project.title}
                                    </h3>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '5px' }}>
                                        {project.links?.github && (
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                                style={{ color: 'var(--text-secondary)', transition: 'all 0.2s', display: 'flex', alignItems: 'center' }}
                                                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.links?.live && (
                                            <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                                                style={{ color: 'var(--text-secondary)', transition: 'all 0.2s', display: 'flex', alignItems: 'center' }}
                                                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p style={{
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.6',
                                    fontSize: '1rem',
                                    flex: 1
                                }}>
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags - Sleeker Pill Style */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto' }}>
                                    {project.tech.map(t => (
                                        <span key={t} style={{
                                            padding: '0.4rem 1rem',
                                            borderRadius: '50px',
                                            background: 'rgba(59, 130, 246, 0.1)',
                                            color: '#60a5fa',
                                            fontSize: '0.8rem',
                                            fontWeight: '500',
                                            letterSpacing: '0.02em',
                                            border: '1px solid rgba(59, 130, 246, 0.2)'
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <style>{`
                                .project-img:hover {
                                    transform: scale(1.05);
                                    opacity: 1;
                                }
                            `}</style>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
