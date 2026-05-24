import { Calendar, ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Why Digital Skills Matter",
    desc: "Discover why digital skills are becoming essential for students, professionals, and entrepreneurs in today’s world.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "Technology",
    date: "May 2026",
    author: "Yool Academy",
  },
  {
    title: "Top Graphic Design Tools",
    desc: "Explore the best graphic design tools for creating professional branding, social media content, and digital products.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    category: "Design",
    date: "May 2026",
    author: "Creative Team",
  },
  {
    title: "Career Growth Through Technology",
    desc: "Learn how technology can help you build a successful career and unlock global opportunities.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    category: "Career",
    date: "May 2026",
    author: "Career Coach",
  },
];

export default function Blog() {
  return (
    <section className="min-h-screen py-32 px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
            Our Latest Articles
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight text-slate-900 dark:text-white">
            Insights & Ideas From{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Yool Academy
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Explore technology, digital skills, design, business, and career
            development articles written to inspire your future.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-slate-900 rounded-[30px] overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-5 left-5">
                  <span className="px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-sm font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {post.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {post.author}
                  </div>
                </div>

                <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-snug group-hover:text-emerald-500 transition">
                  {post.title}
                </h2>

                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  {post.desc}
                </p>

                <button className="mt-8 inline-flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold hover:gap-5 transition-all">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[40px] p-14 shadow-2xl">
            <h2 className="text-4xl font-black text-white">
              Stay Updated With Our Latest Articles
            </h2>

            <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">
              Get insights about technology, education, design, freelancing,
              and digital transformation directly from Yool Academy.
            </p>

            <button className="mt-8 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:scale-105 transition">
              Explore More Blogs
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}