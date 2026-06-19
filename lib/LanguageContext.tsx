"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Language = "en" | "ga";

interface LanguageContextValue {
  language: Language;
  setLanguage: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "ga" || stored === "en") setLanguageState(stored);
  }, []);

  function setLanguage(l: Language) {
    setLanguageState(l);
    localStorage.setItem("lang", l);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
