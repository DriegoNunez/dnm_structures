"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

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
          website: formData.get("website"), // honeypot
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error ?? "Something failed.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try again.");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-semibold text-neutral-900 mb-12">Contact</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT: Your contact info */}
        <aside className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">Diego Núñez Mendoza</h2>
            <p className="text-neutral-700">Structural Engineer • BIM • Automation</p>
            <p className="text-neutral-600 mt-2">Las Vegas, Nevada (US)</p>
          </div>

          <div className="space-y-2 text-neutral-700">
            {/* Replace placeholders with your real info */}
            <p>
              <span className="font-semibold text-neutral-900">Email:</span>{" "}
              <a className="underline hover:text-neutral-950" href="mailto:dmendoza@innovanv.com">
                dmendoza@innovanv.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-neutral-900">Phone:</span>{" "}
              <span className="text-neutral-700">+1 (858) 319-6972</span>
            </p>
            <p>
              <span className="font-semibold text-neutral-900">Company:</span>{" "}
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
            {/* Replace with your real links */}
            <p>
              <span className="font-semibold text-neutral-900">LinkedIn:</span>{" "}
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
              <span className="font-semibold text-neutral-900">GitHub:</span>{" "}
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

          <div className="text-sm text-neutral-600">
            Prefer email? Use the form or message me directly. I read everything that isn’t spam.
          </div>
        </aside>

        {/* RIGHT: Contact form */}
        <section className="border border-neutral-200 rounded-xl p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Honeypot (spam bots fill this; humans don't see it) */}
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-1">Name</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-1">Company</label>
                <input
                  name="company"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-1">Subject</label>
                <input
                  name="subject"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
                  placeholder="What’s this about?"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-1">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
                placeholder="Tell me what you need, timeline, and any constraints."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg text-sm font-semibold
                         border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-green-700">
                Message sent. If it’s important, you’ll hear back.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-700">
                Failed to send: {errorMsg}
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
