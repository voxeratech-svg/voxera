"use client";

const projects = [
  {
    title: "E-Ticaret Platformu",
    category: "Web Geliştirme",
    description:
      "Büyük ölçekli bir e-ticaret platformu. Ödeme entegrasyonları, stok yönetimi ve müşteri paneli.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    color: "from-primary/20 to-primary-dark/20",
  },
  {
    title: "Sağlık Takip Uygulaması",
    category: "Mobil Uygulama",
    description:
      "Hastaların sağlık verilerini takip edebileceği, doktor randevusu alabileceği mobil uygulama.",
    tech: ["React Native", "Firebase", "AI"],
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    title: "Akıllı Stok Yönetimi",
    category: "Kurumsal Yazılım",
    description:
      "Yapay zeka destekli stok tahminleme ve otomatik sipariş sistemi. ERP entegrasyonu.",
    tech: ["Python", "TensorFlow", ".NET"],
    color: "from-emerald-500/20 to-primary/20",
  },
  {
    title: "Finans Dashboard",
    category: "Web Geliştirme",
    description:
      "Gerçek zamanlı finansal veri görselleştirme ve analiz platformu. Çoklu veri kaynağı desteği.",
    tech: ["React", "D3.js", "WebSocket"],
    color: "from-primary-light/20 to-cyan-400/20",
  },
  {
    title: "Lojistik Takip Sistemi",
    category: "Kurumsal Yazılım",
    description:
      "Filo yönetimi, rota optimizasyonu ve gerçek zamanlı kargo takibi sağlayan kapsamlı sistem.",
    tech: ["Vue.js", "Go", "MongoDB"],
    color: "from-teal-400/20 to-primary-dark/20",
  },
  {
    title: "Chatbot Asistanı",
    category: "Yapay Zeka",
    description:
      "Doğal dil işleme ile müşteri hizmetleri otomasyonu. Çoklu dil desteği ve öğrenme yeteneği.",
    tech: ["Python", "NLP", "Claude API"],
    color: "from-primary/20 to-accent/20",
  },
];

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
            Farklı sektörlerden müşterilerimiz için geliştirdiğimiz projelerden
            bazıları.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-xl bg-surface border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow gradient-border"
            >
              {/* Gradient Top */}
              <div
                className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 grid-bg opacity-50" />
                <span className="relative text-5xl font-bold text-white/10">
                  0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-primary tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/70 border border-primary/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
