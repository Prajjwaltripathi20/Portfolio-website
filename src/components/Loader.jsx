import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ setLoading }) => {
    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: '#0a0a0a',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        fontSize: '4rem',
                        fontWeight: '800',
                        color: 'var(--text-primary)',
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    P<span style={{ color: 'var(--accent)' }}>.</span>
                </motion.div>

            </div>

            {/* Progress Bar */}
            <div style={{
                width: '200px',
                height: '4px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '4px',
                overflow: 'hidden'
            }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    onAnimationComplete={() => setLoading(false)}
                    style={{
                        height: '100%',
                        background: 'var(--accent)',
                        boxShadow: '0 0 10px var(--accent)'
                    }}
                />
            </div>


        </motion.div>
    );
};

export default Loader;
