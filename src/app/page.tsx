import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
// We will build Contact next, for now we can leave a placeholder or just add it if ready.
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-sky-500/30">
      <Hero />
      <About />
      <Education />
      <Certificates />
      <Projects />
      <Contact />
    </main>
  );
}