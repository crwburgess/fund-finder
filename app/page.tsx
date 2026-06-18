"use client";

import { useState } from "react";
import { LandingScreen } from "@/components/LandingScreen";
import { WizardContainer } from "@/components/wizard/WizardContainer";
import { ResultsDashboard } from "@/components/results/ResultsDashboard";
import type { HistoryEntry, ResultNode } from "@/types";

type Screen = "landing" | "wizard" | "result";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [result, setResult] = useState<{ node: ResultNode; history: HistoryEntry[] } | null>(null);

  if (screen === "result" && result) {
    return (
      <ResultsDashboard
        result={result.node}
        history={result.history}
        onReset={() => {
          setResult(null);
          setScreen("landing");
        }}
      />
    );
  }

  if (screen === "wizard") {
    return (
      <WizardContainer
        onResult={(node, history) => {
          setResult({ node, history });
          setScreen("result");
        }}
      />
    );
  }

  return <LandingScreen onStart={() => setScreen("wizard")} />;
}
