import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";

const SkillBadge = ({ name, icon: Icon }: { name: string, icon: React.ElementType }) => (
  <Card className="flex flex-col items-center justify-center p-4 bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <Icon className="w-10 h-10 text-primary mb-2" />
    <span className="text-sm font-medium text-center">{name}</span>
  </Card>
);

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-muted/50 dark:bg-card">
      <h2 className="font-headline text-3xl font-bold text-center md:text-4xl mb-12">
        Skills & Tools
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {portfolioData.skills.map(skill => <SkillBadge key={skill.name} {...skill} />)}
      </div>
    </Section>
  );
}
