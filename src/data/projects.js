export const projects = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Analytics - WatchSports.com',
    summary: 'Analyzed 100K+ event records and user behavior to pinpoint mid-funnel drop-off.',
    problem: 'The marketing team was experiencing low video completion rates and low click-through rates (CTR) on their mid-funnel campaigns, without clear visibility into user drop-off points.',
    solution: 'Designed a DAX-powered Power BI dashboard to monitor and analyze video engagement. Executed A/B testing on various user segments to derive actionable insights.',
    results: ['+10% video completion rate', '+8% CTR within two campaign cycles'],
    techStack: ['SQL', 'Python', 'Power BI', 'DAX'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    link: '#' // Placeholder link
  },
  {
    id: 'traffic-risk',
    title: 'Traffic Risk Intelligence Dashboard',
    summary: 'Built an end-to-end streaming pipeline quantifying real-time operational risk.',
    problem: 'Operations teams lacked real-time visibility into traffic and weather disruptions, causing unmanaged delays and reactive planning.',
    solution: 'Implemented a streaming data pipeline with Kafka and Airflow to aggregate data into BigQuery. Visualized the risk metrics proactively in a Tableau dashboard.',
    results: ['Identified 20% weather-disruption correlation previously untracked by ops teams'],
    techStack: ['Kafka', 'Airflow', 'BigQuery', 'Tableau'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: 'swire-coca-cola',
    title: 'Swire Coca-Cola Revenue & Cart Abandonment Analysis',
    summary: 'Modelled churn drivers and abandonment paths for Swire Coca-Cola\'s digital storefront.',
    problem: 'High cart abandonment rates were suppressing potential revenue and user adoption on the digital ordering platform.',
    solution: 'Engineered a churn driver model in Python and queried underlying transaction data via PostgreSQL. Visualized the abandonment paths in Tableau for presentation to leadership.',
    results: ['Recommendations projected to recover $430K ARR', 'Lift adoption rates by 15%'],
    techStack: ['PostgreSQL', 'Python', 'Tableau'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: 'saas-retention',
    title: 'SaaS User Retention Analysis',
    summary: 'Analyzed user engagement metrics to predict churn and deploy proactive retention strategies.',
    problem: 'Monthly recurring revenue was impacted by an unexpected churn spike among cohort users after month 3.',
    solution: 'Developed a cohort analysis framework using SQL and Python. Created a Looker dashboard to track active product usage daily.',
    results: ['Implemented early warning alerts for falling engagement', 'Reduced Q3 churn by 5%'],
    techStack: ['SQL', 'Looker', 'Snowflake', 'Python'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: 'llm-automation',
    title: 'LLM-Powered Artifact Review System',
    summary: 'Designed a Groq-powered multi-agent system to analyze student artifacts and generate structured feedback.',
    problem: 'Mentors were spending excessive manual hours reviewing and providing qualitative feedback on student project submissions.',
    solution: 'Integrated Claude and Groq into a scalable multi-agent pipeline to automatically parse and grade student artifacts, converting unstructured text into structured rubrics.',
    results: ['Reduced manual mentor review effort significantly', 'Standardized 1M+ records'],
    techStack: ['Groq LLM', 'Claude CLI', 'Python', 'Prompt Engineering'],
    image: 'https://images.unsplash.com/photo-1620712948343-008423675ce2?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  }
];
