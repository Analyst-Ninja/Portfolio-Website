// Single source of truth for all site content. Components import from here —
// do not hardcode copy into components.

export type Accent = "gold" | "vector" | "feeds" | "lake" | "stream" | "airflow" | "api" | "realtime" | "product";

export interface Project {
  slug: string;
  title: string;
  status: "Flagship" | "Completed" | "Live Demo";
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repo: string;
  live?: string;
  demo?: string;
  caseStudy?: string;
  // Interactive architecture diagram (HTML in public/projects/<slug>/).
  diagram?: string;
  accent: Accent;
}

export const profile = {
  name: "Rohit Kumar",
  firstName: "Rohit",
  title: "Data Engineer",
  employer: "Moody's Ratings",
  location: "Bengaluru, India",
  tagline: "Data Engineer at Moody's.",
  summary:
    "I design ingestion frameworks, lakehouses and data APIs that stay correct when nobody is watching — and, more and more, the MCP servers and services that hand that data to AI.",
  email: "r.kumar01@hotmail.com",
  github: "https://github.com/Analyst-Ninja",
  linkedin: "https://www.linkedin.com/in/analyst-ninja/",
  resume: "/assets/Rohit-Kumar-Resume-20260920.pdf",
  photo: "/assets/profile-pic.png",
};

export interface Metric {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  context: string;
}

// Career-level numbers (from the résumé), not project numbers.
export const metrics: Metric[] = [
  { value: 4, suffix: "+ yrs", label: "In data engineering & analytics", context: "Moody's · Axis Bank" },
  { value: 80, suffix: "+ feeds", label: "Ingested from 10+ sources", context: "AIDE framework · JDBC, APIs, S3" },
  { value: 100, suffix: "+ TB", label: "Under data-quality governance", context: "Great Expectations · 95%+ of feeds" },
  { value: 30, suffix: "K+ req/day", label: "Served by APIs I shipped", context: "p95 < 20 ms · Spring Boot + MongoDB" },
];

// Nodes of the animated hero DAG, left → right.
export const pipelineStages = [
  { label: "Sources", detail: "JDBC · APIs · S3" },
  { label: "Ingest", detail: "80+ feeds" },
  { label: "Quality", detail: "Great Expectations" },
  { label: "Lakehouse", detail: "Iceberg · dbt" },
  { label: "Model", detail: "features · ML" },
  { label: "Serve", detail: "APIs · MCP · AI" },
];

export const interests = [
  { title: "Data platforms", body: "Ingestion frameworks, dbt medallion warehouses, Iceberg lakehouses, orchestration on AWS." },
  { title: "Applied ML", body: "Feature stores, walk-forward validation, SHAP-driven selection — the engineering that makes models trustworthy." },
  { title: "AI × Data", body: "MCP servers and LLM tooling that let people ask questions of governed data in plain language." },
];

export interface Role {
  kicker: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: { metric: string; text: string; tag?: string }[];
}

export const experience: Role[] = [
  {
    kicker: "Current",
    role: "Data Engineer",
    company: "Moody's Ratings",
    period: "Apr 2025 — Present",
    location: "Bengaluru",
    highlights: [
      {
        metric: "−60% infra cost",
        text: "Built and led deployments of the AIDE ingestion framework — 80+ feeds from 10+ heterogeneous sources (JDBC, APIs, S3) — and cut deployment time by 75%.",
      },
      {
        metric: "100+ TB governed",
        text: "Operationalised data governance with Great Expectations across 95%+ of feeds, with CloudWatch dashboards giving stakeholders one view of data health.",
      },
      {
        metric: "−50% data prep",
        text: "Led development of an Apache Iceberg lakehouse with ACID transactions and lineage for 30+ data scientists, and built an MCP server for fast data access and exploration.",
        tag: "Data × AI",
      },
      {
        metric: "30K+ req/day",
        text: "Architected and shipped two Spring Boot / MongoDB services delivering relevance-scored news and issuer sentiment to an analyst workbench and agentic-AI workflows — manual triage down 90% at p95 < 20 ms.",
        tag: "Data × AI",
      },
    ],
  },
  {
    kicker: "Earlier",
    role: "Deputy Manager",
    company: "Axis Bank",
    period: "Jul 2022 — Apr 2025",
    location: "Mumbai",
    highlights: [
      {
        metric: "−40% repeats",
        text: "Designed ETL pipelines and a self-service dashboard for 16 product lines to automate repeat-complaint detection, saving 72 hours a month.",
      },
      {
        metric: "−52% missing income",
        text: "Led the Missing Income Nudge project for RBI data-quality compliance, with targeted strategies for 14 customer personas.",
      },
    ],
  },
];

