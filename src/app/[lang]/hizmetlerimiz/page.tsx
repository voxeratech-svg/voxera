import { notFound } from "next/navigation";
import Services from "@/components/Services";
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
    title: dict.metadata.servicesTitle,
    description: dict.metadata.servicesDescription,
    alternates: { canonical: `/${lang}/hizmetlerimiz` },
  };
}

export default async function HizmetlerimizPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <div className="pt-20">
      <Services dict={dict.services} />
    </div>
  );
}
