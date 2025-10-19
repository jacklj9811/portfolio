
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  openGraph: { title: site.name, description: site.description },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
