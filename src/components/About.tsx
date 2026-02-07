"use client";
import { motion } from "framer-motion";
import { PROFILE, SKILLS } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden border-y border-slate-800/50 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* Left: Bio */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-white">Hello, I'm {PROFILE.name.split(" ")[0]}.</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            I am a passionate Junior Developer who loves building software that solves real-world problems.
            My curiosity doesn't stop at the screen; I have a deep love for <span className="text-sky-400 font-bold">electronics and DIY projects</span>.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            When I'm not coding, I'm exploring the world through <span className="text-white font-bold">traveling and sports</span>,
            reading books, or training <span className="text-indigo-400 font-bold">boxing</span>.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
             <div><h4 className="text-3xl font-bold text-white">2+</h4><span className="text-xs text-slate-500 uppercase">Years Coding</span></div>
             <div><h4 className="text-3xl font-bold text-white">15+</h4><span className="text-xs text-slate-500 uppercase">Projects</span></div>
             <div><h4 className="text-3xl font-bold text-white">100%</h4><span className="text-xs text-slate-500 uppercase">Passion</span></div>
          </div>
        </motion.div>

        {/* Right: Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           <h3 className="text-2xl font-mono font-bold text-white mb-8 flex items-center gap-3 lg:justify-end">
              <span className="text-indigo-400">01.</span> Tech Stack
           </h3>

           <div className="grid grid-cols-2 gap-4">
              {/* Backend Group */}
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-sky-500/50 transition-all hover:-translate-y-1">
                 <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <i className="fas fa-server text-sky-400"></i> Backend
                 </h4>
                 <div className="flex flex-wrap gap-4 text-3xl text-slate-400">
                    <i className="devicon-python-plain hover:text-blue-500 transition-colors" title="Python"></i>
                    <i className="devicon-django-plain hover:text-green-700 transition-colors" title="Django"></i>
                    <i className="devicon-fastapi-plain hover:text-teal-500 transition-colors" title="FastAPI"></i>
                 </div>
              </div>

              {/* Data Group */}
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all hover:-translate-y-1">
                 <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <i className="fas fa-database text-indigo-400"></i> Data
                 </h4>
                 <div className="flex flex-wrap gap-4 text-3xl text-slate-400">
                    <i className="devicon-postgresql-plain hover:text-blue-400 transition-colors" title="PostgreSQL"></i>
                    <i className="devicon-redis-plain hover:text-red-500 transition-colors" title="Redis"></i>
                    <i className="devicon-docker-plain hover:text-blue-600 transition-colors" title="Docker"></i>
                 </div>
              </div>

              {/* You can add Frontend/Embedded blocks similarly if needed */}
           </div>
        </motion.div>
      </div>
    </section>
  );
}