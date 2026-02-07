"use client";
import { CERTIFICATES } from "@/data/portfolio";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 relative">
       <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-mono font-bold text-center mb-12 text-white">
             <span className="text-sky-400">03.</span> Certificates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {CERTIFICATES.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  className="group relative bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800 hover:border-sky-500/50 transition-all duration-300 flex flex-col items-center text-center"
                >
                   <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-sky-500/20 transition-all">
                      <i className="fas fa-certificate text-3xl text-sky-500"></i>
                   </div>

                   <h5 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{cert.title}</h5>
                   <p className="text-slate-400 text-sm mb-6 uppercase tracking-wider">{cert.issuer}</p>
                   <span className="text-xs font-mono font-bold text-white bg-slate-700/50 px-4 py-1 rounded-full border border-slate-600">
                      {cert.year}
                   </span>
                </a>
             ))}
          </div>
       </div>
    </section>
  );
}