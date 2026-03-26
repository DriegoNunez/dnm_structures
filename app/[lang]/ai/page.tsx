import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-copy";

export default async function LocaleAIPage({
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
      <section className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
        <div className="space-y-6">
          <div className="project-card animate-card">
            <p className="section-kicker">{copy.nav.ai}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {copy.ai.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{copy.ai.summary}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://driego-career-conversation.hf.space"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                {copy.ai.openFullScreen}
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Python",
              "Gradio",
              "Hugging Face",
            ].map((item, index) => (
              <div
                key={item}
                className="info-panel animate-card"
                style={{ animationDelay: `${index * 100 + 120}ms` }}
              >
                <span className="info-label">{copy.ai.builtWith}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="animate-card overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-3 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur"
          style={{ animationDelay: "140ms" }}
        >
          <div className="mb-3 flex items-center justify-between rounded-[1.3rem] bg-slate-950 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
            <span>{copy.ai.title}</span>
            <span className="text-sky-200/75">{copy.ai.liveDemo}</span>
          </div>
          <div className="h-[62vh] min-h-[34rem] overflow-hidden rounded-[1.4rem] border border-slate-200">
            <iframe
              src="https://driego-career-conversation.hf.space"
              className="h-full w-full"
              title="Career Conversation AI"
              allow="clipboard-write; microphone;"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
