"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Play, Video, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/portfolio-data";

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const items = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className="mb-9 flex gap-3 overflow-x-auto pb-2">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition ${
              activeCategory === category
                ? "border-[#e11d48] bg-[#e11d48] text-white shadow-[0_16px_38px_rgba(225,29,72,0.24)]"
                : "border-[#e11d48]/18 bg-white/70 text-[#7A0019] hover:border-[#e11d48]/50 hover:bg-[#fff1f3]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.button
              layout
              key={`${activeCategory}-${item.title}`}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group relative min-h-[430px] overflow-hidden rounded-[1.65rem] border border-[#e11d48]/16 bg-white text-left shadow-[0_24px_80px_rgba(190,18,60,0.14)]"
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.45 }}
            >
              {item.mediaType === "video" ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#7A0019]/88 via-[#7A0019]/18 to-transparent" />
              {item.mediaType === "video" && (
                <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/84 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7A0019] shadow-[0_12px_28px_rgba(190,18,60,0.14)]">
                  <Video className="size-4" />
                  Video
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-4 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-white/75">
                  <span>{item.category}</span>
                  <span>{item.format}</span>
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/68">
                  {item.description}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#7A0019]/35 px-4 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[#e11d48]/20 bg-white shadow-[0_34px_140px_rgba(190,18,60,0.24)] lg:grid-cols-[0.96fr_1fr]"
              initial={{ y: 30, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 210, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-[420px]">
                {selectedItem.mediaType === "video" ? (
                  <div className="absolute inset-0 bg-[#fff7f8]">
                    <video
                      src={selectedItem.src}
                      poster={selectedItem.poster}
                      muted
                      loop
                      autoPlay
                      playsInline
                      controls
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <>
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#7A0019]/40 via-transparent to-white/10" />
                  </>
                )}
              </div>
              <div className="relative flex flex-col justify-center p-8 sm:p-10">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full border border-[#e11d48]/16 bg-[#fff1f3] text-[#7A0019] transition hover:bg-[#ffe4e8]"
                  aria-label="Close preview"
                >
                  <X className="size-5" />
                </button>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e11d48]">
                  {selectedItem.category}
                </p>
                <h3 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#7A0019] sm:text-5xl">
                  {selectedItem.title}
                </h3>
                {selectedItem.mediaType === "video" && (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#e11d48]/16 bg-[#fff1f3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#be123c]">
                    <Play className="size-3.5 fill-[#be123c]" />
                    Video preview
                  </div>
                )}
                <p className="mt-6 text-lg leading-8 text-[#702032]">
                  {selectedItem.description}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#e11d48]/14 bg-[#fff7f8] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#be123c]/60">
                      Format
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#7A0019]">
                      {selectedItem.format}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#e11d48]/14 bg-[#fff7f8] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#be123c]/60">
                      Use Case
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#7A0019]">
                      {selectedItem.metric}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
