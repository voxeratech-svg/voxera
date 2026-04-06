import Contact from "@/components/Contact";

export const metadata = {
  title: "İletişim - VoxeraTech ile Projenizi Başlatın",
  description: "VoxeraTech ile iletişime geçin. Yazılım projeniz için ücretsiz teklif alın. Web, mobil ve yapay zeka çözümleri için bize ulaşın.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
