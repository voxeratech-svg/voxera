"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavDict {
  home: string;
  about: string;
  services: string;
  projects: string;
  contact: string;
  cta: string;
}

export default function Navbar({ dict, lang }: { dict: NavDict; lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${lang}`, label: dict.home },
    { href: `/${lang}/hakkimizda`, label: dict.about },
    { href: `/${lang}/hizmetlerimiz`, label: dict.services },
    { href: `/${lang}/projeler`, label: dict.projects },
    { href: `/${lang}/iletisim`, label: dict.contact },
  ];

  const otherLang = lang === "tr" ? "en" : "tr";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ps-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] pt-[env(safe-area-inset-top)]">
        <div className="flex items-center justify-between min-h-20 py-2 gap-3">
          {/* Logo — same structure on all breakpoints so the mark does not jump at sm */}
          <Link
            href={`/${lang}`}
            className="flex min-w-0 shrink items-center gap-2 sm:gap-3 group"
          >
            <span className="relative block h-9 w-[4.5rem] shrink-0 sm:h-11 sm:w-[5.625rem]">
              <Image
                src="/logo-icon.png"
                alt="VoxeraTech - Yazılım Çözümleri"
                fill
                sizes="(max-width: 640px) 72px, 90px"
                className="object-contain object-left"
                priority
              />
            </span>
            <div className="min-w-0 text-left">
              <span className="block text-sm font-bold tracking-wide text-foreground group-hover:text-primary transition-colors sm:text-lg">
                VOXERA<span className="text-primary">TECH</span>
              </span>
              <p className="hidden text-[10px] tracking-[0.2em] text-foreground/50 uppercase sm:block">
                Software Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ))}
            {/* Language Switcher */}
            <Link
              href={`/${otherLang}`}
              className="ml-2 px-3 py-2 text-sm font-medium text-foreground/60 hover:text-primary border border-border/50 rounded-lg hover:border-primary/30 transition-all"
            >
              {otherLang.toUpperCase()}
            </Link>
            <Link
              href={`/${lang}/iletisim`}
              className="ml-2 px-5 py-2.5 text-sm font-medium bg-primary/10 text-primary border border-primary/30 rounded-lg hover:bg-primary/20 transition-all"
            >
              {dict.cta}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 border-b border-border" : "max-h-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${otherLang}`}
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors font-medium"
          >
            {otherLang === "tr" ? "Türkçe" : "English"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
