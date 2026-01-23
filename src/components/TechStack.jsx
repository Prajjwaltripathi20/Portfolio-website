import React from 'react';
import { motion } from 'framer-motion';

// Tech stack data with icons from DevIcon and other sources
const techData = [
    // Ring 1 - Core/Frontend (Inner)
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', ring: 1 },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', ring: 1 },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', ring: 1 },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', ring: 1 },

    // Ring 2 - Backend/Tools (Middle)
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', ring: 2 },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', ring: 2, filter: 'invert(1)' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', ring: 2 },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', ring: 2 },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', ring: 2 },

    // Ring 3 - Extra/Tools (Outer)
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', ring: 3, filter: 'invert(1)' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', ring: 3 },
    { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png', ring: 3, filter: 'invert(1)' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', ring: 3 },
    { name: 'Framer', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg', ring: 3 },
];

const TechStack = () => {
    return (
        <section id="tech" style={{ padding: '8rem 0', overflow: 'hidden', minHeight: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '8rem', zIndex: 2 }}>
                <h2 className="section-title">Tech Ecosystem</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Orbiting around my core competencies</p>
            </div>

            <div style={{
                position: 'relative',
                width: '100%',
                height: '800px', // Increased height to prevent overlap
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                perspective: '1000px'
            }}>

                {/* Core Center */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                        width: '100px',
                        height: '100px',
                        background: 'var(--accent)',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 0 50px var(--accent-glow)',
                        zIndex: 10,
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: '1.2rem'
                    }}
                >
                    CORE
                </motion.div>

                {/* Orbit Rings */}
                {[1, 2, 3].map((ringIndex) => {
                    const size = ringIndex * 200 + 100; // 300px, 500px, 700px
                    const duration = ringIndex * 15 + 10; // Slower for outer rings
                    const reverse = ringIndex % 2 === 0; // Alternate direction
                    const icons = techData.filter(item => item.ring === ringIndex);

                    return (
                        <motion.div
                            key={ringIndex}
                            style={{
                                position: 'absolute',
                                width: `${size}px`,
                                height: `${size}px`,
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            animate={{ rotate: reverse ? -360 : 360 }}
                            transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                        >
                            {icons.map((item, i) => {
                                const angle = (i / icons.length) * 360;

                                return (
                                    <motion.div
                                        key={item.name}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            width: '50px',
                                            height: '50px',
                                            marginLeft: '-25px',
                                            marginTop: '-25px',
                                            transform: `rotate(${angle}deg) translateY(-${size / 2}px) rotate(-${angle}deg)`,
                                        }}
                                    >
                                        <motion.div
                                            animate={{ rotate: reverse ? 360 : -360 }} // Counter-rotate
                                            transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '5px'
                                            }}
                                        >
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                background: 'var(--bg-secondary)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                boxShadow: '0 0 15px rgba(0,0,0,0.5)'
                                            }}>
                                                <img
                                                    src={item.icon}
                                                    alt={item.name}
                                                    style={{
                                                        width: '25px',
                                                        height: '25px',
                                                        filter: item.filter || 'none'
                                                    }}
                                                />
                                            </div>
                                            <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', opacity: 0.7 }}>{item.name}</span>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    );
                })}

            </div>
        </section>
    );
};

export default TechStack;
