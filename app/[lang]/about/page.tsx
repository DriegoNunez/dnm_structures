import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-copy";

export default async function LocaleAboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const copy = getSiteCopy(lang);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-12 text-3xl font-semibold text-neutral-900">{copy.about.title}</h1>

      <div className="grid items-start gap-8 md:grid-cols-2">
        <div className="relative w-full">
          <Image
            src="/profile.jpg"
            alt="Diego Nunez Mendoza"
            width={500}
            height={500}
            className="w-full max-w-[500px] rounded-xl object-cover"
            priority
          />
        </div>

        <div className="space-y-6 leading-relaxed text-neutral-600">
          {copy.about.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="my-12 h-px bg-neutral-200" />

      <section className="space-y-6 leading-relaxed text-neutral-700">
        <h2 className="text-xl font-semibold text-neutral-900">{copy.about.technicalFocus}</h2>
        <ul className="list-inside list-disc space-y-3">
          {copy.about.technicalItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="my-12 h-px bg-neutral-200" />

      <section className="space-y-6 leading-relaxed text-neutral-700">
        <h2 className="text-xl font-semibold text-neutral-900">{copy.about.philosophy}</h2>
        {copy.about.philosophyLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>
    </div>
  );
}
