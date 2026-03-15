"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-copy";

export function ContactClient({ lang }: { lang: Locale }) {
  const pageCopy = getSiteCopy(lang);
  const copy = pageCopy.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error ?? copy.networkError);
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(copy.networkError);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-12 text-3xl font-semibold text-neutral-900">{copy.title}</h1>

      <div className="grid items-start gap-12 md:grid-cols-2">
        <aside className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">Diego Nunez Mendoza</h2>
            <p className="text-neutral-700">{pageCopy.brandRole}</p>
            <p className="mt-2 text-neutral-600">{copy.location}</p>
          </div>

          <div className="space-y-2 text-neutral-700">
            <p>
              <span className="font-semibold text-neutral-900">{copy.labels.email}:</span>{" "}
              <a className="underline hover:text-neutral-950" href="mailto:dmendoza@innovanv.com">
                dmendoza@innovanv.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-neutral-900">{copy.labels.phone}:</span>{" "}
              <span className="text-neutral-700">+1 (858) 319-6972</span>
            </p>
            <p>
              <span className="font-semibold text-neutral-900">{copy.labels.company}:</span>{" "}
              <a
                className="underline hover:text-neutral-950"
                href="https://www.innovatechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                INNOVA TECHNOLOGIES
              </a>
            </p>
          </div>

          <div className="space-y-2 text-neutral-700">
            <p>
              <span className="font-semibold text-neutral-900">{copy.labels.linkedIn}:</span>{" "}
              <a
                className="underline hover:text-neutral-950"
                href="https://www.linkedin.com/in/dnunezmendoza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                /in/dnunezmendoza/
              </a>
            </p>
            <p>
              <span className="font-semibold text-neutral-900">{copy.labels.github}:</span>{" "}
              <a
                className="underline hover:text-neutral-950"
                href="https://github.com/DriegoNunez"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/DriegoNunez
              </a>
            </p>
          </div>

          <div className="text-sm text-neutral-600">{copy.directNote}</div>
        </aside>

        <section className="rounded-xl border border-neutral-200 p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-900">
                  {copy.labels.name}
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
                  placeholder={copy.placeholders.name}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-900">
                  {copy.labels.email}
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
                  placeholder={copy.placeholders.email}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-900">
                  {copy.labels.company}
                </label>
                <input
                  name="company"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
                  placeholder={copy.placeholders.company}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-neutral-900">
                  {copy.labels.subject}
                </label>
                <input
                  name="subject"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
                  placeholder={copy.placeholders.subject}
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-neutral-900">
                {copy.labels.message}
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
                placeholder={copy.placeholders.message}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-lg border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? copy.buttonSending : copy.buttonIdle}
            </button>

            {status === "sent" && <p className="text-sm text-green-700">{copy.sentMessage}</p>}

            {status === "error" && (
              <p className="text-sm text-red-700">
                {copy.failedMessage} {errorMsg}
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
