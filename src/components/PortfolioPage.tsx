"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Camera,
  Crown,
  HeartHandshake,
  Mail,
  MapPin,
  Megaphone,
  Play,
  Sparkles,
  Star,
  Store,
  Video,
} from "lucide-react";
import Image from "next/image";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ContactForm } from "@/components/ContactForm";
import { FloralLogo } from "@/components/FloralLogo";
import { FlowerField } from "@/components/FlowerField";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { SectionShell } from "@/components/SectionShell";
import {
  brandMarks,
  collaborationFeature,
  education,
  experience,
  navItems,
  profile,
  services,
  skills,
  specialties,
  stats,
  testimonials,
  videoTypes,
} from "@/lib/portfolio-data";
import { useEffect, useRef, useState } from "react";

const serviceIcons = [Megaphone, Video, Crown, Camera, Sparkles, Star];

export function PortfolioPage() {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 720], [0, 120]);
  const heroTextY = useTransform(scrollY, [0, 720], [0, -42]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7f8] text-[#4a0614]">
      <FlowerField />
      <SiteBackground />
      <Header />

      <section className="relative min-h-[92vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <Image
            src="/media/maram-main-hero.webp"
            alt="Maram Ajmi content creator portrait"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_18%] brightness-[1.03] contrast-[1.08] saturate-[1.02]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,247,248,0.96)_0%,rgba(255,247,248,0.84)_33%,rgba(255,247,248,0.08)_60%,rgba(122,0,25,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(225,29,72,0.1)_0%,rgba(255,255,255,0.16)_28%,transparent_58%),linear-gradient(180deg,rgba(255,247,248,0.02),#fff7f8_98%)]" />
        <div className="absolute inset-y-0 right-0 w-[48%] bg-[radial-gradient(circle_at_46%_24%,rgba(255,255,255,0.02),rgba(255,255,255,0)_42%)]" />

        <motion.div
          className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-10"
          style={{ y: heroTextY }}
        >
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#e11d48]/16 bg-white/74 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#be123c] shadow-[0_16px_44px_rgba(190,18,60,0.12)] backdrop-blur-xl">
              <FloralLogo compact />
              Cute creator portfolio
            </div>
            <h1 className="font-display text-6xl font-semibold leading-[0.9] tracking-tight text-[#7A0019] sm:text-7xl lg:text-8xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-[#702032] sm:text-2xl">
              {profile.tagline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#e11d48] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_44px_rgba(225,29,72,0.28)] transition hover:bg-[#be123c]"
              >
                Work With Me
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e11d48]/20 bg-white/70 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#7A0019] backdrop-blur-xl transition hover:border-[#e11d48]/60 hover:bg-white"
              >
                <Play className="size-4 fill-[#7A0019]" />
                View Portfolio
              </a>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {["Fashion", "Lifestyle", "Fitness"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{ animationDelay: `${index * 0.35}s` }}
                className="rounded-2xl border border-[#e11d48]/14 bg-white/72 px-4 py-3 text-sm font-medium text-[#7A0019] shadow-[0_14px_34px_rgba(190,18,60,0.1)] backdrop-blur-xl"
              >
                {item} campaigns
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <SectionShell
        id="about"
        eyebrow="About Maram"
        title="A polished creator profile for brands that care about taste and trust."
        copy={profile.intro}
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.86fr]">
          <div className="glass-panel p-7 sm:p-9">
            <div className="grid gap-5 text-base leading-8 text-[#702032]">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {specialties.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#e11d48]/14 bg-white/80 p-5">
                  <p className="text-sm font-semibold text-[#7A0019]">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[#702032]/80">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel overflow-hidden p-0">
            <div className="relative min-h-[420px]">
              <Image
                src="/media/maram-main-portrait.webp"
                alt="Maram Ajmi lifestyle content"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7A0019]/76 via-[#7A0019]/8 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/85">
                  Core energy
                </p>
                <p className="mt-3 max-w-md font-display text-3xl font-semibold text-white">
                  Confident, social, creative and brand-ready.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#e11d48]/14 bg-white/80 px-4 py-2 text-sm text-[#702032]"
            >
              {skill}
            </span>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Media Kit"
        title="Numbers that help partners plan."
        copy="A clean media-kit layout for follower growth, engagement, reach and brand collaboration signals."
        align="center"
        className="pt-8"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="glass-panel stat-card p-6"
              whileHover={{ y: -6, borderColor: "rgba(225,29,72,0.42)" }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#be123c]/68">{stat.label}</p>
              <p className="mt-5 font-display text-5xl font-semibold text-[#7A0019]">
                <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm text-[#702032]/70">{stat.note}</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="portfolio"
        eyebrow="Portfolio"
        title="Instagram-style content showcase."
        copy="A curated gallery using the supplied media, organized into campaign categories that brands and agencies naturally search for."
      >
        <PortfolioGallery />
      </SectionShell>

      <SectionShell
        id="experience"
        eyebrow="Experience"
        title="From social media production to customer-facing brand communication."
      >
        <CollabVideoFeature />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel p-7 sm:p-9">
            <p className="text-sm uppercase tracking-[0.3em] text-[#e11d48]">Brand Signals</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {brandMarks.map((mark) => (
                <span
                  key={mark}
                  className="rounded-full border border-[#e11d48]/20 bg-white/80 px-4 py-2 text-sm font-semibold text-[#7A0019]"
                >
                  {mark}
                </span>
              ))}
            </div>
            <div className="mt-10 space-y-4">
              {education.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-[#702032]">
                  <Award className="mt-0.5 size-5 shrink-0 text-[#e11d48]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#fb7185] via-[#e11d48] to-transparent" />
            <div className="space-y-5">
              {experience.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="absolute left-0 top-2 grid size-9 place-items-center rounded-full border border-[#e11d48]/30 bg-white shadow-[0_12px_30px_rgba(225,29,72,0.18)]">
                    <BadgeCheck className="size-4 text-[#e11d48]" />
                  </div>
                  <div className="glass-panel p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#e11d48]">{item.meta}</p>
                    <h3 className="mt-3 text-xl font-semibold text-[#7A0019]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#702032]/82">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="services"
        eyebrow="Services"
        title="Campaign-ready services for brands, agencies and creative teams."
        align="center"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || Sparkles;
            return (
              <motion.div
                key={service.title}
                className="glass-panel p-6"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-7 inline-flex size-12 items-center justify-center rounded-2xl bg-[#e11d48] text-white shadow-[0_16px_34px_rgba(225,29,72,0.24)]">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#7A0019]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#702032]/82">{service.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Testimonials"
        title="Elegant collaboration energy, from first brief to final post."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="glass-panel p-6">
              <div className="mb-6 flex gap-1 text-[#e11d48]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-[#e11d48]" />
                ))}
              </div>
              <p className="text-base leading-8 text-[#702032]">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-7 border-t border-[#e11d48]/12 pt-5">
                <p className="font-semibold text-[#7A0019]">{testimonial.name}</p>
                <p className="mt-1 text-sm text-[#702032]/62">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="contact"
        eyebrow="Contact"
        title="For sponsorships, collabs, modeling and content creation."
        copy="Use the form or direct channels below for campaign briefs, launch timelines, event invitations and long-term ambassador opportunities."
      >
        <ContactForm />
      </SectionShell>

      <footer className="border-t border-[#e11d48]/14 bg-white/72 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#702032] md:flex-row md:items-center md:justify-between">
          <div>
            <FloralLogo />
            <p className="mt-2">{profile.role}</p>
            <p className="mt-1 font-semibold text-[#7A0019]">
              Made with love by Iyed Ben Mohamed IBM. All rights reserved (c) 2026.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="hover:text-[#e11d48]">
              <Mail className="mr-2 inline size-4" />
              Email
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#e11d48]">
              <HeartHandshake className="mr-2 inline size-4" />
              WhatsApp
            </a>
            <a href={profile.tiktok} target="_blank" rel="noreferrer" className="hover:text-[#e11d48]">
              <Play className="mr-2 inline size-4" />
              TikTok
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="hover:text-[#e11d48]">
              <Star className="mr-2 inline size-4" />
              Instagram
            </a>
            <a href={profile.cv} className="hover:text-[#e11d48]">
              <Store className="mr-2 inline size-4" />
              CV
            </a>
            <span>
              <MapPin className="mr-2 inline size-4" />
              {profile.location}
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function CollabVideoFeature() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showControls, setShowControls] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const playPromise = video.play();

    if (playPromise) {
      playPromise.catch(() => {
        setShowControls(true);
        setShowOverlay(true);
      });
    }
  }, []);

  function handleVideoClick() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    setShowControls(true);
    setShowOverlay(false);
    void video.play().catch(() => {
      setShowControls(true);
    });
  }

  return (
    <div className="mb-8 grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
      <div className="glass-panel overflow-hidden p-0">
        <div className="relative aspect-[9/16] min-h-[420px] bg-[#fff1f3] sm:aspect-[4/5]">
          <video
            ref={videoRef}
            src={collaborationFeature.src}
            poster="/media/maram-main-portrait.webp"
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            controls={showControls}
            onPlay={() => setShowOverlay(false)}
            onPause={() => setShowOverlay(true)}
            onClick={handleVideoClick}
            className="h-full w-full object-cover object-center"
          />
          {showOverlay && (
            <button
              type="button"
              onClick={handleVideoClick}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#7A0019]/38 via-transparent to-transparent"
              aria-label="Play collaboration video"
            >
              <span className="inline-flex items-center gap-3 rounded-full bg-white/86 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7A0019] shadow-[0_16px_38px_rgba(190,18,60,0.18)]">
                <Play className="size-4 fill-[#7A0019]" />
                Play video
              </span>
            </button>
          )}
        </div>
      </div>

      <div className="glass-panel p-7 sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#e11d48]">
          Collaboration Preview
        </p>
        <h3 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#7A0019]">
          {collaborationFeature.title}
        </h3>
        <p className="mt-5 text-base leading-8 text-[#702032]">
          {collaborationFeature.copy}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {videoTypes.map((type) => (
            <span
              key={type}
              className="rounded-full border border-[#e11d48]/16 bg-white/80 px-4 py-2 text-sm font-semibold text-[#7A0019] shadow-[0_10px_24px_rgba(190,18,60,0.08)]"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#e11d48]/12 bg-white/78 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#" className="inline-flex items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d48]/40">
          <FloralLogo />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#702032]/72 transition hover:text-[#e11d48]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-[#e11d48]/24 bg-[#fff1f3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#be123c] transition hover:border-[#e11d48]/70 hover:bg-white"
        >
          Book
        </a>
      </div>
    </header>
  );
}

function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#fff7f8_0%,#ffffff_34%,#ffe4e8_64%,#fff7f8_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[48rem] bg-[linear-gradient(135deg,rgba(225,29,72,0.14),transparent_48%,rgba(255,255,255,0.7))] opacity-90" />
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(225,29,72,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(225,29,72,0.08)_1px,transparent_1px)] [background-size:74px_74px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(255,247,248,0.62)_78%,#fff_100%)]" />
    </div>
  );
}
