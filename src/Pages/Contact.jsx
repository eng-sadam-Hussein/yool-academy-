import {
  FaEnvelope,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white pt-28 dark:bg-slate-950">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-bold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
              Contact Us
            </span>

            <h1 className="mt-6 text-5xl font-black text-slate-900 dark:text-white md:text-6xl">
              Get In Touch With Yool Academy
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Su’aal ma qabtaa? Waxaad nala soo xiriiri kartaa si aad u hesho
              faahfaahin ku saabsan koorsooyinka, diiwaangelinta, iyo adeegyada
              consultancy-ga.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-2xl text-white">
                <FaPhoneAlt />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Phone
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                +252 61 000 0000
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
                <FaEnvelope />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Email
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                info@yoolacademy.com
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-600 text-2xl text-white">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Location
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Somalia
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <form className="rounded-[35px] border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                Send Us a Message
              </h2>

              <div className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-slate-300 bg-transparent px-5 py-4 outline-none transition focus:border-emerald-600 dark:border-slate-700 dark:text-white"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-slate-300 bg-transparent px-5 py-4 outline-none transition focus:border-emerald-600 dark:border-slate-700 dark:text-white"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-2xl border border-slate-300 bg-transparent px-5 py-4 outline-none transition focus:border-emerald-600 dark:border-slate-700 dark:text-white"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full resize-none rounded-2xl border border-slate-300 bg-transparent px-5 py-4 outline-none transition focus:border-emerald-600 dark:border-slate-700 dark:text-white"
                ></textarea>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-700 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="rounded-[35px] bg-gradient-to-br from-slate-950 to-blue-950 p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-black">Connect With Us</h2>

              <p className="mt-5 leading-8 text-slate-300">
                Yool Academy waxay diyaar u tahay inay kaa caawiso tababar,
                xirfad dhisid, iyo consultancy professional ah.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="https://wa.me/252610000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-emerald-600"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span className="font-bold">Chat on WhatsApp</span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-blue-600"
                >
                  <FaFacebookF className="text-2xl" />
                  <span className="font-bold">Follow on Facebook</span>
                </a>

                <a
                  href="mailto:info@yoolacademy.com"
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-cyan-600"
                >
                  <FaEnvelope className="text-2xl" />
                  <span className="font-bold">Email Us</span>
                </a>
              </div>

              <div className="mt-10 rounded-3xl bg-white/10 p-6">
                <h3 className="text-xl font-black">Office Hours</h3>
                <p className="mt-3 text-slate-300">
                  Saturday - Thursday: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}