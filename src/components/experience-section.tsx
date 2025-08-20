import { portfolioData } from "@/data/portfolio-data";
import { Section } from "@/components/section";

const ExperienceCard = ({ company, role, duration, achievements }: { company: string, role: string, duration: string, achievements: string[] }) => (
  <div className="relative pl-8 mb-12 border-l-2 border-accent">
    <div className="absolute -left-[9px] top-1 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
    <p className="text-sm text-muted-foreground mb-1">{duration}</p>
    <h3 className="text-xl font-bold">{role}</h3>
    <p className="text-md font-semibold text-accent mb-4">{company}</p>
    <ul className="list-disc list-inside text-muted-foreground space-y-2">
      {achievements.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

export function ExperienceSection() {
  return (
    <Section id="experience">
      <h2 className="font-headline text-3xl font-bold text-center md:text-4xl mb-16">
        Professional Experience
      </h2>
      <div className="max-w-3xl mx-auto">
        {portfolioData.experience.map((job, index) => <ExperienceCard key={index} {...job} />)}
      </div>
    </Section>
  );
}
