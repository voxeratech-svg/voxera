import Image from "next/image";
import Link from "next/link";

interface FooterDict {
  tagline: string;
  quickLinks: string;
  servicesTitle: string;
  serviceItems: string[];
  contactTitle: string;
  location: string;
  copyright: string;
}

interface NavDict {
  home: string;
  about: string;
  services: string;
  projects: string;
}

export default function Footer({
  dict,
  navDict,
  lang,
}: {
  dict: FooterDict;
  navDict: NavDict;
  lang: string;
}) {
  const footerLinks = [
    { href: `/${lang}`, label: navDict.home },
    { href: `/${lang}/hakkimizda`, label: navDict.about },
    { href: `/${lang}/hizmetlerimiz`, label: navDict.services },
    { href: `/${lang}/projeler`, label: navDict.projects },
  ];

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-icon.png"
                alt="VoxeraTech - Yazılım Çözümleri"
                width={36}
                height={20}
                className="w-[36px] h-auto"
              />
              <div>
                <span className="text-base font-bold tracking-wide text-foreground">
                  VOXERA<span className="text-primary">TECH</span>
                </span>
              </div>
            </Link>
            <p className="text-foreground/40 text-sm leading-relaxed">
              {dict.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">
              {dict.quickLinks}
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
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
              {dict.servicesTitle}
            </h4>
            <ul className="space-y-2 text-foreground/40 text-sm">
              {dict.serviceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">
              {dict.contactTitle}
            </h4>
            <ul className="space-y-2 text-foreground/40 text-sm">
              <li>voxeratech@gmail.com</li>
              <li>{dict.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/30 text-sm">
            &copy; {new Date().getFullYear()} VoxeraTech. {dict.copyright}
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
