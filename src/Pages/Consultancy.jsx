import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Cpu,
  LineChart,
  ShieldCheck,
  Users,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "IT Consultancy",
    desc: "We help organizations build reliable digital systems, improve infrastructure, and select the right technology.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Business Development",
    desc: "Professional guidance for business growth, strategy, operations, branding, and long-term planning.",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Digital Transformation",
    desc: "We support companies in moving from traditional workflows to smart, automated, digital solutions.",
    icon: LineChart,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  },
];

const benefits = [
  "Professional business analysis",
  "Modern technology planning",
  "Digital workflow improvement",
  "Training and implementation support",
];

export default function Consultancy() {
  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden">
      {/* Hero */}
      <div className="relative px-6 pt-28 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-cyan-100 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-semibold text-sm">
              <ShieldCheck size={18} />
              Professional Consultancy Solutions
            </span>

            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Consultancy Services for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-500">
                Smart Business Growth
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-9 max-w-xl">
              We help businesses, institutions, and organizations improve their
              technology, operations, strategy, and digital performance through
              expert consultancy.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <button className="group px-7 py-4 rounded-2xl bg-emerald-600 text-white font-bold shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                Get Consultation
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </button>

              <button className="px-7 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold hover:border-emerald-500 transition">
                View Services
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-emerald-400/20 blur-3xl rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Consultancy meeting"
              className="relative w-full h-[420px] object-cover rounded-[2rem] shadow-2xl"
            />

            <div className="absolute -bottom-8 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/40 dark:border-slate-800">
              <div className="grid grid-cols-3 text-center gap-4">
                <div>
                  <h3 className="text-2xl font-black text-emerald-600">50+</h3>
                  <p className="text-sm text-slate-500">Projects</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-emerald-600">20+</h3>
                  <p className="text-sm text-slate-500">Partners</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-emerald-600">98%</h3>
                  <p className="text-sm text-slate-500">Success</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <div className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black">
              Our Core Consultancy Areas
            </h2>
            <p className="mt-5 text-slate-600 dark:text-slate-300 leading-8">
              We provide complete consultancy support from planning to execution,
              helping your organization become more efficient and competitive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition border border-slate-100 dark:border-slate-800"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-5 left-5 w-14 h-14 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-lg">
                      <Icon size={28} />
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-black">{service.title}</h3>
                    <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                      {service.desc}
                    </p>

                    <button className="mt-7 font-bold text-emerald-600 flex items-center gap-2">
                      Learn More <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.img
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
            alt="Professional team"
            className="w-full h-[420px] object-cover rounded-[2rem] shadow-2xl"
          />

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-emerald-600 font-bold uppercase tracking-widest">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-black leading-tight">
              We deliver practical solutions, not only advice.
            </h2>

            <p className="mt-6 text-slate-600 dark:text-slate-300 leading-8">
              Our consultancy approach focuses on real results. We study your
              current situation, identify problems, design solutions, and support
              your team during implementation.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-600" size={22} />
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex items-center gap-4 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-slate-100 dark:border-slate-800">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center">
                <Users size={28} />
              </div>
              <div>
                <h3 className="font-black text-xl">Expert Team Support</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Professional guidance from planning to success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-28">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-[2rem] p-10 sm:p-14 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-black">
            Ready to improve your organization?
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/90 leading-8">
            Contact our consultancy team today and let us help you build a
            smarter, stronger, and more digital organization.
          </p>

          <button className="mt-8 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-slate-100 transition">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}