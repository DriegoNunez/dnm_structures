export type LocalizedText = {
  en: string;
  es: string;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  year: string;
  status: LocalizedText;
  summary: LocalizedText;
  impact: LocalizedText;
  stack: string[];
  highlights: LocalizedText[];
  link?: string;
  featured?: boolean;
};

// Edit this list to update the bilingual Projects page and homepage cards.
export const projects: Project[] = [
  {
    slug: "monorail-bim-delivery",
    title: {
      en: "Monorail BIM Delivery System",
      es: "Sistema BIM para entregables de monorriel",
    },
    category: {
      en: "Infrastructure / BIM",
      es: "Infraestructura / BIM",
    },
    year: "2026",
    status: { en: "Active", es: "Activo" },
    summary: {
      en: "A structural BIM workflow for monorail packages focused on coordination, model quality, and cleaner delivery standards.",
      es: "Un flujo BIM estructural para paquetes de monorriel enfocado en coordinacion, calidad del modelo y estandares de entrega mas limpios.",
    },
    impact: {
      en: "Improved model consistency and reduced repetitive delivery cleanup across structural packages.",
      es: "Mejoro la consistencia de modelos y redujo la limpieza repetitiva en entregables estructurales.",
    },
    stack: ["Revit", "Dynamo", "QA/QC", "BIM Coordination"],
    highlights: [
      {
        en: "Standardized views, sheets, and parameter checks for faster package setup.",
        es: "Estandarizo vistas, planos y revision de parametros para iniciar paquetes mas rapido.",
      },
      {
        en: "Built repeatable workflows for structural model validation before issue.",
        es: "Creo flujos repetibles para validar modelos estructurales antes de emitirlos.",
      },
      {
        en: "Supported LOD-driven deliverables with cleaner cross-team coordination.",
        es: "Soporto entregables guiados por LOD con una coordinacion mas clara entre equipos.",
      },
    ],
    featured: true,
  },
  {
    slug: "engineering-automation-toolkit",
    title: {
      en: "Engineering Automation Toolkit",
      es: "Kit de automatizacion para ingenieria",
    },
    category: {
      en: "Automation / Productivity",
      es: "Automatizacion / Productividad",
    },
    year: "2025",
    status: { en: "Growing", es: "En crecimiento" },
    summary: {
      en: "A set of internal scripts and utilities to automate engineering checks, reduce manual work, and speed up repetitive modeling tasks.",
      es: "Un conjunto de scripts y utilidades internas para automatizar revisiones de ingenieria, reducir trabajo manual y acelerar tareas repetitivas de modelado.",
    },
    impact: {
      en: "Saved engineering time by turning common QA steps into repeatable tools.",
      es: "Ahorro tiempo de ingenieria al convertir revisiones comunes en herramientas repetibles.",
    },
    stack: ["Python", "C#", "Excel VBA", "pyRevit"],
    highlights: [
      {
        en: "Automated repetitive checks that were previously done by hand.",
        es: "Automatizo revisiones repetitivas que antes se hacian manualmente.",
      },
      {
        en: "Created lightweight tools that fit into existing engineering workflows.",
        es: "Desarrollo herramientas ligeras que se integran a flujos existentes de ingenieria.",
      },
      {
        en: "Focused on practical outputs teams can trust and reuse.",
        es: "Se enfoca en resultados practicos que los equipos pueden confiar y reutilizar.",
      },
    ],
    featured: true,
  },
  {
    slug: "ai-career-conversation",
    title: {
      en: "AI Career Conversation",
      es: "Conversacion de carrera con IA",
    },
    category: {
      en: "AI / Web App",
      es: "IA / Aplicacion web",
    },
    year: "2025",
    status: { en: "Live", es: "En linea" },
    summary: {
      en: "A conversational web app that helps users explore career questions through an interactive AI experience.",
      es: "Una aplicacion web conversacional que ayuda a explorar preguntas profesionales mediante una experiencia interactiva con IA.",
    },
    impact: {
      en: "Turned a simple idea into a public-facing tool with a smooth user flow.",
      es: "Convirtio una idea simple en una herramienta publica con una experiencia fluida.",
    },
    stack: ["Python", "Gradio", "Hugging Face Spaces", "Prompt Design"],
    highlights: [
      {
        en: "Designed for fast interaction and approachable career guidance.",
        es: "Disenado para interaccion rapida y orientacion profesional accesible.",
      },
      {
        en: "Published as a shareable experience that runs directly in the browser.",
        es: "Publicado como una experiencia compartible que funciona directamente en el navegador.",
      },
      {
        en: "Demonstrates how engineering and AI can meet in practical products.",
        es: "Demuestra como la ingenieria y la IA pueden unirse en productos practicos.",
      },
    ],
    link: "https://driego-career-conversation.hf.space",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
