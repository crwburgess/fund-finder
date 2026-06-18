"use client";

interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="flex flex-col flex-1">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="flex flex-col items-center justify-center px-8 py-20 text-center"
        style={{ backgroundColor: "#0f625c" }}
      >
        <h1
          className="max-w-4xl font-bold"
          style={{
            color: "#ffffff",
            fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
          }}
        >
          Irish business funding, simplified.
        </h1>
        <p
          className="mt-4 max-w-xl text-lg"
          style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}
        >
          Answer a few questions to find the right financing for your business.
        </p>
        <button
          onClick={onStart}
          className="mt-8 flex items-center gap-2.5 rounded-full px-8 py-3.5 text-base font-semibold transition-all hover:scale-105"
          style={{ backgroundColor: "#ffffff", color: "#0f625c", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
        >
          Get Started
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </section>

      {/* ── How it works — compact strip ─────────────────────────── */}
      <section
        className="flex flex-col items-center px-8 py-14 text-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <p className="mb-10 text-[0.7rem] font-bold uppercase tracking-[0.15em]" style={{ color: "#8c8b8b" }}>
          How it works
        </p>
        <div className="grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#0f625c" strokeWidth="1.5"/>
                  <path d="M8 12h8M12 8v8" stroke="#0f625c" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              step: "01",
              title: "Answer a few questions",
              desc: "Plain-language questions about your business. No jargon, no forms.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#0f625c" strokeWidth="1.5"/>
                  <path d="M8 12l3 3 5-5" stroke="#0f625c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              step: "02",
              title: "Get your exact match",
              desc: "It identifies the right organisation and the specific programme for your situation.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="5" width="16" height="14" rx="2" stroke="#0f625c" strokeWidth="1.5"/>
                  <path d="M8 10h8M8 14h5" stroke="#0f625c" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              step: "03",
              title: "Know what to say",
              desc: "Get the exact language to use when you walk through the door.",
            },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center gap-2">
              <div
                className="mb-1 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(15, 98, 92, 0.08)" }}
              >
                {item.icon}
              </div>
              <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase" style={{ color: "#0f625c" }}>{item.step}</p>
              <p className="font-semibold text-[0.9375rem]" style={{ color: "#111111" }}>{item.title}</p>
              <p className="text-sm" style={{ color: "#5a5f66", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Logos ─────────────────────────────────────────────────── */}
      <section
        className="flex flex-col items-center px-8 py-10"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <p className="mb-6 text-[0.7rem] font-bold uppercase tracking-[0.15em]" style={{ color: "#8c8b8b" }}>
          Covers funding initiatives from
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { logo: "/logo-ei-dark.png", alt: "Enterprise Ireland" },
            { logo: "/logo-leo.jpg",     alt: "Local Enterprise Office" },
          ].map((item) => (
            <div
              key={item.alt}
              className="flex h-14 items-center justify-center rounded-xl px-6"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e7eaee", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.logo} alt={item.alt} style={{ height: "32px", width: "auto", objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Honest note ──────────────────────────────────────────── */}
      <section
        className="flex flex-col items-center px-8 py-12 text-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <p className="mb-3 text-sm font-medium" style={{ color: "#0f625c" }}>
          Free to use · Takes about 2 minutes
        </p>
        <p className="max-w-md text-[0.9375rem]" style={{ color: "#5a5f66", lineHeight: 1.7 }}>
          I built it because I ran into this problem myself and figured others might too. If you think I've missed a fund or got the logic wrong,
          <br />
          <a
            href="mailto:chris@crwburgess.com"
            className="font-medium underline underline-offset-2"
            style={{ color: "#0f625c" }}
          >
            I'd genuinely like to know.
          </a>
        </p>
      </section>
    </div>
  );
}
