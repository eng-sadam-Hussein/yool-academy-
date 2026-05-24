export default function PageHero({ title }) {
  return (
    <section
      className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center pt-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/75" />

      <div className="relative z-10 px-6 text-center">
        <h1 className="text-4xl font-black text-white drop-shadow-xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}