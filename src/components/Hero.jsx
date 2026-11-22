import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMediumM, FaBook } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          
          <motion.div 
            style={{ flex: '1 1 400px' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} style={{ marginBottom: '1.25rem' }}>
              <span style={{ 
                display: 'inline-block', 
                padding: '0.25rem 1rem', 
                background: 'rgba(99, 102, 241, 0.1)', 
                color: 'var(--accent-color)', 
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.875rem',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}>
                Strategic Operations Manager
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} style={{ fontSize: '3.5rem', marginBottom: '1.25rem', lineHeight: '1.15' }}>
              Hi, here's a little about me, I'm{' '}
              <span style={{ background: 'linear-gradient(to right, #6366f1, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Sudeeptha Sivarajan
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '580px' }}>
              Strategic Operations Manager at Grant Associates, with a background in data analytics and product thinking. I turn messy operations into clean systems, and complex data into decisions that actually move the needle.
            </motion.p>
            
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/sudeeptha-sivarajan-8649081b7/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaLinkedin size={20} /> LinkedIn
              </a>
              <a href="https://github.com/Sudeeptha21" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaGithub size={20} /> GitHub
              </a>
              <a href="https://medium.com/@sstiffintales/the-lunchbox-756eed8545f7" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaMediumM size={20} /> Blog
              </a>
              <a href="https://link.springer.com/chapter/10.1007/978-981-97-4852-5_37" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaBook size={20} /> Research
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.2; }
          100% { transform: scale(1.05); opacity: 0.4; }
        }
        @media (max-width: 768px) {
          #hero { padding-top: 8rem; }
          h1 { font-size: 3rem !important; }
        }
      `}} />
    </section>
  );
};

export default Hero;
