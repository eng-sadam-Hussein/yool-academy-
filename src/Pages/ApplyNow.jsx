export default function ApplyNow() {
  return (
    <section className="min-h-screen py-32 bg-slate-950 px-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-[40px] p-10 shadow-2xl">

        <div className="text-center">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white">
            Apply Now
          </h1>

          <p className="mt-6 text-slate-600 dark:text-slate-300">
            Join Yool Academy and start building your future today.
          </p>
        </div>

        <form className="mt-12 space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-transparent"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-transparent"
          />

          <select className="w-full p-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-transparent">
            <option>Select Program</option>
            <option>Graphic Design</option>
            <option>Video Editing</option>
            <option>Data Analysis</option>
          </select>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-transparent"
          ></textarea>

          <button className="w-full bg-gradient-to-r from-blue-700 to-emerald-600 text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition">
            Submit Application
          </button>

        </form>

      </div>
    </section>
  );
}