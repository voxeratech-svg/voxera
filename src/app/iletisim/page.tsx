import Contact from "@/components/Contact";

export const metadata = {
  title: "İletişim - VoxeraTech",
  description: "VoxeraTech ile iletişime geçin. Projeniz için teklif alın.",
};

export default function IletisimPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
