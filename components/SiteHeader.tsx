"use client";

interface SiteHeaderProps {
  showReset?: boolean;
  onReset?: () => void;
}

export function SiteHeader({ showReset, onReset }: SiteHeaderProps) {
  return (
    <header
      className="w-full flex items-center justify-between px-8 py-4"
      style={{ backgroundColor: "#0f625c" }}
    >
      <span
        className="text-[0.9375rem] font-bold"
        style={{ color: "#ffffff", letterSpacing: "-0.01em" }}
      >
        Irish Business Funding
      </span>

      {showReset && onReset && (
        <button
          onClick={onReset}
          className="text-[0.8125rem] font-medium uppercase tracking-wide transition-opacity hover:opacity-70"
          style={{ color: "rgba(255,255,255,0.75)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.06em" }}
        >
          ← Start over
        </button>
      )}
    </header>
  );
}
