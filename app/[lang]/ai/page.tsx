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
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-6 text-3xl font-semibold text-neutral-900">{copy.ai.title}</h1>
      <p className="mb-12 max-w-3xl text-neutral-600">{copy.ai.summary}</p>
      <a
        href="https://driego-career-conversation.hf.space"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 inline-block bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700"
      >
        {copy.ai.openFullScreen}
      </a>
      <div className="h-[50vh] w-full overflow-hidden rounded-xl border border-neutral-200">
        <iframe
          src="https://driego-career-conversation.hf.space"
          className="h-full w-full"
          title="Career Conversation AI"
          allow="clipboard-write; microphone;"
        />
      </div>
    </div>
  );
}
