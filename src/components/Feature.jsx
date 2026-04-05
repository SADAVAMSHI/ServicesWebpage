export default function Feature({ title, description, reverse }) {
  return (
    <section className={`py-20 px-6 md:px-16 max-w-7xl mx-auto flex flex-col gap-12 items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      
      {/* Text Side */}
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl md:text-5xl font-medium leading-tight max-w-md">
          {title}
        </h2>
        <p className="text-gray-600 max-w-md text-sm md:text-base leading-relaxed">
          {description}
        </p>
        <button className="flex items-center gap-4 text-sm font-medium group uppercase tracking-wider mt-4 cursor-pointer">
          Read more 
          <span className="w-12 h-[1px] bg-black group-hover:w-16 transition-all duration-300 relative">
            <span className="absolute right-0 -top-[3px] border-r border-t border-black w-2 h-2 rotate-45"></span>
          </span>
        </button>
      </div>

      {/* Image Side (Placeholder) */}
      <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-50 to-transparent rounded-full opacity-50 blur-3xl -z-10"></div>
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-purple-500 shadow-xl relative z-10">
          {/* Here is your updated lazy-loading image! */}
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
            alt="Team meeting" 
            loading="lazy" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>
  );
}