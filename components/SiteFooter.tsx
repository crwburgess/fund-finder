export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#0f625c" }}>
      <div
        className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-8 py-10 text-center"
      >
        <p className="text-base font-semibold" style={{ color: "#ffffff" }}>
          Built by Chris Burgess who has been based in Donegal, Ireland since Jan 2025
        </p>
        <p className="text-[0.875rem]" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
          Fractional Product Leader for Scaling Technology Products
        </p>
        <div className="flex items-center gap-6 pt-1">
          <a
            href="https://crwburgess.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.875rem] font-medium underline-offset-4 hover:underline"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            crwburgess.com
          </a>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
          <a
            href="https://linkedin.com/in/crwburgess"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.875rem] font-medium underline-offset-4 hover:underline"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            linkedin/in/crwburgess
          </a>
        </div>
      </div>
    </footer>
  );
}
