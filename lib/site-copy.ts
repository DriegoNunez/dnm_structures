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
      role: "Structural and BIM Engineer • Automation",
      builtWith: "Built with Next.js",
    },
    home: {
      kicker: "Structural engineer • BIM • automation",
      title: "Diego Nunez builds structures and the systems behind them.",
      summary:
        "Based in the United States and currently working at INNOVA TECHNOLOGIES, with a focus on infrastructure, BIM delivery, and practical engineering automation.",
      currentWork: "Current work",
      currentWorkSummary:
        "Designing cleaner structural workflows for large-scale infrastructure.",
      viewProjects: "View projects",
      startConversation: "Start a conversation",
      stats: [
        {
          label: "Focus",
          value: "Monorail, buildings, and structural delivery systems.",
        },
        {
          label: "Tools",
          value: "Revit, Dynamo, Python, C#, Excel, and QA/QC workflows.",
        },
        {
          label: "Approach",
          value: "Clear engineering, repeatable processes, and better handoff quality.",
        },
      ],
      selectedWork: "Selected work",
      featuredProjects: "Featured projects",
      seeAllProjects: "See all projects",
      openProject: "Open project",
      exploreDetails: "Explore details",
    },
    about: {
      title: "About Me",
      intro: [
        "I am a Structural Engineer working at INNOVA TECHNOLOGIES, focused on infrastructure and building structures.",
        "Originally from Cusco, Peru, my career is driven by a dual passion: the physical integrity of large-scale structures and the digital systems that make their creation more efficient.",
        "I earned my bachelor's degree in Civil Engineering from Universidad Nacional de San Antonio Abad del Cusco and completed my master's in Structural Engineering at the University of California, San Diego.",
        "My work focuses on monorail and building structures, reinforced concrete and steel design, and BIM deliveries that support real-world constructability.",
        "Beyond modeling, I build automation tools with Python, C#, Excel, and Dynamo to reduce repetitive work and improve QA/QC workflows.",
      ],
      technicalFocus: "Technical Focus",
      technicalItems: [
        "Transportation structures with an emphasis on monorail systems",
        "Reinforced concrete and steel design",
        "BIM coordination and digital delivery",
        "Structural analysis with Sofistik, RISA, CSI, and IDEA StatiCa",
        "Engineering automation with Python and C#",
        "Custom Excel-based engineering tools",
      ],
      philosophy: "Philosophy",
      philosophyLines: [
        "Engineering demands constant growth. I commit to learning, adapting, and improving.",
        "Never stop learning, never stop improving.",
      ],
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
      about: "Sobre mi",
      projects: "Proyectos",
      ai: "IA",
      contact: "Contacto",
    },
    footer: {
      name: "Diego Nunez Mendoza",
      role: "Ingeniero estructural y BIM • Automatizacion",
      builtWith: "Hecho con Next.js",
    },
    home: {
      kicker: "Ingenieria estructural • BIM • automatizacion",
      title: "Diego Nunez diseña estructuras y los sistemas que las hacen posibles.",
      summary:
        "Ubicado en Estados Unidos y trabajando actualmente en INNOVA TECHNOLOGIES, con enfoque en infraestructura, entregables BIM y automatizacion aplicada a ingenieria.",
      currentWork: "Trabajo actual",
      currentWorkSummary:
        "Creando flujos de trabajo estructurales mas limpios para infraestructura de gran escala.",
      viewProjects: "Ver proyectos",
      startConversation: "Iniciar conversacion",
      stats: [
        {
          label: "Enfoque",
          value: "Monorriel, edificios y sistemas de entrega estructural.",
        },
        {
          label: "Herramientas",
          value: "Revit, Dynamo, Python, C#, Excel y flujos QA/QC.",
        },
        {
          label: "Metodo",
          value: "Ingenieria clara, procesos repetibles y mejor calidad de entrega.",
        },
      ],
      selectedWork: "Trabajo seleccionado",
      featuredProjects: "Proyectos destacados",
      seeAllProjects: "Ver todos los proyectos",
      openProject: "Abrir proyecto",
      exploreDetails: "Ver detalles",
    },
    about: {
      title: "Sobre mi",
      intro: [
        "Soy ingeniero estructural y trabajo en INNOVA TECHNOLOGIES, enfocado en infraestructura y estructuras de edificaciones.",
        "Soy de Cusco, Peru, y mi carrera esta guiada por una doble pasion: la integridad fisica de grandes estructuras y los sistemas digitales que hacen mas eficiente su desarrollo.",
        "Obtuve mi bachillerato en Ingenieria Civil en la Universidad Nacional de San Antonio Abad del Cusco y complete mi maestria en Ingenieria Estructural en la University of California, San Diego.",
        "Mi trabajo se enfoca en estructuras de monorriel y edificaciones, diseño en concreto armado y acero, y entregables BIM que apoyan la constructibilidad real.",
        "Ademas del modelado, desarrollo herramientas de automatizacion con Python, C#, Excel y Dynamo para reducir trabajo repetitivo y mejorar procesos de QA/QC.",
      ],
      technicalFocus: "Enfoque tecnico",
      technicalItems: [
        "Estructuras de transporte con enfasis en sistemas de monorriel",
        "Diseño en concreto armado y acero",
        "Coordinacion BIM y entrega digital",
        "Analisis estructural con Sofistik, RISA, CSI e IDEA StatiCa",
        "Automatizacion de ingenieria con Python y C#",
        "Herramientas de ingenieria personalizadas en Excel",
      ],
      philosophy: "Filosofia",
      philosophyLines: [
        "La ingenieria exige crecimiento constante. Me comprometo a aprender, adaptarme y mejorar.",
        "Nunca dejar de aprender, nunca dejar de mejorar.",
      ],
    },
    projects: {
      kicker: "Proyectos",
      title: "Una coleccion de proyectos que puedes actualizar desde un solo archivo.",
      intro:
        "Tus proyectos viven en app/projects/projects-data.ts. Para agregar uno nuevo, duplica un objeto de la lista y actualiza el texto, el ano, las herramientas y el enlace opcional.",
      guideTitle: "Guia rapida",
      guideSteps: [
        "Abre el archivo de datos de proyectos.",
        "Actualiza un objeto existente o pega uno nuevo.",
        "Guarda el archivo y el sitio se actualizara automaticamente.",
      ],
      guideNote:
        "Campos opcionales como link y featured tambien controlan las tarjetas del inicio.",
      highlights: "Puntos clave",
      visitProject: "Visitar proyecto",
    },
    ai: {
      title: "Conversacion de Carrera con IA",
      summary:
        "Una herramienta interactiva de conversacion profesional construida con Python y Gradio, desplegada en Hugging Face Spaces.",
      openFullScreen: "Abrir en pantalla completa",
    },
    contact: {
      title: "Contacto",
      location: "Las Vegas, Nevada (EE. UU.)",
      directNote:
        "Prefieres correo? Usa el formulario o escribeme directamente. Leo todo lo que no es spam.",
      labels: {
        email: "Correo",
        phone: "Telefono",
        company: "Empresa",
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
