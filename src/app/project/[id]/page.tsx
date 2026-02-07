// src/app/project/[id]/page.tsx
import { PROJECTS } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";
import { ArrowLeft, Github, ExternalLink, Calendar, Layers, Cpu, Code2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const project = PROJECTS.find((p) => p.id === resolvedParams.id);

    if (!project) notFound();

    const isHardware = project.category === "Hardware";
    const accentColor = isHardware ? "text-yellow-400" : "text-sky-400";
    const bgAccent = isHardware ? "bg-yellow-400/10" : "bg-sky-400/10";
    const borderAccent = isHardware ? "border-yellow-400/20" : "border-sky-400/20";
    const glowColor = isHardware ? "bg-yellow-500/10" : "bg-sky-500/10";

    // Icon selection based on category
    const CategoryIcon = isHardware ? Cpu : Code2;

    return (
        <main className="min-h-screen bg-slate-950 pt-32 pb-24 px-6 relative overflow-hidden selection:bg-sky-500/30">
            {/* Dynamic Background Glow */}
            <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] -z-10 pointer-events-none opacity-50 ${glowColor}`} />
            <div className="absolute top-40 left-[-200px] w-[400px] h-[400px] bg-slate-800/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Navigation */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-12 transition-all group hover:-translate-x-1"
                >
                    <div className="p-2 rounded-full bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="font-medium">Back to Projects</span>
                </Link>

                {/* Hero Header */}
                <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
                    <div>
                        <div className={`inline-flex items-center gap-2 font-mono text-xs font-bold tracking-wider uppercase ${bgAccent} px-3 py-1.5 rounded-full border ${borderAccent} mb-6`}>
                            <CategoryIcon size={14} className={accentColor} />
                            <span className={accentColor}>{project.category} Project</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            {project.title}
                        </h1>

                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl border-l-2 border-slate-800 pl-6">
                            {project.description}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 lg:justify-end pb-2">
                        {project.repoUrl && (
                            <a href={project.repoUrl} target="_blank"
                               className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold border border-slate-800 hover:border-slate-600 hover:bg-slate-800 transition-all flex items-center gap-3 group shadow-lg shadow-black/20">
                                <Github size={20} className="text-slate-400 group-hover:text-white transition-colors"/>
                                <span>Source Code</span>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank"
                               className={`px-8 py-4 rounded-xl ${isHardware ? 'bg-yellow-500 hover:bg-yellow-400 text-black' : 'bg-sky-500 hover:bg-sky-400 text-slate-950'} font-bold transition-all flex items-center gap-3 shadow-lg ${isHardware ? 'shadow-yellow-500/20' : 'shadow-sky-500/20'} hover:scale-105 hover:-translate-y-1`}>
                                <ExternalLink size={20} />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left Column: Content (8 cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Main Image with Glass Effect Frame */}
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent z-10" />
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-700">
                                    No Image Available
                                </div>
                            )}
                        </div>

                        {/* Markdown Content */}
                        <div className="prose prose-invert prose-lg max-w-none text-slate-400">
                            <ReactMarkdown
                                components={{
                                    h1: ({node, ...props}) => <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-4" {...props} />,
                                    h2: ({node, ...props}) => <h3 className="text-2xl font-bold text-white mt-10 mb-4 flex items-center gap-2" {...props} />,
                                    h3: ({node, ...props}) => <h4 className="text-xl font-bold text-white mt-8 mb-3" {...props} />,
                                    ul: ({node, ...props}) => <ul className="list-none space-y-2 mb-6 pl-0" {...props} />,
                                    li: ({node, children, ...props}) => (
                                        <li className="flex items-start gap-3" {...props}>
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isHardware ? 'bg-yellow-500' : 'bg-sky-500'}`} />
                                            <span>{children}</span>
                                        </li>
                                    ),
                                    strong: ({node, ...props}) => <strong className={`font-bold ${isHardware ? 'text-yellow-200' : 'text-sky-200'}`} {...props} />,
                                    p: ({node, ...props}) => <p className="mb-6 leading-relaxed" {...props} />,
                                    blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-slate-700 pl-6 italic my-8 text-slate-500" {...props} />,
                                    code: ({node, ...props}) => <code className="bg-slate-900 text-slate-300 px-1.5 py-0.5 rounded text-sm font-mono border border-slate-800" {...props} />,
                                }}
                            >
                                {project.longDescription || project.description}
                            </ReactMarkdown>
                        </div>

                         {/* Gallery Section - Only renders if images exist */}
                        {project.gallery && project.gallery.length > 0 && (
                            <ProjectGallery images={project.gallery}/>
                        )}
                    </div>

                    {/* Right Column: Sticky Sidebar (4 cols) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-8">

                            {/* Tech Stack Card */}
                            <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-800/60 shadow-xl">
                                <h4 className="font-bold text-white mb-6 flex items-center gap-3 text-lg border-b border-slate-800 pb-4">
                                    <Layers className={accentColor} size={20} />
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t}
                                              className="px-3 py-1.5 bg-slate-950 rounded-lg text-sm text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white transition-colors cursor-default">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Details Card */}
                            <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-800/60 shadow-xl">
                                <h4 className="font-bold text-white mb-6 flex items-center gap-3 text-lg border-b border-slate-800 pb-4">
                                    <Calendar className={accentColor} size={20} />
                                    Project Info
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-slate-800/50 last:border-0">
                                        <span className="text-slate-500 text-sm">Category</span>
                                        <span className="text-white font-medium">{project.category}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-slate-800/50 last:border-0">
                                        <span className="text-slate-500 text-sm">Status</span>
                                        <span className="text-emerald-400 font-medium text-xs bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">Completed</span>
                                    </div>
                                    {/* You could add Date or Role here if you add them to your data schema later */}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}