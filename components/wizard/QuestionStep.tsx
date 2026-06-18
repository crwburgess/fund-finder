"use client";

import { useState } from "react";
import type { QuestionNode } from "@/types";

interface QuestionStepProps {
  node: QuestionNode;
  stepNumber: number;
  canGoBack: boolean;
  onSelect: (chosenLabel: string, nextNodeId: string) => void;
  onBack: () => void;
}

export function QuestionStep({ node, stepNumber, canGoBack, onSelect, onBack }: QuestionStepProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex w-full flex-col gap-10">

      {/* Top row: back on left, step on right */}
      <div className="flex items-center justify-between">
        {canGoBack ? (
          <button className="btn-ghost" onClick={onBack} aria-label="Go back">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
        ) : (
          <span />
        )}
        <span className="label-eyebrow">Step {stepNumber}</span>
      </div>

      {/* Question */}
      <h1
        className="text-center font-bold"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", lineHeight: 1.15, color: "var(--color-text-primary)" }}
      >
        {node.question}
      </h1>

      {/* Options */}
      <div className="flex w-full flex-col gap-2" role="group" aria-label="Answer options">
        {node.options.map((option) => (
          <button
            key={option.next}
            onClick={() => onSelect(option.label, option.next)}
            onMouseEnter={() => setHovered(option.next)}
            onMouseLeave={() => setHovered(null)}
            className="btn-option"
            aria-label={option.label}
          >
            {option.label}
          </button>
        ))}
      </div>

    </div>
  );
}
