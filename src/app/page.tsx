import {Hero} from '@/components/sections/hero';
import {About} from '@/components/sections/about';
import {SkillsStrip} from '@/components/sections/skills-strip';
import {Services} from '@/components/sections/services';
import {Projects} from '@/components/sections/projects';
import {Tools} from '@/components/sections/tools';
import {Values} from '@/components/sections/values';
import {WorkTimeline} from '@/components/sections/work-timeline';
import {Contact} from '@/components/sections/contact';

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <SkillsStrip />
      <Services />
      <Projects />
      <Tools />
      <Values />
      <WorkTimeline />
      <Contact />
    </main>
  );
}
