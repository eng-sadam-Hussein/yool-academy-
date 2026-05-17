const stats = [
  {
    number: "5K+",
    text: "GRADUATES",
  },
  {
    number: "50+",
    text: "Courses",
  },
  {
    number: "120+",
    text: "PARTNERS",
  },
  {
    number: "15K",
    text: "AWARDS",
  },
];

export default function Stats() {
  return (
    <section className="bg-base py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center ">
        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold mb-2 font-display text-white">
              {item.number}
            </h2>

            <p className="font-display text-white">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}