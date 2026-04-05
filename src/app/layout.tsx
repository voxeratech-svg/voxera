import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoxeraTech - Software Solutions",
  description:
    "VoxeraTech Software Solutions - Dijital dönüşümünüzü gerçekleştiriyoruz. Web, mobil ve kurumsal yazılım çözümleri.",
  keywords: ["yazılım", "web geliştirme", "mobil uygulama", "VoxeraTech", "software solutions"],
  icons: {
    icon: "/favicon-icon.png",
    apple: "/favicon-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
