import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shabamorix Talent",
  description: "AI-powered interview & placement platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
