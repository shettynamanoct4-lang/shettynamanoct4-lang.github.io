const GH = "https://github.com/shettynamanoct4-lang";

export const profile = {
  name: "Naman G Shetty",
  role: "Senior Salesforce Developer · AI Platform Engineer",
  tagline:
    "I build enterprise Salesforce solutions and bring Generative AI into them — LLM integrations on GCP, human-in-the-loop AI apps, workflow automation and multi-agent delivery frameworks.",
  location: "Bengaluru, India",
  email: "shettynamanoct4@gmail.com",
  github: GH,
  linkedin: "https://www.linkedin.com/in/naman-shetty-545084148",
  trailblazer: "https://trailblazer.me/id/nshetty75",
  resume: "/Naman_Shetty_Resume.pdf",
};

export const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "12x", label: "Certifications" },
  { value: "10+", label: "AI features in production" },
  { value: "10", label: "AI agents in the ADLC framework" },
];

export const about = [
  "I'm a Salesforce Developer and AI Platform Engineer with 6+ years of experience designing, building and releasing solutions on Sales Cloud, Service Cloud and Experience Cloud for SaaS, healthcare, finance, insurance and life-sciences businesses.",
  "My core is the Salesforce platform — Apex, Lightning Web Components, Flows, integrations and the security model. On top of it, I specialize in Generative AI: grounding LLMs on Gemini / Vertex AI through Cloud Run, building RAG-based recommendations, designing human-in-the-loop review experiences, and orchestrating multi-agent frameworks with skills, memory and MCP connectors.",
  "I care about governor-limit-safe, secure-by-default code (with sharing, USER_MODE, least privilege), measurable outcomes, and shipping AI that people actually trust.",
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Salesforce Development",
    items: ["Apex", "Triggers (Handler Pattern)", "Batch / Queueable / Schedulable", "LWC", "Aura", "Visualforce", "SOQL / SOSL", "Platform Events", "Platform Cache", "Custom Metadata"],
  },
  {
    group: "Clouds & Configuration",
    items: ["Service Cloud", "Entitlements & Milestones", "Email-to-Case", "Assignment Rules", "Omni-Channel", "Sales Cloud", "Experience Cloud", "Data Cloud", "CPQ", "Flows"],
  },
  {
    group: "Generative & Agentic AI",
    items: ["Agentforce", "Prompt Builder", "Gemini / Vertex AI", "OpenAI", "RAG & Grounding", "Hallucination Control", "PII Masking", "Human-in-the-Loop", "Multi-Agent Orchestration", "MCP Servers", "Claude Code"],
  },
  {
    group: "Integration & Cloud",
    items: ["REST / SOAP", "Named Credentials", "OAuth 2.0 / JWT", "n8n", "MuleSoft", "Cloud Run", "BigQuery", "Firestore", "Cloud DLP", "Postman"],
  },
  {
    group: "DevOps & Quality",
    items: ["Git / GitLab", "Jenkins CI/CD", "Copado", "Salesforce CLI", "Code Analyzer / PMD", "Apex Tests 90%+", "Jest", "Playwright"],
  },
  {
    group: "Languages",
    items: ["Apex", "JavaScript", "TypeScript", "Python", "Node.js", "React", "SQL"],
  },
];

export interface Project {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  repo: string;
  flow: string[];
}

export const projects: Project[] = [
  {
    title: "Salesforce × GCP LLM Integration",
    problem: "Agents and CSMs spent time reading long case and account histories, and key qualification fields were often left blank.",
    solution:
      "Apex calls a Python Cloud Run service (JWT service-account auth) that masks PII with Cloud DLP and prompts Gemini on Vertex AI with a strict JSON schema. A cursor-paginated Queueable job enriches records and only fills blank fields; a taxonomy of valid picklist values grounds the model.",
    impact: "AI summaries and risk insights in one click; grounded outputs that can't invent picklist values.",
    stack: ["Apex", "LWC", "Cloud Run", "Gemini", "Vertex AI", "Cloud DLP", "Python"],
    repo: `${GH}/salesforce-gcp-llm-integration`,
    flow: ["Salesforce", "Cloud Run", "DLP masking", "Gemini", "Validated JSON"],
  },
  {
    title: "Event-Driven Notifications with n8n",
    problem: "Account teams missed time-sensitive follow-ups; reminders needed business-day escalation and manager routing.",
    solution:
      "Salesforce is the rules engine: admin-configurable compliance rules (Custom Settings), business-day stage escalation and owner→manager routing. Bulk JSON payloads go via Named Credentials to an n8n workflow that de-duplicates by idempotency key and posts adaptive cards with retries.",
    impact: "Zero-code rule changes for admins, safe dry-run mode, and duplicate-free delivery.",
    stack: ["Apex", "Queueable", "Custom Settings", "n8n", "Webhooks", "Adaptive Cards"],
    repo: `${GH}/salesforce-n8n-notification-engine`,
    flow: ["Scheduler", "Rule engine", "Webhook", "n8n", "Team chat"],
  },
  {
    title: "Human-in-the-Loop AI Review App",
    problem: "LLM suggestions from sales call transcripts can't be written to CRM blindly — humans must stay in control.",
    solution:
      "An LWC lets reviewers accept, edit or reject each AI suggestion. Apex enforces protected fields and USER_MODE, caches pending items in Platform Cache, and sends outcomes back asynchronously with idempotency keys and retry backoff so the model learns from human decisions.",
    impact: "Faster, trusted CRM updates and a closed feedback loop that improves the model over time.",
    stack: ["LWC", "Apex", "Platform Cache", "Named Credentials", "Queueable", "LLM"],
    repo: `${GH}/salesforce-hitl-ai-review`,
    flow: ["AI suggestions", "LWC review", "Guardrails", "CRM update", "Feedback loop"],
  },
  {
    title: "Agentic AI Delivery Lifecycle (ADLC)",
    problem: "SDLC handoffs (BRD → stories → design → build → review → QA → release) were slow and inconsistent.",
    solution:
      "A multi-agent framework: an orchestrator routes work across 10 specialist agents with per-agent memory, structured verdicts, loop-back routing with retry budgets and human approval gates. Python skills handle BRD parsing and Apex standards scanning; MCP connects Salesforce, Jira, Confluence and GitLab.",
    impact: "Discovery-to-design artifacts in hours, consistent standards, full traceability — humans approve every gate.",
    stack: ["Claude Code", "Agents", "Skills", "Memory", "MCP", "Python"],
    repo: `${GH}/agentic-sdlc-framework`,
    flow: ["BA", "PO", "Architect", "Build", "Review", "QA", "DevOps"],
  },
  {
    title: "Salesforce MCP Server (Read-Only)",
    problem: "AI assistants need org context, but giving them broad write access is unsafe.",
    solution:
      "A TypeScript MCP server exposing typed, least-privilege tools — describe objects, SELECT-only SOQL with row caps, record lookup — running as the user so sharing and FLS apply, with Zod validation and an audit trail.",
    impact: "Assistants answer org questions directly and safely, without copy-pasting data.",
    stack: ["TypeScript", "MCP SDK", "Zod", "Salesforce REST"],
    repo: `${GH}/salesforce-mcp-starter`,
    flow: ["AI assistant", "MCP", "Guards", "Salesforce API"],
  },
  {
    title: "AI Reporting Tool",
    problem: "Business users depend on admins to build ad-hoc reports.",
    solution: "Natural-language questions are turned into SOQL by an OpenAI model and rendered as reports inside an LWC.",
    impact: "Self-service reporting in plain English.",
    stack: ["LWC", "Apex", "OpenAI", "SOQL"],
    repo: `${GH}/AI-Reporting-Tool`,
    flow: ["Question", "LLM", "SOQL", "Report"],
  },
];

