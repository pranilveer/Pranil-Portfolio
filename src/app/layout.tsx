import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranil Veer | Full Stack Software Developer",
  description:
    "Portfolio of Pranil Veer showcasing Full Stack Development, React, Next.js, Node.js, AI Projects and Production Applications.",
  openGraph: {
    title: "Pranil Veer | Full Stack Software Developer",
    description:
      "Portfolio of Pranil Veer showcasing Full Stack Development, React, Next.js, Node.js, AI Projects and Production Applications.",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="overflow-x-hidden">
          {children}
          <Analytics debug={true} />;
          <Footer/>
        </div>
      </body>
    </html>
  );
}
