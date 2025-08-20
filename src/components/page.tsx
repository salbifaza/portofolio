
"use client"

import React, { useState, useEffect } from 'react';
import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { EducationSection } from '@/components/education-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900 font-sans text-gray-700 dark:text-gray-300 transition-colors duration-300">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
