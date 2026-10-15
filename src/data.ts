// Site content. Experience, skills and education mirror the résumé source
// (github.com/rsun19/robert_sun_resume, ROBERT_SUN_RESUME.tex) — keep them in sync.
import { ExperienceItem, Project, SkillGroup } from "./types";

export const profile = {
  name: "Robert Sun",
  title: "Software Engineer",
  company: "Chewy",
  location: "Boston, MA",
  email: "robertssun1234@gmail.com",
  github: "https://github.com/rsun19",
  linkedin: "https://www.linkedin.com/in/rob-sun/",
  resume: "/resume.pdf",
};

export const about = [
  "I'm a software engineer on the Chewy+ Loyalty team at Chewy, where I build the membership experience across web and mobile — from the landing page and member dashboard to upsells in cart and checkout.",
  "Before that I was at Red Hat — first as an intern, then full-time — on the OpenShift AI dashboard, contributing upstream to Kubeflow and leading the MLflow experiment-tracking integration. I care about fast, well-tested frontends, healthy CI, and tooling that makes teams quicker.",
];

export const education = {
  school: "University of Virginia",
  degree: "B.A. in Computer Science",
  detail: "GPA 3.9 / 4.0",
  date: "2021 – 2024",
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "SQL",
      "HTML/CSS",
      "C",
      "R",
      "Swift",
    ],
  },
  {
    label: "Frameworks & Tools",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "GraphQL",
      "PatternFly",
      "Webpack",
      "Module Federation",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Cypress",
      "Playwright",
      "Jest",
      "Dynatrace",
      "PostgreSQL",
      "Redis",
      "Claude Code",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "chewy",
    role: "Software Engineer I",
    team: "Chewy+ Loyalty",
    company: "Chewy",
    location: "Boston, MA",
    date: "Jun 2026 – Present",
    bullets: [
      "Shipped 50 PRs across 10 repositories and reviewed 260 PRs across 30 in under 4 months for Chewy+ membership.",
      "Redesigned the Chewy+ landing page and member dashboard (V4) across 12 PRs — pricing hero with a sticky trial CTA, CMS-driven savings, benefits and FAQ sections — with new Playwright E2E coverage replacing the V2 suites.",
      "Built the Sampling V2 free-sample filtering UI for web and mobile, with pet-type and category facets passed through to the backend via GraphQL.",
      "Migrated Chewy+ upsell plan and eligibility data in Cart, Checkout and Autoship from REST to GraphQL across 9 PRs, with fail-closed validation.",
      "Built Dynatrace config-as-code dashboards and alerts for 4 loyalty services and added lint and type-check gates to CI.",
    ],
    tech: ["React", "TypeScript", "GraphQL", "Playwright", "Dynatrace"],
  },
  {
    id: "redhat-ase",
    role: "Associate Software Engineer",
    team: "OpenShift AI Dashboard",
    company: "Red Hat",
    location: "Boston, MA",
    date: "Dec 2024 – Jun 2026",
    bullets: [
      "Led the MLflow experiment-tracking UI integration into the OpenShift AI dashboard across 2 repositories and 15+ PRs — iframe rendering, dark-mode sync, design-token overrides and a feature-flagged rollout.",
      "Closed a 4-month-old CI integrity gap that let PRs merge without passing mock tests, by adding pass/fail validation to GitHub Actions and a required context to the Prow Tide merge bot.",
      "Reduced production container image size by 52% by re-engineering the monorepo build pipeline.",
      "Integrated the upstream Kubeflow Model Registry, built module-federation extensions for model serving, and migrated routes and Cypress E2E tests to upstream API patterns across 15+ contributions.",
      "Drove AI-assisted development adoption with review skills for Jira ticket validation and RBAC policy verification, an agent-first documentation system, and shared agent rules.",
    ],
    tech: [
      "React",
      "TypeScript",
      "PatternFly",
      "Module Federation",
      "Kubernetes",
      "Cypress",
    ],
  },
  {
    id: "redhat-intern-2024",
    role: "Software Engineer Intern",
    team: "OpenShift AI Dashboard",
    company: "Red Hat",
    location: "New York, NY",
    date: "May – Aug 2024",
    bullets: [
      "Shipped 23 PRs, including a fix for an authorization vulnerability that exposed notebook event APIs to unpermitted users, Firefox pipeline-scheduling failures, and cluster-admin group support.",
      "Built MLMD request interception for Cypress E2E tests, wrote ESLint rules, replaced type assertions with type guards, and removed thousands of lines of dead code.",
    ],
    tech: ["React", "TypeScript", "Cypress", "ESLint"],
  },
  {
    id: "redhat-intern-2023",
    role: "Software Engineer Intern",
    team: "ConsoleDot",
    company: "Red Hat",
    location: "Remote",
    date: "May – Jul 2023",
    bullets: [
      "Shipped 41 PRs in 3 months, adding 25+ search index entries to the Hybrid Cloud Console's global search and improving result relevance.",
      "Built WebSocket payload validation, authored Cypress E2E tests, added a bulk select toggle for notification preferences, and fixed responsive UI bugs on mobile viewports.",
    ],
    tech: ["React", "JavaScript", "Cypress"],
  },
];

