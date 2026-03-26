export const profile = {
  name: "Rohit Kumar",
  title: "Data Engineer",
  location: "Bengaluru, India",
  employer: "Moodys Ratings",
  summary:
    "I build developer-grade data systems across streaming, ETL, analytics APIs, and lakehouse exploration, with an emphasis on clean architecture and usable downstream outputs.",
  intro:
    "I focus on reliable pipelines, practical system design, and turning raw data into dependable interfaces for analytics and product teams.",
  email: "r.kumar01@hotmail.com",
  github: "https://github.com/Analyst-Ninja",
  linkedin: "https://www.linkedin.com/in/analyst-ninja/",
  resume: "/assets/RohitKumar_Resume_20260322.pdf",
  photo: "/assets/profile-pic.png",
};

export const highlights = [
  "Streaming and event-driven pipelines",
  "Spark, PySpark, Airflow, and SQL workflows",
  "Warehouse and lakehouse-oriented thinking",
  "Backend-minded data products for downstream consumption",
];

export const metrics = [
  { value: "38+", label: "Public repos" },
  { value: "6", label: "Featured builds" },
  { value: "3", label: "Pipeline patterns" },
  { value: "2021", label: "GitHub since" },
];

export const experience = [
  {
    kicker: "Current",
    role: "Data Engineer",
    company: "Moody's Ratings",
    period: "2025 - Present",
    description:
      "Progressed into building data systems, pipeline reliability, and analytics-facing engineering work with a stronger platform and developer mindset.",
  },
  {
    kicker: "Earlier",
    role: "Business Analyst",
    company: "Axis Bank",
    period: "2022 - 2025",
    description:
      "Started on the analytics side of the stack, working with reporting, data quality, stakeholder requirements, and problem framing that later translated well into data engineering.",
  },
];

export const totalExperience = "4+ years";

export const stackGroups = [
  {
    title: "Ingestion",
    items: ["Kafka", "APIs", "Reddit API", "Batch + streaming inputs"],
  },
  {
    title: "Processing",
    items: ["PySpark", "Spark Streaming", "Python", "SQL"],
  },
  {
    title: "Orchestration",
    items: ["Airflow", "Docker", "Workflow automation"],
  },
  {
    title: "Storage",
    items: ["S3", "PostgreSQL", "MySQL", "Redshift", "Iceberg POC"],
  },
  {
    title: "Analytics",
    items: ["Athena", "Power BI", "Timescale-oriented APIs"],
  },
];

export const projects = [
  {
    title: "TransitFlow Realtime Event Stream",
    status: "Featured",
    summary:
      "A real-time transit-data pipeline that simulates events, streams through Kafka, processes with Spark, and lands analytics-ready datasets in AWS.",
    highlights: [
      "Combines Kafka, Spark, Glue, Athena, and Redshift in one architecture",
      "Frames data engineering as an end-to-end flow from ingestion to query",
      "Strongest systems-style project for the portfolio hero section",
    ],
    stack: ["Kafka", "Spark", "AWS Glue", "Athena", "Redshift", "Docker"],
    repo: "https://github.com/Analyst-Ninja/TransitFlow-RT-Event-Stream-using-kafka",
    accent: "stream",
  },
  {
    title: "Reddit Sentiment ETL Pipeline",
    status: "Featured",
    summary:
      "An orchestrated ETL workflow that extracts Reddit data, transforms it with PySpark sentiment analysis, and loads it for analytics and dashboarding.",
    highlights: [
      "Uses Airflow for orchestration and PySpark for transformation",
      "Separates raw and transformed storage across MySQL and PostgreSQL",
      "Connects engineering work to downstream BI consumption",
    ],
    stack: ["Airflow", "PySpark", "MySQL", "PostgreSQL", "Power BI"],
    repo: "https://github.com/Analyst-Ninja/reddit-sentiment-etl-airflow-spark",
    accent: "airflow",
  },
  {
    title: "Analytics API",
    status: "Featured",
    summary:
      "A lightweight analytics-serving layer designed to expose data stored in a time-series oriented backend for downstream use.",
    highlights: [
      "Shows an API mindset beyond pipeline construction",
      "Useful to signal consumption patterns, not just storage",
      "Good bridge between engineering and analytics enablement",
    ],
    stack: ["Python", "API Design", "Analytics", "TimescaleDB"],
    repo: "https://github.com/Analyst-Ninja/analytics-api",
    accent: "api",
  },
  {
    title: "Realtime Voting System",
    status: "Featured",
    summary:
      "A streaming aggregation project that processes live voting events and surfaces real-time counts through a dashboard-oriented flow.",
    highlights: [
      "Demonstrates real-time processing patterns with PySpark streaming",
      "Adds another event-driven project to support the portfolio narrative",
      "Pairs well with TransitFlow as a second streaming proof point",
    ],
    stack: ["PySpark", "Streaming", "Dashboarding", "Python"],
    repo: "https://github.com/Analyst-Ninja/realtime-voting-system",
    accent: "realtime",
  },
  {
    title: "WhatsApp Chat Analyzer",
    status: "Live Demo",
    summary:
      "A deployed analytics app that transforms exported chats into interactive insights, giving the portfolio a user-facing project alongside systems work.",
    highlights: [
      "Shows you can package analysis into a usable interface",
      "Adds visible demo value alongside backend-heavy projects",
      "Useful as a lighter, more approachable project in the lineup",
    ],
    stack: ["Python", "Streamlit", "Text Analytics", "Visualization"],
    repo: "https://github.com/Analyst-Ninja/whatsapp-chat-analyzer",
    live: "https://whatsapp-chat-analytics.streamlit.app/",
    accent: "product",
  },
  {
    title: "Iceberg Lakehouse POC",
    status: "Work in Progress",
    summary:
      "An exploratory lakehouse proof of concept focused on Apache Iceberg and modern table-format thinking for scalable analytical data systems.",
    highlights: [
      "Explicitly positioned as ongoing work rather than a finished build",
      "Signals active learning in lakehouse architecture and open table formats",
      "Should visually read as experimental and forward-looking",
    ],
    stack: ["Iceberg", "Lakehouse", "Jupyter", "Data Architecture"],
    repo: "https://github.com/Analyst-Ninja/poc-iceberg-datalake-house",
    accent: "wip",
  },
];

export const signals = [
  {
    label: "Focus",
    value: "Streaming, ETL, APIs, lakehouse exploration",
  },
  {
    label: "Working style",
    value: "Practical systems thinking over decorative dashboards",
  },
  {
    label: "Portfolio intent",
    value: "Show engineering depth with a stronger developer-facing presentation",
  },
];

export const consolePreview = [
  "$ airflow dags trigger reddit-sentiment",
  "[ok] dag run created",
  "$ spark-submit jobs/spark-job.py",
  "[stream] kafka -> spark -> s3 -> athena",
  "$ lakehouse status",
  "[wip] iceberg poc under active development",
];
