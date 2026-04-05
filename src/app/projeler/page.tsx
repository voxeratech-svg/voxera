import Projects from "@/components/Projects";

export const metadata = {
  title: "Projeler - VoxeraTech",
  description: "VoxeraTech tarafından geliştirilen projeler ve çalışmalar.",
};

export default function ProjelerPage() {
  return (
    <div className="pt-20">
      <Projects />
    </div>
  );
}
