"use client";
import { motion } from "framer-motion";
import { PROFILE } from "@/data/portfolio";

// Reusable Card Component for the Tech Stack groups
const TechCard = ({ title, icon, color, children }: { title: string; icon: string; color: string; children: React.ReactNode }) => (
  <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700/50 hover:border-slate-500 transition-all group">
    <h4 className="font-bold text-white mb-6 flex items-center gap-3 text-sm uppercase tracking-wider">
      <i className={`fas ${icon} ${color}`}></i> {title}
    </h4>
    <div className="flex gap-6 text-5xl text-slate-400">
      {children}
    </div>
  </div>
);

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT COLUMN: BIO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-white">Hello, I'm Veselin.</h2>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              I am a passionate Junior Developer who loves building software that solves real-world problems.
              My curiosity doesn't stop at the screen; I have a deep love for <span className="text-sky-400 font-bold">electronics and DIY projects</span>,
              often grabbing the soldering iron to bring ideas to life. I am fascinated by the bridge between <span className="text-indigo-400 font-bold">hardware and software</span>.
            </p>

            <p>
              When I'm not coding or building circuits, I am exploring the world. I love <span className="text-white font-bold">traveling and sports</span>.
              Since last year, I have discovered a passion for <span className="text-sky-400 font-bold">reading books</span>,
              and I've been training <span className="text-rose-400 font-bold">boxing</span> for a while to keep my mind and body sharp.
              I push my limits by conquering <span className="text-emerald-400 font-bold">mountain peaks</span> and spending time in nature.
            </p>
          </div>

          <div className="pt-4">
             <a href="https://www.goodreads.com/user/show/112454127-ves-bg" target="_blank"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#f4f1ea] text-[#372213] font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-lg border border-[#372213]/20">
                <i className="fab fa-goodreads text-2xl"></i>
                <span>My Goodreads Profile</span>
             </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800">
             <div><h4 className="text-3xl font-bold text-white">2+</h4><span className="text-xs text-slate-500 uppercase tracking-wider">Years Coding</span></div>
             <div><h4 className="text-3xl font-bold text-white">15+</h4><span className="text-xs text-slate-500 uppercase tracking-wider">Projects</span></div>
             <div><h4 className="text-3xl font-bold text-white">100%</h4><span className="text-xs text-slate-500 uppercase tracking-wider">Passion</span></div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: TECH STACK GRID */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           <h3 className="text-2xl font-mono font-bold text-white mb-8 flex items-center gap-3 lg:justify-end">
              <span className="text-sky-500">01.</span> Tech Stack
           </h3>

           {/* The 2x2 Grid Layout from your image */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* 1. BACKEND */}
              <TechCard title="Backend" icon="fa-server" color="text-sky-400">
                <i className="devicon-python-plain hover:text-[#3776AB] transition-colors" title="Python"></i>
                <i className="devicon-django-plain hover:text-[#092E20] transition-colors" title="Django"></i>
                <i className="devicon-fastapi-plain hover:text-[#009688] transition-colors" title="FastAPI"></i>
              </TechCard>

              {/* 2. DATA & OPS */}
              <TechCard title="Data & Ops" icon="fa-database" color="text-indigo-400">
                <i className="devicon-postgresql-plain hover:text-[#336791] transition-colors" title="PostgreSQL"></i>
                <i className="devicon-redis-plain hover:text-[#DC382D] transition-colors" title="Redis"></i>
                <i className="devicon-docker-plain hover:text-[#2496ED] transition-colors" title="Docker"></i>
              </TechCard>

              {/* 3. EMBEDDED */}
              <TechCard title="Embedded" icon="fa-microchip" color="text-yellow-500">
                <i className="devicon-cplusplus-plain hover:text-[#00599C] transition-colors" title="C++"></i>
                <i className="devicon-arduino-plain hover:text-[#00979D] transition-colors" title="Arduino"></i>
                {/* Embedded C / C */}
                <i className="devicon-embeddedc-plain hover:text-white transition-colors" title="Embedded C"></i>
              </TechCard>

              {/* 4. FRONTEND */}
              <TechCard title="Frontend" icon="fa-laptop-code" color="text-pink-500">
                <i className="devicon-html5-plain hover:text-[#E34F26] transition-colors" title="HTML5"></i>
                <i className="devicon-tailwindcss-original hover:text-[#38B2AC] transition-colors" title="Tailwind"></i>
                <i className="devicon-javascript-plain hover:text-[#F7DF1E] transition-colors" title="JavaScript"></i>
              </TechCard>

           </div>
        </motion.div>
      </div>
    </section>
  );
}