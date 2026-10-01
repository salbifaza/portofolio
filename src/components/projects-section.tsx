import { portfolioData } from "@/data/portfolio-data";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section-title";

type Project = { title: string, description: string, stack: string[], link?: string, featured?: boolean };

const ProjectCard = ({ title, description, stack, link, featured }: Project) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300${featured ? " md:col-span-2 ring-2 ring-teal-500" : ""}`}>
    <div className="p-6">
      {featured && (
        <span className="inline-block mb-3 px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full">Featured</span>
      )}
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
        {link ? <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 dark:hover:text-teal-400">{title}</a> : title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 text-xs font-semibold rounded-full">
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline">
          View on GitHub →
        </a>
      )}
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
