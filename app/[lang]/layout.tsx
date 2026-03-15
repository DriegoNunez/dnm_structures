import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isLocale, locales, localizePath, type Locale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-copy";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  return {
    title:
      lang === "es"
        ? "Diego Nunez Mendoza | Ingeniero estructural + BIM"
        : "Diego Nunez Mendoza | Structural Engineer + BIM Automation",
    description:
      lang === "es"
        ? "Portafolio bilingue de ingenieria estructural, BIM y automatizacion."
        : "Bilingual portfolio for structural engineering, BIM, and automation.",
    alternates: {
      languages: {
        en: localizePath("en"),
        es: localizePath("es"),
      },
    },
  };
}

function LanguageToggle({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/70 px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
      {locales.map((item) => (
        <Link
          key={item}
          href={localizePath(item)}
          className={`rounded-full px-3 py-1.5 transition ${
            item === locale ? "bg-slate-950 text-white" : "hover:bg-white hover:text-slate-950"
          }`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const copy = getSiteCopy(lang);
  const navItems = [
    { href: localizePath(lang), label: copy.nav.home },
    { href: localizePath(lang, "/about"), label: copy.nav.about },
    { href: localizePath(lang, "/projects"), label: copy.nav.projects },
    { href: localizePath(lang, "/ai"), label: copy.nav.ai },
    { href: localizePath(lang, "/contact"), label: copy.nav.contact },
  ];

  return (
    <>
      <header className="w-full">
        <div className="mx-auto max-w-6xl px-6 pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <nav className="glass-nav flex flex-wrap items-center justify-center gap-3 rounded-full px-4 py-3 text-[11px] tracking-[0.25em] uppercase text-neutral-700 sm:gap-8 sm:px-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-white/70 hover:text-neutral-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <LanguageToggle locale={lang} />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-24 border-t border-slate-200/70">
        <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-neutral-600">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-semibold text-neutral-900">{copy.footer.name}</div>
              <div>{copy.footer.role}</div>
            </div>
            <div className="text-neutral-500">(c) {new Date().getFullYear()} / {copy.footer.builtWith}</div>
          </div>
        </div>
      </footer>
    </>
  );
}
