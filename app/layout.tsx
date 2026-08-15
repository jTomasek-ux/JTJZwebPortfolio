import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteChrome } from "@/components/SiteChrome";
import { Footer } from "@/components/Footer";
import "./globals.css";

const wallnutt = localFont({
  src: "./fonts/WallnuttCorps-Regular.otf",
  variable: "--font-wallnutt",
  display: "swap",
});

const neueHaas = localFont({
  src: [
    {
      path: "./fonts/NeueHaasDisplayRoman.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplayMedium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KUBIC STUDIO — Digital-first design studio",
  description:
    "KUBIC STUDIO is a digital-first design studio. Brand identity, web design, art direction, motion, and digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${wallnutt.className} ${wallnutt.variable} ${neueHaas.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <SiteChrome>
          {children}
          <Footer />
        </SiteChrome>
      </body>
    </html>
  );
}
