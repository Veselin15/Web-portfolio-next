"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, Linkedin, Github } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
        >
            <span className="text-sky-500">05.</span> Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <h3 className="text-3xl font-bold text-white leading-tight">
                    Let's build something <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">amazing together.</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                    Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-4 text-slate-300">
                        <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-mono">Mail Me</p>
                            <a href={`mailto:${PROFILE.email}`} className="font-bold hover:text-sky-400 transition">{PROFILE.email}</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-slate-300">
                        <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-mono">Location</p>
                            <p className="font-bold">{PROFILE.location}</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 pt-4">
                    <a href={PROFILE.socials.linkedin} target="_blank" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500 transition-all">
                        <Linkedin size={20} />
                    </a>
                    <a href={PROFILE.socials.github} target="_blank" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500 transition-all">
                        <Github size={20} />
                    </a>
                </div>
            </motion.div>

            {/* Right: The Form */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl relative"
            >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -z-10" />

                {status === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4"
                    >
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 border border-green-500/20 mb-4">
                            <Send size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                        <p className="text-slate-400">Thanks for reaching out. I'll check my inbox and get back to you shortly.</p>
                        <button onClick={() => setStatus("idle")} className="mt-6 px-6 py-2 bg-slate-800 rounded-full text-white text-sm hover:bg-slate-700 transition">
                            Send another
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition placeholder-slate-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400 ml-1">Your Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition placeholder-slate-700"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                placeholder="What's on your mind?"
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition placeholder-slate-700 resize-none"
                            ></textarea>
                        </div>

                        <button
                            disabled={status === "submitting"}
                            type="submit"
                            className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-sky-500/25 transition transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === "submitting" ? (
                                <> <Loader2 className="animate-spin" size={20} /> Sending... </>
                            ) : (
                                <> Send Message <Send size={18} /> </>
                            )}
                        </button>

                        {status === "error" && (
                            <p className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">
                                Something went wrong. Please try again or email me directly.
                            </p>
                        )}
                    </form>
                )}
            </motion.div>
        </div>

      </div>
    </section>
  );
}