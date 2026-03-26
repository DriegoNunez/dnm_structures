import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredProjects } from "@/app/projects/projects-data";
import { isLocale, localizePath } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-copy";

export default async function LocaleHomePage({
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
    <div className="pb-20">
      <section className="hero-shell mx-auto mt-6 max-w-[92rem] px-6 py-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="section-kicker">{copy.home.kicker}</p>
              <h1 className="max-w-4xl text-[clamp(3.075rem,8vw,6.375rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-slate-950">
                {copy.home.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                {copy.home.summary}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={localizePath(lang, "/projects")} className="primary-button">
                {copy.home.viewProjects}
              </Link>
              <Link href={localizePath(lang, "/contact")} className="secondary-button">
                {copy.home.startConversation}
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {copy.home.stats.map((item) => (
                <div key={item.label} className="info-panel">
                  <span className="info-label">{item.label}</span>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="relative h-[560px] overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <Image
                src="/monorail_cover.png"
                alt="Monorail project cover"
                fill
                priority
                className="object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                  {copy.home.currentWork}
                </p>
                <p className="mt-3 max-w-sm text-2xl font-semibold leading-tight">
                  {copy.home.currentWorkSummary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-6 py-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">{copy.home.selectedWork}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              {copy.home.featuredProjects}
            </h2>
          </div>
          <Link
            href={localizePath(lang, "/projects")}
            className="text-sm font-semibold text-slate-700 transition hover:text-slate-950"
          >
            {copy.home.seeAllProjects}
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="project-card animate-card flex h-full flex-col"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="badge">{project.category[lang]}</span>
                <span className="text-sm text-slate-500">{project.year}</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                <span>{copy.home.statusLabel}</span>
                <span className="status-chip">{project.status[lang]}</span>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-2xl font-semibold text-slate-950">{project.title[lang]}</h3>
                <p className="text-sm leading-6 text-slate-600">{project.summary[lang]}</p>
                <p className="text-sm font-medium text-slate-800">{project.impact[lang]}</p>
                <div className="project-highlight">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {copy.home.highlightLabel}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{project.highlights[0][lang]}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="tag-chip">
                    {item}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link mt-8 inline-flex text-sm font-semibold text-slate-950 transition hover:text-sky-700"
                >
                  {copy.home.openProject}
                </a>
              ) : (
                <Link
                  href={localizePath(lang, "/projects")}
                  className="project-link mt-8 inline-flex text-sm font-semibold text-slate-950 transition hover:text-sky-700"
                >
                  {copy.home.exploreDetails}
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
