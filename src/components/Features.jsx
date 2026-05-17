const features = [
  {
    title: "Expert Mentorship",
    desc: "Learn directly from senior engineers and designers currently working at top global tech firms.",
  },
  {
    title: "Hands-on Projects",
    desc: "Build real-world applications and professional portfolios that stand out to recruiters immediately.",
  },
  {
    title: "Global Community",
    desc: "Join a network of thousands of ambitious alumni across Africa and the global tech ecosystem.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
       <p className="text-base max-w-2xl mx-auto mb-4">
        OUR EDGE
        </p>
       
        <h2 className="text-4xl font-bold mb-4 text-primary font-display">
          Why Choose Yool Academy?
        </h2>

        <p className="text-primary max-w-2xl mx-auto mb-16">
          We provide the roadmap for your success in the digital economy.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mx-20">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white sm: p-8 rounded-3xl shadow-sm hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 mb-6">

              </div>

              <h3 className="text-2xl font-display text-primary mb-4">
                {item.title}
              </h3>

              <p className="text-primary">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}