"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const items: { q: string; a: ReactNode }[] = [
  {
    q: "Is this tool affiliated with Enterprise Ireland or LEO?",
    a: "No. This is an entirely independent tool and is not officially affiliated with or endorsed by Enterprise Ireland or the Local Enterprise Offices. Their logos are displayed purely to show you which official organisations host the funding initiatives that match your answers.",
  },
  {
    q: "Is my business data stored or tracked?",
    a: "No. Your privacy is entirely respected. Your answers exist only within your active browser session and completely disappear the moment you close the tab. No accounts, no email sign-ups, and no data harvesting.",
  },
  {
    q: "How up-to-date is the information?",
    a: "This tool is designed to act as a smart compass. Once you find a match, you are directed straight to the official, live webpage for that specific fund to see the most current guidelines. If you ever notice a broken link or an outdated fund, please let me know so I can fix it for the next person.",
  },
  {
    q: "Why is this completely free? What's the catch?",
    a: "There is no catch. This is a personal passion project. I found it confusing when I was trying to work out what was relevant to me, and I wanted to build a free utility to make life just a little bit easier for fellow entrepreneurs in Ireland.",
  },
  {
    q: "What if my unique business situation isn't covered?",
    a: <>Please <a href="mailto:chris@crwburgess.com" className="font-medium underline underline-offset-2" style={{ color: "#0f625c" }}>email me</a>. This is a community-minded tool, and your feedback is incredibly valuable. If the quick questionnaire didn't fit your business model, drop me a line so I can improve the logic for future founders.</>,
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="flex flex-col items-center px-8 py-12"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="w-full max-w-2xl">
        <p className="mb-8 text-center text-[0.7rem] font-bold uppercase tracking-[0.15em]" style={{ color: "#8c8b8b" }}>
          FAQ
        </p>
        <div className="flex flex-col">
          {items.map((item, i) => (
            <div key={i} style={{ borderTop: "1px solid #e7eaee" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[0.9375rem] font-semibold" style={{ color: "#111111" }}>
                  {item.q}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", color: "#0f625c" }}
                >
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <p className="pb-5 text-[0.9rem]" style={{ color: "#5a5f66", lineHeight: 1.7 }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
          <div style={{ borderTop: "1px solid #e7eaee" }} />
        </div>
      </div>
    </section>
  );
}
