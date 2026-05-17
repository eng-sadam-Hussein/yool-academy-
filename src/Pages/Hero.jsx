import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
  FaLaptopCode,
  FaChartLine,
  FaPalette,
  FaVideo,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaDatabase,
  FaBullhorn,
  FaProjectDiagram,
  FaMoneyBillWave,
  FaBriefcase,
  FaSearch,
  FaClipboardCheck,
} from "react-icons/fa";

import heroVideo from "../assets/hero-video.mp4";

const courses = [
  {
    icon: <FaPalette />,
    title: "Graphic Design",
    text: "Professional design training using Adobe Photoshop and Adobe Illustrator.",
  },
  {
    icon: <FaVideo />,
    title: "Video Editing",
    text: "Practical video editing skills using Adobe Premiere Pro.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Computer Applications",
    text: "Office productivity skills for students, employees, and professionals.",
  },
  {
    icon: <FaChartLine />,
    title: "Data Analysis",
    text: "Advanced Excel, Power BI, visualization, and smart decision-making.",
  },
];

const multimediaTools = [
  { icon: <FaPalette />, title: "Adobe Photoshop" },
  { icon: <FaVideo />, title: "Adobe Premiere Pro" },
  { icon: <FaPalette />, title: "Adobe Illustrator" },
  { icon: <FaFileWord />, title: "Microsoft Word" },
  { icon: <FaFileExcel />, title: "Microsoft Excel" },
  { icon: <FaFilePowerpoint />, title: "PowerPoint" },
  { icon: <FaDatabase />, title: "Microsoft Access" },
];

const programs = [
  { icon: <FaLaptopCode />, title: "Computer Application" },
  { icon: <FaPalette />, title: "Graphic Design" },
  { icon: <FaBullhorn />, title: "Digital Marketing" },
  { icon: <FaProjectDiagram />, title: "Project Management" },
  { icon: <FaChartLine />, title: "Data Analysis" },
  { icon: <FaMoneyBillWave />, title: "Financial Management for NGOs" },
  { icon: <FaBriefcase />, title: "Entrepreneurship & Business" },
  { icon: <FaSearch />, title: "Research Methodology" },
  { icon: <FaClipboardCheck />, title: "Monitoring & Evaluation" },
];

export default function Hero() {
  return (
    <main className="overflow-hidden bg-white dark:bg-slate-950">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

        <div className="relative z-10 flex min-h-screen items-center px-5 pt-32 sm:px-6 lg:pt-28">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl"
            >
              <p className="mb-4 text-base font-semibold text-blue-100 sm:text-xl">
                Technology Training & Consultancy Center
              </p>

              <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl md:text-7xl">
                Build Your Future Skills With Yool Academy
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                Yool Academy is a modern training and consultancy center that
                builds practical technical and professional skills for students,
                graduates, professionals, and organizations.
              </p>

              <div className="mt-10 grid w-full max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
                <Link
                  to="/apply"
                  className="flex h-14 items-center justify-center gap-3 rounded-xl bg-[#063B63] px-6 text-base font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#2196F3]"
                >
                  Apply Now <FaArrowRight />
                </Link>

                <Link
                  to="/contact"
                  className="flex h-14 items-center justify-center gap-3 rounded-xl bg-white px-6 text-base font-black text-[#063B63] shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  <FaPhoneAlt /> Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COURSES WE OFFER */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-6 lg:py-28">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63] sm:text-sm">
              Courses We Offer
            </span>

            <h2 className="mt-6 text-3xl font-black text-slate-950 sm:text-4xl md:text-6xl">
              Professional Courses For Your Career
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              Yool Academy provides practical, market-focused training designed
              to help learners build real skills for employment, business, and
              professional growth.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-[28px] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/5 transition duration-300 hover:-translate-y-3 hover:shadow-2xl sm:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#063B63] to-[#2196F3] text-2xl text-white transition group-hover:scale-110 sm:h-16 sm:w-16 sm:text-3xl">
                  {item.icon}
                </div>

                <h3 className="text-xl font-black text-slate-950 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MULTIMEDIA TOOLS */}
      <section className="bg-slate-50 px-5 py-24 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63] shadow-sm sm:text-sm">
              Multi-Media Course
            </span>

            <h2 className="mt-6 text-3xl font-black text-slate-950 sm:text-4xl md:text-5xl">
              Creative Design, Video Editing & Office Skills
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              This course combines creative media skills and computer
              applications to prepare learners for practical work, freelancing,
              business support, and digital content production.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {multimediaTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-[#063B63] transition group-hover:bg-[#063B63] group-hover:text-white">
                  {tool.icon}
                </div>

                <h3 className="text-base font-black text-slate-950 sm:text-lg">
                  {tool.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA ANALYSIS */}
      <section className="px-5 py-24 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63] sm:text-sm">
              Data Analysis Course
            </span>

            <h2 className="mt-6 text-3xl font-black text-slate-950 sm:text-4xl md:text-5xl">
              Turn Data Into Better Decisions
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              This course focuses on practical data analysis skills. Learners
              will understand how to organize, analyze, visualize, and present
              data professionally.
            </p>

            <div className="mt-8 rounded-3xl bg-gradient-to-r from-[#063B63] to-[#2196F3] p-6 text-white shadow-xl">
              <h3 className="text-2xl font-black">Courses</h3>
              <p className="mt-2 text-blue-50">
                Registration is open. Seats are limited for better learning
                quality.
              </p>
            </div>
          </motion.div>

          <div className="space-y-5">
            {[
              "Microsoft Excel Advanced Level",
              "Power BI & Data Visualization",
              "Data-Driven Decision Making",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-4 rounded-3xl border border-blue-100 bg-white p-5 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:gap-5 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#063B63] text-xl text-white sm:h-14 sm:w-14 sm:text-2xl">
                  <FaCheckCircle />
                </div>

                <h3 className="text-lg font-black text-slate-950 sm:text-xl">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL PROGRAMS */}
      <section className="bg-slate-950 px-5 py-24 text-white sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="rounded-full bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-wider text-blue-200 sm:text-sm">
              Academy Programs
            </span>

            <h2 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
              Complete Professional Training Areas
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="group rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white hover:text-[#063B63] sm:p-7"
              >
                <div className="mb-5 text-3xl text-blue-300 group-hover:text-[#063B63] sm:text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black sm:text-2xl">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63] sm:text-sm">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-3xl font-black text-slate-950 sm:text-4xl md:text-5xl">
              Quality Learning And Practical Training
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Yool Academy focuses on small class sizes, professional
              instructors, practical projects, and training programs based on
              real job market needs.
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-5">
            {[
              "Small classes for better training quality",
              "Professional and experienced instructors",
              "Market-based practical courses",
              "Career-focused learning experience",
              "Training and consultancy services",
            ].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 shadow-md"
              >
                <FaCheckCircle className="shrink-0 text-2xl text-[#2196F3]" />
                <p className="font-bold text-slate-800">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 sm:px-6 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl rounded-[34px] bg-gradient-to-r from-[#063B63] to-[#2196F3] p-8 text-center text-white shadow-2xl sm:rounded-[42px] sm:p-10 md:p-16"
        >
          <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">
            Start Building Your Future Today
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
            Seats are limited. Register early and join Yool Academy’s
            professional training programs.
          </p>

          <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              to="/apply"
              className="flex h-14 items-center justify-center rounded-full bg-white px-8 font-black text-[#063B63] transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Apply Now
            </Link>

            <Link
              to="/contact"
              className="flex h-14 items-center justify-center rounded-full border border-white/40 px-8 font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#063B63]"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}