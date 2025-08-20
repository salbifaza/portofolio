import { portfolioData } from "@/data/portfolio-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";

const ProjectCard = ({ title, description, stack }: { title: string, description: string, stack: string[] }) => (
  <Card className="transform transition-transform duration-300 hover:-translate-y-2 flex flex-col bg-card dark:bg-muted">
    <CardHeader>
      <CardTitle className="font-headline text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <CardDescription className="mb-4 flex-grow">{description}</CardDescription>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, index) => (
          <Badge key={index} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-card dark:bg-muted">
      <h2 className="font-headline text-3xl font-bold text-center md:text-4xl mb-12">
        Projects & Case Studies
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {portfolioData.projects.map((project, index) => <ProjectCard key={index} {...project} />)}
      </div>
    </Section>
  );
}
