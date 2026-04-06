import { notFound } from "next/navigation";
import About from "@/components/About";
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
    title: dict.metadata.aboutTitle,
    description: dict.metadata.aboutDescription,
    alternates: { canonical: `/${lang}/hakkimizda` },
  };
}

export default async function HakkimizdaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <div className="pt-20">
      <About dict={dict.about} />
    </div>
  );
}
