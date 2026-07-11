import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./v2.css";
import "./accelerator.css";
import "./brand-card.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://esg-starter-showcase.ellachew4314.chatgpt.site"),
  openGraph: {
    title: "ESG Starter",
    description: "From ESG Action to ESG Opportunity.",
    url: "/",
    siteName: "ESG Starter",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ESG Starter social card" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESG Starter",
    description: "From ESG Action to ESG Opportunity.",
    images: ["/og.png"],
  },
  title: "ESG Starter — Turn action into opportunity",
  description: "A practical ESG starting point for SMEs, NGOs and impact-led organisations.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
