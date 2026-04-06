import Services from "@/components/Services";

export const metadata = {
  title: "Hizmetlerimiz - Web, Mobil, Yapay Zeka Yazılım Çözümleri",
  description: "VoxeraTech yazılım hizmetleri: profesyonel web geliştirme, mobil uygulama, yapay zeka entegrasyonu, UI/UX tasarım ve kurumsal yazılım çözümleri.",
  alternates: { canonical: "/hizmetlerimiz" },
};

export default function HizmetlerimizPage() {
  return (
    <div className="pt-20">
      <Services />
    </div>
  );
}
