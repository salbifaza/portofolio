import { portfolioData } from "@/data/portfolio-data";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section-title";

const ExperienceCard = ({ company, role, duration, achievements }: { company: string, role: string, duration: string, achievements: string[] }) => (
  <div className="relative pl-8 mb-12 border-l-2 border-teal-500">
    <div className="absolute -left-2 top-1 w-4 h-4 bg-teal-500 rounded-full border-4 border-white dark:border-gray-900"></div>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{duration}</p>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{role}</h3>
    <p className="text-md font-semibold text-teal-600 dark:text-teal-400 mb-4">{company}</p>
    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
      {achievements.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionTitle>Professional Experience</SectionTitle>
      <div className="max-w-3xl mx-auto">
        {portfolioData.experience.map((job, index) => <ExperienceCard key={index} {...job} />)}
      </div>
    </Section>
  );
}
