import {
  FiArrowRight,
  FiCode,
  FiCompass,
  FiDatabase,
  FiDribbble,
  FiGithub,
  FiGrid,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMonitor,
  FiSend,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

import Aurora from "./components/reactbits/Aurora";
import Dock from "./components/reactbits/Dock";
import Magnet from "./components/reactbits/Magnet";
import SpotlightCard from "./components/reactbits/SpotlightCard";
import TextType from "./components/reactbits/TextType";
import ProfileCard from "./components/reactbits/ProfileCard";
import avatar from "./assets/avatar3.png";
import iconPattern from "./assets/iconpattern.png";

const roles = [
  "Full Stack Web Developer",
  "Android Developer",
  "Backend & API Developer",
];

const stats = [
  { value: "03+", label: "applications developed and deployed" },
  { value: "10+", label: "technologies used across projects" },
  { value: "04+", label: "complete systems built end-to-end" },
  { value: "100%", label: "focus on functionality and performance" },
];

const capabilities = [
  {
    icon: <FiLayers size={20} />,
    title: "Full Stack Development",
    text: "Building complete web applications using React, Node.js, Express.js and structured backend systems.",
  },
  {
    icon: <FiDatabase size={20} />,
    title: "Backend & Cloud Integration",
    text: "Building backend systems using Firebase (Firestore, Realtime DB) and integrating AWS services like Cognito, S3, and Lambda for scalable application features.",
  },
  {
    icon: <FiSmartphone size={20} />,
    title: "Android Application Development",
    text: "Creating Android apps using Java with Firebase integration and real-time features.",
  },
  {
    icon: <FiZap size={20} />,
    title: "Problem Solving & Logic Building",
    text: "Applying DSA concepts and structured problem-solving to build efficient and scalable solutions.",
  },
];

const projects = [
  {
    title: "Paw Connect",
    summary:
      "An Android app for pet care with health tracking, vet consultation, and AI-based symptom analysis.",
    tags: ["Android", "Firebase", "AWS", "AI Integration"],
    impact: "Improves pet care management and medical access",
    href: "https://github.com/mohitladhe/cheat-watch",
  },
  {
    title: "Feed With Love",
    summary:
      "An Android platform connecting food donors and volunteers to distribute surplus food efficiently.",
    tags: ["Android", "Firebase", "AWS"],
    impact: "Helps reduce food waste and support people in need",
    href: "https://github.com/mohitladhe/farmer-weather-app",
  },
  {
    title: "Vitals",
    summary:
      "A real-time EV dashboard to monitor vehicle data and control components using cloud integration.",
    tags: ["Android", "Firebase", "AWS", "IOT"],
    impact: "Enhances EV monitoring and performance tracking",
    href: "https://github.com/mohitladhe/health-reminder",
  },
];

const workflow = [
  {
    step: "01",
    title: "Understand the problem",
    text: "Analyze requirements and define system goals before starting development.",
  },
  {
    step: "02",
    title: "Design the system",
    text: "Plan backend, frontend, and database structure for scalability and maintainability.",
  },
  {
    step: "03",
    title: "Build and improve",
    text: "Develop features, test regularly, and refine based on results and feedback.",
  },
];

const stack = [
  "Java",
  "React",
  "Node.js",
  "Express.js",
  "Firebase (Firestore, Realtime DB)",
  "MySQL",
  "Android",
  "Tailwind CSS",
  "Vite",
  "Git",
  "REST APIs",
  "AWS (Cognito, S3, Lambda)",
];

const sectionClass = "relative py-2 pb-16 md:py-4 md:pb-20";
const sectionKickerClass =
  "mb-4 text-[0.72rem] font-bold uppercase tracking-[0.34em] text-[#ffd166]";
const sectionTitleClass =
  "max-w-[12ch] text-[clamp(2rem,4vw,3.8rem)] leading-[0.98] tracking-[-0.04em] sm:max-w-[16ch]";
const glassPanelClass =
  "border border-white/10 [background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] shadow-[0_20px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)]";
const cardPanelClass =
  "border border-white/8 [background:linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03)),rgba(10,11,18,0.82)] shadow-[0_16px_70px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[20px]";
const navLinkClass =
  "border-0 bg-transparent text-white/60 transition duration-200 hover:-translate-y-px hover:text-white";
const ctaPrimaryClass =
  "inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#ffd166]/25 bg-[linear-gradient(135deg,rgba(255,123,84,0.9),rgba(255,209,102,0.92))] px-6 py-4 text-[#171717] shadow-[0_18px_60px_rgba(255,123,84,0.25)] transition duration-200 hover:-translate-y-0.5 sm:w-auto";
const ctaSecondaryClass =
  "inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-6 py-4 text-white backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 sm:w-auto";
const techPillClass =
  "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[0.76rem] uppercase tracking-[0.12em] text-slate-50/70 backdrop-blur-md";

function App() {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const dockItems = [
    {
      label: "Home",
      icon: <FiCompass className="text-lg text-white" />,
      onClick: () => scrollToSection("home"),
    },
    {
      label: "Projects",
      icon: <FiGrid className="text-lg text-white" />,
      onClick: () => scrollToSection("projects"),
    },
    {
      label: "Services",
      icon: <FiCode className="text-lg text-white" />,
      onClick: () => scrollToSection("services"),
    },
    {
      label: "Process",
      icon: <FiLayers className="text-lg text-white" />,
      onClick: () => scrollToSection("process"),
    },
    {
      label: "Contact",
      icon: <FiSend className="text-lg text-white" />,
      onClick: () => scrollToSection("contact"),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),radial-gradient(circle_at_top,rgba(255,123,84,0.16),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.12),transparent_28%),linear-gradient(180deg,#070b17_0%,#05070f_55%,#04050c_100%)] [background-size:110px_110px,110px_110px,auto,auto,auto]">
      <div className="pointer-events-none fixed inset-0 opacity-[0.18] mix-blend-soft-light [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18)_0_1px,transparent_1px),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12)_0_1px,transparent_1px),radial-gradient(circle_at_40%_70%,rgba(255,255,255,0.12)_0_1px,transparent_1px)] [background-size:180px_180px]" />

      <main className="relative overflow-hidden text-white">
        <section id="home" className="relative isolate">
          <div className="pointer-events-none absolute inset-x-0 -top-[10%] h-[min(90vh,820px)] opacity-[0.85] saturate-[1.2]">
            <Aurora
              amplitude={1.15}
              blend={0.45}
              speed={0.8}
              colorStops={["#ff7b54", "#ffd166", "#34d399"]}
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-24 pt-6 sm:px-8 lg:px-10">
            <header
              className={`${glassPanelClass} mb-10 flex items-center justify-between rounded-full px-4 py-3 backdrop-blur-xl`}
            >
              <button
                type="button"
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-3 text-left"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-semibold text-white">
                  ML
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                    Mohit Ladhe
                  </span>
                  <span className="block text-xs text-white/50">
                    Portfolio concept for Vite + React
                  </span>
                </span>
              </button>

              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className={navLinkClass}
                >
                  Projects
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className={navLinkClass}
                >
                  Services
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className={navLinkClass}
                >
                  Contact
                </button>
              </div>
            </header>

            <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/70 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
                  Available for selected freelance builds
                </div>

                <p className={sectionKickerClass}>Portfolio website concept</p>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] sm:text-6xl lg:text-7xl">
                  I design and build
                  <span className="block font-['Cormorant_Garamond'] text-white/95 italic font-semibold leading-[0.92]">
                    digital experiences
                  </span>
                  <span className="block bg-linear-to-r from-[#ffd166] via-[#ff7b54] to-[#34d399] bg-clip-text text-transparent">
                    that feel impossible to ignore.
                  </span>
                </h1>

                <div className="mt-6 min-h-14 text-xl text-white/[0.85] sm:text-2xl">
                  <TextType
                    as="div"
                    text={roles}
                    typingSpeed={64}
                    pauseDuration={1800}
                    deletingSpeed={30}
                    textColors={["#ffd166", "#9ae6b4", "#f9a8d4"]}
                    cursorClassName="text-[#ffd166]"
                  />
                </div>

                <p className="max-w-2xl text-base leading-8 text-white/[0.66] sm:text-lg">
                  I focus on building real-world applications with clean
                  architecture, reliable backend systems, and practical user
                  functionality. My work involves developing Android apps, APIs,
                  and full stack solutions that solve actual problems.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Magnet padding={140} magnetStrength={4}>
                    <button
                      type="button"
                      onClick={() => scrollToSection("projects")}
                      className={ctaPrimaryClass}
                    >
                      View projects
                      <FiArrowRight />
                    </button>
                  </Magnet>

                  <Magnet padding={120} magnetStrength={5}>
                    <a
                      href="mailto:mohit@example.com"
                      className={ctaSecondaryClass}
                    >
                      Start a build
                      <FiMail />
                    </a>
                  </Magnet>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {stack.map((item) => (
                    <span key={item} className={techPillClass}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative flex items-start justify-center lg:self-start lg:justify-end">
                <div className="absolute inset-x-8 top-10 h-40 rounded-full bg-[#ff7b54]/25 blur-3xl lg:left-24 lg:right-0 lg:top-[-1.5rem]" />
                {/* <PixelCard
                  variant="pink"
                  gap={7}
                  speed={55}
                  className="h-[420px] w-full max-w-[360px] bg-slate-950/50 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-sm"
                >
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-7">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/[0.45]">Featured profile</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white">Mohit</h2>
                        <p className="mt-1 text-sm text-white/60">Front-end engineer focused on premium web craft</p>
                      </div>
                      <span className="rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                        Shipping now
                      </span>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
                      <div className="flex items-center gap-4">
                        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#ff7b54] via-[#ffd166] to-[#34d399] text-lg font-bold text-slate-950">
                          MK
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-white">Interactive Portfolio System</p>
                          <p className="text-sm text-white/[0.55]">React Bits, Tailwind, Vite, motion, responsive layout</p>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                          <p className="text-white/[0.4]">Specialty</p>
                          <p className="mt-2 font-medium text-white">Immersive UI</p>
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                          <p className="text-white/[0.4]">Focus</p>
                          <p className="mt-2 font-medium text-white">Performance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </PixelCard> */}
                <div className="relative z-10 w-full max-w-[420px] lg:-mt-0 lg:translate-x-10 xl:-mt-0 xl:translate-x-14">
                  <ProfileCard
                    name="Mohit Ladhe"
                    title="Full Stack & Android Developer"
                    handle="mohitladhe"
                    status="Available for opportunities"
                    contactText="Contact Me"
                    avatarUrl={avatar}
                    showUserInfo={false}
                    enableTilt={true}
                    enableMobileTilt
                    onContactClick={() => console.log("Contact clicked")}
                    behindGlowColor="rgba(125, 190, 255, 0.67)"
                    iconUrl={iconPattern}
                    behindGlowEnabled
                    innerGradient="linear-gradient(145deg,#1D20218c 0%,#e3731744 100%)"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
            {stats.map((item) => (
              <SpotlightCard
                key={item.label}
                className={`${glassPanelClass} min-h-[170px] border-white/8 bg-white/[0.04] p-6`}
                spotlightColor="rgba(255, 209, 102, 0.18)"
              >
                <p className="text-4xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-4 max-w-[18ch] text-sm leading-7 text-white/[0.58]">
                  {item.label}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section id="projects" className={sectionClass}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className={sectionKickerClass}>Selected work</p>
                <h2 className={sectionTitleClass}>
                  Focused on building functional and scalable applications.
                </h2>
              </div>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
                I work on developing complete solutions — from backend APIs to
                frontend interfaces — with emphasis on performance, structure,
                and real-world usability.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <SpotlightCard
                  key={project.title}
                  className={`${cardPanelClass} min-h-[320px] border-white/8 bg-white/[0.04] p-7`}
                  spotlightColor={
                    index === 1
                      ? "rgba(52, 211, 153, 0.20)"
                      : "rgba(255, 123, 84, 0.20)"
                  }
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/[0.45]">
                        0{index + 1}
                      </span>
                      <span className="text-xs uppercase tracking-[0.22em] text-white/[0.35]">
                        Case study
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/60">
                      {project.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`${techPillClass} text-[11px]`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-8">
                      <p className="mb-5 text-sm text-[#ffd166]">
                        {project.impact}
                      </p>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#ffd166]"
                      >
                        Open concept
                        <FiArrowRight />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className={sectionClass}>
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <div>
              <p className={sectionKickerClass}>What I bring</p>
              <h2 className={sectionTitleClass}>
                A structured approach to building reliable software systems.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
                The goal here is to help you start from a strong interactive
                foundation. Swap the content arrays, links, and profile details,
                and you already have a polished personal brand site ready to
                customize.
              </p>

              {/* <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/DavidHDev/react-bits"
                  target="_blank"
                  rel="noreferrer"
                  className={ctaSecondaryClass}
                >
                  React Bits repo
                  <FiGithub />
                </a>
                <a
                  href="https://reactbits.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className={ctaSecondaryClass}
                >
                  React Bits docs
                  <FiDribbble />
                </a>
              </div> */}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {capabilities.map((item, index) => (
                <SpotlightCard
                  key={item.title}
                  className={`${glassPanelClass} min-h-[230px] border-white/8 bg-white/[0.04] p-6`}
                  spotlightColor={
                    index % 2 === 0
                      ? "rgba(255, 123, 84, 0.20)"
                      : "rgba(52, 211, 153, 0.18)"
                  }
                >
                  <div className="relative z-10">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/[0.58]">
                      {item.text}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className={sectionClass}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-10">
              <p className={sectionKickerClass}>Build rhythm</p>
              <h2 className={sectionTitleClass}>
                The process behind high-energy interfaces that still feel
                controlled.
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {workflow.map((item) => (
                <div
                  key={item.step}
                  className={`${cardPanelClass} min-h-[260px] rounded-[1.75rem] p-8`}
                >
                  <p className="text-sm font-medium tracking-[0.25em] text-[#ffd166]">
                    {item.step}
                  </p>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/[0.58]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`${sectionClass} pb-28`}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div
              className={`${cardPanelClass} rounded-[2rem] p-[clamp(1.6rem,4vw,3rem)]`}
            >
              <div>
                <p className={sectionKickerClass}>Let's build</p>
                <h2 className={`${sectionTitleClass} max-w-3xl`}>
                  Looking to build a practical and scalable application?
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                  I am open to working on real-world projects involving Android
                  development, backend systems, and full stack applications.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Magnet padding={140} magnetStrength={4}>
                  <a
                    href="mailto:mohit@example.com"
                    className={ctaPrimaryClass}
                  >
                    Email me
                    <FiMail />
                  </a>
                </Magnet>

                <a
                  href="https://github.com/mohitladhe"
                  target="_blank"
                  rel="noreferrer"
                  className={ctaSecondaryClass}
                >
                  GitHub
                  <FiGithub />
                </a>
                <a
                  href="https://linkedin.com/in/mohitladhe"
                  target="_blank"
                  rel="noreferrer"
                  className={ctaSecondaryClass}
                >
                  LinkedIn
                  <FiLinkedin />
                </a>
                {/* <a
                  href="https://dribbble.com/mohitladhe"
                  target="_blank"
                  rel="noreferrer"
                  className={ctaSecondaryClass}
                >
                  Dribbble
                  <FiMonitor />
                </a> */}
              </div>
            </div>
          </div>
        </section>

        <div className="fixed inset-x-0 bottom-4 z-50 hidden justify-center md:flex">
          <div className="rounded-3xl">
            <Dock items={dockItems} className="bg-black/55 backdrop-blur-xl" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
