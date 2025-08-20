import Image from "next/image";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";
import { icons } from "@/components/icons";
import { Section } from "@/components/section";

export function HeroSection() {
  return (
    <Section id="home" className="min-h-screen flex items-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight mb-4">
            {portfolioData.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            {portfolioData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <a href="#contact" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                  Get In Touch
             </a>
             <a href={portfolioData.cvFile} download="CV-Salbi-Faza-Rinaldi.pdf" className="flex items-center justify-center bg-transparent border-2 border-teal-500 text-teal-500 font-bold py-3 px-8 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  {icons.download}
                  Download CV
             </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src={portfolioData.contact.photo}
                  alt={portfolioData.name}
                  width={320}
                  height={320}
                  className="rounded-full object-cover w-full h-full shadow-lg"
                  data-ai-hint="profile photo"
                  priority
                />
            </div>
        </div>
      </div>
    </Section>
  );
}
