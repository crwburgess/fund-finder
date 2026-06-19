"use client";

import { MessageCircleQuestion, Target, MessageSquareText } from "lucide-react";
import { FAQ } from "./FAQ";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  const { language, setLanguage } = useLanguage();
  const tr = t[language];

  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="flex flex-col items-center justify-center px-8 py-24 text-center"
        style={{ backgroundColor: "#0f625c" }}
      >
        {/* Language toggle — top right within hero */}
        <div className="absolute top-4 right-8">
          <div
            className="flex items-center rounded-full overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.3)" }}
          >
            {(["en", "ga"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className="px-3 py-1 text-[0.75rem] font-semibold uppercase transition-colors"
                style={{
                  backgroundColor: language === lang ? "#ffffff" : "transparent",
                  color: language === lang ? "#0f625c" : "rgba(255,255,255,0.75)",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <h1
          className="max-w-4xl font-bold"
          style={{ color: "#ffffff", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
        >
          {tr.heroTitle}
        </h1>
        <p className="mt-4 max-w-xl text-lg" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
          {tr.heroSubtitle}
        </p>
        <button
          onClick={onStart}
          className="mt-8 flex items-center gap-2.5 rounded-full px-8 py-3.5 text-base font-semibold transition-all hover:scale-105"
          style={{ backgroundColor: "#ffffff", color: "#0f625c", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
        >
          {tr.getStarted}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
          {tr.freeTagline}
        </p>
      </section>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section className="flex flex-col items-center px-8 py-20 text-center" style={{ backgroundColor: "#ffffff" }}>
        <p className="mb-12 text-[0.7rem] font-bold uppercase tracking-[0.15em]" style={{ color: "#8c8b8b" }}>
          {tr.howItWorks}
        </p>
        <div className="grid w-full max-w-3xl grid-cols-3 gap-10">
          {[
            { icon: <MessageCircleQuestion size={22} color="#0f625c" />, title: tr.step01Title, desc: tr.step01Desc },
            { icon: <Target size={22} color="#0f625c" />, title: tr.step02Title, desc: tr.step02Desc },
            { icon: <MessageSquareText size={22} color="#0f625c" />, title: tr.step03Title, desc: tr.step03Desc },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(15, 98, 92, 0.08)" }}>
                {item.icon}
              </div>
              <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase" style={{ color: "#0f625c" }}>
                0{i + 1}
              </p>
              <p className="font-semibold text-[0.9375rem]" style={{ color: "#111111" }}>{item.title}</p>
              <p className="text-sm" style={{ color: "#5a5f66", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Logos ─────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center px-8 py-16 text-center" style={{ backgroundColor: "#f2f2f2" }}>
        <p className="mb-8 text-[0.7rem] font-bold uppercase tracking-[0.15em]" style={{ color: "#8c8b8b" }}>
          {tr.coversFunding}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { logo: "/logo-ei-dark.png", alt: "Enterprise Ireland" },
            { logo: "/logo-leo.jpg", alt: "Local Enterprise Office" },
          ].map((item) => (
            <div key={item.alt} className="flex h-14 items-center justify-center rounded-xl px-8"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e7eaee", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.logo} alt={item.alt} style={{ height: "32px", width: "auto", objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <FAQ />

    </div>
  );
}
