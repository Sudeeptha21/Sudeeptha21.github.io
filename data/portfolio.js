export const portfolioData = {
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Sudeeptha Sivarajan",
    role: "Business Analyst | Product Analyst",
    tagline:
      "I build AI-driven data solutions that turn complex, multi-source data into scalable systems, financial models, and decision-ready insights for stakeholders.",
    currentFocus:
      "Right now, I am working on data systems and migration-focused product infrastructure while continuing to build analytics projects that blend business analysis, SQL, Python, and AI-assisted workflows.",
  },
  stats: [
    { value: "4+ yrs", label: "Experience building analytics workflows across startup and research environments." },
    { value: "1M+", label: "Records standardized and validated through reproducible Python and SQL workflows." },
    { value: "60%", label: "Reporting error reduction achieved by redesigning SQL logic and CRM prep workflows." },
  ],
  about:
    "Business Analyst with over 4 years of experience building AI-driven data solutions across startups and research environments. I focus on translating complex, multi-source data into scalable systems, KPI reporting, and financial models that senior stakeholders can act on quickly.",
  strengths: [
    {
      kicker: "Decision support",
      title: "Translate analysis into action",
      description:
        "I connect variance analysis, funnel signals, operational KPIs, and business context to concrete recommendations rather than stopping at reporting.",
    },
    {
      kicker: "Cross-functional",
      title: "Bridge business, product, and data",
      description:
        "My work sits at the intersection of stakeholder questions, product needs, technical implementation, and user workflows, which makes collaboration smoother.",
    },
    {
      kicker: "Systems thinking",
      title: "Build reusable workflows",
      description:
        "From SQL and Python templates to AI-assisted review systems, I look for ways to reduce repeat manual work while improving reliability and speed.",
    },
  ],
  projects: [
    {
      category: "Marketing Analytics",
      period: "Portfolio case study",
      title: "Digital Marketing Analytics for WatchSports.com",
      summary:
        "Analyzed more than 100,000 event records and user behavior to pinpoint mid-funnel drop-off, then built a DAX-powered Power BI dashboard for campaign decision-making.",
      problem:
        "The team had campaign performance data but lacked a clear view of where users were disengaging before completing valuable video sessions.",
      solution:
        "I combined SQL analysis, Python-based exploration, and DAX-powered Power BI reporting to isolate weak funnel stages and support A/B testing, contributing to a 10 percent lift in video completion and 8 percent higher CTR.",
      stack: ["SQL", "Python", "Power BI", "DAX", "A/B Testing"],
      image: "/projects/watchsports.svg",
      imageAlt: "Placeholder project visual for the WatchSports.com analytics case study",
      links: [{ label: "View GitHub Repo", href: "https://github.com/Sudeeptha21/digital-marketing-analytics-watchsports" }],
    },
    {
      category: "Streaming Data",
      period: "Portfolio case study",
      title: "Traffic Risk Intelligence Dashboard",
      summary:
        "Built an end-to-end traffic and weather analytics pipeline that connected external weather data and transportation records into a decision-friendly dashboard.",
      problem:
        "Operations teams needed a clearer signal on live traffic risk drivers, but the underlying data sources were fragmented and difficult to operationalize quickly.",
      solution:
        "I designed a pipeline using Kafka, Airflow, BigQuery, and Tableau to ingest, transform, and visualize weather and traffic indicators in a structured format for operational analysis.",
      stack: ["Kafka", "Airflow", "BigQuery", "Tableau", "Streaming Analytics"],
      image: "/projects/traffic-risk-primary-v2.png",
      secondaryImage: "/projects/traffic-risk-secondary-v2.png",
      imageAlt: "Placeholder project visual for the Traffic Risk Intelligence Dashboard",
      links: [{ label: "View GitHub Repo", href: "https://github.com/Sudeeptha21/impact-of-weather-on-traffic" }],
    },
    {
      category: "Revenue Analytics",
      period: "Capstone project",
      title: "Swire Coca-Cola Revenue & Cart Abandonment Analysis",
      summary:
        "Modeled churn drivers and abandonment paths to quantify revenue leakage, then translated the findings into a recommendation set presented to leadership.",
      problem:
        "The business needed to understand where abandonment and churn behavior were eroding revenue and what interventions would have the clearest upside.",
      solution:
        "I used PostgreSQL, Python, and Tableau to map behavior patterns, prioritize likely recovery levers, and estimate a projected $430K ARR opportunity with a 15 percent adoption lift.",
      stack: ["PostgreSQL", "Python", "Tableau", "Churn Analysis", "Revenue Modeling"],
      image: "/projects/swire-coke.svg",
      imageAlt: "Placeholder project visual for the Swire Coca-Cola analysis",
      links: [{ label: "View GitHub Repo", href: "https://github.com/Sudeeptha21/swire-cocacola-project" }],
    },
  ],
  skillGroups: [
    {
      title: "Analytics",
      description: "Core analytical tools for querying data, modeling scenarios, and building repeatable workflows.",
      items: ["SQL", "Python", "Pandas", "NumPy", "R", "SAS", "Excel", "VBA", "Power Query"],
    },
    {
      title: "Visualization & Product Insight",
      description: "Tools for KPI tracking, stakeholder reporting, and product behavior analysis.",
      items: ["Tableau", "Power BI (DAX)", "Looker", "Google Analytics", "Mixpanel", "Funnel Analysis", "Cohort Analysis"],
    },
    {
      title: "Data Platforms",
      description: "Infrastructure and pipelines that support reliable analytics at scale.",
      items: ["Snowflake", "BigQuery", "Databricks", "AWS S3", "GCP", "Azure", "ETL Pipelines", "Airflow", "Kafka"],
    },
    {
      title: "Business & Delivery",
      description: "Tools and methods for moving analysis into real teams and real processes.",
      items: ["Agile", "Scrum", "A/B Testing", "UAT", "Jira", "Confluence", "Azure DevOps", "Salesforce CRM", "SAP"],
    },
    {
      title: "AI-Enabled Workflows",
      description: "Applied AI usage focused on productivity, structured feedback, and scalable analysis support.",
      items: ["Groq LLM Integration", "Prompt Engineering", "GenAI Tooling", "Claude", "Multi-Agent Workflows"],
    },
    {
      title: "What To Customize",
      description: "These are placeholder slots intentionally kept easy to update as your portfolio evolves.",
      items: ["Project screenshots", "Live demos", "Case study PDFs", "Resume download", "Additional projects", "Speaking or writing links"],
    },
  ],
  experience: [
    {
      title: "Data Associate",
      company: "Kay-Zen Research Consultants",
      period: "Feb 2026 - Present",
      highlights: [
        "Led system migration initiatives by implementing version-controlled database schemas using TypeScript and SQL, enabling trackable change management and safer schema updates across environments.",
        "Translated user needs into product systems by transforming unstructured data into decision-ready insights for end users.",
      ],
    },
    {
      title: "Teaching Assistant - Cloud Computing",
      company: "University of Utah",
      period: "Jul 2024 - Dec 2025",
      highlights: [
        "Coached 10+ graduate teams through end-to-end ETL pipeline design, SQL optimization, and cloud analytics workflows across AWS, GCP, and Azure.",
        "Helped achieve a 100 percent project completion rate by supporting technical implementation and system design decisions.",
        "Operationalized best-practice documentation for scalable analytics systems, reducing recurring troubleshooting questions across the semester.",
      ],
    },
    {
      title: "Research Assistant",
      company: "University of Utah",
      period: "Jan 2025 - Jan 2026",
      highlights: [
        "Standardized more than 1 million research records using Python and SQL, establishing reproducible data integrity workflows.",
        "Cut manual policy-review time by 70 percent by integrating a Groq-powered multi-agent workflow that converted unstructured documents into structured, queryable recommendations.",
      ],
    },
    {
      title: "Data Analyst",
      company: "Lad 360",
      period: "Jan 2023 - Jul 2024",
      highlights: [
        "Reduced reporting errors by 60 percent by rewriting SQL query logic and tightening Salesforce CRM data preparation workflows, eliminating a manual reconciliation step.",
        "Improved workforce efficiency by 12 percent by partnering with marketing and finance to define operational KPIs and building self-serve Looker dashboards.",
        "Increased project ROI by 15 percent through cost-benefit financial modeling, variance analysis, and budget-versus-actual reporting.",
        "Improved scheduling accuracy by 8 percent through SAP backlog analysis and routing validation.",
        "Cut ad-hoc turnaround time from days to hours by building reusable Python and SQL investigation templates for anomaly detection.",
        "Automated reporting infrastructure through AWS S3 and SAS pipeline design, improving data accessibility across three business units.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Science in Business Analytics",
      school: "University of Utah, David Eccles School of Business • GPA 3.69",
      period: "Dec 2025",
    },
    {
      degree: "Bachelor of Technology in Civil Engineering",
      school: "National Institute of Technology, India • GPA 3.8",
      period: "May 2023",
    },
  ],
  contact: {
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/sudeeptha-sivarajan-8649081b7/" },
      { label: "GitHub", href: "https://github.com/Sudeeptha21" },
      { label: "Medium", href: "https://medium.com/@sstiffintales/the-lunchbox-756eed8545f7" },
      { label: "Research", href: "https://link.springer.com/chapter/10.1007/978-981-97-4852-5_37" },
    ],
  },
};
