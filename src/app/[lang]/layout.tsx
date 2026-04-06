import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary, hasLocale, locales } from "./dictionaries";
import type { Locale } from "./dictionaries";

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

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);

  return {
    title: {
      default: dict.metadata.homeTitle,
      template: `%s | VoxeraTech`,
    },
    description: dict.metadata.homeDescription,
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
      "software company",
      "web development",
      "mobile app development",
    ],
    authors: [{ name: "VoxeraTech" }],
    creator: "VoxeraTech",
    publisher: "VoxeraTech",
    metadataBase: new URL("https://voxeratech.com"),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        tr: "/tr",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      url: `https://voxeratech.com/${lang}`,
      siteName: "VoxeraTech",
      title: dict.metadata.homeTitle,
      description: dict.metadata.homeDescription,
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
      title: dict.metadata.homeTitle,
      description: dict.metadata.homeDescription,
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
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VoxeraTech",
    url: "https://voxeratech.com",
    logo: "https://voxeratech.com/logo-full.png",
    description: dict.metadata.homeDescription,
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
  };

  return (
    <html lang={lang} className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar dict={dict.nav} lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict.footer} navDict={dict.nav} lang={lang} />
      </body>
    </html>
  );
}
