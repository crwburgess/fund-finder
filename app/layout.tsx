import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/SiteFooter";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Irish Business Funding — Find the Right Grant for Your Business",
  description: "Answer a few questions and find out exactly which Irish state funding programme is right for you — Enterprise Ireland or Local Enterprise Office.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
          <SiteFooter />
        </LanguageProvider>
        <Script
          data-goatcounter="https://iefundfinder.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
