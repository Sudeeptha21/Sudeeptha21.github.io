import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
      }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit, sans-serif' }}>
          S.Sivarajan<span style={{ color: 'var(--accent-color)' }}>.</span>
        </Link>
        
        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          <Link to="/" style={{ fontWeight: 500 }} onClick={(e) => {
            if(window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}>Home</Link>
          <a href="#about" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>About</a>
          <a href="#projects" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Projects</a>
          <a href="#experience" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Experience</a>
          
          <a href="/resume2026.docx" download className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          style={{ display: 'none', color: 'var(--text-primary)' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
