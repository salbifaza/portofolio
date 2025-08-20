import { portfolioData } from "@/data/portfolio-data";
import { Section } from "@/components/section";

const EducationItem = ({ institution, degree, duration, notes }: { institution: string, degree: string, duration: string, notes: string }) => (
    <div className="relative pl-8 py-4 border-l-2 border-border">
        <div className="absolute -left-[9px] top-6 w-4 h-4 bg-muted-foreground/50 rounded-full border-4 border-background"></div>
        <p className="text-sm text-muted-foreground">{duration}</p>
        <h3 className="text-lg font-bold">{degree}</h3>
        <p className="text-md font-semibold text-muted-foreground mb-1">{institution}</p>
        <p className="text-sm text-muted-foreground">{notes}</p>
    </div>
);

const CertificationItem = ({ name, date }: { name: string, date: string }) => (
     <div className="relative pl-8 py-4 border-l-2 border-border">
        <div className="absolute -left-[9px] top-6 w-4 h-4 bg-muted-foreground/50 rounded-full border-4 border-background"></div>
        <p className="text-sm text-muted-foreground">{date}</p>
        <h3 className="text-lg font-semibold">{name}</h3>
    </div>
);

export function EducationSection() {
  return (
    <Section id="education">
      <h2 className="font-headline text-3xl font-bold text-center md:text-4xl mb-12">
        Education & Certifications
      </h2>
      <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Education</h3>
          <div className="flex flex-col gap-4">
            {portfolioData.education.map((edu, index) => <EducationItem key={index} {...edu} />)}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Certifications</h3>
          <div className="flex flex-col gap-4">
            {portfolioData.certifications.map((cert, index) => <CertificationItem key={index} {...cert} />)}
          </div>
        </div>
      </div>
    </Section>
  );
}
