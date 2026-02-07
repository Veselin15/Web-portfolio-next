import { PROJECTS } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// 1. Generate Static Paths (for Cloudflare/Static Export)
export async function generateStaticParams() {
  return PROJECTS.filter((p) => p.category === "Hardware").map((project) => ({
    id: project.id,
  }));
}

// 2. The Page Component
export default function ProjectPage({ params }: { params: { id: string } }) {
  // Find the project that matches the URL ID
  const project = PROJECTS.find((p) => p.id === params.id);

  // If not found (or if it's software), show 404
  if (!project || project.category !== "Hardware") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 py-24 px-6 relative selection:bg-yellow-500/30">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
            <span className="text-yellow-400 font-mono text-sm tracking-wider uppercase bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
              Hardware Project
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              {project.description}
            </p>
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

            {/* Left Column: Deep Dive */}
            <div className="col-span-2 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">About the Project</h3>
                  <div className="prose prose-invert prose-lg text-slate-400 leading-relaxed">
                    {/* Render the long description (or fallback to normal description) */}
                    <p>{project.longDescription || project.description}</p>
                  </div>
                </div>

                {/* Features List */}
                {project.features && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className="text-yellow-400 mt-1 shrink-0" size={20} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-6">

                {/* Tech Stack Card */}
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                    <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                      <i className="fas fa-microchip text-yellow-400"></i> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="px-3 py-1 bg-slate-950 rounded-lg text-sm text-slate-300 border border-slate-800 hover:border-yellow-500/50 transition-colors">
                              {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Status / Links Card */}
                <div className="bg-gradient-to-br from-yellow-500/10 to-slate-900/50 p-6 rounded-2xl border border-yellow-500/20">
                    <h4 className="font-bold text-white mb-2">Project Status</h4>
                    <div className="inline-flex items-center gap-2 text-green-400 font-mono text-sm bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Completed
                    </div>
                </div>

            </div>
        </div>
      </div>
    </main>
  );
}