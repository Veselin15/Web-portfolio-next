import { PROJECTS } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Github, ExternalLink } from "lucide-react";

// 1. Generate Static Paths for ALL projects (Software & Hardware)
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

// 2. The Page Component
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Determine colors based on category
  const isHardware = project.category === "Hardware";
  const accentColor = isHardware ? "text-yellow-400" : "text-sky-400";
  const borderColor = isHardware ? "border-yellow-500/20" : "border-sky-500/20";
  const badgeBg = isHardware ? "bg-yellow-400/10" : "bg-sky-400/10";

  return (
    <main className="min-h-screen bg-slate-950 py-24 px-6 relative overflow-hidden">

      {/* Dynamic Background Glow */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 pointer-events-none ${isHardware ? "bg-yellow-500/5" : "bg-sky-500/5"}`} />

      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
            <span className={`${accentColor} font-mono text-sm tracking-wider uppercase ${badgeBg} px-3 py-1 rounded-full border ${borderColor}`}>
              {project.category} Project
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" className="px-6 py-3 rounded-full bg-slate-800 text-white font-bold border border-slate-700 hover:bg-slate-700 transition flex items-center gap-2">
                  <Github size={20} /> View Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" className="px-6 py-3 rounded-full bg-sky-500 text-slate-900 font-bold hover:bg-sky-400 transition flex items-center gap-2">
                  <ExternalLink size={20} /> Live Demo
                </a>
              )}
            </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-800 mb-16 shadow-2xl">
            {project.image ? (
               <Image src={project.image} alt={project.title} fill className="object-cover" priority />
            ) : (
               <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-700">No Image Available</div>
            )}
        </div>

        <div className="grid md:grid-cols-3 gap-12">

            {/* Left Column: Description */}
            <div className="col-span-2 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">About the Project</h3>
                  <div className="prose prose-invert prose-lg text-slate-400 leading-relaxed">
                    <p>{project.longDescription || project.description}</p>
                  </div>
                </div>

                {project.features && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className={`${accentColor} mt-1 shrink-0`} size={20} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-6">
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                    <h4 className={`font-bold text-white mb-4 flex items-center gap-2`}>
                      <i className="fas fa-microchip"></i> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="px-3 py-1 bg-slate-950 rounded-lg text-sm text-slate-300 border border-slate-800">
                              {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}