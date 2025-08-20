import { portfolioData } from "@/data/portfolio-data";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section-title";

export function AboutSection() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {portfolioData.about}
        </p>
      </div>
    </Section>
  );
}
