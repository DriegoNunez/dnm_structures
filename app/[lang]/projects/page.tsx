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
  const activeCount = projects.filter((project) =>
    ["Active", "Growing", "Live"].includes(project.status.en)
  ).length;
  const focusAreaCount = new Set(projects.map((project) => project.category.en)).size;
  const projectStats = [
    { label: copy.projects.stats.projects, value: `${projects.length}` },
    { label: copy.projects.stats.active, value: `${activeCount}` },
    { label: copy.projects.stats.areas, value: `${focusAreaCount}` },
  ];

  return (
    <div className="mx-auto max-w-[92rem] px-6 py-20">
      <section className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="project-card animate-card space-y-5">
          <p className="section-kicker">{copy.projects.kicker}</p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {copy.projects.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">{copy.projects.intro}</p>
        </div>

        <div
          className="animate-card rounded-[1.8rem] bg-slate-950 p-6 text-slate-50 shadow-[0_24px_70px_rgba(15,23,42,0.2)]"
          style={{ animationDelay: "120ms" }}
        >
          <p className="text-sm uppercase tracking-[0.28em] text-sky-200/70">
            {copy.projects.overviewTitle}
          </p>
          <div className="mt-5 space-y-3">
            {copy.projects.overviewPoints.map((point, index) => (
              <div
                key={point}
                className="rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-slate-300"
              >
                <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-300/12 text-[0.7rem] font-semibold text-sky-200">
                  0{index + 1}
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {projectStats.map((item, index) => (
          <div
            key={item.label}
            className="info-panel animate-card"
            style={{ animationDelay: `${index * 90 + 160}ms` }}
          >
            <span className="info-label">{item.label}</span>
            <p className="mt-3 text-4xl font-black leading-none tracking-[-0.05em] text-slate-950">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <div className="mb-6 space-y-3">
          <p className="section-kicker">{copy.projects.collectionTitle}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {copy.projects.title}
          </h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="project-card animate-card grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="badge">{project.category[lang]}</span>
                    <span className="text-sm text-slate-500">{project.year}</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      {project.status[lang]}
                    </span>
                  </div>
                  <span className="text-[3.4rem] font-black leading-none tracking-[-0.08em] text-slate-100">
                    0{index + 1}
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
        </div>
      </section>
    </div>
  );
}
