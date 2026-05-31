"use client";

import { useState } from "react";
import Image from "next/image";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function SectionShell({ children }) {
  return <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-20 sm:px-10">{children}</div>;
}

export function TopNav({ links }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(5,10,20,0.72)] backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto max-w-7xl px-6 py-4 sm:px-10">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="font-display text-xl tracking-wide text-white transition hover:text-[var(--accent)]">
            SS
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted)] transition hover:text-white focus:outline-none focus-visible:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full border border-[var(--line)] bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Let&apos;s connect
          </a>
        </div>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-1 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 text-sm text-[var(--muted)] transition hover:text-white focus:outline-none focus-visible:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function HeroSection({ hero, stats }) {
  return (
    <section id="home" className="section-anchor mx-auto max-w-7xl px-6 pb-18 pt-16 sm:px-10 sm:pt-24">
      <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="animated-rise">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
            Business Analyst Portfolio
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
            {hero.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-[var(--accent-strong)] sm:text-2xl">
            {hero.role}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            {hero.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-center font-semibold text-slate-950 transition hover:scale-[1.01] hover:bg-[#7af0cb]"
            >
              View featured work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--line)] px-6 py-3 text-center font-semibold text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Contact me
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="panel rounded-3xl p-5">
                <p className="text-3xl font-display text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animated-fade lg:justify-self-end">
          <div className="panel rounded-[2rem] p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-[var(--accent)]">Who I am</p>
            <p className="mt-4 text-2xl font-semibold text-white">
              Analyst focused on translating messy data into business clarity.
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              I work across analytics, operations, and product questions to help teams move from fragmented signals to clear decisions.
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
              <p className="text-sm uppercase tracking-[0.26em] text-[var(--accent-strong)]">What I am doing right now</p>
              <p className="mt-3 text-base leading-7 text-white">
                {hero.currentFocus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection({ about, strengths }) {
  return (
    <section id="about" className="section-anchor">
      <SectionHeading eyebrow="About" title="A strategic analyst with product instincts" description={about} />
      <div className="grid gap-5 md:grid-cols-3">
        {strengths.map((strength) => (
          <article key={strength.title} className="panel rounded-[1.75rem] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">{strength.kicker}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{strength.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{strength.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection({ projects }) {
  const [viewer, setViewer] = useState(null);
  const [zoom, setZoom] = useState(1);

  function openViewer(project) {
    setViewer(project);
    setZoom(1);
  }

  function closeViewer() {
    setViewer(null);
    setZoom(1);
  }

  function zoomIn() {
    setZoom((current) => Math.min(current + 0.2, 2.6));
  }

  function zoomOut() {
    setZoom((current) => Math.max(current - 0.2, 0.8));
  }

  function resetZoom() {
    setZoom(1);
  }

  return (
    <>
      <section id="projects" className="section-anchor">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Case-study style work focused on measurable outcomes"
          description="These projects are presented like analyst case studies: each one frames the business problem, the analytical approach, and the decision-ready impact."
        />
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="panel grid gap-8 overflow-hidden rounded-[2rem] p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-8"
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {project.category}
                  </span>
                  <span className="text-sm text-[var(--muted)]">{project.period}</span>
                </div>
                <h3 className="mt-4 text-3xl font-display text-white">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{project.summary}</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Problem</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Solution</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{project.solution}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Tech stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-sm text-white">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative flex-1 overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#111111] p-4">
                  {(() => {
                    const useNaturalImageHeight =
                      project.title === "Digital Marketing Analytics for WatchSports.com" ||
                      project.title === "Traffic Risk Intelligence Dashboard" ||
                      project.title === "Swire Coca-Cola Revenue & Cart Abandonment Analysis";
                    const primaryFrameClass = useNaturalImageHeight
                      ? "group relative block w-full overflow-hidden rounded-[1.1rem] text-left"
                      : "group relative block aspect-[1000/760] w-full overflow-hidden rounded-[1.1rem] text-left";
                    const secondaryFrameClass = useNaturalImageHeight
                      ? "group relative block w-full overflow-hidden rounded-[1rem] text-left"
                      : "group relative block aspect-[1000/760] w-full overflow-hidden rounded-[1rem] text-left";

                    return (
                      <>
                        <button
                          type="button"
                          onClick={() => openViewer(project)}
                          className={primaryFrameClass}
                        >
                          <div className="h-full w-full overflow-hidden rounded-[1.1rem] bg-[#f7f5f0]">
                            <Image
                              src={project.image}
                              alt={project.imageAlt}
                              width={1000}
                              height={760}
                              className="block h-full w-full rounded-[1.1rem] object-contain bg-[#f7f5f0]"
                            />
                          </div>
                          <div className="pointer-events-none absolute inset-x-4 bottom-4 flex justify-end">
                            <span className="rounded-full border border-white/10 bg-[rgba(10,10,10,0.82)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white transition group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                              Click to zoom
                            </span>
                          </div>
                        </button>
                  {project.secondaryImage ? (
                    <div className="mt-4 rounded-[1.1rem] border border-white/8 bg-[#0b0b0b] p-4">
                      <button
                        type="button"
                        onClick={() =>
                          openViewer({
                            ...project,
                            title: `${project.title} — Secondary View`,
                            image: project.secondaryImage,
                          })
                        }
                        className={secondaryFrameClass}
                      >
                        <Image
                          src={project.secondaryImage}
                          alt={`${project.imageAlt} secondary view`}
                          width={1000}
                          height={760}
                          className="block h-full w-full rounded-[1rem] object-contain bg-[#f7f5f0]"
                        />
                        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex justify-end">
                          <span className="rounded-full border border-white/10 bg-[rgba(10,10,10,0.82)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white transition group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                            Click to zoom
                          </span>
                        </div>
                      </button>
                    </div>
                  ) : null}
                      </>
                    );
                  })()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {viewer ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(0,0,0,0.82)] px-4 py-6 backdrop-blur-sm"
          onClick={closeViewer}
        >
          <div
            className="viewer-panel w-full max-w-6xl rounded-[1.75rem] border border-white/10 bg-[#0b0b0b] p-4 sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">{viewer.category}</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">{viewer.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={zoomOut} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  Zoom out
                </button>
                <button type="button" onClick={resetZoom} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  Reset
                </button>
                <button type="button" onClick={zoomIn} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  Zoom in
                </button>
                <button type="button" onClick={closeViewer} className="rounded-full bg-[var(--accent-strong)] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:bg-[#ffc487]">
                  Close
                </button>
              </div>
            </div>
            <div className="viewer-stage overflow-auto rounded-[1.25rem] border border-white/8 bg-[#050505] p-4">
              <div
                className="viewer-canvas mx-auto origin-top transition-transform duration-200"
                style={{ transform: `scale(${zoom})` }}
              >
                <Image
                  src={viewer.image}
                  alt={viewer.imageAlt}
                  width={1000}
                  height={760}
                  className="block h-auto w-full rounded-[1rem] bg-[#f7f5f0]"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" className="section-anchor">
      <SectionHeading
        eyebrow="Skills & Tools"
        title="A balanced toolkit across analytics, product, and modern data systems"
        description="The throughline across these tools is practical decision support: building systems and analysis that teams can actually use."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="panel rounded-[1.75rem] p-6">
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{group.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full bg-white/6 px-3 py-1 text-sm text-white">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection({ experience, education }) {
  return (
    <section id="experience" className="section-anchor">
      <SectionHeading
        eyebrow="Experience"
        title="Recent roles shaped by analytics, operations, and AI-enabled systems"
        description="This mix of startup, research, and teaching work shows both hands-on technical depth and cross-functional communication."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="panel rounded-[2rem] p-6 sm:p-8">
          <div className="space-y-8">
            {experience.map((role) => (
              <article key={`${role.company}-${role.title}`} className="border-b border-white/8 pb-8 last:border-b-0 last:pb-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{role.title}</h3>
                    <p className="mt-1 text-base text-[var(--accent-strong)]">{role.company}</p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{role.period}</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                  {role.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Education</p>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <article key={item.degree}>
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.school}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--accent-strong)]">{item.period}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Open for</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
              <p>Business analyst roles that connect data quality, product thinking, and operational decision-making.</p>
              <p>Product analyst work focused on funnels, experimentation, customer insights, and stakeholder storytelling.</p>
              <p>Consulting-style project work where clean analysis needs to drive a concrete business recommendation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ contact }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meeddlaa", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks, your message was sent. I will follow up soon.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong while sending your message. Please try again.");
    }
  }

  return (
    <section id="contact" className="section-anchor">
      <div className="panel rounded-[2rem] p-8 sm:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about analyst roles, data products, and decision-focused projects"
          description="Use the form below so visitors can reach out without a public email address appearing on the page."
        />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="_subject" value="New portfolio inquiry" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-white outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Work email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-white outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Subject</span>
              <input
                type="text"
                name="subject"
                required
                placeholder="Role, project, collaboration, or speaking opportunity"
                className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-white outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Message</span>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Share a few details and I will follow up directly."
                className="w-full rounded-[1.5rem] border border-white/10 bg-white/4 px-4 py-3 text-white outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />
            </label>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-full bg-[var(--accent-strong)] px-6 py-3 text-center font-semibold text-slate-950 transition hover:scale-[1.01] hover:bg-[#ffc487]"
            >
              {status === "submitting" ? "Sending..." : "Submit inquiry"}
            </button>
            <p className="text-sm leading-6 text-[var(--muted)]">
              This form is connected through Formspree, so inquiries can reach you without exposing your email address on the page.
            </p>
            {message ? (
              <p
                className={`text-sm leading-6 ${
                  status === "success" ? "text-[var(--accent)]" : "text-[var(--accent-strong)]"
                }`}
              >
                {message}
              </p>
            ) : null}
          </form>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">Elsewhere online</p>
            <p className="text-base leading-7 text-[var(--muted)]">
              These links give recruiters and collaborators a quick way to verify your background before reaching out.
            </p>
            <div className="flex flex-wrap gap-3">
              {contact.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm font-semibold text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Privacy-first contact</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Your email is no longer shown on the page. This section is now designed for form-based outreach instead of direct email exposure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ name }) {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-10 pt-4 text-sm text-[var(--muted)] sm:px-10">
      <p>{name} • Built with Next.js and Tailwind CSS • Replace placeholders with your own screenshots and portfolio links anytime.</p>
    </footer>
  );
}
