export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  status: string;
  summary: string;
  impact: string;
  stack: string[];
  highlights: string[];
  link?: string;
  featured?: boolean;
};

// Edit this list to update the Projects page and homepage project cards.
export const projects: Project[] = [
  {
    slug: "monorail-bim-delivery",
    title: "Monorail BIM Delivery System",
    category: "Infrastructure / BIM",
    year: "2026",
    status: "Active",
    summary:
      "A structural BIM workflow for monorail packages focused on coordination, model quality, and cleaner delivery standards.",
    impact:
      "Improved model consistency and reduced repetitive delivery cleanup across structural packages.",
    stack: ["Revit", "Dynamo", "QA/QC", "BIM Coordination"],
    highlights: [
      "Standardized views, sheets, and parameter checks for faster package setup.",
      "Built repeatable workflows for structural model validation before issue.",
      "Supported LOD-driven deliverables with cleaner cross-team coordination.",
    ],
    featured: true,
  },
  {
    slug: "engineering-automation-toolkit",
    title: "Engineering Automation Toolkit",
    category: "Automation / Productivity",
    year: "2025",
    status: "Growing",
    summary:
      "A set of internal scripts and utilities to automate engineering checks, reduce manual work, and speed up repetitive modeling tasks.",
    impact: "Saved engineering time by turning common QA steps into repeatable tools.",
    stack: ["Python", "C#", "Excel VBA", "pyRevit"],
    highlights: [
      "Automated repetitive checks that were previously done by hand.",
      "Created lightweight tools that fit into existing engineering workflows.",
      "Focused on practical outputs teams can trust and reuse.",
    ],
    featured: true,
  },
  {
    slug: "ai-career-conversation",
    title: "AI Career Conversation",
    category: "AI / Web App",
    year: "2025",
    status: "Live",
    summary:
      "A conversational web app that helps users explore career questions through an interactive AI experience.",
    impact: "Turned a simple idea into a public-facing tool with a smooth user flow.",
    stack: ["Python", "Gradio", "Hugging Face Spaces", "Prompt Design"],
    highlights: [
      "Designed for fast interaction and approachable career guidance.",
      "Published as a shareable experience that runs directly in the browser.",
      "Demonstrates how engineering and AI can meet in practical products.",
    ],
    link: "https://driego-career-conversation.hf.space",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