export const awards = [
  { title: "IM'PACT Award — Lead with Curiosity · DB indexing", org: "Moody's", date: "Sep 2026", body: "For improving DB indexing use cases — helping the team index a large volume of unstructured data with pgvector." },
  { title: "IM'PACT Award — Lead with Curiosity", org: "Moody's", date: "Sep 2026", body: "For leading application-level APIs that integrated CLEANews with internal systems, beyond core data-engineering scope." },
  { title: "Platinum Learner Award (2×)", org: "Axis Bank · BIU", date: "Mar 2025", body: "Top learners in the Business Intelligence Unit, FY'24 and FY'25." },
  { title: "Star Award", org: "Axis Bank · BIU", date: "Nov 2023", body: "Repeat-complaint insights that cut bank-wide repeats by 40%." },
];

export const education = {
  school: "National Institute of Technology, Tiruchirappalli",
  degree: "M.Tech — Energy Engineering",
  year: "2022",
};

export const certifications = [
  { title: "IBM Data Engineering Professional Certificate", org: "IBM · Coursera" },
  { title: "IBM Data Warehousing Certificate", org: "IBM · Coursera" },
  { title: "Machine Learning Specialization", org: "DeepLearning.AI · Coursera" },
  { title: "AWS Cloud Practitioner Essentials", org: "Amazon Web Services" },
  { title: "Google Data Analytics Certificate", org: "Google · Coursera" },
];

export const totalExperience = "4+ years";

export const stackGroups = [
  { title: "Ingest & Stream", items: ["Kafka", "Spark Streaming", "REST APIs", "JDBC", "AWS Glue"] },
  { title: "Process & Transform", items: ["Python", "PySpark", "SQL", "dbt", "Spark MLlib", "Hadoop"] },
  { title: "Store & Query", items: ["Apache Iceberg", "S3", "Athena", "Redshift", "PostgreSQL", "MongoDB", "Cassandra"] },
  { title: "Orchestrate & Ship", items: ["Airflow", "Step Functions", "ECS Fargate", "Lambda", "EMR", "Docker", "Terraform", "GitHub Actions"] },
  { title: "Quality & Services", items: ["Great Expectations", "CloudWatch", "Java", "Spring Boot", "FastAPI"] },
  { title: "AI & ML", items: ["MCP", "LangChain", "LangGraph", "SageMaker", "LightGBM", "SHAP"] },
];

const DRIVE_DEMO = "https://drive.google.com/drive/u/0/folders/1aS_D9_asOrPL4PoNjjG3ZCPCfoXRbUyZ";

