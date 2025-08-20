import { portfolioData } from "@/data/portfolio-data";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section-title";

const SkillBadge = ({ name, icon }: { name: string, icon: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    {icon}
    <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">{name}</span>
  </div>
);

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-white dark:bg-gray-800">
      <SectionTitle>Skills & Tools</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {portfolioData.skills.map(skill => <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />)}
      </div>
    </Section>
  );
}
