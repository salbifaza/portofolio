
import { icons } from '@/components/icons';

export const portfolioData = {
  name: "Salbi Faza Rinaldi",
  headline: "Senior Data Engineer | Cloud & Big Data Solutions",
  tagline: "I build scalable, cloud-native data platforms and elegant ETL/ELT pipelines that transform raw data into actionable business insights.",
  about: "As a Senior Data Engineer, I have a proven track record in architecting and building robust data solutions on both AWS and GCP. I specialize in orchestrating complex data workflows, minimizing latency, and empowering teams with self-service analytics. I'm a passionate mentor and system architect who thrives at the intersection of data, automation, and business impact, always seeking to build systems that are not only powerful but also efficient and maintainable.",
  contact: {
    email: "salbifaza@gmail.com",
    linkedin: "https://linkedin.com/in/salbifaza",
    github: "https://github.com/salbifaza",
    photo: "https://avatars.githubusercontent.com/u/43633636?v=4",
  },
  cvFile: "/CV_Salbi_Faza_Rinaldi.pdf",
  skills: [
    { name: "Python", icon: icons.python },
    { name: "SQL", icon: icons.sql },
    { name: "AWS", icon: icons.aws },
    { name: "GCP", icon: icons.gcp },
    { name: "Apache Airflow", icon: icons.airflow },
    { name: "Docker", icon: icons.docker },
    { name: "Kubernetes", icon: icons.kubernetes },
    { name: "Apache Spark", icon: icons.spark },
    { name: "dbt", icon: icons.dbt },
  ],
  experience: [
    {
      company: "Farmbyte",
      role: "Senior Data Engineer",
      duration: "Aug 2024 - Present",
      achievements: [
        "Orchestrated over 60 ETL/ELT pipelines on AWS (MWAA, Redshift, Glue), reducing data latency by 70% for more than 200 users.",
        "Designed and implemented ML feature pipelines with PySpark and Glue, accelerating model training cycles by 60%.",
        "Deployed Apache Superset for self-service BI, leading to a 60% reduction in ad-hoc data requests.",
      ],
    },
    {
      company: "Dibimbing.id",
      role: "Data Engineer Mentor",
      duration: "Feb 2024 - Present",
      achievements: [
        "Mentored over 60 students in data engineering fundamentals, including Data Warehousing, DBT, and OLAP, achieving a 90% content satisfaction rate.",
        "Delivered hands-on Apache Airflow and Spark/Hadoop training to MSIB students and corporate clients, significantly improving practical skills and assessment scores.",
      ],
    },
    {
      company: "Ismaya Group",
      role: "Data Engineer",
      duration: "May 2023 - Present",
      achievements: [
        "Architected and built Medallion data pipelines in BigQuery using Dataform, cutting data transformation times by 70%.",
        "Scaled and automated over 50 data pipelines with Airflow and DAG Factory, improving deployment speed by 80% through CI/CD implementation.",
        "Reduced cloud infrastructure costs by 70% by designing a hybrid ClickHouse-BigQuery data warehouse.",
      ],
    },
     {
      company: "SIRCLO",
      role: "Associate Data Intelligence",
      duration: "Jan 2022 - May 2023",
      achievements: [
        "Designed and developed three-star schema data marts using dbt, improving dashboard creation efficiency by 70%.",
        "Created more than 10 comprehensive dashboards in Redash for in-depth analysis of commercial and operational metrics.",
      ],
    },
  ],
  projects: [
    {
      title: "Self-Service Analytics Platform with Apache Superset",
      description: "Implemented a self-hosted analytics platform to enhance data governance and reduce costs, migrating from cloud-based BI tools.",
      stack: ["Apache Superset", "Google BigQuery", "ClickHouse"],
    },
    {
      title: "Hybrid Cloud & On-Premise Data Warehouse",
      description: "Architected a cost-effective hybrid data warehouse that reduced infrastructure spending by 70% through optimized ETL pipelines and strategic data storage.",
      stack: ["Google BigQuery", "ClickHouse", "ETL Optimization"],
    },
    {
      title: "BigQuery Data Warehouse Modernization",
      description: "Re-modeled the entire data warehouse using a Medallion architecture (Bronze, Silver, Gold) to improve data quality, governance, and ETL efficiency.",
      stack: ["BigQuery Dataform", "Apache Airflow", "Medallion Architecture"],
    },
    {
      title: "Scalable Data Orchestration with Airflow & DAG Factory",
      description: "Set up a robust, on-premise Apache Airflow environment and developed standardized DAG templates to streamline and scale ETL processes.",
      stack: ["Apache Airflow", "DAG Factory", "GitLab CI", "Docker"],
    },
  ],
  education: [
    {
      institution: "Bandung Institute of Technology",
      degree: "Bachelor of Science in Oceanography",
      duration: "2017 - 2022",
      notes: "Graduated cum laude (3.62/4.00 GPA). Thesis on IoT-based water quality monitoring.",
    },
  ],
  certifications: [
      { name: "AWS Cloud Solutions Architect Professional", date: "July 2025" },
      { name: "Google Cloud Certified - Professional Data Engineer", date: "July 2025" },
      { name: "IBM Data Engineering Professional Certificate", date: "July 2025" },
      { name: "IELTS Band 7.5", date: "Dec 2025" },
  ],
};
