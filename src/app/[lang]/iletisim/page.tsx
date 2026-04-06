import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
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
    title: dict.metadata.contactTitle,
    description: dict.metadata.contactDescription,
    alternates: { canonical: `/${lang}/iletisim` },
  };
}

export default async function IletisimPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <div className="pt-20">
      <Contact dict={dict.contact} />
    </div>
  );
}
