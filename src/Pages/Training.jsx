import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCertificate,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
  FaBriefcase,
  FaRocket,
  FaStar,
  FaImages,
} from "react-icons/fa";

import training1 from "../assets/training/training1.png";
import training2 from "../assets/training/training2.png";
import training3 from "../assets/training/training3.png";
import training4 from "../assets/training/training4.png";

const trainingPrograms = [
  "Computer Applications",
  "Graphic Design",
  "Video Editing",
  "Data Analysis",
  "Digital Marketing",
  "Project Management",
  "Business & Entrepreneurship",
  "Research Methodology",
];

const benefits = [
  {
    icon: <FaLaptopCode />,
    title: "Practical Skills",
    desc: "Students learn by practicing real tools, real tasks, and real workplace projects.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Trainers",
    desc: "Professional trainers guide students step by step until they build confidence.",
  },
  {
    icon: <FaUsers />,
    title: "Student Activities",
    desc: "Training sessions include teamwork, presentations, workshops, and practical exercises.",
  },
  {
    icon: <FaCertificate />,
    title: "Certificate",
    desc: "Students receive certificates after completing their training successfully.",
  },
];

const gallery = [
  {
    image: training1,
    title: "Classroom Training",
    desc: "Students learning practical computer and professional skills.",
  },
  {
    image: training2,
    title: "Student Practice",
    desc: "Hands-on learning with real tools and guided exercises.",
  },
  {
    image: training3,
    title: "Workshops",
    desc: "Interactive sessions focused on real market-based skills.",
  },
  {
    image: training4,
    title: "Learning Environment",
    desc: "A supportive academy environment for student growth.",
  },
];

export default function Academy() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative px-5 pb-20 pt-36 sm:px-6 lg:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-200/40 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63] shadow-sm">
              <FaRocket />
              Yool Academy Training
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl md:text-6xl">
              Practical Training For Real Career Skills
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Yool Academy provides practical training programs that help
              students, graduates, professionals, and organizations build real
              skills for technology, business, creativity, and career growth.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center gap-3 rounded-full bg-[#063B63] px-7 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#2196F3]"
              >
                View Programs <FaArrowRight />
              </Link>

              <Link
                to="/apply"
                className="inline-flex items-center gap-3 rounded-full border border-[#063B63] bg-white px-7 py-4 text-sm font-black text-[#063B63] shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Register Now
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[42px] bg-gradient-to-br from-[#063B63]/20 to-[#2196F3]/20 blur-2xl" />

            <div className="relative grid gap-4 rounded-[36px] bg-white p-3 shadow-2xl">
              <img
                src={training1}
                alt="Yool Academy training students"
                className="h-[280px] w-full rounded-[28px] object-cover sm:h-[420px]"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur-md">
                <h3 className="text-lg font-black text-[#063B63]">
                  Learn • Practice • Build
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Real training sessions with real student activities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRAINING PROGRAMS */}
      <section className="px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63]">
              Training Programs
            </span>

            <h2 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
              Skills Students Can Learn
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our training programs are designed to match real market needs and
              help learners become more confident and job-ready.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-lg transition hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#063B63] transition group-hover:bg-[#063B63] group-hover:text-white">
                  <FaStar />
                </div>
                <h3 className="text-lg font-black text-slate-950">
                  {program}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT GALLERY */}
      <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63] shadow-sm">
                <FaImages />
                Training Gallery
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Student Training Moments
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Halkan waxaad ku soo bandhigi kartaa sawirrada ardayda ka soo
                qayb gashay tababarrada Yool Academy.
              </p>
            </div>

            <div className="rounded-[30px] bg-white p-6 shadow-xl">
              <p className="font-bold leading-8 text-slate-600">
                Replace the images inside{" "}
                <span className="font-black text-[#063B63]">
                  src/assets/training/
                </span>{" "}
                with your own student photos. Use names:
                training1.png, training2.png, training3.png, training4.png.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group overflow-hidden rounded-[30px] bg-white shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-[#063B63]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRAIN WITH US */}
      <section className="px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63]">
              Why Our Training Works
            </span>

            <h2 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
              Built For Real Results
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group rounded-[30px] bg-slate-50 p-7 shadow-lg transition hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-[#063B63] transition group-hover:bg-[#063B63] group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gradient-to-br from-[#063B63] to-[#2196F3] px-5 py-20 text-white sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-wider text-blue-100">
                Training Process
              </span>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
                From Learning To Real Practice
              </h2>

              <p className="mt-5 leading-8 text-blue-50">
                We guide students through a clear learning process so they can
                understand, practice, build, and present their skills.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Learn the concept clearly",
                "Practice with real tools",
                "Complete guided tasks",
                "Build a practical project",
                "Receive feedback and certificate",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-black text-[#063B63]">
                    {index + 1}
                  </div>
                  <p className="font-bold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[36px] bg-slate-50 p-8 shadow-xl sm:p-10 lg:grid-cols-2 lg:p-14">
          <div>
            <span className="rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-[#063B63] shadow-sm">
              Who Can Join
            </span>

            <h2 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
              Training For Everyone Who Wants To Grow
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our training page is designed for students, graduates, job
              seekers, professionals, business owners, and organizations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Students",
              "Graduates",
              "Job seekers",
              "Professionals",
              "Business owners",
              "NGO workers",
              "Organizations",
              "Freelancers",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold shadow-sm"
              >
                <FaCheckCircle className="text-[#063B63]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 sm:px-6 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-slate-950 shadow-2xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="p-8 text-white sm:p-12 lg:p-16">
              <span className="rounded-full bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-wider text-blue-100">
                Start Training
              </span>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
                Join Yool Academy Training Today
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Choose your training program, register online, and start
                building practical professional skills.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-[#063B63] transition hover:bg-blue-50"
                >
                  View Programs <FaBriefcase />
                </Link>

                <Link
                  to="/apply"
                  className="inline-flex items-center gap-3 rounded-full bg-[#2196F3] px-7 py-4 text-sm font-black text-white transition hover:bg-[#063B63]"
                >
                  Apply Now <FaArrowRight />
                </Link>
              </div>
            </div>

            <img
              src={training2}
              alt="Yool Academy training class"
              className="h-[330px] w-full object-cover lg:h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}