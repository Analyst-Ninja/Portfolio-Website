// Single source of truth for all site content. Components import from here —
// do not hardcode copy into components.

export type Accent = "gold" | "lake" | "mcp" | "stream" | "airflow" | "api" | "realtime" | "product";

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
  accent: Accent;
}

export const profile = {
  name: "Rohit Kumar",
  firstName: "Rohit",
  title: "Data Engineer",
  employer: "Moody's Ratings",
  location: "Bengaluru, India",
  tagline: "Data Engineer at Moody's. I build data platforms, and I'm increasingly interested in where they meet AI.",
  summary:
    "I design pipelines, warehouses and lakehouses that stay correct when nobody is watching — then put ML models and LLM tooling on top of them.",
  email: "r.kumar01@hotmail.com",
  github: "https://github.com/Analyst-Ninja",
  linkedin: "https://www.linkedin.com/in/analyst-ninja/",
  resume: "/assets/Rohit%20Kumar%20-%20Resume%2020260626.pdf",
  photo: "/assets/profile-pic.png",
};

export const metrics = [
  { value: "4+", label: "Years in data" },
  { value: "2.9M", label: "Feature rows in AURUM" },
  { value: "237", label: "dbt data tests" },
  { value: "26 yrs", label: "Of market history ingested" },
];

// Nodes of the animated hero DAG, left → right.
export const pipelineStages = [
  { label: "Sources", detail: "prices · filings" },
  { label: "Ingest", detail: "YAML feeds" },
  { label: "Warehouse", detail: "dbt · 237 tests" },
  { label: "Features", detail: "2.9M rows" },
  { label: "Model", detail: "LightGBM" },
  { label: "Serve", detail: "MCP · Athena" },
];

export const interests = [
  { title: "Data platforms", body: "Ingestion frameworks, dbt medallion warehouses, Iceberg lakehouses, orchestration on AWS." },
  { title: "Applied ML", body: "Feature stores, walk-forward validation, SHAP-driven selection — the engineering that makes models trustworthy." },
  { title: "AI × Data", body: "MCP servers and LLM tooling that let people ask questions of governed data in plain language." },
];

export const experience = [
  {
    kicker: "Current",
    role: "Data Engineer",
    company: "Moody's Ratings",
    period: "2025 — Present",
    description:
      "Building data systems and pipeline reliability for analytics-facing workloads, with a platform and developer-experience mindset.",
  },
  {
    kicker: "Earlier",
    role: "Business Analyst",
    company: "Axis Bank",
    period: "2022 — 2025",
    description:
      "Worked on reporting, data quality and stakeholder requirements — the problem-framing side of data that now shapes how I design pipelines.",
  },
];

export const totalExperience = "4+ years";

export const stackGroups = [
  { title: "Ingest & Stream", items: ["Kafka", "Spark Streaming", "REST APIs", "yfinance", "SEC EDGAR"] },
  { title: "Process & Transform", items: ["Python", "PySpark", "SQL", "dbt", "pandas"] },
  { title: "Store & Query", items: ["PostgreSQL", "Apache Iceberg", "S3", "Athena", "Redshift", "Glue Catalog"] },
  { title: "Orchestrate & Ship", items: ["Airflow", "Step Functions", "ECS Fargate", "Docker", "Terraform", "GitHub Actions"] },
  { title: "ML & AI", items: ["LightGBM", "scikit-learn", "SHAP", "MCP", "FastMCP"] },
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
      "dbt bronze → silver → gold warehouse guarded by 237 tests",
      "Step Functions + Fargate on a schedule, all declared in Terraform",
    ],
    stack: ["Python", "dbt", "PostgreSQL", "LightGBM", "SHAP", "Docker", "Terraform", "AWS", "GitHub Actions"],
    repo: "https://github.com/Analyst-Ninja/aurum",
    demo: DRIVE_DEMO,
    caseStudy: "/projects/aurum",
    accent: "gold",
  },
  {
    slug: "lakehouse",
    title: "Iceberg Lakehouse",
    status: "Completed",
    year: "2026",
    summary:
      "An open-table-format lakehouse on AWS: Apache Iceberg tables on S3, registered in Glue and queried through Athena, with a tested dbt layer on top.",
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
    slug: "mcp-server",
    title: "Lakehouse MCP Server",
    status: "Completed",
    year: "2026",
    summary:
      "A serverless MCP server that lets LLMs and MCP clients query the Iceberg lakehouse through Amazon Athena — no always-on infrastructure.",
    highlights: [
      "Exposes lakehouse tables to any MCP-compatible client",
      "Pay-per-query execution through Athena",
      "Turns a governed lakehouse into a natural-language interface",
    ],
    stack: ["MCP", "Python", "Amazon Athena", "Apache Iceberg", "Serverless"],
    repo: "https://github.com/Analyst-Ninja/poc-iceberg-datalake-house",
    accent: "mcp",
  },
  {
    slug: "transitflow",
    title: "TransitFlow Realtime Event Stream",
    status: "Completed",
    year: "2024",
    summary:
      "A real-time transit pipeline: simulated events stream through Kafka, get processed by Spark, and land as analytics-ready datasets in AWS.",
    highlights: [
      "Kafka → Spark → S3 → Glue / Athena / Redshift end to end",
      "Event-driven design from ingestion through query",
      "Containerised local stack with Docker",
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
  "$ mcp call lakehouse.query \"top sectors by volume\"",
  "[ok] athena → iceberg · 0.9s · 12 rows",
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
