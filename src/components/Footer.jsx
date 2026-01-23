import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            background: '#050505',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '4rem 0 2rem 0',
            position: 'relative',
            marginTop: '4rem'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>

                    {/* Brand Section */}
                    <div style={{ flex: '1', minWidth: '250px' }}>
                        <a href="#" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '1rem' }}>
                            Prajjwal<span style={{ color: 'var(--accent)' }}>.</span>
                        </a>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', lineHeight: '1.6' }}>
                            Building digital experiences with code and creativity. Let's create something amazing together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        {['Home', 'About', 'Work', 'Experience', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase() === 'work' ? 'projects' : item.toLowerCase()}`}
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    transition: 'color 0.2s'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {[
                            { icon: <Github size={20} />, href: "https://github.com/Prajjwaltripathi20" },
                            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/prajjwal-tripathi-8a655724b" },
                            { icon: <Mail size={20} />, href: "mailto:prajjwal.tripathi2024@nst.rishihood.edu.in" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid transparent'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--accent)';
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '2rem' }} />

                {/* Bottom Footer */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}>
                    <p>© {currentYear} Prajjwal Tripathi. All rights reserved.</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span>Made with</span>
                        <Heart size={16} fill="var(--accent)" color="var(--accent)" />
                        <span>and React</span>
                    </div>

                    <button
                        onClick={scrollToTop}
                        style={{
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'var(--text-secondary)',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.8rem',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent)';
                            e.currentTarget.style.color = 'var(--accent)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        Back to Top <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
