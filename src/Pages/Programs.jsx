import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaCode,
  FaLaptopCode,
  FaPaintBrush,
  FaPlayCircle,
  FaStar,
  FaUsers,
  FaVideo,
  FaBullhorn,
} from "react-icons/fa";

import programsHero from "../assets/programs/programs-hero.jpg";
import graphicDesign from "../assets/programs/graphic-design.jpg";
import videoEditing from "../assets/programs/video-editing.jpg";
import dataAnalysis from "../assets/programs/data-analysis.jpg";
import computerApplications from "../assets/programs/computer-applications.jpg";
import webDevelopment from "../assets/programs/web-development.jpg";
import digitalMarketing from "../assets/programs/digital-marketing.jpg";

const categories = ["All", "Design", "Technology", "Business", "Media"];

const programs = [
  {
    title: "Graphic Design",
    category: "Design",
    icon: <FaPaintBrush />,
    image: graphicDesign,
    duration: "3 Months",
    level: "Beginner to Advanced",
    students: "Small Class",
    desc: "Master professional visual design, branding, social media posters, and creative layouts using modern design tools.",
    skills: ["Photoshop", "Illustrator", "Branding"],
  },
  {
    title: "Video Editing",
    category: "Media",
    icon: <FaVideo />,
    image: videoEditing,
    duration: "3 Months",
    level: "Practical",
    students: "Small Class",
    desc: "Learn professional video editing, storytelling, color correction, social media content, and cinematic workflows.",
    skills: ["Premiere Pro", "CapCut", "Motion"],
  },
  {
    title: "Data Analysis",
    category: "Business",
    icon: <FaChartLine />,
    image: dataAnalysis,
    duration: "4 Months",
    level: "Career Focused",
    students: "Small Class",
    desc: "Build strong data skills using Excel, dashboards, reporting, visualization, and business decision-making methods.",
    skills: ["Excel", "Power BI", "Reports"],
  },
  {
    title: "Computer Applications",
    category: "Technology",
    icon: <FaLaptopCode />,
    image: computerApplications,
    duration: "2 Months",
    level: "Foundation",
    students: "Small Class",
    desc: "Learn essential computer skills, Microsoft Office, internet use, typing, documents, spreadsheets, and presentations.",
    skills: ["MS Office", "Typing", "Internet"],
  },
  {
    title: "Web Development",
    category: "Technology",
    icon: <FaCode />,
    image: webDevelopment,
    duration: "5 Months",
    level: "Professional",
    students: "Project Based",
    desc: "Become a modern web developer by learning frontend, backend basics, responsive design, and real projects.",
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Digital Marketing",
    category: "Business",
    icon: <FaBullhorn />,
    image: digitalMarketing,
    duration: "3 Months",
    level: "Market Based",
    students: "Practical",
    desc: "Learn social media marketing, content planning, ads, branding, analytics, and online business growth strategies.",
    skills: ["SMM", "Ads", "Content"],
  },
];

