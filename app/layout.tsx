// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import site from "@/content/site.json";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  openGraph: { title: site.name, description: site.description },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(241,242,247,0.9)),linear-gradient(180deg,#f9fafb,#eef1f7)] text-slate-900 antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* 背景：放在 z-0，避免负层级被吞 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            <div className="wave-background">
              <div className="wave-horizon" />
              <div className="wave-layer wave-layer-one" />
              <div className="wave-layer wave-layer-two" />
              <div className="wave-layer wave-layer-three" />
              <div className="wave-sparkles">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          {/* 内容：置于背景之上 */}
          <div className="relative z-10 flex min-h-screen flex-col">
            {/* 顶部雾化遮罩，增强层次感 */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white/70 via-white/40 to-transparent" />
            <Navbar />

            <main className="relative mx-auto w-full max-w-6xl flex-1 px-6 pb-24 pt-24 sm:px-10 lg:px-12">
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
