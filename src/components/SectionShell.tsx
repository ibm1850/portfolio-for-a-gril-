"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  copy?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  copy,
  children,
  className = "",
  align = "left",
}: SectionShellProps) {
  return (
    <motion.section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28 ${className}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {(eyebrow || title || copy) && (
        <div
          className={`mb-12 max-w-3xl ${
            align === "center" ? "mx-auto text-center" : ""
          }`}
        >
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#e11d48]">
              {eyebrow}
            </p>
          )}
          {title && (
            <>
              <h2 className="font-display text-4xl font-semibold leading-tight text-[#7A0019] sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <motion.span
                className={`section-glow-line ${align === "center" ? "mx-auto" : ""}`}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </>
          )}
          {copy && (
            <p className="mt-5 text-base leading-8 text-[#6f2232] sm:text-lg">
              {copy}
            </p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}
