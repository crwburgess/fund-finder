"use client";

import { useEffect, useState } from "react";
import type { HistoryEntry, ResultNode } from "@/types";
import { SiteHeader } from "@/components/SiteHeader";
import type { GenerateScriptRequest } from "@/app/api/generate-script/route";

interface ResultsDashboardProps {
  result: ResultNode;
  history: HistoryEntry[];
  onReset: () => void;
}

type ScriptState =
  | { status: "loading" }
  | { status: "success"; text: string }
  | { status: "error"; message: string };

const orgConfig: Record<string, { logo: string; logoBg: string }> = {
  "Enterprise Ireland":            { logo: "/logo-ei-dark.png", logoBg: "#ffffff" },
  "Local Enterprise Office (LEO)": { logo: "/logo-leo.jpg",     logoBg: "#ffffff" },
};

export function ResultsDashboard({ result, history, onReset }: ResultsDashboardProps) {
  const [scriptState, setScriptState] = useState<ScriptState>({ status: "loading" });
  const [copied, setCopied] = useState(false);

  const orgCfg = orgConfig[result.organisation];
  const logoSrc = orgCfg?.logo;

  useEffect(() => {
    const body: GenerateScriptRequest = {
      fund: result.fund,
      organisation: result.organisation,
      agencyKeywords: result.agencyKeywords,
      fundDescription: result.description,
      history: history.map((h) => ({
        question: h.question,
        chosenLabel: h.chosenLabel,
      })),
    };

    fetch("/api/generate-script", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Unknown error");
        setScriptState({ status: "success", text: data.script });
      })
      .catch((err: Error) => {
        setScriptState({ status: "error", message: err.message });
      });
  }, [result, history]);

  function handleCopy() {
    const text = scriptState.status === "success" ? scriptState.text : "";
    if (!text) return;
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
          Recommended fund
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
          View official fund page
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* What to say when you make contact */}
      <section
        className="flex flex-col items-center px-6 py-14"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <div className="w-full max-w-2xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-bold text-lg" style={{ color: "#0f625c" }}>What to say when you make contact</h2>
            {scriptState.status === "success" && (
              <button onClick={handleCopy} className="btn-ghost" aria-label="Copy to clipboard">
                {copied ? (
                  <>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <path d="M2 6.5L5 9.5L11 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <rect x="4.5" y="1.5" width="7" height="9" rx="0.5" stroke="currentColor" strokeWidth="1.25" />
                      <path d="M4.5 3.5H2.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            )}
          </div>

          {scriptState.status === "loading" && (
            <div
              className="w-full rounded-lg p-6 flex flex-col gap-3"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e7eaee" }}
              aria-label="Generating your personalised pitch…"
              aria-busy="true"
            >
              <p className="text-[0.8125rem] mb-2" style={{ color: "#8c8b8b" }}>
                Building your personalised pitch…
              </p>
              {[92, 85, 96, 0, 78, 88].map((w, i) =>
                w === 0 ? <div key={i} className="h-2" /> : (
                  <div key={i} className="h-3 rounded-sm animate-pulse" style={{ width: `${w}%`, backgroundColor: "#e7eaee" }} />
                )
              )}
            </div>
          )}

          {scriptState.status === "error" && (
            <div className="rounded-lg p-6" style={{ backgroundColor: "#ffffff", border: "1px solid #e7eaee" }}>
              <p className="text-[0.875rem]" style={{ color: "#5a5f66" }}>{scriptState.message}</p>
            </div>
          )}

          {scriptState.status === "success" && (
            <div className="rounded-lg p-7" style={{ backgroundColor: "#ffffff", border: "1px solid #e7eaee" }}>
              <p className="text-base italic" style={{ color: "#111111", lineHeight: 1.8 }}>
                &ldquo;{scriptState.text}&rdquo;
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Your answers */}
      {history.length > 0 && (
        <section className="flex flex-col items-center px-6 py-14" style={{ backgroundColor: "#ffffff" }}>
          <div className="w-full max-w-2xl">
            <h2 className="mb-6 text-center font-bold text-lg" style={{ color: "#0f625c" }}>
              Your answers
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
