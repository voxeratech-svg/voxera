import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b14",
};

export const metadata: Metadata = {
  title: {
    default: "VoxeraTech - Yazılım Çözümleri | Web, Mobil & Yapay Zeka",
    template: "%s | VoxeraTech",
  },
  description:
    "VoxeraTech Software Solutions - Türkiye'nin yenilikçi yazılım şirketi. Web geliştirme, mobil uygulama, yapay zeka çözümleri, UI/UX tasarım ve kurumsal yazılım hizmetleri ile dijital dönüşümünüzü gerçekleştiriyoruz.",
  keywords: [
    "yazılım şirketi",
    "web geliştirme",
    "mobil uygulama geliştirme",
    "yapay zeka çözümleri",
    "UI/UX tasarım",
    "kurumsal yazılım",
    "dijital dönüşüm",
    "VoxeraTech",
    "software solutions",
    "Türkiye yazılım",
    "web tasarım",
    "uygulama geliştirme",
  ],
  authors: [{ name: "VoxeraTech" }],
  creator: "VoxeraTech",
  publisher: "VoxeraTech",
  metadataBase: new URL("https://voxeratech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://voxeratech.com",
    siteName: "VoxeraTech",
    title: "VoxeraTech - Yazılım Çözümleri | Web, Mobil & Yapay Zeka",
    description:
      "Türkiye'nin yenilikçi yazılım şirketi. Web, mobil, yapay zeka ve kurumsal yazılım çözümleri.",
    images: [
      {
        url: "/logo-full.png",
        width: 512,
        height: 512,
        alt: "VoxeraTech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoxeraTech - Yazılım Çözümleri",
    description:
      "Türkiye'nin yenilikçi yazılım şirketi. Web, mobil, yapay zeka ve kurumsal yazılım çözümleri.",
    images: ["/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VoxeraTech",
    url: "https://voxeratech.com",
    logo: "https://voxeratech.com/logo-full.png",
    description:
      "Türkiye'nin yenilikçi yazılım şirketi. Web geliştirme, mobil uygulama, yapay zeka çözümleri.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "voxeratech@gmail.com",
      contactType: "customer service",
      availableLanguage: ["Turkish", "English"],
    },
    sameAs: [],
  };

  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
