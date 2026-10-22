import type { Service } from './types';

export const services: Service[] = [
  {
    title: 'Data Modelling',
    description: 'Star schemas and medallion layers that analysts can actually use, built in dbt or Dataform.',
    flow: ['Raw', 'Staging', 'Marts'],
  },
  {
    title: 'Data Pipelines',
    description: 'Batch ELT with Airflow, dlt and dbt, configured by YAML so a new source is not a new DAG.',
    flow: ['Source', 'Extract', 'Transform', 'Load'],
  },
  {
    title: 'Data Scraping',
    description: 'Reliable scrapers and API ingestion that land clean, versioned data in your warehouse.',
    flow: ['Page', 'Parse', 'Clean', 'Store'],
  },
  {
    title: 'Streaming & Lakehouse',
    description: 'Change data capture into Iceberg lakehouses, with queries that stay correct through updates and deletes.',
    flow: ['CDC', 'Kafka', 'Iceberg'],
  },
  {
    title: 'AI Automation',
    description: 'Automating repetitive data and reporting work, with models where they earn their place.',
    flow: ['Trigger', 'Model', 'Action'],
  },
];
