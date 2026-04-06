import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import { getDictionary, hasLocale } from "./dictionaries";
import type { Locale } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return <Hero dict={dict.hero} lang={lang} />;
}
