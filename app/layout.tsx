import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Diego Nunez Mendoza | Structural Engineer + BIM Automation",
    template: "%s | Diego Nunez Mendoza",
  },
  description: "Bilingual portfolio for structural engineering, BIM, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="site-shell antialiased">{children}</body>
    </html>
  );
}
