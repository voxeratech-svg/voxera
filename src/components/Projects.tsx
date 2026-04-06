"use client";

const project = {
  title: "ebcturkiye.com",
  subtitle: "Kişisel Portföy & CV Platformu",
  category: "Web Geliştirme",
  liveUrl: "https://ebcturkiye.com",
  description:
    "Enes Buğra Cengiz için sıfırdan tasarlanıp geliştirilen modern kişisel portföy sitesi. Ana Sayfa, Hakkımda ve İletişim sayfalarından oluşan site; iş deneyimi, teknik yetkinlikler, öne çıkan projeler ve sertifikalar gibi tüm profesyonel bilgileri şık ve responsive bir arayüzde sunar.",
  tech: ["Next.js", "React", "TypeScript", "Node.js", "HTML/CSS"],
  highlights: [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      label: "Kişisel Portföy",
      value: "Enes Buğra Cengiz",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "İş Deneyimi",
      value: "3+ Yıl",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      label: "Eğitim",
      value: "Bilgisayar Müh. & YBS",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      label: "Sertifika",
      value: "3 Sertifika",
    },
  ],
  features: [
    "Responsive & modern tasarım",
    "Kişisel iş deneyimi ve eğitim geçmişi",
    "Teknik yetkinlik listesi",
    "Öne çıkan projeler vitrini",
    "İletişim formu entegrasyonu",
    "Çoklu sayfa yapısı (Next.js routing)",
  ],
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">
            Projelerimiz
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Son Çalışmalarımız
          </h2>
          <div className="w-20 h-1 bg-primary/50 mx-auto mt-4 rounded-full" />
          <p className="text-foreground/50 mt-6 max-w-2xl mx-auto">
            Müşterilerimiz için hayata geçirdiğimiz projelerden biri.
          </p>
        </div>

        {/* Single Project Showcase */}
        <div className="group rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all duration-300 hover:glow gradient-border overflow-hidden">
          {/* Hero Banner */}
          <div className="relative h-56 sm:h-72 bg-gradient-to-br from-primary/25 via-primary-dark/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-40" />
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative text-center px-6">
              <p className="text-primary/70 text-xs tracking-[0.4em] uppercase mb-3">
                {project.category}
              </p>
              <h3 className="text-4xl sm:text-5xl font-extrabold text-foreground/10 select-none">
                EBC Türkiye
              </h3>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/30 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                ebcturkiye.com
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8 sm:p-10 grid lg:grid-cols-3 gap-10">
            {/* Left: Description + Features */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-primary text-sm mb-4 tracking-wide">
                  {project.subtitle}
                </p>
                <p className="text-foreground/55 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features list */}
              <div>
                <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-widest mb-4">
                  Özellikler
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-widest mb-4">
                  Teknoloji Yığını
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary/80 border border-primary/15 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Highlights */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-widest mb-4">
                Proje Özeti
              </h4>
              {project.highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/60"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 mb-0.5">{h.label}</p>
                    <p className="text-sm font-semibold text-foreground">
                      {h.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Siteyi Ziyaret Et
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
