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

// `url` / `date` are optional: some certificates have no public credential link.
export const certifications: { title: string; org: string; date?: string; url?: string }[] = [
  { title: "DeepLearning.AI Data Engineering", org: "DeepLearning.AI · AWS", date: "Mar 2025", url: "https://www.coursera.org/account/accomplishments/specialization/NGZ5IOLL7SU3" },
  { title: "AWS Cloud Practitioner Essentials", org: "Amazon Web Services", date: "Sep 2024", url: "/assets/AWS-Cloud-Practitioner-Essentials.pdf" },
  { title: "Machine Learning Specialization by Andrew Ng", org: "DeepLearning.AI · Coursera", date: "Jun 2024", url: "https://www.coursera.org/account/accomplishments/specialization/KMDTP7DKAZXT" },
  { title: "Build Data Lakes and Data Warehouses on Google Cloud", org: "Google Cloud", date: "Apr 2026", url: "https://www.coursera.org/account/accomplishments/verify/MFB12W0S34KA" },
  { title: "IBM Data Engineering Professional Certificate", org: "IBM", date: "Sep 2024", url: "https://www.coursera.org/account/accomplishments/specialization/AE8XT8TGG3JN" },
  { title: "Google Data Analytics Certificate", org: "Google · Coursera", date: "May 2023", url: "https://www.coursera.org/account/accomplishments/specialization/7U2WSDYZ7K2H" },
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
    caseStudy: "/projects/pgvector-benchmark",
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
    caseStudy: "/projects/data-feed-engine",
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
    caseStudy: "/projects/transitflow",
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
    caseStudy: "/projects/reddit-etl",
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

// ---------- Project case studies (/projects/[slug]) ----------
// AURUM keeps its own page above; these four share one template.

export interface Impact {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
}

export interface Comparison {
  title: string;
  caption: string;
  // `value` sets the bar length (scaled to the largest row); `display` is the label.
  rows: { label: string; value: number; display: string; highlight?: boolean }[];
}

export interface Visual {
  title: string;
  caption: string;
  // `dark` is optional: screenshots that only exist in one theme use `light` for both.
  light: string;
  dark?: string;
  width: number;
  height: number;
  href?: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  oneLiner: string;
  problem: string;
  // Accent colour per theme, applied through CSS vars on the page root.
  accent: { light: string; dark: string };
  repo: string;
  architecture: { html: string; dark: string; light: string; note: string };
  impact: Impact[];
  comparisons: Comparison[];
  stages: { id: string; title: string; points: string[] }[];
  decisions: { title: string; body: string }[];
  visuals: Visual[];
  stack: string[];
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "pgvector-benchmark",
    title: "pgvector Index Benchmark",
    kicker: "Vector search · PostgreSQL",
    year: "2026",
    oneLiner: "Which Postgres vector index should you actually ship? Measured, not guessed.",
    problem:
      "pgvector's IVFFlat and HNSW and pgvectorscale's StreamingDiskANN all promise fast similarity search, but vendor charts rarely compare them at matched recall, on real data, under memory pressure. I built a reproducible harness that answers the question with numbers: build time, disk size, latency percentiles, recall@10 and behaviour under 100 concurrent clients.",
    accent: { light: "#6d28d9", dark: "#a78bfa" },
    repo: "https://github.com/Analyst-Ninja/pgvector-index-benchmark",
    architecture: {
      html: "/projects/pgvector/pgvector-architecture.html",
      dark: "/projects/pgvector/architecture-dark.png",
      light: "/projects/pgvector/architecture-light.png",
      note: "Six file-backed stages feed a Postgres 17 container; the benchmark loop builds, measures and drops one index at a time.",
    },
    impact: [
      { value: 91, suffix: "×", label: "Faster than exact search", context: "HNSW p50 1.59 ms vs 144.9 ms seq-scan" },
      { value: 0.972, decimals: 3, label: "Recall@10 kept", context: "HNSW at ef_search = 40" },
      { value: 3.7, decimals: 1, suffix: "×", label: "Smaller index", context: "DiskANN 179 MB vs HNSW 673 MB" },
      { value: 328, suffix: "K", label: "Vectors benchmarked", context: "50K Wikipedia articles · 384-dim" },
    ],
    comparisons: [
      {
        title: "Serial throughput",
        caption: "Queries per second, one client, 328,587 vectors. Higher is better.",
        rows: [
          { label: "exact", value: 6.9, display: "6.9 qps" },
          { label: "ivfflat", value: 183.6, display: "184 qps" },
          { label: "diskann", value: 241.9, display: "242 qps" },
          { label: "hnsw", value: 570, display: "570 qps", highlight: true },
        ],
      },
      {
        title: "Index size on disk",
        caption: "Steady-state footprint at the same tier. Lower is better.",
        rows: [
          { label: "hnsw", value: 673, display: "673 MB" },
          { label: "ivfflat", value: 540, display: "540 MB" },
          { label: "diskann", value: 179, display: "179 MB", highlight: true },
        ],
      },
      {
        title: "Memory squeeze: HNSW ÷ DiskANN build time",
        caption: "80,923 rows, shrinking maintenance_work_mem. 1.0 would be break-even — the gap closes, then turns.",
        rows: [
          { label: "2 GB", value: 0.15, display: "0.15" },
          { label: "96 MB", value: 0.47, display: "0.47" },
          { label: "8 MB", value: 0.75, display: "0.75", highlight: true },
          { label: "2 MB", value: 0.72, display: "0.72" },
        ],
      },
    ],
    stages: [
      {
        id: "prep",
        title: "Data prep",
        points: [
          "Stream 200 / 5,000 / 50,000 Wikipedia articles into three scale tiers.",
          "Chunk to 180 words with 40 overlap — every chunk fits MiniLM's 256-token window, so nothing is silently truncated.",
          "Embed with all-MiniLM-L6-v2 (384-dim, L2-normalised) into a memory-mapped .npy, so tiers larger than RAM still work.",
        ],
      },
      {
        id: "load",
        title: "Load",
        points: [
          "COPY into a fresh, unindexed table so insert timing is never polluted by index maintenance.",
          "Hold out N query vectors with a seeded RNG — queries are never trivially present in the index.",
          "Postgres 17 + pgvector + pgvectorscale compiled from source in one Docker image.",
        ],
      },
      {
        id: "bench",
        title: "Benchmark",
        points: [
          "Build each index, time it, size it, query it, then drop it — no index is measured while another warms the cache.",
          "p50 / p95 / p99 latency and serial QPS, plus a 100-client concurrent replay.",
          "Recall@10 scored against an exact sequential-scan ground truth.",
        ],
      },
      {
        id: "squeeze",
        title: "Memory squeeze",
        points: [
          "Compose overrides sweep container RAM and maintenance_work_mem to starve the build.",
          "HNSW falls back to a two-pass on-disk build; DiskANN was expected to degrade less.",
          "Finding: the gap narrows from 0.15 to 0.75 and then turns — DiskANN only wins once the HNSW graph itself outgrows RAM.",
        ],
      },
    ],
    decisions: [
      { title: "Recall is an operating point", body: "Each index is measured at one tuning setting and compared only at matched recall — a single bar chart flatters whichever index is tuned loosest." },
      { title: "Honest queries", body: "Query vectors are held out of the load, so the benchmark never retrieves a vector it was handed verbatim." },
      { title: "Isolation per index", body: "Build, measure, drop. Each index gets the cache to itself, and inserts are timed on an unindexed table." },
      { title: "Every stage re-runnable", body: "Stages talk only through files under data/<tier>/, so any one of them can be re-run alone — or driven end to end from a notebook." },
    ],
    visuals: [
      {
        title: "Recall vs latency",
        caption: "328,587 rows: HNSW reaches 0.972 recall@10 at 1.59 ms p50.",
        dark: "/projects/pgvector/recall-vs-latency-dark.png",
        light: "/projects/pgvector/recall-vs-latency-light.png",
        width: 846,
        height: 612,
      },
      {
        title: "Build & storage cost",
        caption: "DiskANN builds slowest but stores the smallest index.",
        dark: "/projects/pgvector/build-cost-dark.png",
        light: "/projects/pgvector/build-cost-light.png",
        width: 715,
        height: 940,
      },
    ],
    stack: ["Python 3.12", "uv", "PostgreSQL 17", "pgvector", "pgvectorscale", "sentence-transformers", "Hugging Face datasets", "psycopg 3", "NumPy", "matplotlib", "Docker Compose"],
  },
  {
    slug: "data-feed-engine",
    title: "Data Feed Engine",
    kicker: "Config-driven ingestion",
    year: "2025",
    oneLiner: "A new data feed should be a config file, not a new pipeline.",
    problem:
      "Most ingestion code gets copy-pasted per source: new connection logic, new incremental logic, new logging, new bugs. I built an engine where every feed shares one run contract — validate, extract, process, check, load, emit metrics — and adding a feed means writing one JSON config and one small class.",
    accent: { light: "#4d7c0f", dark: "#bef264" },
    repo: "https://github.com/Analyst-Ninja/data-feed-engine",
    architecture: {
      html: "/projects/data-feed-engine/framework.html",
      dark: "/projects/data-feed-engine/framework-dark.png",
      light: "/projects/data-feed-engine/framework-light.png",
      note: "Entry point → runner → factory and registry → BaseFeed.run, with pluggable JDBC and S3 datasources.",
    },
    impact: [
      { value: 2, label: "Files to add a feed", context: "one JSON config + one class" },
      { value: 0, label: "Runner changes per feed", context: "resolved through the registry" },
      { value: 6, label: "Run phases, one contract", context: "validate → extract → process → DQ → load → metrics" },
      { value: 2, label: "Datasources live", context: "JDBC (MySQL) · S3 parquet" },
    ],
    comparisons: [],
    stages: [
      {
        id: "bootstrap",
        title: "Bootstrap",
        points: [
          "A Lambda event or CLI call (config, date, full_load) is parsed into argv and handed to the runner.",
          "The runner loads the feed's JSON config and asks the factory for its feed_type.",
          "The factory resolves classes through a registry filled by @register_feed and @register_datasource decorators.",
        ],
      },
      {
        id: "run",
        title: "Feed run",
        points: [
          "BaseFeed.run validates input and output connections before touching data.",
          "Extract → subclass process() → subclass data-quality checks → load, in the same order for every feed.",
          "Pandas today, with the PySpark path stubbed behind the same interface.",
        ],
      },
      {
        id: "incremental",
        title: "Incremental",
        points: [
          "Each run appends its metrics — status, row counts, max of the update columns — to an S3 feed log.",
          "The next incremental run reads the last successful watermark back and filters the source query with it.",
          "Output is parquet partitioned by load_type / date / execution_id, with a SHA-256 hash of the composite key.",
        ],
      },
      {
        id: "deploy",
        title: "Deploy",
        points: [
          "One python:3.12-slim image with awslambdaric runs as a Lambda container, as a non-root user.",
          "Credentials come from environment variables named in the config, never from the config itself.",
          "SonarQube scans every push and pull request.",
        ],
      },
    ],
    decisions: [
      { title: "Registry over if/else", body: "New sources and feeds register themselves by decorator, so the runner and factory never change when the catalogue grows." },
      { title: "Always leave a trace", body: "Metrics are emitted in a finally block — a failed run still records its status and error for the next one to read." },
      { title: "State lives with the data", body: "The incremental watermark is read from the feed log in S3, so runs stay stateless and Lambda-friendly." },
      { title: "Idempotent output keys", body: "A SHA-256 hash of the composite key lands on every row, so downstream merges can dedupe reliably." },
    ],
    visuals: [
      {
        title: "Deployment",
        caption: "Invoke event → Lambda container → MySQL extract → parquet and feed log on S3.",
        dark: "/projects/data-feed-engine/deployment-dark.png",
        light: "/projects/data-feed-engine/deployment-light.png",
        width: 2048,
        height: 1320,
        href: "/projects/data-feed-engine/deployment.html",
      },
    ],
    stack: ["Python 3.12", "pandas", "PySpark", "SQLAlchemy", "PyMySQL", "boto3", "s3fs", "PyArrow", "Pydantic", "AWS Lambda", "Docker", "SonarQube"],
  },
  {
    slug: "transitflow",
    title: "TransitFlow Realtime Event Stream",
    kicker: "Streaming · Kafka + Spark",
    year: "2024",
    oneLiner: "Five live IoT streams, one Spark job, analytics-ready in S3.",
    problem:
      "A vehicle travelling London → Birmingham emits vehicle, GPS, traffic-camera, weather and emergency events. The goal: move all five streams through Kafka, give each a schema in Spark Structured Streaming, and land them in S3 where Glue, Athena and Redshift can query them — without a manual step in between.",
    accent: { light: "#0e7490", dark: "#22d3ee" },
    repo: "https://github.com/Analyst-Ninja/TransitFlow-RT-Event-Stream-using-kafka",
    architecture: {
      html: "/projects/transitflow/transitflow-architecture.html",
      dark: "/projects/transitflow/architecture-dark.png",
      light: "/projects/transitflow/architecture-light.png",
      note: "IoT simulator → Kafka → Spark (master + 2 workers) → S3 lake, catalogued by Glue and queried from Athena and Redshift Serverless.",
    },
    impact: [
      { value: 5, label: "Live event streams", context: "vehicle · GPS · traffic · weather · emergency" },
      { value: 2, suffix: " min", label: "Late-data watermark", context: "per stream, on event time" },
      { value: 30, prefix: "~", suffix: "%", label: "Faster reporting", context: "Glue ETL into Redshift" },
      { value: 50, suffix: "%", label: "Less setup time", context: "Dockerised Kafka + Spark" },
    ],
    comparisons: [
      {
        title: "Fields per event stream",
        caption: "Each Kafka topic gets its own explicit Spark schema.",
        rows: [
          { label: "vehicle_data", value: 10, display: "10 fields" },
          { label: "weather_data", value: 10, display: "10 fields" },
          { label: "emergency_data", value: 8, display: "8 fields" },
          { label: "gps_data", value: 6, display: "6 fields" },
          { label: "traffic_data", value: 6, display: "6 fields" },
        ],
      },
    ],
    stages: [
      {
        id: "simulate",
        title: "Simulate",
        points: [
          "A Python producer moves a vehicle from London to Birmingham in 100 steps with realistic jitter.",
          "Each step emits five correlated events sharing device id, timestamp and location.",
          "Events are keyed by id and serialised to JSON with a delivery callback per message.",
        ],
      },
      {
        id: "stream",
        title: "Stream",
        points: [
          "Confluent Kafka broker + ZooKeeper, one topic per event type.",
          "Topic names are configurable by environment variable.",
          "Everything runs locally from one docker-compose file.",
        ],
      },
      {
        id: "process",
        title: "Process",
        points: [
          "Spark Structured Streaming on a master + 2-worker cluster subscribes to all five topics.",
          "JSON is parsed against explicit StructType schemas, with a 2-minute event-time watermark.",
          "Five checkpointed append-mode queries write parquet to S3 through s3a.",
        ],
      },
      {
        id: "query",
        title: "Catalogue & query",
        points: [
          "Glue crawlers discover new data in S3 and update the Data Catalog.",
          "Athena queries the lake in place with SQL.",
          "Redshift Serverless holds the warehouse copy for reporting and dashboards.",
        ],
      },
    ],
    decisions: [
      { title: "Topic per event type", body: "Streams evolve independently — a new weather field never forces a change to the vehicle pipeline." },
      { title: "Schemas at the edge", body: "Explicit Spark schemas turn loose JSON into typed columns before anything lands in the lake." },
      { title: "Checkpointed sinks", body: "Each query has its own S3 checkpoint, so a restarted job resumes from its last committed offset." },
      { title: "Local first", body: "Kafka, ZooKeeper and Spark come up with one docker-compose command — the whole stream is reproducible on a laptop." },
    ],
    visuals: [],
    stack: ["Python", "Apache Kafka", "ZooKeeper", "Spark Structured Streaming", "PySpark", "Amazon S3", "AWS Glue", "Athena", "Redshift Serverless", "Docker Compose"],
  },
  {
    slug: "reddit-etl",
    title: "Reddit Sentiment ETL",
    kicker: "Batch ETL · Airflow + Spark",
    year: "2024",
    oneLiner: "How do data communities on Reddit actually feel? A daily pipeline that keeps score.",
    problem:
      "I wanted a daily read on the mood of r/python, r/dataengineering, r/data and r/career. The pipeline pulls new posts, keeps the raw copy, scores every post with VADER inside Spark, and serves an analytics table to Power BI — orchestrated end to end by Airflow with retries.",
    accent: { light: "#0f766e", dark: "#2dd4bf" },
    repo: "https://github.com/Analyst-Ninja/reddit-sentiment-etl-airflow-spark",
    architecture: {
      html: "/projects/reddit-etl/reddit-sentiment-architecture.html",
      dark: "/projects/reddit-etl/architecture-dark.png",
      light: "/projects/reddit-etl/architecture-light.png",
      note: "Airflow drives extract → MySQL raw → Spark sentiment → PostgreSQL, which feeds the Power BI dashboard.",
    },
    impact: [
      { value: 3395, label: "Posts scored", context: "across 4 subreddits" },
      { value: 4, label: "Airflow tasks, daily", context: "with retries and a 2-minute back-off" },
      { value: 70.7, decimals: 1, suffix: "%", label: "Positive posts", context: "VADER compound > 0.5" },
      { value: 0.6, decimals: 2, label: "Overall sentiment", context: "on a −1 to 1 scale" },
    ],
    comparisons: [
      {
        title: "Average sentiment by subreddit",
        caption: "Mean VADER compound score, −1 to 1. r/python is the happiest place in data.",
        rows: [
          { label: "r/python", value: 0.74, display: "0.74", highlight: true },
          { label: "r/dataengineering", value: 0.6, display: "0.60" },
          { label: "r/data", value: 0.58, display: "0.58" },
          { label: "r/career", value: 0.45, display: "0.45" },
        ],
      },
      {
        title: "Sentiment distribution",
        caption: "3,395 posts, thresholded at ±0.5.",
        rows: [
          { label: "Positive", value: 2400, display: "2,400 · 70.7%", highlight: true },
          { label: "Neutral", value: 799, display: "799 · 23.5%" },
          { label: "Negative", value: 196, display: "196 · 5.8%" },
        ],
      },
    ],
    stages: [
      {
        id: "extract",
        title: "Extract",
        points: [
          "PRAW pulls new posts from four subreddits into a parquet staging file.",
          "Title, body, author, score, comments, upvote ratio and timestamps are captured per post.",
        ],
      },
      {
        id: "raw",
        title: "Land raw",
        points: [
          "Posts load into MySQL as the raw layer, with utf8mb4 so emoji and non-Latin text survive.",
          "Inserts skip ids that already exist, so reruns never duplicate a post.",
        ],
      },
      {
        id: "score",
        title: "Score",
        points: [
          "Spark reads the raw table, drops posts with under 20 characters of body text, and scores each body with VADER through a UDF.",
          "Compound scores above 0.5 are Positive, below −0.5 Negative, the rest Neutral.",
        ],
      },
      {
        id: "serve",
        title: "Serve",
        points: [
          "The scored table loads into PostgreSQL as the analytics layer.",
          "Power BI reads it for totals, per-subreddit scores and month-over-month trends.",
        ],
      },
    ],
    decisions: [
      { title: "Raw and modelled apart", body: "MySQL keeps exactly what Reddit returned; PostgreSQL holds only the scored, analysis-ready shape." },
      { title: "Idempotent loads", body: "Every insert checks the post id first, so a retried or re-run DAG converges instead of duplicating." },
      { title: "Retries by default", body: "Each task retries once after two minutes — transient API or database hiccups don't page anyone." },
      { title: "Containerised Airflow", body: "Docker Compose loads secrets from .env, so the same DAG runs locally and in a container." },
    ],
    visuals: [
      {
        title: "Power BI dashboard",
        caption: "Totals, per-subreddit sentiment and month-over-month trend, April–September 2024.",
        light: "/projects/reddit-etl/powerbi-dashboard.png",
        width: 2039,
        height: 1180,
      },
      {
        title: "Airflow DAG",
        caption: "Four PythonOperator tasks, green end to end.",
        light: "/projects/reddit-etl/airflow-dag.png",
        width: 2079,
        height: 316,
      },
    ],
    stack: ["Apache Airflow", "PySpark", "VADER", "PRAW", "MySQL", "PostgreSQL", "pandas", "Parquet", "Power BI", "Docker Compose"],
  },
];
