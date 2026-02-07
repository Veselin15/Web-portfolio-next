// src/app/project/[id]/page.tsx
import {PROJECTS} from "@/data/portfolio";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";
import {ArrowLeft, CheckCircle2, Github, ExternalLink} from "lucide-react";
import ReactMarkdown from "react-markdown"; // <--- Import this

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({params}: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const project = PROJECTS.find((p) => p.id === resolvedParams.id);

    if (!project) notFound();

    const isHardware = project.category === "Hardware";
    const accentColor = isHardware ? "text-yellow-400" : "text-sky-400";
    const borderColor = isHardware ? "border-yellow-500/20" : "border-sky-500/20";

    return (
        <main className="min-h-screen bg-slate-950 py-24 px-6 relative overflow-hidden">
            <div
                className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 pointer-events-none ${isHardware ? "bg-yellow-500/5" : "bg-sky-500/5"}`}/>

            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link href="/#projects"
                      className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> Back to Projects
                </Link>

                {/* Header */}
                <div className="mb-12">
            <span
                className={`${accentColor} font-mono text-sm tracking-wider uppercase bg-slate-900/50 px-3 py-1 rounded-full border ${borderColor}`}>
              {project.category} Project
            </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                        {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        {project.repoUrl && (
                            <a href={project.repoUrl} target="_blank"
                               className="px-6 py-3 rounded-full bg-slate-800 text-white font-bold border border-slate-700 hover:bg-slate-700 transition flex items-center gap-2">
                                <Github size={20}/> View Code
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank"
                               className="px-6 py-3 rounded-full bg-sky-500 text-slate-900 font-bold hover:bg-sky-400 transition flex items-center gap-2">
                                <ExternalLink size={20}/> Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Main Image */}
                <div
                    className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-800 mb-16 shadow-2xl">
                    {project.image ? (
                        <Image src={project.image} alt={project.title} fill className="object-cover" priority/>
                    ) : (
                        <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-700">No
                            Image Available</div>
                    )}
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* LEFT COLUMN: Markdown Content */}
                    <div className="col-span-2 space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">About the Project</h3>

                            {/* --- MARKDOWN RENDERER --- */}
                            <div className="prose prose-invert prose-lg text-slate-400 leading-relaxed">
                                <ReactMarkdown
                                    components={{
                                        // Custom styling for Markdown elements
                                        h1: ({node, ...props}) => <h3
                                            className="text-2xl font-bold text-white mt-8 mb-4" {...props} />,
                                        h2: ({node, ...props}) => <h4
                                            className="text-xl font-bold text-white mt-6 mb-3" {...props} />,
                                        h3: ({node, ...props}) => <h5
                                            className="text-lg font-bold text-white mt-4 mb-2" {...props} />,
                                        ul: ({node, ...props}) => <ul
                                            className="list-disc pl-5 space-y-2 mb-4" {...props} />,
                                        ol: ({node, ...props}) => <ol
                                            className="list-decimal pl-5 space-y-2 mb-4" {...props} />,
                                        strong: ({node, ...props}) => <strong
                                            className="text-white font-bold" {...props} />,
                                        p: ({node, ...props}) => <p className="mb-4" {...props} />,
                                    }}
                                >
                                    {project.longDescription || project.description}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <ProjectGallery images={project.gallery}/>
                        )}
                    </div>

                    {/* RIGHT COLUMN: Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                                <i className="fas fa-microchip text-yellow-400"></i> Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t}
                                          className="px-3 py-1 bg-slate-950 rounded-lg text-sm text-slate-300 border border-slate-800">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}