"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export function FAQ() {
  const { language } = useLanguage();
  const tr = t[language];
  const [open, setOpen] = useState<number | null>(null);

  const items: { q: string; a: ReactNode }[] = [
    { q: tr.faqQ1, a: tr.faqA1 },
    { q: tr.faqQ2, a: tr.faqA2 },
    { q: tr.faqQ3, a: tr.faqA3 },
    { q: tr.faqQ4, a: tr.faqA4 },
    {
      q: tr.faqQ5,
      a: language === "en"
        ? <>Please <a href="mailto:chris@crwburgess.com" className="font-medium underline underline-offset-2" style={{ color: "#0f625c" }}>email me</a>. This is a community-minded tool, and your feedback is incredibly valuable. If the quick questionnaire didn't fit your business model, drop me a line so I can improve the logic for future founders.</>
        : <>Seol <a href="mailto:chris@crwburgess.com" className="font-medium underline underline-offset-2" style={{ color: "#0f625c" }}>ríomhphost chugam</a>. Is uirlis atá dírithe ar an bpobal í seo, agus tá do chuid aiseolais iontach luachmhar. Má níor oibrigh an ceistneoir tapa do mhúnla gnó, scríobh chugam ionas gur féidir liom an loighic a fheabhsú d'fhiontairí sa todhchaí.</>,
    },
  ];

  return (
    <section className="flex flex-col items-center px-8 py-12" style={{ backgroundColor: "#ffffff" }}>
      <div className="w-full max-w-2xl">
        <p className="mb-8 text-center text-[0.7rem] font-bold uppercase tracking-[0.15em]" style={{ color: "#8c8b8b" }}>
          {tr.faqLabel}
        </p>
        <div className="flex flex-col">
          {items.map((item, i) => (
            <div key={i} style={{ borderTop: "1px solid #e7eaee" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[0.9375rem] font-semibold" style={{ color: "#111111" }}>{item.q}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", color: "#0f625c" }}>
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <p className="pb-5 text-[0.9rem]" style={{ color: "#5a5f66", lineHeight: 1.7 }}>{item.a}</p>
              )}
            </div>
          ))}
          <div style={{ borderTop: "1px solid #e7eaee" }} />
        </div>
      </div>
    </section>
  );
}
