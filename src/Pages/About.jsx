import PageHero from "../components/PageHero";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaBriefcase,
  FaBullseye,
  FaCertificate,
  FaChartLine,
  FaCheckCircle,
  FaEnvelope,
  FaEye,
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaPause,
  FaPhoneAlt,
  FaPlay,
  FaRedo,
  FaRocket,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

import aboutHero from "../assets/about/about-hero.jpg";
import aboutTeam from "../assets/about/about-team.jpg";
import aboutClass from "../assets/about/about-class.jpg";
import aboutStudent from "../assets/about/about-student.jpg";
import aboutWorkshop from "../assets/about/about-workshop.jpg";
import aboutTraining from "../assets/about/about-training.jpg";
import aboutOffice from "../assets/about/about-office.jpg";
import aboutVideo from "../assets/about/about-video.mp4";

const stats = [
  { icon: <FaLaptopCode />, number: "10+", label: "Professional Programs" },
  { icon: <FaUsers />, number: "Small", label: "Focused Classes" },
  { icon: <FaChartLine />, number: "100%", label: "Practical Learning" },
  { icon: <FaAward />, number: "Market", label: "Based Skills" },
];

const features = [
  {
    icon: <FaGraduationCap />,
    title: "Practical Learning",
    desc: "Students learn through hands-on projects, real tools, and guided practice.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Trainers",
    desc: "Our trainers focus on clear explanation, practical support, and skill development.",
  },
  {
    icon: <FaRocket />,
    title: "Career Growth",
    desc: "Our programs support employment, freelancing, entrepreneurship, and confidence.",
  },
  {
    icon: <FaBriefcase />,
    title: "Business Skills",
    desc: "We help learners and organizations improve professional performance.",
  },
  {
    icon: <FaCertificate />,
    title: "Certification",
    desc: "Students receive professional certificates after successful completion.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Digital Training",
    desc: "Modern technology-based education for the current digital economy.",
  },
];

const values = [
  "Quality education with practical outcomes",
  "Professional ethics and discipline",
  "Innovation, creativity, and digital growth",
  "Student support and career development",
  "Community impact and long-term success",
];

const gallery = [
  aboutHero,
  aboutClass,
  aboutStudent,
  aboutWorkshop,
  aboutTraining,
  aboutOffice,
];

