export default function Consultancy() {
  return (
    <section className="min-h-screen py-32 bg-slate-50 dark:bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl font-black text-slate-900 dark:text-white">
          Consultancy Services
        </h1>

        <p className="mt-8 text-lg text-slate-600 dark:text-slate-300 leading-8">
          We help businesses and organizations with professional consultancy solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold">IT Consultancy</h2>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold">Business Development</h2>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold">Digital Transformation</h2>
          </div>

        </div>
      </div>
    </section>
  );
}