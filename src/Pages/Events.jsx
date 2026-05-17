export default function Events() {
  return (
    <section className="min-h-screen py-32 bg-white dark:bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white">
            Upcoming Events
          </h1>

          <p className="mt-6 text-slate-600 dark:text-slate-300 text-lg">
            Workshops, bootcamps, seminars, and professional events.
          </p>
        </div>

        <div className="space-y-8 mt-20">

          <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold">Graphic Design Workshop</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Learn modern design skills with Adobe tools.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold">Data Analysis Bootcamp</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Hands-on training in data visualization and analytics.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}