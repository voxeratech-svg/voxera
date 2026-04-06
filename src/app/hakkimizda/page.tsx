import About from "@/components/About";

export const metadata = {
  title: "Hakkımızda - VoxeraTech Yazılım Şirketi",
  description: "VoxeraTech hakkında bilgi edinin. Türkiye merkezli yenilikçi yazılım şirketi olarak misyonumuz, vizyonumuz ve uzman ekibimiz.",
  alternates: { canonical: "/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <div className="pt-20">
      <About />
    </div>
  );
}
