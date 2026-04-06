import { notFound } from "next/navigation";
import Projects from "@/components/Projects";
import { getDictionary, hasLocale } from "../dictionaries";
import type { Locale } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.metadata.projectsTitle,
    description: dict.metadata.projectsDescription,
    alternates: { canonical: `/${lang}/projeler` },
  };
}

export default async function ProjelerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <div className="pt-20">
      <Projects dict={dict.projects} />
    </div>
  );
}
