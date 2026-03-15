import Image from "next/image";


export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">

      {/* Title with spacing */}
      <h1 className="text-3xl font-semibold text-neutral-900 mb-12">
        About Me
      </h1>

      {/* Image + Text Side by Side */}
      <div className="grid md:grid-cols-2 gap-8 items-start">

        {/* LEFT: Image */}
        <div className="relative w-full h-[300px]">
        <Image
          src="/profile.jpg"
          alt="Diego Núñez Mendoza"
          width={500}
          height={500}
          className="w-full max-w-[500px] h-auto rounded-xl object-cover"
          priority
        />
        </div>

        {/* RIGHT: Description */}
        <div className="space-y-6 text-neutral-500 leading-relaxed">
          <p>
            I am a Structural Engineer working at{" "}
            <span className="font-semibold text-neutral-900">
            <a
            href="https://innovanv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-900 hover:text-slate-700 transition-colors"
            >
            INNOVA TECHNOLOGIES
            </a>
            <a>
            , focused on infrastructure and building structures.
            </a>           
            </span>.
          </p>
          <p>
            Originally from Cusco, Peru. My career is driven by a dual passion: 
            the physical integrity of large-scale structures and the digital 
            systems that make their creation more efficient.
          </p>
          <p>
            I earned my Bachelor’s degree in Civil Engineering from the 
            Universidad Nacional de San Antonio Abad del Cusco (UNSAAC) 
            and completed my Master’s in Structural Engineering at 
            the University of California, San Diego (UCSD).
          </p>
          <p>
            My work focuses on monorail and building structures,
            reinforced concrete and steel design, and BIM deliveries,
            ensuring models meet LOD standards while supporting
            real-world constructability.
          </p>
          <p>
            Beyond modeling, I design and build automation tools using
            Python, C#, Excel (Visual Basic), and Dynamo to reduce
            repetitive work and improve QA/QC workflows.
          </p>
      </div>

    </div>

    {/* Divider */}
      <div className="my-12 h-px bg-neutral-200" />

      {/* Section 2 */}
      <section className="space-y-6 text-neutral-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-neutral-900">
          Technical Focus
        </h2>

        <ul className="space-y-3 list-disc list-inside">
          <li>Transportation structures focus on Monorails</li>
          <li>Reinforced concrete and steel design</li>
          <li>BIM coordination and digital delivery</li>
          <li>Structural Analysis Software / Sofistik, Risa Tools, CSI, IDEA Statica</li>
          <li>Engineering atomation with Python and C#</li>
          <li>Custom Excel-based engineering tools</li>
        </ul>
      </section>

      {/* Divider */}
      <div className="my-12 h-px bg-neutral-200" />

      {/* Section 3 */}
      <section className="space-y-6 text-neutral-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-neutral-900">
          Philosophy
        </h2>

        <p>
          Engineering demands constant growth. I commit to learning, adapting, and improving.
        </p>

        <p>
          Never stop learning, never stop improving.
        </p>
      </section>

    </div>
  );
}
