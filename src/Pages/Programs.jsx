const programs = [
  "Graphic Design",
  "Video Editing",
  "Data Analysis",
  "Computer Applications",
  "Web Development",
  "Digital Marketing",
];

export default function Programs() {
  return (
    <section className="min-h-screen py-32 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white">
            Our Programs
          </h1>

          <p className="mt-6 text-slate-600 dark:text-slate-300 text-lg">
            Professional training programs designed for the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg"
            >
              <h2 className="text-2xl font-bold">{program}</h2>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Professional practical training with expert instructors.
              </p>

              <button className="mt-8 bg-gradient-to-r from-blue-700 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                Learn More
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}