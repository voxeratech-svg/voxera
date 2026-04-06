"use client";

interface AboutDict {
  label: string;
  title: string;
  heading: string;
  headingHighlight: string;
  p1: string;
  p2: string;
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;
  stats: { value: string; label: string }[];
}

export default function About({ dict }: { dict: AboutDict }) {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">
            {dict.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {dict.title}
          </h2>
          <div className="w-20 h-1 bg-primary/50 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              {dict.heading}
              <span className="text-primary">{dict.headingHighlight}</span>
            </h3>
            <p className="text-foreground/60 leading-relaxed">{dict.p1}</p>
            <p className="text-foreground/60 leading-relaxed">{dict.p2}</p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-surface border border-border gradient-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{dict.missionTitle}</h4>
                <p className="text-sm text-foreground/50">{dict.missionText}</p>
              </div>
              <div className="p-5 rounded-xl bg-surface border border-border gradient-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{dict.visionTitle}</h4>
                <p className="text-sm text-foreground/50">{dict.visionText}</p>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {dict.stats.map((stat, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-surface border border-border text-center hover:border-primary/30 transition-all hover:glow gradient-border group"
              >
                <p className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                </p>
                <p className="text-foreground/50 mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
