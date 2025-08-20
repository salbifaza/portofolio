import Image from "next/image";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";
import { Download } from "lucide-react";
import { Section } from "@/components/section";

export function HeroSection() {
  return (
    <Section id="home" className="pt-24 md:pt-32 lg:pt-40">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight mb-4">
            {portfolioData.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {portfolioData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:-translate-y-1">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg transform transition-transform hover:-translate-y-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <a href={portfolioData.cvFile} download="CV-Salbi-Faza-Rinaldi.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-xl opacity-70"></div>
                <Image
                  src={portfolioData.contact.photo}
                  alt={portfolioData.name}
                  width={320}
                  height={320}
                  className="relative rounded-full object-cover w-full h-full shadow-lg border-4 border-background"
                  data-ai-hint="profile photo"
                  priority
                />
            </div>
        </div>
      </div>
    </Section>
  );
}
