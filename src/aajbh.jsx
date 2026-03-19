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
  "Full Stack Java Developer",
  "Android Application Developer",
  "React Frontend Developer",
];

const stats = [
  { value: "03+", label: "production-ready applications built" },
  { value: "10+", label: "technologies explored and implemented" },
  { value: "04+", label: "real-world software systems developed" },
  { value: "100%", label: "focus on clean architecture and performance" },
];

const capabilities = [
  {
    icon: <FiLayers size={20} />,
    title: "Full Stack Web Development",
    text: "Building scalable web applications using React, Node.js, and modern frontend architecture.",
  },
  {
    icon: <FiDatabase size={20} />,
    title: "Backend APIs & Databases",
    text: "Designing backend systems with Firebase and MySQL while ensuring efficient data handling.",
  },
  {
    icon: <FiSmartphone size={20} />,
    title: "Android App Development",
    text: "Developing Android applications using Java and Firebase with real-world integrations.",
  },
  {
    icon: <FiZap size={20} />,
    title: "Interactive Frontend Systems",
    text: "Creating responsive UI systems using React, Tailwind CSS, and modern animation libraries.",
  },
];

const projects = [
  {
    title: "Cheat Watch",
    summary:
      "An AI-powered system designed to detect cheating behaviour during online exams using computer vision and mobile sensors.",
    tags: ["Android", "Firebase", "OpenCV"],
    impact: "Improves fairness and monitoring in remote examinations",
    href: "https://github.com/mohitladhe/cheat-watch",
  },
  {
    title: "Farmer Weather App",
    summary:
      "An Android application providing farmers with weather forecasts and crop insights using the OpenWeather API.",
    tags: ["Android", "Java", "API Integration"],
    impact: "Helps farmers plan crop activities using real-time weather data",
    href: "https://github.com/mohitladhe/farmer-weather-app",
  },
  {
    title: "Health Reminder App",
    summary:
      "A mobile application that schedules daily health activities and reminders using Firebase Realtime Database.",
    tags: ["Android", "Firebase", "Realtime Database"],
    impact: "Helps users maintain consistent health routines",
    href: "https://github.com/mohitladhe/health-reminder",
  },
];

const workflow = [
  {
    step: "01",
    title: "Understand the problem",
    text: "Analyze user requirements and define the system goals before starting development.",
  },
  {
    step: "02",
    title: "Design the architecture",
    text: "Plan scalable frontend, backend, and database systems to support long-term growth.",
  },
  {
    step: "03",
    title: "Build and iterate",
    text: "Develop features, test continuously, and refine the application based on feedback.",
  },
];

const stack = [
  "Java",
  "React",
  "Node.js",
  "Firebase",
  "MySQL",
  "Android",
  "Tailwind CSS",
  "Vite",
  "Git",
  "REST APIs",
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
      
      {/* Entire layout and structure remains unchanged */}

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
  );
}

export default App;