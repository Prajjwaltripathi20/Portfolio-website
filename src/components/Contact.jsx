import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Copy, Check, ArrowRight, Phone } from 'lucide-react';

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const email = "prajjwal.tripathi2024@nst.rishihood.edu.in";
    const phone = "+91 8708598631";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const handleCopyPhone = () => {
        navigator.clipboard.writeText(phone);
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
    };

    return (
        <section id="contact" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p style={{
                        color: 'var(--accent)',
                        fontWeight: '600',
                        fontSize: '1rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '1rem'
                    }}>
                        What's Next?
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        color: 'var(--text-primary)',
                        lineHeight: 1.1
                    }}>
                        Let’s Build Something <br />
                        <span style={{ color: 'var(--text-secondary)' }}>Extraordinary Together.</span>
                    </h2>
                    <p style={{
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem',
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.7
                    }}>
                        I’m currently open to <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>internships</span> and <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>collaborations</span>.
                        Whether you have a question, a project idea, or just want to discuss the latest tech—my inbox is always open!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        padding: '2rem',
                        borderRadius: '20px',
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        width: '100%',
                        maxWidth: '500px'
                    }}
                >
                    {/* Email Copy Section */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(0,0,0,0.3)',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        width: '100%',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', overflow: 'hidden' }}>
                            <div style={{
                                padding: '8px',
                                background: 'rgba(59, 130, 246, 0.1)',
                                borderRadius: '8px',
                                color: 'var(--accent)'
                            }}>
                                <Mail size={20} />
                            </div>
                            <span style={{
                                fontSize: '0.95rem',
                                color: 'var(--text-primary)',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {email}
                            </span>
                        </div>
                        <button
                            onClick={handleCopyEmail}
                            style={{
                                background: 'transparent',
                                color: copiedEmail ? '#10B981' : 'var(--text-secondary)',
                                padding: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'color 0.2s'
                            }}
                            title="Copy Email"
                        >
                            {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                        </button>
                    </div>

                    {/* Phone Copy Section */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(0,0,0,0.3)',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        width: '100%',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', overflow: 'hidden' }}>
                            <div style={{
                                padding: '8px',
                                background: 'rgba(59, 130, 246, 0.1)',
                                borderRadius: '8px',
                                color: 'var(--accent)'
                            }}>
                                <Phone size={20} />
                            </div>
                            <span style={{
                                fontSize: '0.95rem',
                                color: 'var(--text-primary)',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {phone}
                            </span>
                        </div>
                        <button
                            onClick={handleCopyPhone}
                            style={{
                                background: 'transparent',
                                color: copiedPhone ? '#10B981' : 'var(--text-secondary)',
                                padding: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'color 0.2s'
                            }}
                            title="Copy Phone"
                        >
                            {copiedPhone ? <Check size={18} /> : <Copy size={18} />}
                        </button>
                    </div>

                    {/* Main CTA */}
                    <motion.a
                        href={`mailto:${email}`}
                        whileHover={{ scale: 1.02, backgroundColor: 'var(--accent)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '1rem 2rem',
                            width: '100%',
                            background: 'var(--text-primary)', // White button
                            color: 'black',
                            borderRadius: '12px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                    >
                        Send me an Email <ArrowRight size={20} />
                    </motion.a>

                    {/* Socials Divider */}
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '1rem' }}>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>OR FIND ME ON</span>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                    </div>

                    {/* Social Icons Row */}
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {[
                            { icon: <Github size={22} />, url: 'https://github.com/Prajjwaltripathi20', label: 'GitHub' },
                            { icon: <Linkedin size={22} />, url: 'https://www.linkedin.com/in/prajjwal-tripathi-8a655724b', label: 'LinkedIn' }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, color: 'var(--accent)' }}
                                style={{
                                    color: 'var(--text-secondary)',
                                    padding: '10px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'border-color 0.2s'
                                }}
                                title={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                </motion.div>

                <div style={{ marginTop: '3rem', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <MapPin size={16} color="var(--accent)" /> Based in Delhi, India
                </div>
            </div>
        </section>
    );
};

export default Contact;
