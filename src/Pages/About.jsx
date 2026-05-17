import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUsers,
  FaRocket,
  FaBriefcase,
  FaCertificate,
  FaLaptopCode,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaChartLine,
  FaBullhorn,
  FaArrowRight,
  FaPlay,
  FaBullseye,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import aboutVideo from "../assets/about-video.mp4";

const stats = [
  { icon: <FaLaptopCode />, number: "10+", label: "Training Programs" },
  { icon: <FaUsers />, number: "Small", label: "Quality Classes" },
  { icon: <FaChartLine />, number: "100%", label: "Practical Focus" },
  { icon: <FaBullhorn />, number: "Market", label: "Based Skills" },
];

const features = [
  {
    icon: <FaGraduationCap />,
    title: "Practical Learning",
    desc: "Hands-on training focused on real skills, real tools, and real work situations.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Trainers",
    desc: "Learn from professional trainers with practical industry experience.",
  },
  {
    icon: <FaRocket />,
    title: "Career Growth",
    desc: "Programs designed to help learners improve employment and business opportunities.",
  },
  {
    icon: <FaBriefcase />,
    title: "Market-Based Skills",
    desc: "Courses based on current job market needs and professional standards.",
  },
  {
    icon: <FaCertificate />,
    title: "Certification",
    desc: "Students receive certificates after successfully completing their programs.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Tech-Driven Training",
    desc: "Modern digital training for students, graduates, professionals, and organizations.",
  },
];

const values = [
  "Quality learning and practical training",
  "Small class sizes for better support",
  "Professional ethics and excellence",
  "Innovation and continuous improvement",
  "Student success and career development",
];

export default function About() {
  return (
    <main className="overflow-hidden bg-white dark:bg-slate-950">
      {/* ABOUT HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#063B63] to-[#2196F3] px-5 pb-24 pt-40 text-white sm:px-6 lg:pt-48">
        <div className="absolute left-[-140px] top-20 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute bottom-[-140px] right-[-140px] h-96 w-96 rounded-full bg-cyan-300/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-wider text-blue-100 backdrop-blur-md sm:text-sm">
              About Yool Academy
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Building Practical Skills For A Better Future
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-blue-50 sm:text-lg">
              Yool Academy is a technology-driven training and consultancy
              center that builds practical technical and professional skills for
              students, graduates, professionals, and organizations.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:yoolacademy4@gmail.com"
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-5 font-bold backdrop-blur-md transition hover:bg-white hover:text-[#063B63]"
              >
                <FaEnvelope className="text-blue-200" />
                yoolacademy4@gmail.com
              </a>

              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-5 font-bold backdrop-blur-md">
                <FaMapMarkerAlt className="text-blue-200" />
                Mogadishu, Somalia
              </div>
            </div>

            <div className="mt-10 grid w-full max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                to="/programs"
                className="flex h-14 items-center justify-center gap-3 rounded-xl bg-white px-6 font-black text-[#063B63] shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Our Programs <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="flex h-14 items-center justify-center gap-3 rounded-xl border border-white/40 px-6 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#063B63]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-[34px] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-3xl bg-white p-6 text-[#063B63]"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-4 text-3xl font-black">{item.number}</h3>
                  <p className="font-bold text-slate-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-5 py-24 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63] sm:text-sm">
              Who We Are
            </span>

            <h2 className="mt-6 text-3xl font-black text-slate-950 sm:text-4xl md:text-5xl">
              A Modern Academy For Skills Development
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              We deliver innovative training and consultancy services designed
              to help learners gain practical knowledge, confidence, and
              professional capacity. Our programs focus on digital skills,
              multimedia, data analysis, business, and organizational
              development.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[34px] border border-blue-100 bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-blue-100" />
              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#063B63] to-[#2196F3] text-3xl text-white">
                  <FaBullseye />
                </div>
                <h3 className="text-3xl font-black text-[#063B63]">
                  Mission
                </h3>
                <p className="mt-4 leading-8 text-slate-600">
                  To empower learners with practical technical and professional
                  skills that match real market needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#063B63] to-[#2196F3] p-8 text-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-white/10" />
              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl text-white">
                  <FaEye />
                </div>
                <h3 className="text-3xl font-black">Vision</h3>
                <p className="mt-4 leading-8 text-blue-50">
                  To become a trusted training and consultancy center known for
                  quality, innovation, and professional impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="relative overflow-hidden bg-slate-50 px-5 py-24 sm:px-6 lg:py-28">
        <div className="absolute left-[-100px] top-20 h-96 w-96 rounded-full bg-blue-100 blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-100px] h-96 w-96 rounded-full bg-sky-100 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63] shadow-sm sm:text-sm">
              Academy In Action
            </span>

            <h2 className="mt-6 text-3xl font-black text-slate-950 sm:text-4xl md:text-5xl">
              See How Yool Academy Builds Real Skills
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Add your academy video here to show training sessions, student
              activities, workshops, and the learning environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[36px] border border-blue-100 bg-white p-3 shadow-2xl"
          >
            <video
              src={aboutVideo}
              controls
              className="h-[260px] w-full rounded-[28px] object-cover sm:h-[420px] lg:h-[520px]"
              poster=""
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 text-2xl text-[#063B63] shadow-xl backdrop-blur-md">
                <FaPlay />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63] sm:text-sm">
              What Makes Us Different
            </span>

            <h2 className="mt-6 text-3xl font-black text-slate-950 sm:text-4xl md:text-5xl">
              Training Designed For Real Results
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Every program is built to support real skills, career growth, and
              practical performance.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-[30px] bg-slate-50 p-7 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-[#063B63] transition group-hover:bg-[#063B63] group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="px-5 py-24 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-gradient-to-r from-[#063B63] to-[#2196F3] p-8 text-white shadow-2xl sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="rounded-full bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-wider text-blue-100">
                Core Values
              </span>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
                Professional Standards That Guide Our Work
              </h2>

              <p className="mt-6 leading-8 text-blue-50">
                Our values define how we teach, serve, and support learners and
                organizations.
              </p>
            </motion.div>

            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-md"
                >
                  <FaCheckCircle className="shrink-0 text-2xl text-white" />
                  <p className="font-bold">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="px-5 pb-24 sm:px-6 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3">
          <a
            href="mailto:yoolacademy4@gmail.com"
            className="flex items-center gap-4 rounded-3xl border border-blue-100 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <FaEnvelope className="text-3xl text-[#063B63]" />
            <div>
              <h3 className="font-black text-slate-950">Email</h3>
              <p className="text-sm font-semibold text-slate-600">
                yoolacademy4@gmail.com
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
            <FaMapMarkerAlt className="text-3xl text-[#063B63]" />
            <div>
              <h3 className="font-black text-slate-950">Location</h3>
              <p className="text-sm font-semibold text-slate-600">
                Mogadishu, Somalia
              </p>
            </div>
          </div>

          <a
            href="tel:+252617527288"
            className="flex items-center gap-4 rounded-3xl border border-blue-100 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <FaPhoneAlt className="text-3xl text-[#063B63]" />
            <div>
              <h3 className="font-black text-slate-950">Phone</h3>
              <p className="text-sm font-semibold text-slate-600">
                +252 61 7527288
              </p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}