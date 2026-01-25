import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, ExternalLink } from 'lucide-react';

const SocialLinks = () => {
    const links = [
        {
            name: 'GitHub',
            url: 'https://github.com/Prajjwaltripathi20',
            icon: <Github size={24} />,
            color: '#ffffff'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/prajjwal-tripathi-031445325/',
            icon: <Linkedin size={24} />,
            color: '#0077b5'
        },
        {
            name: 'LeetCode',
            url: 'https://leetcode.com/u/PrajjwalTripathi18/',
            icon: <Code size={24} />, // Using Code icon as proxy for LeetCode
            color: '#f89f1b'
        }
    ];

    return (
        <div className="social-links-sidebar" style={{
            position: 'fixed',
            left: '2rem',
            bottom: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            zIndex: 100
        }}>
            {links.map((link, index) => (
                <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + (index * 0.1) }} // Staggered entry after everything else
                    whileHover={{ y: -5, scale: 1.1 }}
                    style={{
                        color: 'var(--text-secondary)',
                        transition: 'color 0.3s ease',
                        position: 'relative'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = link.color}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                    {link.icon}
                </motion.a>
            ))}

            {/* Vertical Line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: '100px' }}
                transition={{ delay: 1.8, duration: 0.5 }}
                style={{
                    width: '1px',
                    background: 'var(--text-secondary)',
                    opacity: 0.5
                }}
            />
            <style>{`
                @media (max-width: 768px) {
                    .social-links-sidebar {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default SocialLinks;
