import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    default: "Diego Núñez Mendoza | Structural Engineer + BIM Automation",
    template: "%s | Diego Núñez Mendoza",
  },
  description:
    "Structural engineer specializing in monorail structures, BIM (Revit/Dynamo), and engineering automation (Python, pyRevit, C#, Excel QA/QC).",
};

<Link
  href="/"
  className="hover:text-neutral-950 transition-colors"
>
  Home
</Link>

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}>
        {/* Top Nav */}
        <header className="w-full">
          <div className="mx-auto max-w-6xl px-6 pt-10">
            <nav className="flex items-center justify-center gap-12 text-xs tracking-[0.25em] uppercase text-neutral-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-neutral-950 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-24 border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-neutral-600">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="font-semibold text-neutral-900">
                  Diego Nunez Mendoza
                </div>
                <div>Structural and BIM Engineer • Automation</div>
              </div>
              <div className="text-neutral-500">
                © {new Date().getFullYear()} • Built with Next.js
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}