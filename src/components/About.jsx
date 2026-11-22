import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: 'Analytics', items: 'SQL | Python (Pandas, Numpy) | R | Excel (VBA, macros)' },
  { category: 'Visualization', items: 'Tableau | Power BI (DAX) | Google Analytics | Looker | Mixpanel' },
  { category: 'Product Tools', items: 'Jira | Azure DevOps | Confluence | Salesforce CRM | Hyperion' },
  { category: 'Cloud & Data', items: 'Kafka | Airflow | AWS S3 | GCP | Azure | Snowflake | BigQuery | DataBricks' },
  { category: 'Methods', items: 'Agile/Scrum | A/B testing | Funnel & Cohort Analysis | UAT | SAP' },
  { category: 'AI/ML', items: 'Groq LLM integration | Prompt Engineering | Gen AI tooling | Claude' }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>Bridging the gap between operations, data, and product.</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                I'm a Strategic Operations Manager with a background in data analytics and product thinking. Currently at Grant Associates, I build operational systems that make programs run better and decisions happen faster.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                With a Master of Science in Business Analytics from the University of Utah and hands-on experience across SQL, Python, Looker, and modern LLM workflows, I bring a rare combination of analytical depth and operational instinct to every problem I work on.
              </p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Technical Arsenal</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {skills.map((skill, index) => (
                  <div key={index} className="glass-card" style={{ padding: '1rem 1.5rem' }}>
                    <h4 style={{ color: 'var(--accent-color)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                      {skill.category}
                    </h4>
                    <p style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>
                      {skill.items}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
