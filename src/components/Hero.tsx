"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroDict {
  company: string;
  tagline: string;
  headline1: string;
  headlineHighlight: string;
  headline2: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  indicator1Title: string;
  indicator1Sub: string;
  indicator2Title: string;
  indicator2Sub: string;
}

export default function Hero({ dict, lang }: { dict: HeroDict; lang: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden grid-bg pt-[calc(env(safe-area-inset-top)+6.5rem)] pb-24 md:pt-[calc(env(safe-area-inset-top)+11rem)] md:pb-24"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-dark/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Logo icon */}
        <div className="flex justify-center mb-8 px-1">
          <div className="relative mx-auto aspect-[220/120] w-full max-w-[min(220px,calc(100vw-2rem))] sm:max-w-[260px]">
            <Image
              src="/logo-icon.png"
              alt="VoxeraTech - Yazılım Çözümleri"
              fill
              sizes="(max-width: 640px) min(220px, 100vw - 2rem), 260px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Company name */}
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl tracking-[0.3em] text-primary-light/70 uppercase font-light">
            {dict.company}
          </h2>
          <p className="text-xs tracking-[0.5em] text-foreground/30 uppercase mt-1">
            {dict.tagline}
          </p>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">{dict.headline1}</span>
          <span className="text-primary glow-text">{dict.headlineHighlight}</span>
          <br />
          <span className="text-foreground">{dict.headline2}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-foreground/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          {dict.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/${lang}/hizmetlerimiz`}
            className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-light transition-all glow hover:scale-105"
          >
            {dict.ctaPrimary}
          </Link>
          <Link
            href={`/${lang}/iletisim`}
            className="px-8 py-4 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
          >
            {dict.ctaSecondary}
          </Link>
        </div>

        {/* Bottom indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm text-foreground/30">
          <div className="text-center min-w-[10rem] max-w-xs">
            <p>{dict.indicator1Title}</p>
            <p className="text-xs mt-1">{dict.indicator1Sub}</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border shrink-0" aria-hidden />
          <div className="text-center min-w-[10rem] max-w-xs">
            <p>{dict.indicator2Title}</p>
            <p className="text-xs mt-1">{dict.indicator2Sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
