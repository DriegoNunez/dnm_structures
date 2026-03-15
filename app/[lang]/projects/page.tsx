import { notFound } from "next/navigation";
import { projects } from "@/app/projects/projects-data";
import { isLocale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-copy";

export default async function LocaleProjectsPage({
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
      <section className="grid gap-8 rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <p className="section-kicker">{copy.projects.kicker}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {copy.projects.title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">{copy.projects.intro}</p>
        </div>
        <div className="rounded-[1.5rem] bg-slate-950 p-6 text-slate-50">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-200/70">
            {copy.projects.guideTitle}
          </p>
          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            {copy.projects.guideSteps.map((step, index) => (
              <p key={step}>
                {index + 1}. {step}
              </p>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-400">{copy.projects.guideNote}</p>
        </div>
      </section>

      <section className="mt-12 grid gap-6">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="project-card animate-card grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge">{project.category[lang]}</span>
                <span className="text-sm text-slate-500">{project.year}</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {project.status[lang]}
                </span>
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                  {project.title[lang]}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                  {project.summary[lang]}
                </p>
              </div>
              <p className="text-sm font-medium leading-6 text-slate-800">{project.impact[lang]}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="tag-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-slate-50 p-6 ring-1 ring-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                {copy.projects.highlights}
              </p>
              <div className="mt-5 space-y-4">
                {project.highlights.map((highlight) => (
                  <p
                    key={highlight[lang]}
                    className="rounded-2xl bg-white px-4 py-4 text-sm leading-6 text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.06)]"
                  >
                    {highlight[lang]}
                  </p>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950"
                >
                  {copy.projects.visitProject}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
