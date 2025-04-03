"use client";

import { Navbar } from '@/app/components/Navbar';
import {
  Hero,
  About,
  Skills,
  Experience,
  Education,
  Projects,
  Contact,
} from '@/app/components/sections';

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
