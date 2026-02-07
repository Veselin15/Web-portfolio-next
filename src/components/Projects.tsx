"use client";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {PROJECTS, ProjectCategory} from "@/data/portfolio";
import {Github, ArrowRight, Layers, Cpu} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    const [activeTab, setActiveTab] = useState<ProjectCategory>("Software");

    const filteredProjects = PROJECTS.filter((p) => p.category === activeTab);

    return (
        <section id="projects" className="py-24 relative bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="text-3xl md:text-5xl font-bold text-white"
                    >
                        <span className="text-sky-500">04.</span> Featured Projects
                    </motion.h2>

                    {/* Custom Animated Tab Switcher */}
                    <div className="flex justify-center mt-8">
                        <div className="bg-slate-900 p-1 rounded-full border border-slate-800 flex relative">
                            {/* The Sliding Background */}
                            <motion.div
                                layoutId="activeTab"
                                className={`absolute inset-y-1 rounded-full bg-slate-800 shadow-sm ${
                                    activeTab === "Software" ? "left-1 w-[50%]" : "left-[50%] right-1 w-[49%]"
                                }`}
                                transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                            />

                            <button
                                onClick={() => setActiveTab("Software")}
                                className={`relative z-10 px-8 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-colors duration-300 ${
                                    activeTab === "Software" ? "text-sky-400" : "text-slate-400 hover:text-white"
                                }`}
                            >
                                <Layers size={16}/> Software
                            </button>

                            <button
                                onClick={() => setActiveTab("Hardware")}
                                className={`relative z-10 px-8 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-colors duration-300 ${
                                    activeTab === "Hardware" ? "text-yellow-400" : "text-slate-400 hover:text-white"
                                }`}
                            >
                                <Cpu size={16}/> Hardware
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.9}}
                                transition={{duration: 0.3}}
                            >
                                {activeTab === "Software" ? (
                                    // --- SOFTWARE CARD DESIGN (Now Clickable) ---
                                    <Link href={`/project/${project.id}`} className="block h-full">
                                        <div
                                            className="group h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-sky-500/50 hover:bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10">
                                            <div className="flex justify-between items-start mb-4">
                                                <div
                                                    className="p-3 bg-sky-500/10 rounded-lg text-sky-400 group-hover:scale-110 transition-transform">
                                                    <Layers size={24}/>
                                                </div>
                                                <div
                                                    className="text-slate-500 text-sm font-mono group-hover:text-sky-400 transition-colors">
                                                    View Details <ArrowRight className="inline ml-1" size={14}/>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.tech.slice(0, 3).map((t) => (
                                                    <span key={t}
                                                          className="text-xs font-mono text-sky-300/80 bg-sky-500/10 px-2 py-1 rounded border border-sky-500/20">
            {t}
          </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    // --- HARDWARE CARD DESIGN ---
                                    <Link href={`/project/${project.id}`} className="block h-full">
                                        <div
                                            className="group h-full relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 hover:border-yellow-500/50 transition-all duration-500">

                                            {/* Image Area */}
                                            <div className="relative h-52 overflow-hidden">
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"/>
                                                {project.image ? (
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <div
                                                        className="w-full h-full bg-slate-800 flex items-center justify-center">
                                                        <Cpu size={48} className="text-slate-700"/>
                                                    </div>
                                                )}
                                                <div
                                                    className="absolute top-4 right-4 z-20 bg-yellow-500/10 backdrop-blur-md border border-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
                                                    Hardware
                                                </div>
                                            </div>

                                            {/* Content Area */}
                                            <div className="p-6 relative z-20 -mt-10">
                                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                                    {project.description}
                                                </p>

                                                <div
                                                    className="flex items-center text-yellow-400 text-sm font-bold gap-2 group-hover:gap-3 transition-all">
                                                    View Case Study <ArrowRight size={16}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}