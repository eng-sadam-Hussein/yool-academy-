export default function Testimonial() {
  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-5xl mx-auto bg-gray-100 rounded-3xl p-10 md:p-16 relative">

        <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 block">Success Story</span>
        
        <div className="absolute top-10 right-10 text-gray-200">
           <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C2.9124 8 2.01697 7.10457 2.01697 6V3L10.017 3V15C10.017 18.3137 7.3307 21 4.01697 21H2.01697Z" /></svg>
        </div>

        <blockquote className="text-2xl md:text-3xl italic text-gray-700 leading-snug mb-8 relative z-10">
          "Yool Academy didn't just teach me how to code; they taught me how to think like an engineer. Within three months of graduating, I landed a role at a global tech hub."
        </blockquote>

        <div className="flex items-center gap-4">
          <img src="https://i.pravatar.cc/150?u=amara" alt="Amara" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Amara Okafor</h4>
            <p className="text-gray-500 text-xs">Software Engineer at FinTech Global</p>
          </div>

        </div>

      </div>
    </section>
  );
};