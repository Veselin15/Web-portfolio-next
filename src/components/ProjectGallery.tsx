"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (index === null) return;
    if (e.key === "Escape") setIndex(null);
    if (e.key === "ArrowRight") setIndex((prev) => (prev! + 1) % images.length);
    if (e.key === "ArrowLeft") setIndex((prev) => (prev! - 1 + images.length) % images.length);
  }, [index, images.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6">Project Gallery</h3>

      {/* Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="relative h-64 rounded-2xl overflow-hidden border border-slate-800 cursor-pointer group hover:border-yellow-500/50 transition-all duration-300"
          >
            <Image
              src={img}
              alt={`Gallery Image ${i + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay Icon */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="text-white w-10 h-10" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setIndex(null)} // Close on backdrop click
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-slate-400 hover:text-white p-2">
              <X size={40} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); setIndex((index - 1 + images.length) % images.length); }}
              className="absolute left-4 md:left-10 text-white p-3 hover:bg-white/10 rounded-full transition"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Main Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              key={index} // Re-animates when index changes
              className="relative w-full max-w-5xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[index]}
                alt="Fullscreen view"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); setIndex((index + 1) % images.length); }}
              className="absolute right-4 md:right-10 text-white p-3 hover:bg-white/10 rounded-full transition"
            >
              <ChevronRight size={40} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 font-mono">
                {index + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}