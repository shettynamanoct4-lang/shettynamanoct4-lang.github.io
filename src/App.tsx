import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, BadgeCheck, Download, GraduationCap, Mail, MapPin, Menu, Moon, Sun, X } from "lucide-react";
import { about, awards, certifications, education, experience, profile, projects, skills, stats } from "./data";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "AI Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const GithubIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm text-cyan-600 dark:text-cyan-400">{eyebrow}</p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}

function Header() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur dark:border-white/5 dark:bg-navy-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-lg font-bold text-slate-900 dark:text-white">
          naman<span className="text-cyan-500">.dev</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-slate-600 transition hover:text-cyan-500 dark:text-slate-400">
              {n.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-white/10"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-1.5 rounded-lg bg-cyan-500 px-3.5 py-2 text-sm font-semibold text-navy-950 transition hover:bg-cyan-400 sm:flex"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="rounded-lg p-2 md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-slate-200 px-5 py-3 md:hidden dark:border-white/10">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="grid-bg relative overflow-hidden pt-32 pb-20">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl dark:bg-cyan-500/10" />
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="chip inline-flex items-center gap-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Open to Salesforce & AI engineering roles
          </span>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-navy-950 transition hover:bg-cyan-400">
              View AI projects
            </a>
            <a
              href={profile.resume}
              download
              className="flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold transition hover:border-cyan-400 dark:border-white/15 dark:text-white"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-slate-300 p-3 transition hover:border-cyan-400 dark:border-white/15">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-slate-300 p-3 transition hover:border-cyan-400 dark:border-white/15">
              <LinkedinIcon />
            </a>
          </div>
        </motion.div>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="card p-5"
            >
              <p className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <article key={p.title} className="card card-hover flex flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
            <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`} className="shrink-0 text-slate-500 transition hover:text-cyan-500">
              <GithubIcon />
            </a>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
            {p.flow.map((step, i) => (
              <span key={step} className="flex items-center gap-1.5">
                <span className="rounded border border-slate-200 px-1.5 py-0.5 dark:border-white/10">{step}</span>
                {i < p.flow.length - 1 && <span className="text-cyan-500">→</span>}
              </span>
            ))}
          </div>
          <dl className="mt-5 space-y-3 text-sm leading-relaxed">
            <div>
              <dt className="font-semibold text-slate-900 dark:text-slate-200">Problem</dt>
              <dd>{p.problem}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-slate-200">Solution</dt>
              <dd>{p.solution}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-slate-200">Impact</dt>
              <dd className="text-cyan-700 dark:text-cyan-300">{p.impact}</dd>
            </div>
          </dl>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {p.stack.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
          <a href={p.repo} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:underline dark:text-cyan-400">
            View code <ArrowUpRight className="h-4 w-4" />
          </a>
        </article>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <ol className="relative ml-3 border-l border-slate-200 dark:border-white/10">
      {experience.map((job) => (
        <li key={job.company} className="mb-12 ml-8 last:mb-0">
          <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-slate-50 dark:bg-navy-950" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.company}</h3>
            <span className="font-mono text-sm text-slate-500">{job.dates}</span>
          </div>
          <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">{job.role}</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed">
            {job.points.map((pt) => (
              <li key={pt} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                {pt}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="about" eyebrow="01 · about" title="Salesforce at the core, AI on top">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="space-y-4 text-lg leading-relaxed md:col-span-3">
              {about.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <div className="card space-y-4 p-6 md:col-span-2">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-500" /> {profile.location}</p>
              <p className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-cyan-500" /> {education.degree}</p>
              <p className="pl-6 text-sm text-slate-500">{education.school} · {education.years}</p>
              <p className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-cyan-500" /> 12x certified (Salesforce + Copado)</p>
              <a href={profile.trailblazer} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:underline dark:text-cyan-400">
                Trailblazer profile <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="02 · skills" title="Tech stack">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g) => (
              <div key={g.group} className="card card-hover p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white">{g.group}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="03 · ai projects" title="Generative & agentic AI on Salesforce">
          <p className="-mt-4 mb-8 max-w-3xl text-slate-500 dark:text-slate-400">
            Clean-room showcase implementations of patterns I've built professionally — written from scratch with sample data.
          </p>
          <Projects />
        </Section>

        <Section id="experience" eyebrow="04 · experience" title="Where I've worked">
          <Experience />
        </Section>

        <Section id="certifications" eyebrow="05 · credentials" title="Certifications & awards">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {certifications.map((c) => (
              <div key={c.name} className="card card-hover p-4">
                <BadgeCheck className="h-6 w-6 text-cyan-500" />
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{c.name}</p>
                <p className="font-mono text-xs text-slate-500">{c.year === "Copado" ? "Copado" : `Salesforce · ${c.year}`}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {awards.map((a) => (
              <div key={a.title} className="card flex gap-4 p-5">
                <Award className="h-6 w-6 shrink-0 text-amber-400" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{a.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="06 · contact" title="Let's build something">
          <div className="card grid-bg p-10 text-center">
            <p className="mx-auto max-w-xl text-lg">
              Looking for a Salesforce developer who can also ship production AI? I'd love to talk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-navy-950 transition hover:bg-cyan-400">
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold transition hover:border-cyan-400 dark:border-white/15 dark:text-white">
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold transition hover:border-cyan-400 dark:border-white/15 dark:text-white">
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </Section>
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-white/5">
        © {new Date().getFullYear()} {profile.name} · Built with React, Vite & Tailwind
      </footer>
    </>
  );
}
