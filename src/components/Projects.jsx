import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(10px)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Projects</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/project/${project.id}`} style={{ display: 'block', height: '100%' }}>
                  <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        className="project-image"
                      />
                    </div>
                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.summary}</p>
                      
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        {project.techStack.slice(0, 3).map((tech, i) => (
                          <span key={i} style={{ 
                            fontSize: '0.75rem', 
                            padding: '0.2rem 0.6rem', 
                            background: 'rgba(255,255,255,0.05)', 
                            borderRadius: '4px',
                            color: 'var(--text-secondary)'
                          }}>
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', color: 'var(--text-secondary)' }}>
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-color)', fontWeight: 500, fontSize: '0.875rem' }}>
                        View Case Study <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .glass-card:hover .project-image {
          transform: scale(1.05);
        }
      `}} />
    </section>
  );
};

export default Projects;
