import About from "@/components/About";

export const metadata = {
  title: "Hakkımızda - VoxeraTech",
  description: "VoxeraTech hakkında bilgi edinin. Misyonumuz, vizyonumuz ve ekibimiz.",
};

export default function HakkimizdaPage() {
  return (
    <div className="pt-20">
      <About />
    </div>
  );
}
