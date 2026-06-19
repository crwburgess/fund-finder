"use client";

import { useState } from "react";
import { TREE, ROOT_NODE_ID } from "@/lib/decisionTree";
import type { HistoryEntry, ResultNode } from "@/types";
import { QuestionStep } from "./QuestionStep";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

interface WizardContainerProps {
  onResult: (result: ResultNode, history: HistoryEntry[]) => void;
}

export function WizardContainer({ onResult }: WizardContainerProps) {
  const [currentNodeId, setCurrentNodeId] = useState<string>(ROOT_NODE_ID);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const currentNode = TREE[currentNodeId];

  function handleOptionSelect(chosenLabel: string, nextNodeId: string) {
    if (currentNode.type !== "question") return;

    const entry: HistoryEntry = {
      nodeId: currentNodeId,
      question: currentNode.question,
      chosenLabel,
      chosenNext: nextNodeId,
    };

    const nextNode = TREE[nextNodeId];

    if (nextNode.type === "result") {
      onResult(nextNode, [...history, entry]);
      return;
    }

    setHistory((prev) => [...prev, entry]);
    setCurrentNodeId(nextNodeId);
  }

  function handleBack() {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setCurrentNodeId(prev.nodeId);
    setHistory((h) => h.slice(0, -1));
  }

  function handleJumpTo(index: number) {
    const target = history[index];
    setCurrentNodeId(target.nodeId);
    setHistory((h) => h.slice(0, index));
  }

  const { language } = useLanguage();
  const tr = t[language];

  if (currentNode.type !== "question") return null;

  return (
    <div className="flex flex-col flex-1">
      <SiteHeader showReset={history.length > 0} onReset={() => { setHistory([]); setCurrentNodeId(ROOT_NODE_ID); }} />
      <div className="flex flex-col items-center flex-1" style={{ backgroundColor: "#f2f2f2" }}>
      <main className="flex w-full max-w-xl flex-col px-6 py-16 gap-12">

        {/* Active question — white card on gray background */}
        <div
          className="w-full rounded-2xl px-8 py-10"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            border: "1px solid #e7eaee",
          }}
        >
          <QuestionStep
            node={currentNode}
            stepNumber={history.length + 1}
            canGoBack={history.length > 0}
            onSelect={handleOptionSelect}
            onBack={handleBack}
            language={language}
          />
        </div>

        {/* Path so far — shown below the active question */}
        {history.length > 0 && (
          <div className="flex flex-col items-center gap-0">
            <div className="flex flex-col items-center gap-0 w-full">
              {history.map((entry, i) => (
                <div key={i} className="flex flex-col items-center w-full">
                  {/* Connector line from above */}
                  <div className="w-px h-8" style={{ backgroundColor: "var(--color-border)" }} aria-hidden="true" />

                  {/* Step card */}
                  <button
                    onClick={() => handleJumpTo(i)}
                    className="group w-full rounded-xl px-5 py-4 text-center transition-all hover:-translate-y-0.5"
                    style={{
                      border: "1px solid #e7eaee",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                    title="Click to go back to this question"
                  >
                    <p
                      className="text-[0.75rem] mb-1"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {entry.question}
                    </p>
                    <p
                      className="text-[0.9375rem] font-semibold group-hover:underline"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {entry.chosenLabel}
                    </p>
                  </button>
                </div>
              ))}

              {/* Final connector pointing up to current question */}
              <div className="w-px h-8" style={{ backgroundColor: "var(--color-border)" }} aria-hidden="true" />
              <p className="text-[0.6875rem] font-medium uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
                {language === "ga" ? "Ceist reatha" : "Current question"}
              </p>
            </div>
          </div>
        )}

      </main>
      </div>
    </div>
  );
}
