import React from 'react';
import { FaLinkedin, FaGithub, FaMediumM, FaBook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '3rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        
        <h2 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif' }}>
          Let's Connect<span style={{ color: 'var(--accent-color)' }}>.</span>
        </h2>
        
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://www.linkedin.com/in/sudeeptha-sivarajan-8649081b7/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Sudeeptha21" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://medium.com/@sstiffintales/the-lunchbox-756eed8545f7" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Blog">
            <FaMediumM size={24} />
          </a>
          <a href="https://link.springer.com/chapter/10.1007/978-981-97-4852-5_37" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Research">
            <FaBook size={24} />
          </a>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Sudeeptha Sivarajan. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
