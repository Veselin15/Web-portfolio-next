"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PROFILE } from "@/data/portfolio";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import Image from "next/image";

const ROLES = ["Python Developer", "Django Specialist", "Hardware Enthusiast", "Problem Solver"];


const FiverrIcon = ({ size = 100, className = "" }: { size?: number, className?: string }) => (
<svg
    width={size}
    height={size}
    viewBox="0 0 508.02 508.02" // Matches your SVG's viewport
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* The Dot on the 'i' */}
    <circle cx="315.97" cy="162.19" r="26.87"/>
    {/* The 'fi' Ligature Path */}
    <path
      d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z"
      transform="translate(-1.83 -0.98)"
    />
  </svg>
);

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Effect Logic
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-slate-950 selection:bg-sky-500/30">

      {/* 1. Dynamic Background Aurora */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-sky-500/20 rounded-full blur-[120px] animate-pulse" />

      {/* 2. Content */}
      <div className="relative z-10 max-w-4xl space-y-8 flex flex-col items-center">

        {/* Profile Image with 'Pulse' Ring */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-8"
        >
           {/* Glowing Backdrop */}
           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 blur-[60px] opacity-40 animate-pulse" />

           {/* The Image Container */}
           <div className="relative w-full h-full rounded-full border-[6px] border-slate-900/80 overflow-hidden shadow-2xl ring-4 ring-slate-800">
              <Image
                src="/images/hero/profile.jpg"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
           </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white"
        >
          {PROFILE.name.split(" ")[0]}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">.Dev</span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <div className="h-8 text-xl md:text-2xl font-mono text-slate-400">
           I am a <span className="text-sky-400">{displayText}</span>
           <span className="animate-pulse">|</span>
        </div>

        {/* Social Icons (Floating) */}
        <motion.div
          className="flex justify-center gap-6 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: Github, link: PROFILE.socials.github },
            { icon: Linkedin, link: PROFILE.socials.linkedin },
            { icon: FiverrIcon, link: "https://www.fiverr.com/veselin_06/" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"

              className={`p-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white transition-all duration-300 ${
                  i === 2 
                  ? "hover:border-[#1DBF73] hover:text-[#1DBF73] hover:shadow-[0_0_15px_rgba(29,191,115,0.5)]" 
                  : "hover:border-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]"
              }`}
            >
              <item.icon size={24} />
            </a>
          ))}
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          {/* Magic Shimmer Button */}
          <a
            href="#projects"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition">
              Explore Projects
            </span>
          </a>

          <a href="#contact" className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 transition font-medium">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}