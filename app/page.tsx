import Image from "next/image";

export default function HomePage() {
  return (
    <div>

      {/* Headline section (CONSTRAINED width) */}
      <section className="mx-auto max-w-6xl px-6 pt-18 pb-10 text-center">
        <h1 className="font-extrabold uppercase leading-[0.95] tracking-tight text-[clamp(2rem,4.0vw,3.5rem)] text-slate-900">
          Hello there, I am Diego Nunez - Structural Engineer based in the United States
          <span className="block"></span>
          Currently working at
          <span className="in line block"></span>
          <a
            href="https://innovanv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neutral-950 transition-colors"
          > INNOVA TECHNOLOGIES
          </a>
          </h1>
      </section>



      {/* FULL WIDTH IMAGE SECTION */}
      <section className="w-full">
        <div className="relative w-full h-[60vh] min-h-[450px]">
          <Image
            src="/monorail_cover.png"
            alt="Monoral Image"
            fill
            priority
            className="object-cover grayscale"
          />
        </div>
      </section>

    </div>
  );
}