"use client";

import { useState } from "react";
import type { QuestionNode } from "@/types";
import { t } from "@/lib/translations";

interface QuestionStepProps {
  node: QuestionNode;
  stepNumber: number;
  canGoBack: boolean;
  language: "en" | "ga";
  onSelect: (chosenLabel: string, nextNodeId: string) => void;
  onBack: () => void;
}

export function QuestionStep({ node, stepNumber, canGoBack, language, onSelect, onBack }: QuestionStepProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const tr = t[language];

  const question = language === "ga" && node.questionGa ? node.questionGa : node.question;

  return (
    <div className="flex w-full flex-col gap-10">

      {/* Top row: back on left, step on right */}
      <div className="flex items-center justify-between">
        {canGoBack ? (
          <button className="btn-ghost" onClick={onBack} aria-label={tr.back}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {tr.back}
          </button>
        ) : (
          <span />
        )}
        <span className="label-eyebrow">{tr.stepLabel(stepNumber)}</span>
      </div>

      {/* Question */}
      <h1
        className="text-center font-bold"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", lineHeight: 1.15, color: "var(--color-text-primary)" }}
      >
        {question}
      </h1>

      {/* Hint */}
      {node.hint && (
        <div
          className="rounded-xl px-5 py-4 text-sm"
          style={{ backgroundColor: "rgba(15,98,92,0.07)", border: "1px solid rgba(15,98,92,0.15)" }}
        >
          <p className="font-medium mb-2" style={{ color: "#0f625c" }}>{node.hint.intro}</p>
          <ul className="flex flex-col gap-1">
            {node.hint.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "#0f625c" }} />
                <span style={{ color: "#3a5a58" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Options */}
      <div className="flex w-full flex-col gap-2" role="group" aria-label="Answer options">
        {node.options.map((option) => {
          const label = language === "ga" && option.labelGa ? option.labelGa : option.label;
          return (
            <button
              key={option.next}
              onClick={() => onSelect(option.label, option.next)}
              onMouseEnter={() => setHovered(option.next)}
              onMouseLeave={() => setHovered(null)}
              className="btn-option"
              aria-label={label}
            >
              {label}
            </button>
          );
        })}

        {/* I'm not sure — same style, always last */}
        <button
          onClick={() => onSelect("I'm not sure", "result_training_mentoring")}
          className="btn-option"
          aria-label={tr.notSure}
        >
          {tr.notSure}
        </button>
      </div>

    </div>
  );
}
