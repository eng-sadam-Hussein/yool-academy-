export default function Academy() {
  return (
    <section className="min-h-screen py-32 bg-slate-50 dark:bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl font-black text-slate-900 dark:text-white">
          Our Academy
        </h1>

        <p className="mt-8 text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-8">
          Yool Academy offers practical learning experiences designed to help
          students gain real-world technology and business skills.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold">Practical Training</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Learn through projects and hands-on experience.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold">Professional Mentors</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Industry experts guide every training program.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold">Certification</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Receive recognized certificates after completion.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}