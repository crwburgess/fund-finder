"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

interface SiteHeaderProps {
  showReset?: boolean;
  onReset?: () => void;
}

export function SiteHeader({ showReset, onReset }: SiteHeaderProps) {
  const { language, setLanguage } = useLanguage();
  const tr = t[language];

  return (
    <header
      className="w-full flex items-center justify-between px-8 py-4"
      style={{ backgroundColor: "#0f625c" }}
    >
      <span className="text-[0.9375rem] font-bold" style={{ color: "#ffffff", letterSpacing: "-0.01em" }}>
        {tr.siteTitle}
      </span>

      <div className="flex items-center gap-4">
        {/* EN / GA toggle */}
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

        {showReset && onReset && (
          <button
            onClick={onReset}
            className="text-[0.8125rem] font-medium uppercase tracking-wide transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.75)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.06em" }}
          >
            {tr.startOver}
          </button>
        )}
      </div>
    </header>
  );
}
