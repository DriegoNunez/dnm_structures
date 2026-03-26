import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizePath } from "@/lib/i18n";
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
    <div className="mx-auto max-w-[92rem] px-6 py-20">
      <section className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
        <div className="space-y-5">
          <div className="animate-card relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/55 shadow-[0_32px_90px_rgba(15,23,42,0.14)]">
            <div className="relative aspect-[4/4.8]">
              <Image
                src="/profile.jpg"
                alt="Diego Nunez Mendoza"
                fill
                priority
                sizes="(min-width: 1280px) 34rem, (min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-950/28 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="max-w-[28rem] rounded-[1.6rem] border border-white/14 bg-slate-950/45 px-5 py-4 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/82">
                    {copy.brandRole}
                  </p>
                  <p className="mt-3 text-3xl font-semibold leading-tight text-white">
                    {copy.footer.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {copy.about.quickFacts.map((fact, index) => (
              <div
                key={fact.label}
                className="info-panel animate-card"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <span className="info-label">{fact.label}</span>
                <p>{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="section-kicker">{copy.about.kicker}</p>
            <h1 className="max-w-5xl text-[clamp(2.9rem,5vw,5.5rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-slate-950">
              {copy.about.title}
            </h1>
            <p className="max-w-4xl text-lg leading-8 text-slate-700">{copy.about.summary}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {copy.about.storySections.map((section, index) => (
              <article
                key={section.title}
                className="project-card animate-card"
                style={{ animationDelay: `${140 + index * 90}ms` }}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {section.title}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={localizePath(lang, "/projects")} className="primary-button">
              {copy.about.ctaPrimary}
            </Link>
            <Link href={localizePath(lang, "/contact")} className="secondary-button">
              {copy.about.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-24 grid gap-10 xl:grid-cols-[0.86fr_1.14fr]">
        <div className="project-card animate-card">
          <p className="section-kicker">{copy.about.timelineTitle}</p>
          <div className="mt-8 space-y-6">
            {copy.about.timeline.map((item, index) => (
              <div key={item.title} className="relative pl-8">
                <div className="absolute left-0 top-1 h-full w-px bg-slate-200" />
                <div className="absolute left-[-0.34rem] top-1 h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_0_6px_rgba(14,165,233,0.12)]" />
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {item.label}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-700">{item.detail}</p>
                {index === copy.about.timeline.length - 1 ? null : (
                  <div className="mt-6 h-px bg-slate-200/70" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="section-kicker">{copy.about.technicalFocus}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
              {copy.about.technicalFocus}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {copy.about.technicalCards.map((item, index) => (
              <article
                key={item.title}
                className="project-card animate-card"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-xl font-semibold text-slate-950">{item.title}</p>
                <p className="mt-4 text-base leading-7 text-slate-700">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 grid gap-10 xl:grid-cols-[0.68fr_1.32fr] xl:items-start">
        <div className="info-panel animate-card xl:mt-[5.5rem] xl:max-w-[34rem]">
          <p className="text-lg font-semibold text-slate-950">{copy.about.philosophy}</p>
          {copy.about.philosophyLines.map((line) => (
            <p key={line} className="mt-3 text-base leading-7 text-slate-700">
              {line}
            </p>
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <p className="section-kicker">{copy.about.principlesTitle}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
              {copy.about.principlesTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {copy.about.principles.map((item, index) => (
              <article
                key={item.title}
                className="info-panel animate-card h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-lg font-semibold text-slate-950">{item.title}</p>
                <p className="mt-3 text-base leading-7 text-slate-700">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 animate-card rounded-[2.5rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(232,240,246,0.95))] p-8 shadow-[0_26px_80px_rgba(15,23,42,0.08)] lg:p-10">
        <p className="section-kicker">{copy.nav.contact}</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950">
          {copy.about.ctaTitle}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">{copy.about.ctaSummary}</p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href={localizePath(lang, "/projects")} className="primary-button">
            {copy.about.ctaPrimary}
          </Link>
          <Link href={localizePath(lang, "/contact")} className="secondary-button">
            {copy.about.ctaSecondary}
          </Link>
        </div>
      </section>
    </div>
  );
}
