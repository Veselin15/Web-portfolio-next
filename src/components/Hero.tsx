// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-slate-950 text-slate-200">

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-800 shadow-2xl overflow-hidden relative z-10">
           {/* Replace with your actual profile image if you have one in public/ */}
           {/* <img src="/profile.jpg" alt={PROFILE.name} className="w-full h-full object-cover" /> */}
           <div className="w-full h-full bg-slate-800 flex items-center justify-center text-4xl">👨‍💻</div>
        </div>
        <div className="absolute -inset-2 rounded-full border border-sky-500/30 animate-spin-slow" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
      >
        Hello, I'm <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
          {PROFILE.name.split(' ')[0]}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed"
      >
        {PROFILE.role} — <span className="text-sky-400">{PROFILE.subRole}</span>
      </motion.p>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex gap-6 mb-10"
      >
        <a href={PROFILE.socials.github} target="_blank" className="text-slate-400 hover:text-white hover:scale-110 transition transform">
          <Github size={28} />
        </a>
        <a href={PROFILE.socials.linkedin} target="_blank" className="text-slate-400 hover:text-sky-400 hover:scale-110 transition transform">
          <Linkedin size={28} />
        </a>
        <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-emerald-400 hover:scale-110 transition transform">
          <Mail size={28} />
        </a>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4"
      >
        <a href="#projects" className="px-8 py-3 bg-sky-500 text-slate-900 font-bold rounded-full hover:bg-sky-400 transition shadow-lg shadow-sky-500/20">
          View My Work
        </a>
        <a href="#contact" className="px-8 py-3 border border-slate-700 text-slate-300 rounded-full hover:border-sky-500 hover:text-sky-400 transition">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}