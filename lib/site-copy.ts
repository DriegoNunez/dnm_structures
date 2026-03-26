import type { Locale } from "./i18n";

export const siteCopy = {
  en: {
    brandRole: "Structural and BIM Engineer",
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      ai: "AI",
      contact: "Contact",
    },
    footer: {
      name: "Diego Nunez Mendoza",
      role: "Structural and BIM Engineer / Automation",
      builtWith: "Built with Next.js",
    },
    home: {
      kicker: "Structural engineer / BIM / automation",
      title: "Diego Nunez designs structures and the systems that make delivery better.",
      summary:
        "Structural engineer based in the United States, currently delivering infrastructure work at INNOVA TECHNOLOGIES with a focus on BIM execution, QA/QC, and practical automation.",
      currentWork: "Current work",
      currentWorkSummary:
        "Designing cleaner structural workflows for large-scale infrastructure.",
      viewProjects: "View projects",
      startConversation: "Start a conversation",
      profileEyebrow: "Now building",
      imageBadge: "Monorail delivery / BIM systems / QA automation",
      stats: [
        {
          label: "Role",
          value: "Structural and BIM engineer at INNOVA TECHNOLOGIES.",
        },
        {
          label: "Education",
          value: "M.S. in Structural Engineering from UC San Diego.",
        },
        {
          label: "Focus",
          value: "Monorail systems, buildings, and repeatable delivery automation.",
        },
      ],
      selectedWork: "Selected work",
      featuredProjects: "Featured projects",
      seeAllProjects: "See all projects",
      openProject: "Open project",
      exploreDetails: "Explore details",
      statusLabel: "Status",
      highlightLabel: "Why it matters",
    },
    about: {
      title: "About Me",
      kicker: "Engineer / builder / systems thinker",
      summary:
        "I work at the intersection of structural engineering and delivery systems, building models, workflows, and tools that help teams issue cleaner structural packages.",
      quickFacts: [
        {
          label: "Role",
          value: "Structural and BIM Engineer at INNOVA TECHNOLOGIES",
        },
        {
          label: "Based",
          value: "Las Vegas, Nevada",
        },
        {
          label: "Education",
          value: "M.S. Structural Engineering, UC San Diego",
        },
      ],
      storySections: [
        {
          title: "Where I started",
          body: "I am from Cusco, Peru, and my path into engineering started with a fascination for how large structures carry load, shape cities, and serve people over time.",
        },
        {
          title: "What I work on",
          body: "My day-to-day work spans monorail and building structures, BIM coordination, reinforced concrete and steel design, and the quality systems required to keep deliverables consistent.",
        },
        {
          title: "Why automation matters",
          body: "I build tools in Python, C#, Dynamo, and Excel to cut repetitive work, strengthen QA/QC, and give engineering teams more time for decisions that actually need judgment.",
        },
        {
          title: "How I like to work",
          body: "I care about clarity, repeatability, and handoff quality. Good engineering is not only correct; it is understandable, coordinated, and ready for the next team.",
        },
      ],
      timelineTitle: "Career path",
      timeline: [
        {
          label: "Cusco, Peru",
          title: "Civil engineering foundation",
          detail:
            "Built my grounding in civil engineering and developed an early interest in structural systems and real-world constructability.",
        },
        {
          label: "UC San Diego",
          title: "Advanced structural training",
          detail:
            "Completed my master's in Structural Engineering and strengthened my focus on analysis, design, and disciplined problem solving.",
        },
        {
          label: "INNOVA",
          title: "Infrastructure and BIM delivery",
          detail:
            "Work on infrastructure and building projects with an emphasis on monorail systems, BIM coordination, and dependable package delivery.",
        },
        {
          label: "Today",
          title: "Engineering plus automation",
          detail:
            "Design structural workflows and build practical tools that make QA/QC, modeling, and handoff processes cleaner and more repeatable.",
        },
      ],
      technicalFocus: "Technical Focus",
      technicalCards: [
        {
          title: "Transportation structures",
          detail: "Monorail systems and infrastructure packages with coordination and delivery discipline built in.",
        },
        {
          title: "Concrete and steel design",
          detail: "Structural design work grounded in constructability, clarity, and practical engineering judgment.",
        },
        {
          title: "BIM coordination",
          detail: "Model quality, digital delivery standards, and better handoff quality across teams.",
        },
        {
          title: "Structural analysis",
          detail: "Workflow experience with Sofistik, RISA, CSI, and IDEA StatiCa across different project needs.",
        },
        {
          title: "Automation tooling",
          detail: "Python, C#, Dynamo, and Excel tools that remove repetitive work and improve consistency.",
        },
        {
          title: "QA/QC systems",
          detail: "Checks, templates, and repeatable review steps that make engineering output easier to trust.",
        },
      ],
      philosophy: "Philosophy",
      philosophyLines: [
        "Engineering demands constant growth. I commit to learning, adapting, and improving.",
        "The goal is not only to design well, but to build systems that help teams deliver well.",
      ],
      principlesTitle: "Working style",
      principles: [
        {
          title: "Clear thinking",
          detail: "Break complex engineering work into decisions teams can understand and act on.",
        },
        {
          title: "Repeatable systems",
          detail: "Turn useful workflows into standards, templates, and checks that scale.",
        },
        {
          title: "Practical tools",
          detail: "Build automation that solves real bottlenecks instead of adding complexity.",
        },
      ],
      ctaTitle: "Want to build cleaner structural workflows?",
      ctaSummary:
        "Explore projects, automation work, or reach out if you want to talk about BIM delivery, structural engineering, or practical tooling.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact Diego",
    },
    projects: {
      kicker: "Projects",
      title: "A project collection you can update from one file.",
      intro:
        "Your projects live in app/projects/projects-data.ts. To add a new project, duplicate one object in that list and update the text, year, tools, and optional link.",
      guideTitle: "Quick edit guide",
      guideSteps: [
        "Open the project data file.",
        "Update an existing object or paste a new one.",
        "Save the file and the site updates automatically.",
      ],
      guideNote:
        "Optional fields like link and featured also control the homepage cards.",
      highlights: "Highlights",
      visitProject: "Visit project",
    },
    ai: {
      title: "AI Career Conversation",
      summary:
        "An interactive career chatbot tool built with Python and Gradio, deployed on Hugging Face Spaces.",
      openFullScreen: "Open full screen",
      builtWith: "Built with",
      liveDemo: "Live demo",
    },
    contact: {
      title: "Contact",
      location: "Las Vegas, Nevada (US)",
      directNote:
        "Prefer email? Use the form or message me directly. I read everything that is not spam.",
      labels: {
        email: "Email",
        phone: "Phone",
        company: "Company",
        location: "Location",
        linkedIn: "LinkedIn",
        github: "GitHub",
        name: "Name",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "you@company.com",
        company: "Optional",
        subject: "What is this about?",
        message: "Tell me what you need, timeline, and any constraints.",
      },
      buttonIdle: "Send Message",
      buttonSending: "Sending...",
      sentMessage: "Message sent. If it is important, you will hear back.",
      failedMessage: "Failed to send:",
      networkError: "Network error. Try again.",
    },
  },
  es: {
    brandRole: "Ingeniero estructural y BIM",
    nav: {
      home: "Inicio",
      about: "Sobre m\u00ed",
      projects: "Proyectos",
      ai: "IA",
      contact: "Contacto",
    },
    footer: {
      name: "Diego Nunez Mendoza",
      role: "Ingeniero estructural y BIM / Automatizaci\u00f3n",
      builtWith: "Hecho con Next.js",
    },
    home: {
      kicker: "Ingenier\u00eda estructural / BIM / automatizaci\u00f3n",
      title: "Diego Nunez dise\u00f1a estructuras y los sistemas que mejoran su entrega.",
      summary:
        "Ingeniero estructural ubicado en Estados Unidos y trabajando actualmente en INNOVA TECHNOLOGIES, con enfoque en infraestructura, ejecuci\u00f3n BIM, QA/QC y automatizaci\u00f3n aplicada a ingenier\u00eda.",
      currentWork: "Trabajo actual",
      currentWorkSummary:
        "Creando flujos estructurales mas limpios para infraestructura de gran escala.",
      viewProjects: "Ver proyectos",
      startConversation: "Iniciar conversaci\u00f3n",
      profileEyebrow: "Actualmente desarrollando",
      imageBadge: "Entregables de monorriel / sistemas BIM / automatizaci\u00f3n QA",
      stats: [
        {
          label: "Rol",
          value: "Ingeniero estructural y BIM en INNOVA TECHNOLOGIES.",
        },
        {
          label: "Formaci\u00f3n",
          value: "Maestr\u00eda en Ingenier\u00eda Estructural en UC San Diego.",
        },
        {
          label: "Enfoque",
          value: "Monorriel, edificios y automatizaci\u00f3n para entregables repetibles.",
        },
      ],
      selectedWork: "Trabajo seleccionado",
      featuredProjects: "Proyectos destacados",
      seeAllProjects: "Ver todos los proyectos",
      openProject: "Abrir proyecto",
      exploreDetails: "Ver detalles",
      statusLabel: "Estado",
      highlightLabel: "Valor principal",
    },
    about: {
      title: "Sobre m\u00ed",
      kicker: "Ingeniero / constructor / pensador de sistemas",
      summary:
        "Trabajo en la intersecci\u00f3n entre ingenier\u00eda estructural y sistemas de entrega, desarrollando modelos, flujos de trabajo y herramientas que ayudan a emitir paquetes estructurales m\u00e1s limpios.",
      quickFacts: [
        {
          label: "Rol",
          value: "Ingeniero estructural y BIM en INNOVA TECHNOLOGIES",
        },
        {
          label: "Base",
          value: "Las Vegas, Nevada",
        },
        {
          label: "Formaci\u00f3n",
          value: "Maestr\u00eda en Ingenier\u00eda Estructural, UC San Diego",
        },
      ],
      storySections: [
        {
          title: "Donde empece",
          body: "Soy de Cusco, Per\u00fa, y mi camino en la ingenier\u00eda comenz\u00f3 con una fascinaci\u00f3n por la forma en que las grandes estructuras resisten cargas, transforman ciudades y sirven a las personas con el tiempo.",
        },
        {
          title: "En que trabajo",
          body: "Mi trabajo diario abarca estructuras de monorriel y edificaciones, coordinaci\u00f3n BIM, dise\u00f1o en concreto armado y acero, y los sistemas de calidad necesarios para mantener entregables consistentes.",
        },
        {
          title: "Por que importa la automatizacion",
          body: "Desarrollo herramientas en Python, C#, Dynamo y Excel para reducir trabajo repetitivo, fortalecer QA/QC y dar mas tiempo al equipo para decisiones que realmente requieren criterio.",
        },
        {
          title: "Como me gusta trabajar",
          body: "Valoro la claridad, la repetibilidad y la calidad de entrega. La buena ingenier\u00eda no solo es correcta; tambi\u00e9n debe ser entendible, coordinada y lista para el siguiente equipo.",
        },
      ],
      timelineTitle: "Trayectoria",
      timeline: [
        {
          label: "Cusco, Per\u00fa",
          title: "Base en ingenier\u00eda civil",
          detail:
            "Constru\u00ed mi base en ingenier\u00eda civil y desarroll\u00e9 un inter\u00e9s temprano por los sistemas estructurales y la constructibilidad real.",
        },
        {
          label: "UC San Diego",
          title: "Formacion estructural avanzada",
          detail:
            "Complet\u00e9 mi maestr\u00eda en Ingenier\u00eda Estructural y reforc\u00e9 mi enfoque en an\u00e1lisis, dise\u00f1o y resoluci\u00f3n disciplinada de problemas.",
        },
        {
          label: "INNOVA",
          title: "Infraestructura y entregables BIM",
          detail:
            "Trabajo en proyectos de infraestructura y edificaciones con \u00e9nfasis en sistemas de monorriel, coordinaci\u00f3n BIM y entregables confiables.",
        },
        {
          label: "Hoy",
          title: "Ingenieria mas automatizacion",
          detail:
            "Dise\u00f1o flujos de trabajo estructurales y desarrollo herramientas pr\u00e1cticas para hacer m\u00e1s limpios y repetibles los procesos de QA/QC, modelado y entrega.",
        },
      ],
      technicalFocus: "Enfoque t\u00e9cnico",
      technicalCards: [
        {
          title: "Estructuras de transporte",
          detail: "Sistemas de monorriel y paquetes de infraestructura con coordinacion y disciplina de entrega.",
        },
        {
          title: "Diseno en concreto y acero",
          detail: "Trabajo estructural con enfoque en constructibilidad, claridad y criterio de ingenieria.",
        },
        {
          title: "Coordinacion BIM",
          detail: "Calidad del modelo, estandares de entrega digital y mejor calidad de traspaso entre equipos.",
        },
        {
          title: "Analisis estructural",
          detail: "Experiencia de flujo de trabajo con Sofistik, RISA, CSI e IDEA StatiCa para distintas necesidades de proyecto.",
        },
        {
          title: "Herramientas de automatizacion",
          detail: "Python, C#, Dynamo y Excel para eliminar trabajo repetitivo y mejorar consistencia.",
        },
        {
          title: "Sistemas QA/QC",
          detail: "Revisiones, plantillas y pasos repetibles que hacen mas confiable el resultado de ingenieria.",
        },
      ],
      philosophy: "Filosof\u00eda",
      philosophyLines: [
        "La ingenier\u00eda exige crecimiento constante. Me comprometo a aprender, adaptarme y mejorar.",
        "El objetivo no es solo dise\u00f1ar bien, sino construir sistemas que ayuden a los equipos a entregar mejor.",
      ],
      principlesTitle: "Forma de trabajo",
      principles: [
        {
          title: "Pensamiento claro",
          detail: "Convertir trabajo complejo de ingenieria en decisiones que los equipos puedan entender y ejecutar.",
        },
        {
          title: "Sistemas repetibles",
          detail: "Transformar flujos utiles en estandares, plantillas y revisiones que puedan escalar.",
        },
        {
          title: "Herramientas practicas",
          detail: "Desarrollar automatizacion que resuelva cuellos de botella reales sin agregar complejidad.",
        },
      ],
      ctaTitle: "Quieres construir flujos estructurales mas limpios?",
      ctaSummary:
        "Explora proyectos, trabajo de automatizacion o escribeme si quieres hablar sobre entregables BIM, ingenieria estructural o herramientas practicas.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contactar a Diego",
    },
    projects: {
      kicker: "Proyectos",
      title: "Una colecci\u00f3n de proyectos que puedes actualizar desde un solo archivo.",
      intro:
        "Tus proyectos viven en app/projects/projects-data.ts. Para agregar uno nuevo, duplica un objeto de la lista y actualiza el texto, el ano, las herramientas y el enlace opcional.",
      guideTitle: "Guia r\u00e1pida",
      guideSteps: [
        "Abre el archivo de datos de proyectos.",
        "Actualiza un objeto existente o pega uno nuevo.",
        "Guarda el archivo y el sitio se actualizara autom\u00e1ticamente.",
      ],
      guideNote:
        "Campos opcionales como link y featured tambi\u00e9n controlan las tarjetas del inicio.",
      highlights: "Puntos clave",
      visitProject: "Visitar proyecto",
    },
    ai: {
      title: "Conversaci\u00f3n de Carrera con IA",
      summary:
        "Una herramienta interactiva de conversaci\u00f3n profesional construida con Python y Gradio, desplegada en Hugging Face Spaces.",
      openFullScreen: "Abrir en pantalla completa",
      builtWith: "Construido con",
      liveDemo: "Demo en vivo",
    },
    contact: {
      title: "Contacto",
      location: "Las Vegas, Nevada (EE. UU.)",
      directNote:
        "Prefieres correo? Usa el formulario o escribeme directamente. Leo todo lo que no es spam.",
      labels: {
        email: "Correo",
        phone: "Tel\u00e9fono",
        company: "Empresa",
        location: "Ubicaci\u00f3n",
        linkedIn: "LinkedIn",
        github: "GitHub",
        name: "Nombre",
        subject: "Asunto",
        message: "Mensaje",
      },
      placeholders: {
        name: "Tu nombre",
        email: "tu@empresa.com",
        company: "Opcional",
        subject: "De que se trata?",
        message: "Cuentame que necesitas, el plazo y cualquier restriccion.",
      },
      buttonIdle: "Enviar mensaje",
      buttonSending: "Enviando...",
      sentMessage: "Mensaje enviado. Si es importante, te respondere pronto.",
      failedMessage: "No se pudo enviar:",
      networkError: "Error de red. Intenta nuevamente.",
    },
  },
} as const;

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale];
}
