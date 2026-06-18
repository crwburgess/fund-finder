"use client";

interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="flex flex-col flex-1">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="flex flex-1 flex-col items-center justify-center px-8 text-center"
        style={{ backgroundColor: "#0f625c" }}
      >
        <h1
          className="max-w-4xl font-bold"
          style={{
            color: "#ffffff",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
          }}
        >
          Irish business funding, simplified.
        </h1>
        <p
          className="mt-3 max-w-xl text-lg"
          style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}
        >
          Answer a few questions to find the right financing for your business.
        </p>
        <button
          onClick={onStart}
          className="mt-7 flex items-center gap-2.5 rounded-full px-8 py-3 text-base font-semibold transition-all hover:scale-105"
          style={{ backgroundColor: "#ffffff", color: "#0f625c", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
        >
          Get Started
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </section>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section
        className="flex flex-1 flex-col items-center justify-center px-8 text-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <p className="mb-6 text-[0.7rem] font-bold uppercase tracking-[0.15em]" style={{ color: "#8c8b8b" }}>
          How it works
        </p>
        <div className="grid w-full max-w-3xl grid-cols-3 gap-6">
          {[
            { step: "01", title: "Answer a few questions", desc: "Plain-language. No jargon, no forms." },
            { step: "02", title: "Get your exact match", desc: "The right organisation and specific programme for your situation." },
            { step: "03", title: "Know what to say", desc: "The exact language to use when you make contact." },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center gap-1.5">
              <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase" style={{ color: "#0f625c" }}>{item.step}</p>
              <p className="font-semibold text-[0.9rem]" style={{ color: "#111111" }}>{item.title}</p>
              <p className="text-[0.8125rem]" style={{ color: "#5a5f66", lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Logos ─────────────────────────────────────────────────── */}
      <section
        className="flex flex-1 flex-col items-center justify-center px-8 text-center"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.15em]" style={{ color: "#8c8b8b" }}>
          Covers funding initiatives from
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {[
            { logo: "/logo-ei-dark.png", alt: "Enterprise Ireland" },
            { logo: "/logo-leo.jpg",     alt: "Local Enterprise Office" },
          ].map((item) => (
            <div
              key={item.alt}
              className="flex h-12 items-center justify-center rounded-xl px-6"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e7eaee", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.logo} alt={item.alt} style={{ height: "28px", width: "auto", objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Note ──────────────────────────────────────────────────── */}
      <section
        className="flex flex-1 flex-col items-center justify-center px-8 text-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <p className="mb-2 text-sm font-medium" style={{ color: "#0f625c" }}>
          Free to use · Takes about 2 minutes
        </p>
        <p className="max-w-md text-[0.875rem]" style={{ color: "#5a5f66", lineHeight: 1.6 }}>
          I built it because I ran into this problem myself and figured others might too. If you think I've missed a fund or got the logic wrong,{" "}
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
