"use client";

import { motion } from "framer-motion";
import { AtSign, CheckCircle2, Mail, Phone, Send, Smartphone } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import type { ReactNode } from "react";
import { profile } from "@/lib/portfolio-data";

type SavedInquiry = {
  id: string;
  name: string;
  brand: string;
  email: string;
  campaign: string;
  message: string;
  createdAt: string;
};

export function ContactForm() {
  const [status, setStatus] = useState("Ready for campaign briefs, media kits and collaboration inquiries.");
  const [savedInquiry, setSavedInquiry] = useState<SavedInquiry | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      brand: String(form.get("brand") || ""),
      email: String(form.get("email") || ""),
      campaign: String(form.get("campaign") || "Collaboration inquiry"),
      message: String(form.get("message") || ""),
    };

    setIsSaving(true);
    setStatus("Saving your booking message inside the portfolio...");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        message?: string;
        inquiry?: SavedInquiry;
      };

      if (!response.ok || !data.inquiry) {
        throw new Error(data.message || "The inquiry could not be saved.");
      }

      setSavedInquiry(data.inquiry);
      setStatus("Inquiry saved in the portfolio inbox.");
      formElement.reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "The inquiry could not be saved right now.";

      setStatus(message);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="glass-panel p-7 sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e11d48]">
          Direct Booking
        </p>
        <h3 className="mt-4 font-display text-4xl font-semibold text-[#7A0019]">
          Build the next campaign together.
        </h3>
        <p className="mt-5 text-base leading-8 text-[#702032]">
          For sponsorships, UGC, modeling, event coverage and content creation,
          send the campaign context, deliverables and timing. Maram can adapt
          the creative direction to fashion, beauty, lifestyle, wellness and
          travel briefs.
        </p>
        <p className="mt-4 rounded-2xl border border-[#e11d48]/16 bg-white/82 px-4 py-3 text-sm leading-6 text-[#702032]">
          Every inquiry is saved directly inside this portfolio instead of
          jumping to another app.
        </p>

        <div className="mt-8 space-y-3">
          <ContactLink href={`mailto:${profile.email}`} icon={<Mail className="size-5" />} label={profile.email} />
          <ContactLink href={profile.whatsapp} icon={<Smartphone className="size-5" />} label="WhatsApp booking" />
          <ContactLink href={`tel:${profile.phone.replaceAll(" ", "")}`} icon={<Phone className="size-5" />} label={profile.phone} />
          <ContactLink href={profile.instagram} icon={<AtSign className="size-5" />} label="Instagram profile" />
          <ContactLink href={profile.tiktok} icon={<AtSign className="size-5" />} label="TikTok profile" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-[0.78fr_1fr]">
          <div className="rounded-[1.25rem] border border-[#e11d48]/20 bg-white p-3 shadow-[0_18px_50px_rgba(190,18,60,0.12)]">
            <Image
              src="/media/maram-tiktok-qr.webp"
              alt="TikTok QR code for Maram Ajmi"
              width={360}
              height={435}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center rounded-[1.25rem] bg-[#fff1f3] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e11d48]">
              Scan TikTok
            </p>
            <p className="mt-3 text-sm leading-6 text-[#702032]">
              Scan the QR code to open Maram&apos;s TikTok profile, watch her UGC
              content and send a collaboration message.
            </p>
          </div>
        </div>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="glass-panel p-5 sm:p-7"
        initial={{ opacity: 0, x: 22 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" name="name" placeholder="Your name" />
          <Field label="Brand / Agency" name="brand" placeholder="Company name" />
          <Field label="Email" name="email" type="email" placeholder="you@brand.com" />
          <Field label="Campaign Type" name="campaign" placeholder="UGC, modeling, event..." />
        </div>
        <label className="mt-4 block">
          <span className="mb-2 block text-sm font-medium text-[#7A0019]">Brief</span>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Share the product, goals, deadline, deliverables and budget range."
            className="w-full resize-none rounded-2xl border border-[#e11d48]/20 bg-white px-4 py-3 text-[#4a0614] outline-none transition placeholder:text-[#be123c]/35 focus:border-[#e11d48] focus:bg-[#fff7f8]"
          />
        </label>
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-[#702032]/80">{status}</p>
          <button
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e11d48] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(225,29,72,0.28)] transition hover:bg-[#be123c] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSaving ? "Saving..." : "Send Inquiry"}
            <Send className="size-4" />
          </button>
        </div>
        {savedInquiry && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 rounded-3xl border border-[#e11d48]/18 bg-[#fff1f3] p-4"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#e11d48]" />
              <div>
                <p className="text-sm font-semibold text-[#7A0019]">
                  Inquiry saved successfully.
                </p>
                <p className="mt-1 text-sm leading-6 text-[#702032]/78">
                  The latest booking message is now stored locally in this portfolio.
                </p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 rounded-[1.6rem] border border-[#e11d48]/14 bg-white/85 p-4 text-sm leading-6 text-[#702032]">
              <p>
                <span className="font-semibold text-[#7A0019]">Name:</span>{" "}
                {savedInquiry.name}
              </p>
              <p>
                <span className="font-semibold text-[#7A0019]">Brand:</span>{" "}
                {savedInquiry.brand}
              </p>
              <p>
                <span className="font-semibold text-[#7A0019]">Email:</span>{" "}
                {savedInquiry.email}
              </p>
              <p>
                <span className="font-semibold text-[#7A0019]">Campaign:</span>{" "}
                {savedInquiry.campaign}
              </p>
              <p className="whitespace-pre-wrap">
                <span className="font-semibold text-[#7A0019]">Brief:</span>{" "}
                {savedInquiry.message}
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-[#be123c]/72">
                Saved at {new Date(savedInquiry.createdAt).toLocaleString()}
              </p>
            </div>
          </motion.div>
        )}
      </motion.form>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#7A0019]">{label}</span>
      <input
        name={name}
        type={type}
        required={name !== "campaign"}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#e11d48]/20 bg-white px-4 py-3 text-[#4a0614] outline-none transition placeholder:text-[#be123c]/35 focus:border-[#e11d48] focus:bg-[#fff7f8]"
      />
    </label>
  );
}

function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-3 rounded-2xl border border-[#e11d48]/16 bg-white/80 px-4 py-3 text-sm font-medium text-[#702032] transition hover:border-[#e11d48]/50 hover:bg-[#fff1f3] hover:text-[#7A0019]"
    >
      <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#e11d48] text-white shadow-[0_10px_22px_rgba(225,29,72,0.22)]">
        {icon}
      </span>
      {label}
    </a>
  );
}
