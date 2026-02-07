"use client";
import Image from "next/image";
import { PROJECTS } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
       <h2 className="text-3xl font-mono font-bold text-center mb-16 text-white">
          <span className="text-sky-400">04.</span> Projects
       </h2>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
             <div key={project.id} className="group bg-slate-900 rounded-xl border border-slate-800 hover:border-sky-500/50 overflow-hidden transition-all hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col">

                {/* Image Area */}
                <div className="h-48 relative overflow-hidden bg-slate-800">
                   {project.image ? (
                     <div className="w-full h-full relative">
                        {/* Note: Ensure images are in public/projects/ */}
                        <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition duration-500" />
                     </div>
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-slate-700">
                        <i className="fas fa-code fa-3x"></i>
                     </div>
                   )}
                   <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-sky-400 border border-sky-500/20">
                      {project.category}
                   </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                   <h4 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition">{project.title}</h4>
                   <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">{project.description}</p>

                   {/* Tech Tags */}
                   <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((t) => (
                         <span key={t} className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">{t}</span>
                      ))}
                   </div>

                   {/* Links */}
                   <div className="mt-auto flex gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" className="flex-1 py-2 rounded-lg border border-slate-700 text-slate-300 text-center hover:bg-slate-800 hover:text-white transition text-sm font-bold flex items-center justify-center gap-2">
                           <i className="fab fa-github"></i> Code
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" className="flex-1 py-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30 text-center hover:bg-sky-500 hover:text-white transition text-sm font-bold flex items-center justify-center gap-2">
                           Live <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                   </div>
                </div>
             </div>
          ))}
       </div>
    </section>
  );
}