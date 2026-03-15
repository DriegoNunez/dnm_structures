import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "./projects/projects-data";

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="hero-shell mx-auto mt-6 max-w-6xl px-6 py-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="section-kicker">Structural engineer • BIM • automation</p>
              <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,6.5rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-slate-950">
                Diego Nunez builds structures and the systems behind them.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                Based in the United States and currently working at{" "}
                <a
                  href="https://innovanv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950"
                >
                  INNOVA TECHNOLOGIES
                </a>
                , with a focus on infrastructure, BIM delivery, and practical engineering
                automation.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/projects" className="primary-button">
                View projects
              </Link>
              <Link href="/contact" className="secondary-button">
                Start a conversation
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="info-panel">
                <span className="info-label">Focus</span>
                <p>Monorail, buildings, and structural delivery systems.</p>
              </div>
              <div className="info-panel">
                <span className="info-label">Tools</span>
                <p>Revit, Dynamo, Python, C#, Excel, and QA/QC workflows.</p>
              </div>
              <div className="info-panel">
                <span className="info-label">Approach</span>
                <p>Clear engineering, repeatable processes, and better handoff quality.</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <Image
                src="/monorail_cover.png"
                alt="Monorail project cover"
                fill
                priority
                className="object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">Current work</p>
                <p className="mt-3 max-w-sm text-2xl font-semibold leading-tight">
                  Designing cleaner structural workflows for large-scale infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Featured projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-slate-700 transition hover:text-slate-950"
          >
            See all projects
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="project-card animate-card"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="badge">{project.category}</span>
                <span className="text-sm text-slate-500">{project.year}</span>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{project.summary}</p>
                <p className="text-sm font-medium text-slate-800">{project.impact}</p>
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
                  className="mt-8 inline-flex text-sm font-semibold text-slate-950 transition hover:text-sky-700"
                >
                  Open project
                </a>
              ) : (
                <Link
                  href="/projects"
                  className="mt-8 inline-flex text-sm font-semibold text-slate-950 transition hover:text-sky-700"
                >
                  Explore details
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
