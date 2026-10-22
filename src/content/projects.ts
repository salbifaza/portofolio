import type { Project } from './types';

const gh = (repo: string) => `https://github.com/salbifaza/${repo}`;

export const projects: Project[] = [
  {
    slug: 'lakehouse-iceberg-stream',
    name: 'Streaming Lakehouse',
    category: 'Streaming',
    kind: 'public',
    stack: ['Apache Fluss', 'Apache Flink', 'Flink CDC', 'Apache Iceberg', 'Apache Polaris', 'Trino', 'SeaweedFS', 'PostgreSQL', 'Docker Compose'],
    repo: gh('lakehouse-iceberg-stream'),
    caseStudy: {
      detail: 'full',
      summary:
        'Postgres changes stream through Apache Fluss into Iceberg, with a bronze, silver and gold medallion maintained continuously in Flink SQL and queried with Trino.',
      problem:
        'The usual CDC stack needs Kafka, Debezium, Kafka Connect and a lake sink connector. Apache Fluss claims one streaming storage layer can replace all of it and tier itself into a lakehouse. I wanted to find out whether that holds up end to end.',
      architecture: [
        'Flink CDC reads Postgres logical replication and writes six bronze tables into Fluss.',
        'Flink SQL jobs maintain silver (clean, conform, join) and gold (retraction-safe aggregates) continuously.',
        'Fluss tiers all 14 tables into Apache Iceberg on SeaweedFS, registered in an Apache Polaris REST catalog.',
        'Trino queries the Iceberg tables with no Fluss-specific code.',
      ],
      results: [
        'Postgres INSERT, UPDATE and DELETE become queryable in Iceberg through Trino in about 30 to 150 seconds.',
        'All three gold tables equal the same aggregates computed in Postgres, before and after live changes.',
        'Cancelling and un-cancelling an order, renaming a category and deleting lines all converge back correctly.',
        'Nine upstream issues were found and documented along the way.',
      ],
    },
  },
  {
    slug: 'stream-flink-fluss',
    name: 'Real-time CDC with Fluss',
    category: 'Streaming',
    kind: 'public',
    stack: ['PostgreSQL', 'Flink CDC', 'Apache Fluss', 'Apache Flink', 'ClickHouse'],
    repo: gh('stream-flink-fluss'),
    caseStudy: {
      detail: 'full',
      summary:
        'Postgres to ClickHouse in about 1.5 seconds with no Kafka and no Debezium, and revenue tables that stay correct when orders are cancelled.',
      problem:
        'Most CDC demos stop at rows showing up in the warehouse. The harder question is whether aggregates stay correct through updates, deletes and cancellations, and whether the pipeline survives a crash.',
      architecture: [
        'Flink CDC reads the Postgres write-ahead log and writes every table into Apache Fluss.',
        'A Flink SQL job maintains revenue aggregates in Fluss as retraction-safe gold tables.',
        'A second Flink job streams each Fluss changelog into ClickHouse as appended rows.',
        'ClickHouse never runs an UPDATE or DELETE; ReplacingMergeTree keeps the latest row.',
      ],
      results: [
        'Postgres UPDATE to ClickHouse row in 0.9 to 2.5 seconds.',
        'All three gold tables identical to Postgres, row for row, before and after retractions.',
        'SIGKILL on the TaskManager with 2,000 rows in flight lost and duplicated nothing.',
        'The sink writes as a user with INSERT only.',
      ],
    },
  },
  {
    slug: 'stream-debezium-kafka',
    name: 'Real-time CDC with Debezium',
    category: 'Streaming',
    kind: 'public',
    stack: ['PostgreSQL', 'Debezium', 'Kafka Connect', 'Apache Kafka', 'Apache Flink', 'ClickHouse'],
    repo: gh('stream-debezium-kafka'),
    caseStudy: {
      detail: 'full',
      summary:
        'Debezium and Kafka mirror Postgres into ClickHouse, while a Flink SQL gold layer keeps revenue metrics correct about two seconds behind the source.',
      problem:
        'A CDC pipeline is only useful if its numbers survive updates, deletes and cancellations. I wanted a reproducible reference that proves that, not just one that moves rows.',
      architecture: [
        'Debezium streams an e-commerce Postgres database into per-table Kafka topics.',
        'One consumer mirrors every table into ClickHouse through a sink connector.',
        'A Flink SQL job builds daily revenue, category revenue and customer lifetime value from the same change stream.',
        'make verify recomputes the aggregates in Postgres and requires a row-for-row match.',
      ],
      results: [
        'A changed aggregate row reaches ClickHouse in 1.4 to 2.5 seconds.',
        'All three aggregates match Postgres on every CI run.',
        'Killing Kafka Connect with 2,000 rows in flight lost and duplicated nothing.',
        'A new source column appears in ClickHouse automatically.',
      ],
    },
  },
  {
    slug: 'stream-cdc-peerdb',
    name: 'Real-time CDC with PeerDB',
    category: 'Streaming',
    kind: 'public',
    stack: ['PostgreSQL', 'PeerDB', 'Temporal', 'ClickHouse', 'MinIO'],
    repo: gh('stream-cdc-peerdb'),
    caseStudy: {
      detail: 'full',
      summary:
        'PeerDB mirrors Postgres into ClickHouse, with a self-reconciling gold layer that forgets a cancelled order about 20 seconds after it is cancelled.',
      problem:
        'Mirrors are easy; trustworthy business tables on top of them are not. I wanted a gold layer that corrects itself when the source changes, and proof that it does.',
      architecture: [
        'PeerDB uses Postgres logical replication and a Temporal-orchestrated control plane to sync into ClickHouse.',
        'Avro batches stage through MinIO.',
        'Refreshable materialized views in ClickHouse rebuild the gold tables every ten seconds.',
        'make smoke recomputes every gold table in Postgres and requires an exact match.',
      ],
      results: [
        'Inserts, updates and deletes land in ClickHouse within one sync cycle, about 10 to 20 seconds.',
        'All three gold tables identical to Postgres, checked on every CI run.',
        'Killing the flow worker with 2,000 rows in flight lost and duplicated nothing.',
        'Pausing the mirror grew retained WAL from 56 B to 121 kB, measured and alerted on.',
      ],
    },
  },
  {
    slug: 'data-platform-gitops',
    name: 'GitOps Data Platform',
    category: 'Platform',
    kind: 'public',
    stack: ['FluxCD', 'Kubernetes', 'Kafka', 'ClickHouse', 'Airflow', 'Trino', 'Superset', 'Prometheus'],
    repo: gh('data-platform-gitops'),
    caseStudy: {
      detail: 'full',
      summary:
        'A FluxCD monorepo that delivers a full Kubernetes data platform to two environments from one branch, with every decision enforced in CI.',
      problem:
        'Plenty of GitOps repos show that a directory tree can be laid out correctly. I wanted one that shows the delivery mechanism itself has been thought through: failed reconciles, hand-edited prod, unreviewed chart versions.',
      architecture: [
        'FluxCD reconciles Kafka with Debezium CDC, StackGres PostgreSQL, ClickHouse, MinIO, Airflow, Trino and Superset, plus a Prometheus and Loki stack.',
        'A base and overlay structure serves two environments from a single branch.',
        'External Secrets Operator keeps secrets out of git.',
        'Network policies are derived from the architecture diagram.',
      ],
      results: [
        'Each architecture decision record has a corresponding CI check, including policy-as-code with conftest.',
        'kustomize build, schema validation and full chart rendering run on every overlay.',
        'Failures found along the way, and the limits of the project, are written down in the README.',
      ],
    },
  },
  {
    slug: 'lakehouse-iceberg-batch',
    name: 'Open Lakehouse',
    category: 'Lakehouse',
    kind: 'public',
    stack: ['Apache Iceberg', 'Apache Polaris', 'Trino', 'dlt', 'Metabase'],
    repo: gh('lakehouse-iceberg-batch'),
    caseStudy: {
      detail: 'full',
      summary:
        'A local open lakehouse on Iceberg, Polaris and Trino, with RBAC, credential vending, table maintenance and observability designed and exercised.',
      problem:
        'A tutorial shows that data lands in Iceberg and Trino can query it. I wanted to show the operational surface has been thought through, and where it stops working.',
      architecture: [
        'dlt ingests three batch sources into Apache Iceberg tables.',
        'Apache Polaris is the REST catalog, with least-privilege principals and credential vending for query engines.',
        'Trino queries the tables, and Metabase sits on top.',
        'Maintenance, observability from Iceberg metadata tables, and data quality checks are built in.',
      ],
      results: [
        'make up reproduces the whole stack from zero.',
        'make smoke verifies every claim the project makes.',
        'Tool choices are documented with the trade-offs stated, along with what to change for production.',
      ],
    },
  },
  {
    slug: 'batch-airflow-dlt-dbt',
    name: 'Config-driven ELT',
    category: 'Batch',
    kind: 'public',
    stack: ['Apache Airflow', 'dlt', 'dbt', 'ClickHouse', 'Docker'],
    repo: gh('batch-airflow-dlt-dbt'),
    caseStudy: {
      detail: 'full',
      summary:
        'A batch ELT platform where adding a pipeline is a YAML file, not a new DAG file, built from a pattern I ran in production.',
      problem:
        'One DAG file per pipeline works until the count grows. Files drift, and reviewing a new pipeline means reviewing Airflow wiring instead of the pipeline itself.',
      architecture: [
        'Three sources, two public APIs and one scraped site, land in ClickHouse as bronze tables through dlt.',
        'dbt models silver and gold layers.',
        'One DAG factory per execution shape (dlt, dbt, docker) globs a directory of YAML configs and generates a DAG per file.',
        'A missing config key fails DAG parsing loudly instead of silently.',
      ],
      results: [
        'The README records exact row counts reproduced against the running stack.',
        'The pattern mirrors a production system that orchestrates around 40 ingestion pipelines.',
        'The cost of the approach, less per-DAG flexibility, is stated alongside the alternatives.',
      ],
    },
  },
  {
    slug: 'bigquery-modernization',
    name: 'BigQuery Modernization',
    category: 'Data warehouse',
    kind: 'employer',
    stack: ['BigQuery', 'Dataform', 'Apache Airflow', 'Medallion architecture'],
    caseStudy: {
      detail: 'summary',
      summary:
        'Re-modelled the entire data warehouse on a Medallion architecture (bronze, silver, gold) to improve data quality, governance and ETL efficiency, cutting transformation times by 70%.',
    },
  },
  {
    slug: 'airflow-dag-factory',
    name: 'Airflow & DAG Factory',
    category: 'Orchestration',
    kind: 'employer',
    stack: ['Apache Airflow', 'DAG Factory', 'GitLab CI', 'Docker'],
    caseStudy: {
      detail: 'summary',
      summary:
        'Set up an on-premise Apache Airflow environment and a standardised DAG template that scaled to over 50 pipelines and improved deployment speed by 80% through CI/CD.',
    },
  },
  {
    slug: 'hybrid-warehouse',
    name: 'Hybrid ClickHouse & BigQuery Warehouse',
    category: 'Data warehouse',
    kind: 'employer',
    stack: ['ClickHouse', 'BigQuery', 'ETL optimisation'],
    caseStudy: {
      detail: 'summary',
      summary:
        'Designed a cost-effective hybrid warehouse that reduced cloud infrastructure spending by 70% through optimised ETL and strategic data placement.',
    },
  },
  {
    slug: 'superset-platform',
    name: 'Superset Analytics Platform',
    category: 'Analytics',
    kind: 'employer',
    stack: ['Apache Superset', 'BigQuery', 'ClickHouse'],
    caseStudy: {
      detail: 'summary',
      summary:
        'Implemented a self-hosted analytics platform to improve data governance and reduce costs, migrating from cloud-based BI tools.',
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
