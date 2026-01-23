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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2.5rem',
                    justifyContent: 'center'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="liquid-hover"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            style={{
                                background: 'linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)', // Subtle gradient
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)',
                                position: 'relative'
                            }}
                        >
                            {/* Project Image Area - 16:9 Aspect Ratio */}
                            <div style={{
                                width: '100%',
                                aspectRatio: '16/9', // Forces standard screenshot ratio
                                background: '#000',
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
                                        objectFit: 'cover', // Ensures it covers without distortion
                                        objectPosition: 'top center', // Focus on top of the page
                                        transition: 'transform 0.7s ease',
                                        opacity: 1
                                    }}
                                    className="project-img"
                                />
                                {/* Overlay Gradient for "Prof" look */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '30%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                                    pointerEvents: 'none'
                                }} />
                            </div>

                            {/* Content Area */}
                            <div style={{
                                padding: '2rem',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.2rem'
                            }}>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h3 style={{
                                        fontSize: '1.6rem',
                                        fontWeight: '700',
                                        color: '#fff',
                                        lineHeight: 1.3,
                                        letterSpacing: '-0.01em'
                                    }}>
                                        {project.title}
                                    </h3>
                                    <div style={{ display: 'flex', gap: '0.8rem', marginTop: '5px' }}>
                                        {project.links?.github && (
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                                style={{ color: '#a3a3a3', transition: 'all 0.2s', padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}
                                                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                                                onMouseLeave={e => { e.currentTarget.style.color = '#a3a3a3'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                                                title="View Code"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.links?.live && (
                                            <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                                                style={{ color: '#a3a3a3', transition: 'all 0.2s', padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}
                                                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                                                onMouseLeave={e => { e.currentTarget.style.color = '#a3a3a3'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                                                title="Live Demo"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p style={{
                                    color: '#d4d4d4', // Slightly brighter grey
                                    lineHeight: '1.6',
                                    fontSize: '0.95rem',
                                    flex: 1,
                                    fontWeight: 400
                                }}>
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags - Minimalist Style */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1rem' }}>
                                    {project.tech.map(t => (
                                        <span key={t} style={{
                                            padding: '0.35rem 0.9rem',
                                            borderRadius: '50px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            color: '#e5e5e5',
                                            fontSize: '0.75rem',
                                            fontWeight: '500',
                                            letterSpacing: '0.02em',
                                            border: '1px solid rgba(255, 255, 255, 0.1)'
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
