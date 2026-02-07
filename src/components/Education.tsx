"use client";
import { EDUCATION } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-mono font-bold text-center mb-16 text-white">
        <span className="text-sky-400">02.</span> Education
      </h2>

      <div className="space-y-8 border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-8">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Dot on timeline */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-900 border-2 border-slate-600 rounded-full group-hover:bg-sky-500 group-hover:border-sky-500 transition-colors" />

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-sky-500/30 transition-all shadow-lg hover:shadow-sky-500/5">
               <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition">{edu.degree}</h3>
                  <span className="text-xs font-mono py-1 px-3 rounded-full bg-slate-900 text-sky-400 border border-slate-800">{edu.year}</span>
               </div>
               <h4 className="text-lg text-slate-400 mb-3 flex items-center gap-2">
                  <i className={`fas fa-${edu.icon} text-indigo-400`}></i> {edu.school}
               </h4>
               <p className="text-slate-500">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}