"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
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
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Image
              src="/logo-icon.jpeg"
              alt="VoxeraTech"
              width={100}
              height={100}
              className="rounded-lg glow"
            />
          </div>
        </div>

        {/* Company name */}
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl tracking-[0.3em] text-primary-light/70 uppercase font-light">
            VoxeraTech
          </h2>
          <p className="text-xs tracking-[0.5em] text-foreground/30 uppercase mt-1">
            Software Solutions
          </p>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">THE </span>
          <span className="text-primary glow-text">LUMINOUS</span>
          <br />
          <span className="text-foreground">FUTURE</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-foreground/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          Dijital dönüşümünüzü gerçekleştiriyoruz. Yenilikçi yazılım çözümleri
          ile işletmenizi geleceğe taşıyoruz.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/hizmetlerimiz"
            className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-light transition-all glow hover:scale-105"
          >
            Keşfetmeye Başla
          </Link>
          <Link
            href="/iletisim"
            className="px-8 py-4 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
          >
            İletişime Geç
          </Link>
        </div>

        {/* Bottom indicators */}
        <div className="mt-16 flex items-center justify-center gap-12 text-sm text-foreground/30">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">01</p>
            <p className="mt-1">Geleceğe Hazır</p>
            <p className="text-xs">Yenilikçi Teknolojiler</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">02</p>
            <p className="mt-1">Form ve Renk Sentezi</p>
            <p className="text-xs">Yaratıcı Tasarım</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
