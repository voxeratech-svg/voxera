import Services from "@/components/Services";

export const metadata = {
  title: "Hizmetlerimiz - VoxeraTech",
  description: "VoxeraTech yazılım hizmetleri: Web geliştirme, mobil uygulama, yapay zeka ve daha fazlası.",
};

export default function HizmetlerimizPage() {
  return (
    <div className="pt-20">
      <Services />
    </div>
  );
}
