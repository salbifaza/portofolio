"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="font-headline text-2xl font-bold text-primary">
          {portfolioData.name}
        </a>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-8 mr-6">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)} 
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <button className="md:hidden z-50 ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)} 
              className="text-2xl text-foreground/80 hover:text-primary transition-colors duration-300 font-bold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
