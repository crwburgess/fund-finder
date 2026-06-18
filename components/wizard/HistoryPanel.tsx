"use client";

import type { HistoryEntry } from "@/types";

interface HistoryPanelProps {
  history: HistoryEntry[];
  onJumpTo: (index: number) => void;
}

export function HistoryPanel({ history, onJumpTo }: HistoryPanelProps) {
  if (history.length === 0) {
    return (
      <p className="text-[0.8125rem] text-[var(--color-text-muted)] leading-relaxed">
        Your selections will appear here as you progress.
      </p>
    );
  }

  return (
    <ol className="flex flex-col gap-0" aria-label="Selection history">
      {history.map((entry, index) => (
        <li key={index} className="flex flex-col">
          {/* Question label */}
          <span className="text-[0.6875rem] font-medium tracking-wide uppercase text-[var(--color-text-muted)] mb-1">
            {entry.question}
          </span>

          {/* Chosen answer — clickable to jump back */}
          <button
            onClick={() => onJumpTo(index)}
            className="group text-left text-[0.8125rem] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1.5"
            title={`Jump back to: "${entry.question}"`}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-text-muted)]">
              ←
            </span>
            {entry.chosenLabel}
          </button>

          {/* Connector line between items */}
          {index < history.length - 1 && (
            <div className="w-px h-5 bg-[var(--color-border)] ml-1 my-1" aria-hidden="true" />
          )}
        </li>
      ))}

      {/* Current position indicator */}
      <li className="flex flex-col mt-1">
        <div className="w-px h-5 bg-[var(--color-border)] ml-1 my-1" aria-hidden="true" />
        <span className="text-[0.6875rem] font-semibold tracking-wide uppercase text-[var(--color-text-primary)]">
          Current question
        </span>
      </li>
    </ol>
  );
}