export const projects: Project[] = [
  {
    slug: "aurum",
    title: "AURUM",
    status: "Flagship",
    year: "2026",
    summary:
      "A stock-research data platform built solo — the full stack an investment data team runs: ingestion, a dbt warehouse, an ML ranking model, and the AWS infrastructure that runs it unattended.",
    highlights: [
      "26 years of prices and SEC filings for all 503 S&P 500 companies",
      "dbt bronze → silver → gold warehouse: 20 models, 237 tests",
      "Step Functions + Fargate on a schedule, all declared in Terraform",
    ],
    stack: ["Python", "dbt", "PostgreSQL", "LightGBM", "SHAP", "Docker", "Terraform", "AWS", "GitHub Actions"],
    repo: "https://github.com/Analyst-Ninja/aurum",
    demo: DRIVE_DEMO,
    caseStudy: "/projects/aurum",
    accent: "gold",
  },
  {
    slug: "pgvector-benchmark",
    title: "pgvector Index Benchmark",
    status: "Completed",
    year: "2026",
    summary:
      "A reproducible benchmark of pgvector's IVFFlat and HNSW against pgvectorscale's DiskANN on a real Wikipedia embedding corpus — build cost, disk size, latency, recall and concurrency.",
    highlights: [
      "HNSW 91× faster than exact search at 0.972 recall@10 (328K vectors)",
      "DiskANN index 3.7× smaller than HNSW's",
      "Held-out query vectors; memory-squeeze sweeps on build cost",
    ],
    stack: ["PostgreSQL", "pgvector", "pgvectorscale", "Python", "sentence-transformers", "Docker"],
    repo: "https://github.com/Analyst-Ninja/pgvector-index-benchmark",
    diagram: "/projects/pgvector/pgvector-architecture.html",
    accent: "vector",
  },
  {
    slug: "data-feed-engine",
    title: "Data Feed Engine",
    status: "Completed",
    year: "2025",
    summary:
      "A config-driven ingestion framework: a new feed is one JSON config plus one class, and the engine runs extract, processing, quality checks, load and run metrics the same way every time.",
    highlights: [
      "Factory + registry — feeds and datasources plug in by decorator",
      "Incremental watermark loads tracked in an S3 feed log",
      "Ships as an AWS Lambda container image, SonarQube-gated",
    ],
    stack: ["Python", "pandas", "SQLAlchemy", "MySQL", "S3", "AWS Lambda", "Docker"],
    repo: "https://github.com/Analyst-Ninja/data-feed-engine",
    diagram: "/projects/data-feed-engine/framework.html",
    accent: "feeds",
  },
  {
    slug: "lakehouse",
    title: "Iceberg Lakehouse POC",
    status: "Completed",
    year: "2026",
    summary:
      "A personal deep-dive into the open-table-format pattern I use at work: Apache Iceberg tables on S3, registered in Glue and queried through Athena, with a tested dbt layer on top.",
    highlights: [
      "Iceberg v2 tables with hidden day + bucket partitioning",
      "Row-level updates, snapshot and file-metadata inspection",
      "Spark-free reads via PyIceberg; dbt-athena Iceberg models with tests",
    ],
    stack: ["Apache Iceberg", "PySpark", "PyIceberg", "AWS Glue", "Athena", "dbt", "S3"],
    repo: "https://github.com/Analyst-Ninja/poc-iceberg-datalake-house",
    accent: "lake",
  },
  {
    slug: "transitflow",
    title: "TransitFlow Realtime Event Stream",
    status: "Completed",
    year: "2024",
    summary:
      "A real-time transit pipeline: simulated events stream through Kafka, get processed by Spark, and land as analytics-ready datasets in AWS.",
    highlights: [
      "Kafka + Spark streaming vehicle and weather events into S3",
      "Glue ETL into Redshift — report generation ~30% faster",
      "Dockerised Spark and Kafka cut new-project setup time by 50%",
    ],
    stack: ["Kafka", "Spark", "AWS Glue", "Athena", "Redshift", "Docker"],
    repo: "https://github.com/Analyst-Ninja/TransitFlow-RT-Event-Stream-using-kafka",
    accent: "stream",
  },
  {
    slug: "reddit-etl",
    title: "Reddit Sentiment ETL",
    status: "Completed",
    year: "2024",
    summary:
      "An Airflow-orchestrated ETL that extracts Reddit posts, scores sentiment with PySpark, and loads results for BI dashboards.",
    highlights: [
      "Airflow DAGs for scheduling and retries",
      "Raw and modelled layers split across MySQL and PostgreSQL",
      "Feeds a Power BI dashboard downstream",
    ],
    stack: ["Airflow", "PySpark", "MySQL", "PostgreSQL", "Power BI"],
    repo: "https://github.com/Analyst-Ninja/reddit-sentiment-etl-airflow-spark",
    accent: "airflow",
  },
  {
    slug: "voting",
    title: "Realtime Voting System",
    status: "Completed",
    year: "2024",
    summary:
      "A streaming aggregation system that processes live voting events and surfaces real-time counts to a dashboard.",
    highlights: [
      "Votes published to Kafka through a FastAPI endpoint, load-tested with Locust",
      "Spark streaming aggregations feed a live Plotly dashboard",
    ],
    stack: ["Kafka", "Spark", "FastAPI", "Plotly", "Docker"],
    repo: "https://github.com/Analyst-Ninja/realtime-voting-system",
    accent: "realtime",
  },
  {
    slug: "analytics-api",
    title: "Analytics API",
    status: "Completed",
    year: "2024",
    summary:
      "A lightweight serving layer that exposes time-series data from TimescaleDB to downstream consumers through a clean API.",
    highlights: ["API-first access to analytical data", "Time-series storage with TimescaleDB"],
    stack: ["FastAPI", "SQLModel", "TimescaleDB", "Docker", "Railway"],
    repo: "https://github.com/Analyst-Ninja/analytics-api",
    accent: "api",
  },
  {
    slug: "whatsapp",
    title: "WhatsApp Chat Analyzer",
    status: "Live Demo",
    year: "2023",
    summary:
      "A deployed app that turns exported WhatsApp chats into interactive activity, word and sentiment insights.",
    highlights: ["Upload a chat, get instant interactive analytics", "Deployed on Streamlit Cloud"],
    stack: ["Python", "Streamlit", "pandas", "Plotly"],
    repo: "https://github.com/Analyst-Ninja/whatsapp-chat-analyzer",
    live: "https://whatsapp-chat-analytics.streamlit.app/",
    accent: "product",
  },
];

