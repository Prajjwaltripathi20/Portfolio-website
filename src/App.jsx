import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import Loader from './components/Loader';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
    const [loading, setLoading] = useState(true);

    // Prevent scrolling while loading
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [loading]);

    return (
        <>
            <BackgroundAnimation />

            <AnimatePresence mode="wait">
                {loading ? (
                    <Loader key="loader" setLoading={setLoading} />
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Navbar />
                        <Hero />
                        <About />
                        <TechStack />
                        <Projects />
                        <Experience />
                        <Contact />
                        <Footer />
                        <SocialLinks />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default App;
