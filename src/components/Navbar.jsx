import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Expertise', href: '#tech' },
        { name: 'Work', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0, x: '-50%' }}
                animate={{ y: 0, opacity: 1, x: '-50%' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth easeOutExpo-ish
                style={{
                    position: 'fixed',
                    top: '20px',
                    left: '50%',
                    width: '90%',
                    maxWidth: '1000px',
                    zIndex: 100,
                    padding: '0.6rem 0.8rem', // Slightly more compact padding for the pill look
                    paddingLeft: '1.5rem',
                    paddingRight: '0.8rem',
                    borderRadius: '100px', // Full pill shape
                    background: scrolled ? 'rgba(18, 18, 18, 0.6)' : 'rgba(23, 23, 23, 0.4)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: scrolled ? '0 10px 40px -10px rgba(0,0,0,0.5)' : 'none',
                }}
            >
                {/* Logo */}
                <a href="#" style={{
                    fontSize: '1.4rem',
                    fontWeight: '800',
                    letterSpacing: '-0.5px',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px',
                    marginRight: '1rem'
                }}>
                    P<motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ color: 'var(--accent)', fontSize: '2rem', lineHeight: 0 }}
                    >.</motion.span>
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '5px', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '5px', borderRadius: '50px' }}>
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            style={{
                                position: 'relative',
                                fontSize: '0.9rem',
                                color: hoveredLink === link.name ? 'var(--text-primary)' : 'var(--text-secondary)',
                                fontWeight: '500',
                                padding: '0.6rem 1.2rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                zIndex: 1,
                                transition: 'color 0.2s'
                            }}
                            onMouseEnter={() => setHoveredLink(link.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            {hoveredLink === link.name && (
                                <motion.div
                                    layoutId="nav-hover"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '50px',
                                        zIndex: -1
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Resume Button */}
                <motion.a
                    href="/resume.pdf"
                    download="Prajjwal_Tripathi_Resume.pdf"
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)', color: 'white', borderColor: 'transparent' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(255,255,255,0.05)',
                        padding: '0.7rem 1.5rem',
                        borderRadius: '50px',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        border: '1px solid rgba(255,255,255,0.08)',
                        textDecoration: 'none',
                        marginLeft: '1rem',
                        whiteSpace: 'nowrap'
                    }}
                >
                    <span>Resume</span>
                    <Download size={16} />
                </motion.a>


                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', cursor: 'pointer', zIndex: 101, padding: '0.5rem' }}>
                    {isOpen ? <X color="var(--text-primary)" /> : <Menu color="var(--text-primary)" />}
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'fixed',
                            top: '90px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '90%',
                            maxWidth: '400px',
                            background: '#0a0a0a',
                            borderRadius: '24px',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            zIndex: 99,
                            boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    fontSize: '1.1rem',
                                    color: 'var(--text-secondary)',
                                    textAlign: 'center',
                                    fontWeight: '500',
                                    padding: '10px',
                                    borderRadius: '12px',
                                    border: '1px solid transparent',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.borderColor = 'transparent';
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <motion.a
                            href="/resume.pdf"
                            download="Prajjwal_Tripathi_Resume.pdf"
                            whileTap={{ scale: 0.98 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                background: 'var(--accent)',
                                padding: '1rem',
                                borderRadius: '16px',
                                color: 'white',
                                fontSize: '1rem',
                                fontWeight: '600',
                                marginTop: '0.5rem'
                            }}
                        >
                            Download Resume <Download size={18} />
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 900px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </>
    );
};

export default Navbar;
