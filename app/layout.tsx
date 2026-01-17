import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Node2Date - Breaking Language Barriers in Dating",
  description: "The first real-time dating app powered by AI translation. Build meaningful connections globally, without saying a word. Join our early access waitlist.",
  keywords: ["dating app", "AI translation", "international dating", "language barrier", "real-time translation"],
  authors: [{ name: "Fatih Acar" }],
  openGraph: {
    title: "Node2Date - Breaking Language Barriers in Dating",
    description: "The first real-time dating app powered by AI translation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
