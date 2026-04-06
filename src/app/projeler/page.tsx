import Projects from "@/components/Projects";

export const metadata = {
  title: "Projeler - VoxeraTech Yazılım Portföyü",
  description: "VoxeraTech tarafından geliştirilen başarılı projeler. Web siteleri, mobil uygulamalar ve kurumsal yazılım çözümlerimizi inceleyin.",
  alternates: { canonical: "/projeler" },
};

export default function ProjelerPage() {
  return (
    <div className="pt-20">
      <Projects />
    </div>
  );
}
