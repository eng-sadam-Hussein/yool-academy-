import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[260px] bg-cover bg-center lg:min-h-[360px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative z-10 flex min-h-[260px] items-center justify-center px-6 pt-20 lg:min-h-[360px]">
          <h1 className="text-3xl font-black text-white md:text-5xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          <InfoCard
            icon={<FaEnvelope />}
            title="Mail Here"
            text="info@yoolacademy.com"
          />

          <InfoCard
            icon={<FaMapMarkerAlt />}
            title="Visit Here"
            text="Mogadishu, Somalia"
          />

          <InfoCard
            icon={<FaPhoneAlt />}
            title="Call Here"
            text="+252 61 000 0000"
          />
        </div>
      </section>

      {/* FORM */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
            Get In Touch
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Start the conversation with us and unlock endless possibilities.
          </p>

          <form className="mt-10 rounded-[35px] border border-slate-200 bg-white p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 md:p-10">
            
            <div className="grid gap-5 md:grid-cols-2">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type="email" />
              <Input placeholder="Phone Number" />
              <Input placeholder="Subject" />
            </div>

            <textarea
              placeholder="Write your message here..."
              className="mt-5 h-40 w-full resize-none rounded-[24px] border border-slate-200 bg-slate-50 px-6 py-5 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
            />

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-10 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[30px] bg-cover bg-center px-6 py-16 text-center sm:px-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/95 to-cyan-500/95" />

          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/90">
              Get Started Instantly!
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl">
              Get the only new update from this newsletter
            </h2>

            <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 rounded-full bg-white p-2 shadow-2xl sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 flex-1 rounded-full px-6 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button className="h-14 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 text-sm font-black text-white transition hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-50 text-lg text-sky-500">
          {icon}
        </div>

        <div className="text-left">
          <h3 className="text-sm font-black text-slate-950">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-6 text-slate-500">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function Input({ type = "text", placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-16 w-full rounded-[22px] border border-slate-200 bg-slate-50 px-6 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
    />
  );
}