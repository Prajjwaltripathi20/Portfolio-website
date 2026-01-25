import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Layers } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: 'Member - UI/UX Vertical',
        company: 'DevClub',
        logo: '/devclub.jpg', // Ensure you have this image in public folder
        duration: 'Jan 2025 - Present',
        location: 'Delhi, India',
        type: 'Part-time',
        description: 'Contributing to the design and user experience of club projects and activities.',
        skills: ['Project Planning', 'Figma', 'UI/UX Design', 'Team Collaboration']
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h2 className="section-title">Experience</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        My professional journey and community involvement.
                    </p>
                </motion.div>

                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>

                    {/* Vertical Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '40px', // Center of the logo (80px/2)
                        top: '40px',
                        bottom: '0',
                        width: '2px',
                        background: 'linear-gradient(to bottom, var(--accent) 0%, rgba(59, 130, 246, 0.1) 100%)',
                        zIndex: 0
                    }} />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="experience-item"
                        >
                            {/* Left: Logo with Glow */}
                            <div style={{ flexShrink: 0 }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '4px solid var(--accent)',
                                    background: 'black',
                                    position: 'relative',
                                    zIndex: 2,
                                    boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)'
                                }}>
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '5px', background: 'white' }}
                                    />
                                </div>
                            </div>

                            {/* Right: Content Card with Arrow */}
                            <div style={{ flex: 1, position: 'relative' }}>
                                {/* Arrow pointing to logo - Pure CSS Triangle */}
                                <div className="arrow-left" style={{
                                    position: 'absolute',
                                    left: '-10px',
                                    top: '30px',
                                    width: 0,
                                    height: 0,
                                    borderTop: '10px solid transparent',
                                    borderBottom: '10px solid transparent',
                                    borderRight: '10px solid rgba(255, 255, 255, 0.05)',
                                    zIndex: 3
                                }} />

                                <motion.div
                                    whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        borderRadius: '16px',
                                        padding: '2rem',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{exp.role}</h3>
                                            <a href="#" style={{ fontSize: '1.1rem', color: 'var(--accent)', fontWeight: '600', textDecoration: 'none' }}>{exp.company}</a>
                                        </div>
                                        <div style={{ textAlign: 'right', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                justifyContent: 'flex-end',
                                                background: 'rgba(255,255,255,0.05)',
                                                padding: '5px 10px',
                                                borderRadius: '8px',
                                                marginBottom: '0.5rem'
                                            }}>
                                                <Calendar size={14} /> {exp.duration}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                                <MapPin size={14} /> {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '20px',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        color: 'var(--accent)',
                                        fontSize: '0.8rem',
                                        fontWeight: '500',
                                        marginBottom: '1.5rem',
                                        marginTop: '0.5rem',
                                        border: '1px solid rgba(59, 130, 246, 0.2)'
                                    }}>
                                        {exp.type}
                                    </div>

                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1rem' }}>
                                        {exp.description}
                                    </p>

                                    {/* Skills Tags - Pill Style */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                        {exp.skills.map(skill => (
                                            <span key={skill} style={{
                                                padding: '0.3rem 1rem',
                                                borderRadius: '50px',
                                                background: 'rgba(255,255,255,0.03)',
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.85rem',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px'
                                            }}>
                                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></span>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .experience-item {
                    display: flex;
                    gap: 2rem;
                    position: relative;
                    z-index: 1;
                }
                
                @media (max-width: 768px) {
                    .experience-item {
                        gap: 1rem;
                        flex-direction: column;
                    }
                    /* Adjust alignment when stacked */
                    .experience-item > div:first-child {
                        align-self: flex-start;
                        margin-bottom: 1rem;
                    }
                     /* Hide the left arrow on mobile if stacked */
                     .experience-item .arrow-left {
                        display: none;
                     }
                }
            `}</style>
        </section>
    );
};

export default Experience;
