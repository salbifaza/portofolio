import { portfolioData } from "@/data/portfolio-data";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/section-title";

const EducationItem = ({ institution, degree, duration, notes }: { institution: string, degree: string, duration: string, notes: string }) => (
    <div className="relative pl-8 py-4 border-l-2 border-gray-200 dark:border-gray-700">
        <div className="absolute -left-2 top-6 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full border-4 border-white dark:border-gray-900"></div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{duration}</p>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{degree}</h3>
        <p className="text-md font-semibold text-gray-600 dark:text-gray-300 mb-1">{institution}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{notes}</p>
    </div>
);

const CertificationItem = ({ name, date }: { name: string, date: string }) => (
     <div className="relative pl-8 py-4 border-l-2 border-gray-200 dark:border-gray-700">
        <div className="absolute -left-2 top-6 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full border-4 border-white dark:border-gray-900"></div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{name}</h3>
    </div>
);

export function EducationSection() {
  return (
    <Section id="education">
      <SectionTitle>Education & Certifications</SectionTitle>
      <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-gray-700 dark:text-white mb-8 text-center md:text-left">Education</h3>
          <div className="flex flex-col gap-4">
            {portfolioData.education.map((edu, index) => <EducationItem key={index} {...edu} />)}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-700 dark:text-white mb-8 text-center md:text-left">Certifications</h3>
          <div className="flex flex-col gap-4">
            {portfolioData.certifications.map((cert, index) => <CertificationItem key={index} {...cert} />)}
          </div>
        </div>
      </div>
    </Section>
  );
}
