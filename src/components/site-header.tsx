"use client";

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio-data';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { icons } from './icons';

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
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold text-gray-800 dark:text-white">
          {portfolioData.name}
        </a>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-8 mr-6">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)} 
                className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <button className="md:hidden z-50 ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? icons.close : icons.menu}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
       {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 absolute top-full left-0 w-full shadow-md">
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
    </header>
  );
}
