export default function CampusSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Our Campus</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-1">Inside Yool Academy</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px]">
        {/* Main Office Image */}
        <div className="lg:col-span-1 lg:row-span-2">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" 
               className="w-full h-full object-cover rounded-xl" alt="Office" />
        </div>
        
        {/* Top Right Group Image */}
        <div className="lg:col-span-1">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
               className="w-full h-full object-cover rounded-xl" alt="Students" />
        </div>

        {/* Top Far Right Desktop Image */}
        <div className="lg:col-span-1">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" 
               className="w-full h-full object-cover rounded-xl" alt="Workstation" />
        </div>

        {/* Bottom Blue CTA Box */}
        <div className="lg:col-span-2 bg-[#005bb2] rounded-xl flex flex-col items-center justify-center p-8 text-white">
          <h3 className="text-lg font-semibold mb-6">Ready to start your journey?</h3>
          <button className="bg-white text-[#005bb2] px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
            Join The Cohort
          </button>
        </div>
      </div>
    </section>
  );
};