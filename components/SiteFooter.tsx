"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export function SiteFooter() {
  const { language } = useLanguage();
  const tr = t[language];

  return (
    <footer style={{ backgroundColor: "#0f625c" }}>
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-3 px-8 py-10 text-center">
        <p className="text-[0.875rem]" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
          {tr.footerBuilt}
          <br />
          {tr.footerContact}{" "}
          <a
            href="mailto:chris@crwburgess.com"
            className="underline underline-offset-2 hover:opacity-80"
            style={{ color: "#ffffff" }}
          >
            {tr.footerContactLink}
          </a>
        </p>
      </div>
    </footer>
  );
}
