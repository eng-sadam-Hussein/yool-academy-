export default function Blog() {
  return (
    <section className="min-h-screen py-32 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <div className="text-center">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white">
            Our Blog
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            Technology, education, and career development articles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold">
              Why Digital Skills Matter
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold">
              Top Graphic Design Tools
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold">
              Career Growth Through Technology
            </h2>
          </div>

        </div>

      </div>
    </section>
  );
}