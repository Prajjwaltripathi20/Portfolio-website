import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';

const Hero = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Initial staggering for the name
    const headingVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        },
    };

    const name = "Prajjwaltripathi.".split("");

    return (
        <section id="home" className="hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                background: 'var(--accent-glow)',
                borderRadius: '50%',
                filter: 'blur(120px)',
                opacity: 0.15,
                top: '-10%',
                right: '-10%',
                zIndex: -1
            }} />

            <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: '#4ade80',
                borderRadius: '50%',
                filter: 'blur(100px)',
                opacity: 0.05,
                bottom: '10%',
                left: '-10%',
                zIndex: -1
            }} />

            <div className="container" style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap', // Standard wrap, Text first then Image
                gap: '4rem',
                maxWidth: '1400px'
            }}>

                {/* Left Content */}
                <div style={{ flex: '1 1 500px', textAlign: 'left' }}> {/* Flex basis 500px ensures wrapping on smaller screens */}

                    {/* Status Indicators */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            marginBottom: '2rem',
                            flexWrap: 'wrap'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: 'rgba(34, 197, 94, 0.1)',
                            border: '1px solid rgba(34, 197, 94, 0.2)',
                            borderRadius: '50px',
                            color: '#4ade80',
                            fontSize: '0.85rem',
                            fontWeight: '600'
                        }}>
                            <span style={{ position: 'relative', display: 'flex', height: '8px', width: '8px' }}>
                                <span style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', background: '#4ade80', opacity: 0.75, animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
                                <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: '8px', width: '8px', background: '#4ade80' }}></span>
                            </span>
                            Available for work
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                        }}>
                            <MapPin size={16} color="#ef4444" fill="#ef4444" /> Based in India
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span style={{
                            color: 'var(--accent)',
                            fontSize: '1rem',
                            fontWeight: 700,
                            display: 'block',
                            marginBottom: '0.5rem',
                            letterSpacing: '3px',
                            textTransform: 'uppercase'
                        }}>
                            HI, I'M
                        </span>
                    </motion.div>

                    {/* Animated Name */}
                    <motion.h1
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                            fontWeight: 800,
                            lineHeight: 1,
                            color: 'var(--text-primary)',
                            marginBottom: '1rem', // Adjusted gap
                            display: 'flex',
                            flexWrap: 'nowrap',
                            whiteSpace: 'nowrap',
                            letterSpacing: '-2px'
                        }}
                    >
                        {name.map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        style={{
                            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            color: 'var(--text-secondary)', // Improved contrast
                            marginBottom: '2.5rem',
                            letterSpacing: '-1px'
                        }}
                    >
                        Full-Stack <br /> Developer.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        style={{
                            maxWidth: '500px',
                            fontSize: '1.05rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            lineHeight: '1.7',
                            fontWeight: 400
                        }}
                    >
                        I build scalable, real-world web applications with clean UI, strong backend logic, and a focus on performance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
                    >
                        <a href="#projects" style={{
                            padding: '1rem 2.2rem',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '50px',
                            color: 'white',
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'transparent',
                            fontWeight: 500,
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'white';
                                e.target.style.gap = '1rem';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                                e.target.style.gap = '0.5rem';
                            }}
                        >
                            View Work <ArrowRight size={18} />
                        </a>

                        <a href="#contact" style={{
                            padding: '1rem 2.5rem',
                            background: 'var(--accent)',
                            color: 'white',
                            borderRadius: '50px',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: '600',
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.6)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.4)';
                            }}
                        >
                            Let's Connect
                        </a>

                    </motion.div>
                </div>

                {/* Right Content - Flip Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{
                        flex: '1 1 400px', // Allow shrinking/growing with basis
                        display: 'flex',
                        justifyContent: 'center',
                        zIndex: 10
                    }}
                >
                    <div
                        style={{
                            width: 'min(400px, 90vw)', // Reduced width
                            height: 'min(500px, 60vh)', // Reduced height
                            perspective: '1000px',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={() => setIsFlipped(true)}
                        onMouseLeave={() => setIsFlipped(false)}
                    >
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            textAlign: 'center',
                            transition: 'transform 0.8s',
                            transformStyle: 'preserve-3d',
                            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                        }}>
                            {/* Front - Profile Image */}
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backfaceVisibility: 'hidden',
                                borderRadius: '40px',
                                overflow: 'hidden',
                                backgroundColor: '#1a1a1a',
                                boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.5), 0 18px 36px -18px rgba(0, 0, 0, 0.5)'
                            }}>
                                <img
                                    src="/profile.png"
                                    alt="Prajjwal Tripathi"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'top center',
                                        filter: 'grayscale(100%)'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: '#0a0a0a',
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: '50px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    whiteSpace: 'nowrap'
                                }}>
                                    <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: '600' }}>Hover for Stats</span>
                                </div>
                            </div>

                            {/* Back - Detailed LeetCode & GitHub Stats */}
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backfaceVisibility: 'hidden',
                                backgroundColor: '#0a0a0a',
                                borderRadius: '40px', // MATCH FRONT
                                overflowY: 'auto',
                                overflowX: 'hidden',
                                transform: 'rotateY(180deg)',
                                border: '2px solid var(--accent)',
                                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                padding: '1.5rem 0.5rem'
                            }}
                                className="hide-scrollbar"
                            >
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LC" style={{ width: '20px', filter: 'invert(1)' }} /> LeetCode Progress
                                </h3>

                                <div style={{ width: '100%', marginBottom: '1rem', borderRadius: '10px', overflow: 'hidden' }}>
                                    <img
                                        src="https://leetcard.jacoblin.cool/PrajjwalTripathi18?theme=dark&font=Inter"
                                        alt="Solved Stats"
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>

                                <div style={{ background: '#0d1117', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }}>
                                    <img
                                        src="/leetcode-heatmap.png"
                                        alt="LeetCode Heatmap"
                                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '6px', opacity: 0.9 }}
                                    />
                                </div>

                                {/* LeetCode Commit History / Activity */}
                                <div style={{ marginTop: '2rem', textAlign: 'center', paddingBottom: '1rem' }}>
                                    <a
                                        href="https://leetcode.com/u/PrajjwalTripathi18/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--accent)',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        View LeetCode Profile <ExternalLink size={14} />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
            <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        /* Default padding for mobile */
        .hero-section {
            padding: 100px 2rem 60px;
        }

        /* Large screens: Increase padding to clear fixed social sidebar */
        @media (min-width: 1024px) {
            .hero-section {
                padding: 100px 8rem 60px;
            }
        }
      `}</style>
        </section>
    );
};

export default Hero;
