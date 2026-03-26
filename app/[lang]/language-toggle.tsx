"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/lib/i18n";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/70 px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
      {locales.map((item) => {
        const href = `${switchLocalePath(pathname, item)}${search ? `?${search}` : ""}`;

        return (
          <Link
            key={item}
            href={href}
            className={`rounded-full px-3 py-1.5 transition ${
              item === locale ? "bg-slate-950 text-white" : "hover:bg-white hover:text-slate-950"
            }`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