const stats = [
  { icon: <FaBriefcase />, value: "6+", label: "Professional Programs" },
  { icon: <FaUsers />, value: "Small", label: "Focused Classes" },
  { icon: <FaStar />, value: "100%", label: "Practical Training" },
];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrograms = useMemo(() => {
    if (activeCategory === "All") return programs;
    return programs.filter((program) => program.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FBFF] font-['Plus_Jakarta_Sans'] text-slate-950 dark:bg-[#020617] dark:text-white">
      {/* HERO */}
      <section className="relative px-5 pb-28 pt-36 sm:px-6 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#38BDF8_0%,transparent_30%),linear-gradient(135deg,#020617_0%,#063B63_52%,#2196F3_100%)]" />
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-blue-100 backdrop-blur-xl">
              <FaStar className="text-cyan-200" />
              Yool Academy Programs
            </span>

            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Professional Programs For Real Career Growth
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
              Build practical digital, creative, business, and technical skills
              with market-based programs designed for students, graduates,
              professionals, and entrepreneurs.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#programs"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-white px-8 font-black text-[#063B63] shadow-2xl transition hover:-translate-y-1 hover:bg-cyan-50"
              >
                Explore Programs <FaArrowRight />
              </a>

              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/40 px-8 font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#063B63]"
              >
                Register Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-full bg-white/20 blur-3xl" />

            <img
              src={programsHero}
              alt="Yool Academy programs"
              className="relative h-[430px] w-full rounded-[48px] rounded-bl-[150px] object-cover shadow-2xl sm:h-[540px]"
            />

            <div className="absolute -bottom-8 left-6 right-6 rounded-[30px] border border-white/20 bg-white/15 p-6 text-white shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((item) => (
                  <div key={item.label}>
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-cyan-100">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black">{item.value}</h3>
                    <p className="text-xs font-semibold text-blue-100">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAM FILTERS */}
      <section id="programs" className="px-5 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-[#063B63] dark:bg-blue-950 dark:text-blue-200">
              Our Programs
            </span>

            <h2 className="mt-6 text-3xl font-black sm:text-4xl lg:text-6xl">
              Choose Your Learning Path
            </h2>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Each program is designed with practical lessons, project-based
              learning, and clear career outcomes.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-black transition ${
                  activeCategory === category
                    ? "bg-[#063B63] text-white shadow-lg"
                    : "bg-white text-slate-600 shadow-md hover:bg-blue-50 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredPrograms.map((program, index) => (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group overflow-hidden rounded-[36px] bg-white shadow-xl transition hover:-translate-y-3 hover:shadow-2xl dark:bg-slate-900"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[#063B63] shadow-lg">
                    {program.icon}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md">
                      {program.category}
                    </span>
                    <h3 className="mt-4 text-2xl font-black text-white">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <div className="p-7">
                  <p className="leading-7 text-slate-600 dark:text-slate-300">
                    {program.desc}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
                      <FaClock className="text-[#2196F3]" />
                      <p className="mt-2 text-xs font-bold text-slate-500">
                        Duration
                      </p>
                      <p className="text-sm font-black">{program.duration}</p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
                      <FaStar className="text-[#2196F3]" />
                      <p className="mt-2 text-xs font-bold text-slate-500">
                        Level
                      </p>
                      <p className="text-sm font-black">{program.level}</p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
                      <FaUsers className="text-[#2196F3]" />
                      <p className="mt-2 text-xs font-bold text-slate-500">
                        Class
                      </p>
                      <p className="text-sm font-black">{program.students}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {program.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-[#063B63] dark:bg-blue-950 dark:text-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#063B63] to-[#2196F3] px-6 py-4 font-black text-white shadow-lg transition hover:scale-[1.02]">
                    Learn More <FaArrowRight />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="bg-[#EEF8FF] px-5 py-24 dark:bg-slate-900 sm:px-6 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-full bg-blue-300/30 blur-3xl" />
            <img
              src={webDevelopment}
              alt="Featured web development program"
              className="relative h-[430px] w-full rounded-[46px] rounded-tr-[150px] object-cover shadow-2xl sm:h-[540px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-[#063B63] shadow-sm dark:bg-slate-800 dark:text-blue-200">
              Featured Program
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
              Learn By Building Real Projects
            </h2>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
              Our programs are not only theory. Students practice real tasks,
              build portfolios, improve confidence, and prepare for the modern
              job market.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Project-based learning approach",
                "Modern tools and professional workflows",
                "Portfolio building and practical assignments",
                "Guidance from experienced trainers",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#063B63] text-white">
                    <FaCheckCircle />
                  </span>
                  <p className="font-bold text-slate-700 dark:text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-[#063B63] px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#2196F3]">
              Start Learning <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-5 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[46px] bg-gradient-to-r from-[#020617] via-[#063B63] to-[#2196F3] p-8 text-center text-white shadow-2xl sm:p-12 lg:p-16">
          <FaPlayCircle className="mx-auto text-5xl text-cyan-200" />

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black sm:text-4xl lg:text-6xl">
            Start Your Professional Learning Journey Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-50">
            Choose your program, build practical skills, and prepare yourself
            for better opportunities in the digital world.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+252617527288"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-8 font-black text-[#063B63] transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Call To Register
            </a>

            <a
              href="mailto:yoolacademy4@gmail.com"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/30 px-8 font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#063B63]"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}