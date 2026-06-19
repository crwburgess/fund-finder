export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#0f625c" }}>
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-3 px-8 py-10 text-center">
        <p className="text-[0.875rem]" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
          I built this because I ran into this problem myself and figured others might too.
          <br />
          If you think I've missed a fund, or an organisation, please{" "}
          <a
            href="mailto:chris@crwburgess.com"
            className="underline underline-offset-2 hover:opacity-80"
            style={{ color: "#ffffff" }}
          >
            let me know by email.
          </a>
        </p>
      </div>
    </footer>
  );
}
