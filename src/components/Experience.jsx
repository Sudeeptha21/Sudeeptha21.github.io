import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Learner Analytics and Data Associate',
    company: 'Kay-Zen Research Consultants',
    duration: 'Feb 2026 - Present',
    points: [
      'Standardized 1M+ records using Python and SQL, building reproducible data validation workflows that improved reliability across downstream analysis.',
      'Designed a Groq-powered multi-agent system to analyze student artifacts, generating structured feedback and reducing manual mentor review effort using Claude.',
      'Translated user needs into product systems by partnering with engineering, and created dashboards transforming unstructured data into decision-ready insights for mentors and parents.'
    ]
  },
  {
    role: 'Teaching Assistant - Cloud Computing',
    company: 'University of Utah',
    duration: 'July 2024 - Dec 2025',
    points: [
      'Coached 10+ graduate teams through end-to-end ETL pipeline design, SQL optimization, and cloud analytics workflows across AWS, GCP, and Azure, achieving a 100% project completion rate.',
      'Operationalized best-practice documentation for scalable analytics systems, reducing recurring team troubleshooting questions by an estimated 50% across the semester.'
    ]
  },
  {
    role: 'Data Analyst',
    company: 'Lad 360',
    duration: 'Jan 2023 - July 2024',
    points: [
      'Reduced reporting errors 60% by rewriting SQL query logic and tightening Salesforce CRM data preparation workflows, eliminating a manual reconciliation step.',
      'Improved workforce efficiency 12% by partnering with marketing and finance to define operational KPIs, then building self-serve Looker dashboards.',
      'Increased project ROI 15% through cost-benefit financial modelling across multiple initiatives, translating variance analyses into concrete reallocation recommendations.',
      'Cut ad-hoc turnaround time from days to hours by building reusable Python + SQL investigation templates for anomaly detection.',
      'Automated reporting infrastructure via AWS S3 + SQL pipeline design, improving data accessibility across three business units.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: '16px', top: '0', bottom: '0', width: '2px', background: 'var(--glass-border)' }}></div>

            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ position: 'relative', paddingLeft: '3rem' }}
              >
                {/* Timeline dot */}
                <div style={{ 
                  position: 'absolute', 
                  left: '11px', 
                  top: '6px', 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  background: 'var(--accent-color)',
                  boxShadow: '0 0 10px var(--accent-color)'
                }}></div>
                
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-color)', fontWeight: 500 }}>{exp.company}</h4>
                    </div>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      background: 'var(--glass-bg)', 
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)'
                    }}>
                      {exp.duration}
                    </span>
                  </div>
                  
                  <ul style={{ listStylePosition: 'outside', marginLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                    {exp.points.map((point, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