export interface Job {
  company: string;
  role: string;
  dates: string;
  points: string[];
}

export const experience: Job[] = [
  {
    company: "RingCentral",
    role: "Software Development Engineer, Salesforce",
    dates: "Nov 2024 – Present",
    points: [
      "Built a GCP-backed AI data-enrichment engine (Queueable Apex → Cloud Run → Gemini on Vertex AI) grounded in a BigQuery-synced taxonomy to prevent hallucinations.",
      "Owned 10+ Service Cloud AI features — sentiment, summaries and RAG-based similar-case / knowledge recommendations; monitored production and tuned prompts and grounding to reduce hallucinations.",
      "Delivered AI account-risk summaries — pilot expanded to a global production rollout.",
      "Built a human-in-the-loop AI recommendations app (LWC + Apex) and an event-driven n8n notification integration.",
      "Co-built a 10-agent Agentic AI Delivery Lifecycle with skills, memory and MCP connectors; built MCP servers and an AI test-assistant browser extension.",
      "Service Cloud case management, triggers, Flows, integrations, security hardening, WCAG fixes and CI/CD across 4 environments with zero rollbacks.",
    ],
  },
  {
    company: "ABSYZ Inc",
    role: "Salesforce Consultant · Senior Software Engineer",
    dates: "Jul 2022 – Nov 2024",
    points: [
      "FactSet (Finance): Pega / ANM / BDP integrations over REST/SOAP, Apex automation, Aura & LWC UIs.",
      "Cultural Vistas (Insurance): greenfield implementation with LWC, async Apex and a REST policy sync.",
      "Philips (Healthcare): Experience Cloud portal in LWC, Apex managed sharing and email services.",
      "Thermo Fisher (Life Sciences): data models, Batch Apex, migrations with Data Loader & Copado.",
    ],
  },
  {
    company: "Cognizant",
    role: "Salesforce Developer · Intern",
    dates: "Mar 2021 – Jul 2022",
    points: [
      "Extended ServiceMax field-service apps with LWC, Apex, triggers and Visualforce.",
      "Configured case management and multilingual support; deployments via Change Sets and ANT.",
    ],
  },
];

export const certifications = [
  { name: "Agentforce Specialist", year: "2025" },
  { name: "Data Cloud Consultant", year: "2025" },
  { name: "Service Cloud Consultant", year: "2025" },
  { name: "Platform Developer II", year: "2022" },
  { name: "Platform Developer I", year: "2022" },
  { name: "JavaScript Developer I", year: "2024" },
  { name: "AI Associate", year: "2023" },
  { name: "Platform App Builder", year: "2022" },
  { name: "Platform Administrator", year: "2022" },
  { name: "CPQ Specialist", year: "2023" },
  { name: "Salesforce Associate", year: "2023" },
  { name: "Copado Essentials+", year: "Copado" },
];

export const awards = [
  { title: "Ace of the Quarter", detail: "RingCentral" },
  { title: "Best Debut Award", detail: "RingCentral" },
  { title: "Applause / Quarterly Award ×2", detail: "ABSYZ — Q4 2022 and Q2 2024" },
  { title: "Best Find of the Year (Lateral)", detail: "ABSYZ" },
  { title: "Best Team Player", detail: "ABSYZ" },
  { title: "AI Hackathon Pitches", detail: "Real-time call coaching, missed-call recovery, voice-deepfake fraud detection" },
];

export const education = {
  degree: "B.E. Electronics & Communication",
  school: "BMS Institute of Technology & Management, Bengaluru",
  years: "2017 – 2021",
};
