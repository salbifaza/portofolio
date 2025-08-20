import { portfolioData } from "@/data/portfolio-data";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section-title";

const ProjectCard = ({ title, description, stack }: { title: string, description: string, stack: string[] }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 text-xs font-semibold rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-white dark:bg-gray-800">
      <SectionTitle>Projects & Case Studies</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {portfolioData.projects.map((project, index) => <ProjectCard key={index} {...project} />)}
      </div>
    </Section>
  );
}
