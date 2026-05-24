import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaGraduationCap,
  FaPhoneAlt,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";

export default function ApplyNow() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FBFF] text-slate-950">
      {/* HERO */}
      <section className="relative px-5 pb-20 pt-36 sm:px-6 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#38BDF8_0%,transparent_28%),linear-gradient(135deg,#020617_0%,#063B63_50%,#2196F3_100%)]" />
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-[110px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-blue-100 backdrop-blur-xl">
              <FaGraduationCap />
              Apply Now
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Start Your Learning Journey With Yool Academy
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
              Register for professional training programs and build practical
              skills for your career, business, and digital future.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATION AREA */}
      <section className="relative z-10 -mt-8 px-5 pb-24 sm:px-6 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT CARD */}
          <aside className="rounded-[40px] bg-slate-950 p-8 text-white shadow-2xl lg:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2196F3] to-cyan-400 text-2xl">
              <FaGraduationCap />
            </div>

            <h2 className="mt-7 text-3xl font-black">
              Why Apply Today?
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Complete your application and our team will contact you with
              registration details, available programs, and next steps.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Practical market-based learning",
                "Professional trainers and mentorship",
                "Small focused classes",
                "Certificate after completion",
                "Career and business growth support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4"
                >
                  <FaCheckCircle className="shrink-0 text-cyan-300" />
                  <span className="text-sm font-bold text-slate-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-6">
              <h3 className="font-black">Need help?</h3>

              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <a
                  href="tel:+252617527288"
                  className="flex items-center gap-3 hover:text-cyan-300"
                >
                  <FaPhoneAlt /> +252 61 7527288
                </a>

                <a
                  href="mailto:yoolacademy4@gmail.com"
                  className="flex items-center gap-3 hover:text-cyan-300"
                >
                  <FaEnvelope /> yoolacademy4@gmail.com
                </a>

                <a
                  href="https://wa.me/252617527288"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-cyan-300"
                >
                  <FaWhatsapp /> WhatsApp Support
                </a>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <form className="rounded-[40px] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80 sm:p-8 lg:p-10">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.25em] text-[#2196F3]">
                Application Form
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                Submit Your Application
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-500">
                Fill in your details carefully. Our admissions team will review
                your application and contact you shortly.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <Input icon={<FaUser />} type="text" placeholder="Full Name" />
              <Input icon={<FaEnvelope />} type="email" placeholder="Email Address" />
              <Input icon={<FaPhoneAlt />} type="tel" placeholder="Phone Number" />

              <select className="h-16 w-full rounded-[22px] border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-500 outline-none transition focus:border-[#2196F3] focus:bg-white focus:ring-4 focus:ring-sky-100">
                <option>Select Program</option>
                <option>Graphic Design</option>
                <option>Video Editing</option>
                <option>Data Analysis</option>
                <option>Computer Applications</option>
                <option>Web Development</option>
                <option>Digital Marketing</option>
              </select>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <select className="h-16 w-full rounded-[22px] border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-500 outline-none transition focus:border-[#2196F3] focus:bg-white focus:ring-4 focus:ring-sky-100">
                <option>Preferred Schedule</option>
                <option>Morning Class</option>
                <option>Afternoon Class</option>
                <option>Evening Class</option>
                <option>Weekend Class</option>
              </select>

              <select className="h-16 w-full rounded-[22px] border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-500 outline-none transition focus:border-[#2196F3] focus:bg-white focus:ring-4 focus:ring-sky-100">
                <option>Education Level</option>
                <option>Student</option>
                <option>Graduate</option>
                <option>Professional</option>
                <option>Business Owner</option>
              </select>
            </div>

            <textarea
              rows="6"
              placeholder="Tell us about your learning goals..."
              className="mt-5 w-full resize-none rounded-[24px] border border-slate-200 bg-slate-50 px-6 py-5 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#2196F3] focus:bg-white focus:ring-4 focus:ring-sky-100"
            />

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-[22px] bg-gradient-to-r from-[#063B63] to-[#2196F3] px-8 py-5 font-black text-white shadow-xl shadow-sky-500/25 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Submit Application <FaArrowRight />
            </button>

            <p className="mt-5 text-center text-xs leading-6 text-slate-400">
              By submitting this form, you agree that Yool Academy may contact
              you regarding your application.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

function Input({ icon, type = "text", placeholder }) {
  return (
    <div className="flex h-16 items-center gap-4 rounded-[22px] border border-slate-200 bg-slate-50 px-5 transition focus-within:border-[#2196F3] focus-within:bg-white focus-within:ring-4 focus-within:ring-sky-100">
      <span className="text-[#2196F3]">{icon}</span>

      <input
        type={type}
        placeholder={placeholder}
        className="h-full w-full bg-transparent text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400"
      />
    </div>
  );
}