import { portfolioData } from "@/data/portfolio-data";
import { Section } from "@/components/section";

export function AboutSection() {
  return (
    <Section id="about" className="bg-[#1C2331]">
      <h2 className="font-headline text-3xl font-bold text-center md:text-4xl mb-12 text-white">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-300 leading-relaxed">
          {portfolioData.about}
        </p>
      </div>
    </Section>
  );
}
