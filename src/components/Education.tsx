"use client";
import { motion } from "framer-motion";
import { EDUCATION } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-20 text-white"
        >
          My <span className="text-sky-500">Education</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-slate-800 md:left-1/2 md:-ml-px" />

          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center md:justify-between ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* 1. The Dot (Timeline Node) */}
                <div className="absolute left-0 md:left-1/2 -translate-x-[2px] md:-translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-950 border-4 border-slate-800 shadow-[0_0_20px_rgba(14,165,233,0.3)] z-20">
                  <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse" />
                </div>

                {/* 2. The Content Card */}
                <div className="ml-16 md:ml-0 md:w-[45%]">
                  <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 group">
                    <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                      <span className="text-xs font-mono font-bold py-1 px-3 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {edu.year}
                      </span>
                      <i className={`fas fa-${edu.icon} text-slate-500 group-hover:text-white transition-colors`}></i>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
                      {edu.degree}
                    </h3>

                    <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                      {edu.school}
                    </h4>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* 3. Empty spacer for the other side (Desktop only) */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}