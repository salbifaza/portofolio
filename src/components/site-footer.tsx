import { portfolioData } from "@/data/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="bg-card py-6">
      <div className="container mx-auto px-6 md:px-12 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
