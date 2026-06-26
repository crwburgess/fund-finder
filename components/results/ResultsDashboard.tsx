"use client";

import { useState } from "react";
import type { HistoryEntry, ResultNode } from "@/types";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

interface ResultsDashboardProps {
  result: ResultNode;
  history: HistoryEntry[];
  onReset: () => void;
}

const orgConfig: Record<string, { logo: string; logoBg: string }> = {
  "Enterprise Ireland":            { logo: "/logo-ei-dark.png", logoBg: "#ffffff" },
  "Local Enterprise Office (LEO)": { logo: "/logo-leo.jpg",     logoBg: "#ffffff" },
};

const MENTOR_DESCRIPTION =
  "The Mentor Programme is designed to match up the knowledge, skills, insights and entrepreneurial capability of experienced business practitioners with small business owner/managers who need practical and strategic one to one advice and guidance. The mentor contributes independent, informed observation and advice to aid decision making.";

function buildBullets(history: HistoryEntry[]): string[] {
  return history
    .filter((h) => h.chosenLabel.trim().toLowerCase() !== "i'm not sure")
    .map((h) => {
      const label = h.chosenLabel.trim().replace(/^(yes|no)\s*[—–-]\s*/i, "");
      const sentence = label.charAt(0).toUpperCase() + label.slice(1);
      return sentence.endsWith(".") ? sentence : sentence + ".";
    });
}

export function ResultsDashboard({ result, history, onReset }: ResultsDashboardProps) {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const tr = t[language];

  const orgCfg = orgConfig[result.organisation];
  const logoSrc = orgCfg?.logo;
  const arrivedViaNotSure = history[history.length - 1]?.chosenLabel.trim().toLowerCase() === "i'm not sure";
  const bullets = buildBullets(history);

  function handleCopy() {
    const text = `What you need\n${result.description}\n\nWhy you qualify\n${bullets.map((b) => `• ${b}`).join("\n")}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex flex-col flex-1">
      <SiteHeader showReset onReset={onReset} />

      {/* Hero result */}
      <section
        className="flex flex-col items-center px-6 py-16 text-center"
        style={{ backgroundColor: "#0f625c" }}
      >
        {logoSrc && (
          <div
            className="mb-6 flex items-center justify-center rounded-xl px-8 py-5"
            style={{ backgroundColor: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", minWidth: "220px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt={result.organisation} style={{ height: "44px", width: "auto", objectFit: "contain", display: "block" }} />
          </div>
        )}
        <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>
          {tr.recommendedFund}
        </p>
        <h1
          className="max-w-xl font-bold"
          style={{ color: "#ffffff", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          {result.fund}
        </h1>
        <a
          href={result.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-2 rounded-full px-7 py-3 text-[0.9375rem] font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#ffffff", color: "#0f625c" }}
        >
          {tr.viewFundPage}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* What to include in your application — hidden when I'm not sure was the only answer */}
      {!(arrivedViaNotSure && bullets.length === 0) && <section
        className="flex flex-col items-center px-6 py-14"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <div className="w-full max-w-2xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-bold text-lg" style={{ color: "#0f625c" }}>{tr.whatToInclude}</h2>
            <button onClick={handleCopy} className="btn-ghost" aria-label="Copy to clipboard">
                {copied ? (
                  <>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <path d="M2 6.5L5 9.5L11 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {tr.copied}
                  </>
                ) : (
                  <>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <rect x="4.5" y="1.5" width="7" height="9" rx="0.5" stroke="currentColor" strokeWidth="1.25" />
                      <path d="M4.5 3.5H2.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                    </svg>
                    {tr.copy}
                  </>
                )}
              </button>
          </div>

          <div className="rounded-lg p-7 flex flex-col gap-8" style={{ backgroundColor: "#ffffff", border: "1px solid #e7eaee" }}>

            {/* What you need */}
            <div className="flex flex-col gap-3">
              <p className="text-[0.6875rem] font-bold uppercase tracking-widest" style={{ color: "#8c8b8b" }}>
                {tr.whatYouNeed}
              </p>
              <p className="text-[0.9375rem]" style={{ color: "#111111", lineHeight: 1.6 }}>
                {result.description}
              </p>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #e7eaee" }} />

            {/* Why you qualify */}
            <div className="flex flex-col gap-3">
              <p className="text-[0.6875rem] font-bold uppercase tracking-widest" style={{ color: "#8c8b8b" }}>
                {tr.whyYouQualify}
              </p>
              {arrivedViaNotSure ? (
                <p className="text-[0.9375rem]" style={{ color: "#111111", lineHeight: 1.6 }}>
                  {MENTOR_DESCRIPTION}
                </p>
              ) : (
                <ul className="flex flex-col gap-2.5">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "#0f625c" }} aria-hidden="true" />
                      <span className="text-[0.9375rem]" style={{ color: "#111111", lineHeight: 1.6 }}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </div>
      </section>}

      {/* Your answers */}
      {history.length > 0 && (
        <section className="flex flex-col items-center px-6 py-14" style={{ backgroundColor: "#ffffff" }}>
          <div className="w-full max-w-2xl">
            <h2 className="mb-6 text-center font-bold text-lg" style={{ color: "#0f625c" }}>
              {tr.yourAnswers}
            </h2>
            <div className="flex flex-col">
              {history.map((entry, i) => (
                <div key={i} className="flex items-start gap-4 py-4" style={{ borderBottom: "1px solid #e7eaee" }}>
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-[0.6875rem] font-bold"
                    style={{ backgroundColor: "#0f625c", color: "#ffffff" }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[0.8125rem]" style={{ color: "#8c8b8b" }}>{entry.question}</span>
                    <span className="text-[0.9375rem] font-semibold" style={{ color: "#111111" }}>{entry.chosenLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
