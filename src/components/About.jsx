import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, GraduationCap, Brain, Zap } from 'lucide-react';

const About = () => {
    // Helper for highlighted text
    const Highlight = ({ children }) => (
        <span style={{ color: 'var(--text-primary)', fontWeight: '600', borderBottom: '1px solid var(--accent)' }}>
            {children}
        </span>
    );

    const Accent = ({ children }) => (
        <span style={{ color: 'var(--accent)', fontWeight: '600' }}>
            {children}
        </span>
    );

    const cards = [
        {
            icon: <GraduationCap size={24} color="var(--accent)" />,
            title: "Education",
            desc: "Newton School of Technology, Rishihood University"
        },
        {
            icon: <Brain size={24} color="#f89f1b" />, // Orange for LeetCode
            title: "Problem Solving",
            desc: "300+ LeetCode Problems | 1500+ Rating"
        },
        {
            icon: <Code size={24} color="#61dafb" />, // Blue for React
            title: "Tech Stack",
            desc: "MERN Stack, Next.js, System Design"
        },
        {
            icon: <Zap size={24} color="#FFD700" />, // Gold for Focus
            title: "Current Focus",
            desc: "Generative AI & Open Source"
        }
    ];

    return (
        <section id="about" style={{ padding: '8rem 0', position: 'relative' }}>
            {/* Decorative Background Elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: '200px',
                height: '200px',
                background: 'var(--accent)',
                filter: 'blur(120px)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: -1
            }} />

            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                    {/* Main Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.9',
                            textAlign: 'center' // Centered for impact
                        }}
                    >
                        <p style={{ marginBottom: '2rem' }}>
                            I’m a <Accent>Full-Stack Developer</Accent> and CS & AI undergraduate driven by the thrill of building.
                            My journey involves designing intuitive user interfaces and architecting robust backend systems using <Highlight>React, Node.js, and MongoDB</Highlight>.
                        </p>
                        <p>
                            Beyond just coding, I care about <Accent>scalability</Accent> and <Highlight>system design</Highlight>.
                            Whether it's optimizing an API or training a model, I believe in learning by doing—building software that solves real problems.
                        </p>
                    </motion.div>

                    {/* Bento Grid / Cards for Highlights */}
                    <style>{`
                        .bento-grid {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 1.5rem;
                            width: 100%;
                            max-width: 900px;
                            margin: 0 auto;
                        }
                        @media (min-width: 700px) {
                            .bento-grid {
                                grid-template-columns: repeat(2, 1fr);
                            }
                        }
                    `}</style>
                    <div className="bento-grid">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.03)' }}
                                style={{
                                    background: 'var(--bg-secondary)',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '1rem',
                                    cursor: 'default',
                                    height: '100%' // Ensure uniform height
                                }}
                            >
                                <div style={{
                                    padding: '10px',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.3rem', fontWeight: '600' }}>
                                        {card.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                        {card.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