export default function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = async () => {
    if (!videoRef.current) return;
    await videoRef.current.play();
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const resetVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <main className="overflow-hidden bg-[#F7FBFF] font-['Plus_Jakarta_Sans'] text-slate-950 dark:bg-[#020617] dark:text-white">
      <PageHero title="About Us" />

      {/* STATS */}
      <section className="relative z-10 -mt-14 px-5 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-5 rounded-[36px] bg-white p-5 shadow-2xl dark:bg-slate-900 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[28px] bg-slate-50 p-7 transition hover:-translate-y-2 hover:shadow-xl dark:bg-slate-800"
            >
              <div className="text-4xl text-[#2196F3]">{item.icon}</div>
              <h3 className="mt-4 text-3xl font-black">{item.number}</h3>
              <p className="font-bold text-slate-500 dark:text-slate-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-5 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-900/20" />

            <div className="relative grid grid-cols-2 gap-5">
              <img
                src={aboutTeam}
                alt="Professional team"
                className="h-[430px] w-full rounded-[44px] rounded-bl-full object-cover shadow-2xl"
              />

              <div className="space-y-5 pt-12">
                <img
                  src={aboutWorkshop}
                  alt="Workshop"
                  className="h-52 w-full rounded-full object-cover shadow-xl"
                />

                <img
                  src={aboutOffice}
                  alt="Office training"
                  className="h-64 w-full rounded-[40px] rounded-tr-full object-cover shadow-xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-[#063B63] dark:bg-blue-950 dark:text-blue-200">
              Who We Are
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
              A Modern Academy Built For Real Skills
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              We combine professional training, practical projects, digital
              tools, mentorship, and consultancy to help learners and
              organizations improve performance. Our education model is based on
              real market needs and measurable outcomes.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[30px] border border-blue-100 bg-white p-7 shadow-xl dark:border-white/10 dark:bg-slate-900">
                <FaBullseye className="text-4xl text-[#2196F3]" />
                <h3 className="mt-4 text-2xl font-black">Our Mission</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  To empower learners with practical skills, confidence, and
                  professional capacity.
                </p>
              </div>

              <div className="rounded-[30px] bg-gradient-to-br from-[#063B63] to-[#2196F3] p-7 text-white shadow-xl">
                <FaEye className="text-4xl" />
                <h3 className="mt-4 text-2xl font-black">Our Vision</h3>
                <p className="mt-3 leading-7 text-blue-50">
                  To become a trusted center for quality training, innovation,
                  and digital transformation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white px-5 py-24 dark:bg-slate-950 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-[#063B63] dark:bg-blue-950 dark:text-blue-200">
              Why Students Choose Us
            </span>

            <h2 className="mt-6 text-3xl font-black sm:text-4xl lg:text-6xl">
              Training Designed For Real Results
            </h2>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Yool Academy focuses on practical learning, personal support, and
              strong professional outcomes.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-[34px] bg-slate-50 p-8 shadow-lg transition hover:-translate-y-3 hover:shadow-2xl dark:bg-slate-900"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 transition group-hover:bg-[#2196F3]/20 dark:bg-blue-900/20" />

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-[#063B63] shadow-md transition group-hover:bg-[#063B63] group-hover:text-white dark:bg-slate-800">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-black">{item.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="relative overflow-hidden bg-[#EEF8FF] px-5 py-24 dark:bg-slate-900 sm:px-6 lg:py-32">
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-200 blur-[110px]" />
        <div className="absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-cyan-200 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-[#063B63] shadow-sm dark:bg-slate-800 dark:text-blue-200">
              <FaVideo />
              Academy In Action
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
              Watch How We Build Skills
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Our academy environment supports active learning, workshops,
              practical training, mentorship, and real project implementation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={playVideo}
                className="flex items-center gap-2 rounded-full bg-[#063B63] px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#2196F3]"
              >
                <FaPlay /> Play
              </button>

              <button
                onClick={pauseVideo}
                className="flex items-center gap-2 rounded-full border border-[#063B63] bg-white px-6 py-3 text-sm font-black text-[#063B63] shadow-lg transition hover:-translate-y-1"
              >
                <FaPause /> Pause
              </button>

              <button
                onClick={resetVideo}
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-700 shadow-lg transition hover:-translate-y-1"
              >
                <FaRedo /> Reset
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[48px] bg-blue-400/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[46px] bg-white p-3 shadow-2xl dark:bg-slate-800">
              <div className="relative overflow-hidden rounded-[36px] bg-slate-950">
                <video
                  ref={videoRef}
                  src={aboutVideo}
                  className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />

                {!isPlaying && (
                  <button
                    onClick={playVideo}
                    className="absolute inset-0 flex items-center justify-center bg-black/35"
                    aria-label="Play video"
                  >
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl text-[#063B63] shadow-2xl transition hover:scale-110">
                      <FaPlay />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-5 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-[#063B63] dark:bg-blue-950 dark:text-blue-200">
              Learning Environment
            </span>

            <h2 className="mt-6 text-3xl font-black sm:text-4xl lg:text-6xl">
              Modern, Active & Professional
            </h2>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Yool Academy gallery ${index + 1}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`h-72 w-full object-cover shadow-xl ${
                  index % 3 === 0
                    ? "rounded-[999px]"
                    : index % 3 === 1
                    ? "rounded-[42px] rounded-tr-[110px]"
                    : "rounded-[42px] rounded-bl-[110px]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="px-5 pb-24 sm:px-6 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[46px] bg-gradient-to-r from-[#020617] via-[#063B63] to-[#2196F3] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-blue-100">
                Core Values
              </span>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl lg:text-6xl">
                Standards That Guide Our Work
              </h2>

              <p className="mt-6 leading-8 text-blue-50">
                Our values define how we teach, serve, train, support, and build
                long-term professional impact.
              </p>
            </div>

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
                  <FaCheckCircle className="shrink-0 text-2xl text-cyan-200" />
                  <p className="font-bold">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA CONTACT */}
      <section className="px-5 pb-24 sm:px-6 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <a
            href="mailto:yoolacademy4@gmail.com"
            className="group rounded-[34px] border border-blue-100 bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900"
          >
            <FaEnvelope className="text-4xl text-[#2196F3]" />
            <h3 className="mt-5 text-xl font-black">Email</h3>
            <p className="mt-2 font-semibold text-slate-600 dark:text-slate-300">
              yoolacademy4@gmail.com
            </p>
          </a>

          <div className="rounded-[34px] border border-blue-100 bg-white p-7 shadow-lg dark:border-white/10 dark:bg-slate-900">
            <FaMapMarkerAlt className="text-4xl text-[#2196F3]" />
            <h3 className="mt-5 text-xl font-black">Location</h3>
            <p className="mt-2 font-semibold text-slate-600 dark:text-slate-300">
              Mogadishu, Somalia
            </p>
          </div>

          <a
            href="tel:+252617527288"
            className="rounded-[34px] border border-blue-100 bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900"
          >
            <FaPhoneAlt className="text-4xl text-[#2196F3]" />
            <h3 className="mt-5 text-xl font-black">Phone</h3>
            <p className="mt-2 font-semibold text-slate-600 dark:text-slate-300">
              +252 61 7527288
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}