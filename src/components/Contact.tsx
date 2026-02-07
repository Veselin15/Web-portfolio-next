"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Call the API route we will create later
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) setStatus("success");
    else setStatus("error");
  }

  return (
    <section id="contact" className="py-20 pb-32 max-w-2xl mx-auto px-6">
       <div className="bg-slate-900/80 backdrop-blur p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <h2 className="text-3xl font-bold text-center mb-8 text-white">Get In Touch</h2>

          {status === "success" ? (
             <div className="p-6 bg-green-500/10 border border-green-500/20 text-green-400 text-center rounded-xl">
                Message sent successfully! I'll get back to you soon.
             </div>
          ) : (
             <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid md:grid-cols-2 gap-5">
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Name</label>
                      <input name="name" type="text" required placeholder="Your Name" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500 transition" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Email</label>
                      <input name="email" type="email" required placeholder="you@example.com" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500 transition" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-400">Message</label>
                   <textarea name="message" rows={4} required placeholder="How can I help you?" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500 transition"></textarea>
                </div>

                <button disabled={status === "submitting"} type="submit" className="w-full bg-sky-500 text-slate-900 font-bold py-4 rounded-xl hover:bg-sky-400 transition transform hover:-translate-y-1 shadow-lg shadow-sky-500/20 disabled:opacity-50">
                   {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
             </form>
          )}
       </div>
    </section>
  );
}