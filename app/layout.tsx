import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Diego Nunez Mendoza | Structural Engineer + BIM Automation",
    template: "%s | Diego Nunez Mendoza",
  },
  description:
    "Structural engineer specializing in monorail structures, BIM, and engineering automation with Python, C#, and QA/QC workflows.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/ai", label: "AI" },
  { href: "/contact", label: "Contact" },
] as const;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} site-shell antialiased`}>
        <header className="w-full">
          <div className="mx-auto max-w-6xl px-6 pt-8">
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
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-24 border-t border-slate-200/70">
          <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-neutral-600">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-semibold text-neutral-900">Diego Nunez Mendoza</div>
                <div>Structural and BIM Engineer • Automation</div>
              </div>
              <div className="text-neutral-500">© {new Date().getFullYear()} • Built with Next.js</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
