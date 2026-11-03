import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aljaffarsyah.com"),
  title: {
    default: "Aljaffarsyah Labs | Software & SaaS Portfolio",
    template: "%s | Aljaffarsyah Labs",
  },
  description:
    "Engineering-led portfolio and showcase of high-performance SaaS products and software architecture.",
  keywords: [
    "SaaS",
    "Software Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Aljaffarsyah" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aljaffarsyah.com",
    siteName: "Aljaffarsyah Labs",
    title: "Aljaffarsyah Labs | Software & SaaS Portfolio",
    description:
      "Engineering-led portfolio and showcase of high-performance SaaS products and software architecture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aljaffarsyah Labs | Software & SaaS Portfolio",
    description:
      "Engineering-led portfolio and showcase of high-performance SaaS products and software architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark font-sans`}
    >
      <body className="min-h-full flex flex-col bg-black text-slate-100 selection:bg-slate-200 selection:text-slate-950">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-black focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
