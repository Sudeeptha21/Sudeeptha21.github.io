import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container section" style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Return Home</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--text-secondary)', marginBottom: '2rem', transition: 'color 0.2s' }}>
          <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Portfolio
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.1 }}>{project.title}</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>{project.summary}</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
            {project.techStack.map((tech, index) => (
              <span key={index} style={{ 
                padding: '0.4rem 1rem', 
                background: 'rgba(99, 102, 241, 0.1)', 
                color: 'var(--accent-color)', 
                borderRadius: '9999px',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                fontSize: '0.875rem',
                fontWeight: 500
              }}>
                {tech}
              </span>
            ))}
          </div>
          
          <div style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>The Problem</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                {project.problem}
              </p>
            </div>
            
            <div className="glass-card" style={{ padding: '2.5rem', borderLeft: '4px solid var(--accent-color)' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>The Solution</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                {project.solution}
              </p>
            </div>
            
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Key Results</h2>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                {project.results.map((result, i) => (
                  <li key={i} style={{ marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem' }}>✓</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              View Live Project <ExternalLink size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
