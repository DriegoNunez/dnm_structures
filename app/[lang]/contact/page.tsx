import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { ContactClient } from "./contact-client";

export default async function LocaleContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <ContactClient lang={lang} />;
}