export const projects: Project[] = [
  {
    id: "transit-tracker",
    title: "Transit Tracker",
    blurb:
      "A GTFS transit platform with full-text route search, real-time departures and nearby-stop geolocation. Six NestJS microservices behind NGINX, with CI/CD quality gates spanning unit, integration, contract, accessibility and E2E tests, and automated deploys to Hetzner.",
    tech: [
      "Next.js",
      "NestJS",
      "PostgreSQL / PostGIS",
      "Redis",
      "NGINX",
      "Docker",
    ],
    links: [
      { name: "Live site", link: "https://www.trackthemetro.com" },
      { name: "Source", link: "https://github.com/rsun19/transit-tracker" },
    ],
    date: "2026 – Present",
    featured: true,
  },
  {
    id: "open-source",
    title: "Open Source: OpenShift AI & Kubeflow",
    blurb:
      "125+ merged PRs to the Open Data Hub dashboard (upstream of OpenShift AI) and 18 to Kubeflow's Model Registry, plus contributions to the shared Kubeflow UI library.",
    tech: ["React", "TypeScript", "Kubernetes"],
    links: [
      {
        name: "ODH Dashboard PRs",
        link: "https://github.com/opendatahub-io/odh-dashboard/pulls?q=is%3Apr+author%3Arsun19+is%3Amerged",
      },
      {
        name: "Kubeflow PRs",
        link: "https://github.com/kubeflow/hub/pulls?q=is%3Apr+author%3Arsun19+is%3Amerged",
      },
    ],
  },
  {
    id: "flashcards",
    title: "Easy Cards",
    blurb:
      "A collaborative flashcard site where users build decks with rich-text editors. Fully containerized with Docker.",
    tech: ["TypeScript", "Next.js", "Prisma", "Docker"],
    links: [
      { name: "Source", link: "https://github.com/rsun19/easy-cards-docker" },
    ],
  },
  {
    id: "trip-planner",
    title: "Trip Planner",
    blurb:
      "A mobile trip planner with Google Sign-In, shareable itineraries, turn-by-turn directions and a ChatGPT-powered itinerary generator.",
    tech: ["Flutter", "Dart", "PostgreSQL", "Firebase"],
    links: [
      { name: "Source", link: "https://github.com/rsun19/Trip-Planner-App" },
    ],
  },
  {
    id: "recycle-ai",
    title: "RecycleAI",
    blurb:
      "A fine-tuned ResNet18 that sorts waste images into six recycling categories with 84% accuracy, served through a Flask app.",
    tech: ["Python", "PyTorch", "Flask"],
    links: [
      {
        name: "Source",
        link: "https://github.com/rsun19/RecycleImageClassifier_dev",
      },
    ],
  },
  {
    id: "book-blog",
    title: "Book Blog",
    blurb:
      "My personal book-review blog, with API endpoints for managing posts and comment sections.",
    tech: ["Python", "Flask", "JavaScript", "Tailwind"],
    links: [
      { name: "Live site", link: "https://www.robertsrandomreviews.com" },
    ],
  },
  {
    id: "joke-generator",
    title: "Joke Generator",
    blurb:
      "A joke generator with a React web client and a native iOS app, both backed by a Flask API.",
    tech: ["React", "Swift", "Python", "Flask"],
    links: [
      { name: "Source", link: "https://github.com/rsun19/jokegenerator" },
    ],
  },
];