export const consolePreview = [
  "$ aws stepfunctions start-execution --name aurum-daily",
  "[ok] ingest: 503 symbols · dbt build: 237 tests passed",
  "$ aurum train --walk-forward --purge 5d",
  "[ok] model registered · shap features pruned",
  "$ mcp call lakehouse.query --table feeds.daily",
  "[ok] iceberg → 12 rows · lineage attached",
];

export const caseStudies = {
  aurum: {
    title: "AURUM",
    expansion: "Analytics & Unified Research for Market",
    oneLiner: "The entire stack an investment data team builds. Built alone.",
    problem:
      "Stock research needs clean, point-in-time data before any model is worth trusting. I wanted to build every layer myself — ingestion, warehouse, features, model, and the cloud infrastructure that runs it — to production standards, using only free data sources.",
    architectureHtml: "/projects/aurum/aurum-architecture.html",
    architecturePng: { dark: "/projects/aurum/architecture-dark.png", light: "/projects/aurum/architecture-light.png" },
    repo: "https://github.com/Analyst-Ninja/aurum",
    demo: DRIVE_DEMO,
    numbers: [
      { value: "503", label: "S&P 500 symbols" },
      { value: "2000→", label: "Daily history to today" },
      { value: "~2.9M", label: "Feature rows in gold" },
      { value: "237", label: "dbt tests per build" },
      { value: "3", label: "Step Functions workflows" },
      { value: "0", label: "Manual steps" },
    ],
    stages: [
      {
        id: "ingest",
        title: "Ingestion",
        points: [
          "Config-driven framework: a new source is one YAML file plus one class, registered by decorator.",
          "Incremental loads by watermark with deterministic MD5 row keys — reruns are idempotent.",
          "Chunked, memory-bounded streaming reads; a staleness gate skips EDGAR when data is fresh.",
          "Sources: Yahoo Finance daily prices and SEC EDGAR financial statements.",
        ],
      },
      {
        id: "warehouse",
        title: "Warehouse",
        points: [
          "dbt medallion on PostgreSQL: bronze → staging → intermediate → gold marts.",
          "Point-in-time fundamentals so features never leak future filings.",
          "~120 raw features plus cross-sectional z-score, decile and vs-sector variants.",
          "237 tests via dbt_utils and dbt_expectations gate every build.",
        ],
      },
      {
        id: "ml",
        title: "ML",
        points: [
          "LightGBM ranks stocks by expected 5-day market-neutral excess return.",
          "Purged walk-forward training to prevent look-ahead leakage.",
          "SHAP-based feature selection and a versioned, flat-file model registry.",
          "Backtests ship with reality checks: randomisation, signal lag, Deflated Sharpe.",
        ],
      },
      {
        id: "ops",
        title: "Orchestration",
        points: [
          "One Docker image in ECR, run as four ECS Fargate task definitions.",
          "Three Step Functions state machines on EventBridge schedules — nightly ingest, bi-monthly EDGAR, monthly retrain.",
          "dbt and training are separate states: a failed data build can never reach training. Failures alert via SNS.",
          "All infrastructure in Terraform, applied by GitHub Actions (OIDC) on merge to main.",
        ],
      },
    ],
    decisions: [
      { title: "Tests before models", body: "237 data tests run on every build so bad data is caught upstream, not discovered in a backtest." },
      { title: "Structural safety", body: "Training is a separate state machine step that only runs after a green dbt build — not a convention, a constraint." },
      { title: "Honest evaluation", body: "Holdout data is kept apart from model selection, and backtests include anti-overfitting checks. The model is early-stage; the platform around it is built properly." },
      { title: "Free & portable", body: "Every data source is free and nothing is vendor-locked — the whole platform is reproducible from the repo." },
    ],
    stack: ["Python 3.12", "uv", "pandas", "SQLAlchemy", "Pydantic", "dbt", "PostgreSQL (RDS)", "LightGBM", "scikit-learn", "SHAP", "Docker", "ECR", "ECS Fargate", "Step Functions", "EventBridge", "SNS", "Terraform", "GitHub Actions", "SonarQube"],
  },
};
