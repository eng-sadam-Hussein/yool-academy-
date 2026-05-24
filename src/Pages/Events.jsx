import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaBullhorn,
  FaCode,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

import eventsHero from "../assets/events/events-hero.jpg";
import graphicWorkshop from "../assets/events/graphic-workshop.jpg";
import dataBootcamp from "../assets/events/data-bootcamp.jpg";
import webSeminar from "../assets/events/web-seminar.jpg";
import digitalMarketing from "../assets/events/digital-marketing.jpg";

const categories = ["All", "Workshop", "Bootcamp", "Seminar", "Marketing"];

const events = [
  {
    title: "Graphic Design Workshop",
    category: "Workshop",
    icon: <FaPaintBrush />,
    image: graphicWorkshop,
    date: "25 June 2026",
    time: "09:00 AM - 12:00 PM",
    location: "Yool Academy Campus",
    seats: "30 Seats",
    desc: "Learn modern poster design, branding basics, color theory, and Adobe design workflow through practical tasks.",
  },
  {
    title: "Data Analysis Bootcamp",
    category: "Bootcamp",
    icon: <FaChartLine />,
    image: dataBootcamp,
    date: "30 June 2026",
    time: "02:00 PM - 05:00 PM",
    location: "Computer Lab",
    seats: "25 Seats",
    desc: "Hands-on training in Excel dashboards, data cleaning, visualization, reports, and business analytics.",
  },
  {
    title: "Web Development Seminar",
    category: "Seminar",
    icon: <FaCode />,
    image: webSeminar,
    date: "05 July 2026",
    time: "10:00 AM - 01:00 PM",
    location: "Main Hall",
    seats: "50 Seats",
    desc: "Discover modern web development, frontend tools, responsive websites, and career paths in programming.",
  },
  {
    title: "Digital Marketing Masterclass",
    category: "Marketing",
    icon: <FaBullhorn />,
    image: digitalMarketing,
    date: "12 July 2026",
    time: "03:00 PM - 06:00 PM",
    location: "Yool Training Center",
    seats: "35 Seats",
    desc: "Learn social media strategy, content planning, ads basics, branding, and online growth techniques.",
  },
];

const stats = [
  { icon: <FaCalendarAlt />, value: "12+", label: "Events Yearly" },
  { icon: <FaUsers />, value: "500+", label: "Participants" },
  { icon: <FaLaptopCode />, value: "100%", label: "Practical Sessions" },
];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = useMemo(() => {
    if (activeCategory === "All") return events;
    return events.filter((event) => event.category === activeCategory);
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
              Yool Academy Events
            </span>

            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Learn, Connect & Grow Through Events
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
              Join our workshops, bootcamps, seminars, and professional events
              designed to help students and professionals gain practical skills
              and real market knowledge.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#events"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-white px-8 font-black text-[#063B63] shadow-2xl transition hover:-translate-y-1 hover:bg-cyan-50"
              >
                View Events <FaArrowRight />
              </a>

              <a
                href="tel:+252617527288"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/40 px-8 font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#063B63]"
              >
                Reserve Seat
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
              src={eventsHero}
              alt="Yool Academy events"
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

      {/* EVENTS */}
      <section id="events" className="px-5 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-[#063B63] dark:bg-blue-950 dark:text-blue-200">
              Upcoming Events
            </span>

            <h2 className="mt-6 text-3xl font-black sm:text-4xl lg:text-6xl">
              Professional Learning Events
            </h2>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Explore upcoming workshops, bootcamps, seminars, and masterclasses
              focused on practical learning.
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

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {filteredEvents.map((event, index) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group overflow-hidden rounded-[36px] bg-white shadow-xl transition hover:-translate-y-3 hover:shadow-2xl dark:bg-slate-900"
              >
                <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative h-72 overflow-hidden lg:h-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[#063B63] shadow-lg">
                      {event.icon}
                    </div>

                    <div className="absolute bottom-5 left-5 rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md">
                      {event.category}
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-black">{event.title}</h3>

                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                      {event.desc}
                    </p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200">
                        <FaCalendarAlt className="text-[#2196F3]" />
                        {event.date}
                      </div>

                      <div className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200">
                        <FaClock className="text-[#2196F3]" />
                        {event.time}
                      </div>

                      <div className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200">
                        <FaMapMarkerAlt className="text-[#2196F3]" />
                        {event.location}
                      </div>

                      <div className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200">
                        <FaUsers className="text-[#2196F3]" />
                        {event.seats}
                      </div>
                    </div>

                    <button className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#063B63] to-[#2196F3] px-6 py-4 font-black text-white shadow-lg transition hover:scale-[1.02]">
                      Register Event <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
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
              src={dataBootcamp}
              alt="Featured data analysis bootcamp"
              className="relative h-[430px] w-full rounded-[46px] rounded-tr-[150px] object-cover shadow-2xl sm:h-[540px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-[#063B63] shadow-sm dark:bg-slate-800 dark:text-blue-200">
              Featured Event
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
              Practical Bootcamps For Real Skills
            </h2>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
              Our events are designed to be practical, active, and useful.
              Participants learn through live demonstrations, guided tasks,
              group practice, and professional feedback.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Hands-on training and live practice",
                "Professional trainers and guided support",
                "Modern tools and real-world examples",
                "Certificates and networking opportunities",
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
              Reserve Your Seat <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[46px] bg-gradient-to-r from-[#020617] via-[#063B63] to-[#2196F3] p-8 text-center text-white shadow-2xl sm:p-12 lg:p-16">
          <FaCalendarAlt className="mx-auto text-5xl text-cyan-200" />

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black sm:text-4xl lg:text-6xl">
            Join The Next Yool Academy Event
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-50">
            Take part in practical workshops, bootcamps, and seminars that build
            real skills and professional confidence.
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