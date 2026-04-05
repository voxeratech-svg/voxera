import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-icon.png"
                alt="VoxeraTech"
                width={32}
                height={32}
                className=""
              />
              <div>
                <span className="text-base font-bold tracking-wide text-foreground">
                  VOXERA<span className="text-primary">TECH</span>
                </span>
              </div>
            </Link>
            <p className="text-foreground/40 text-sm leading-relaxed">
              Dijital dönüşümünüzde güvenilir teknoloji ortağınız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
                { href: "/projeler", label: "Projeler" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/40 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">
              Hizmetler
            </h4>
            <ul className="space-y-2 text-foreground/40 text-sm">
              <li>Web Geliştirme</li>
              <li>Mobil Uygulama</li>
              <li>Yapay Zeka Çözümleri</li>
              <li>UI/UX Tasarım</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">
              İletişim
            </h4>
            <ul className="space-y-2 text-foreground/40 text-sm">
              <li>voxeratech@gmail.com</li>
              <li>Türkiye</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/30 text-sm">
            &copy; {new Date().getFullYear()} VoxeraTech. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-foreground/20 text-xs">
              Software Solutions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
