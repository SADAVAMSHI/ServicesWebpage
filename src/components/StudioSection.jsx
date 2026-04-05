import React from 'react';
import tomorrowImg from '../assets/tomorrow.png'; 
import progressImg from '../assets/progress.png';

export default function StudioSection() {
  const services = [
    { title: "Collaborative & partnership", category: "Office of multiple interest content" },
    { title: "We talk about our weight", category: "The hanger US Air force digital experimental" },
    { title: "Piloting digital confidence", category: "Delta faucet content, social, digital" }
  ];

  return (
    <section id="studio" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-32 gap-12">
        <div className="md:w-1/2 z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight text-gray-900">
            Tomorrow should <br/> be <span className="relative inline-block">
              better
              <span className="absolute bottom-2 left-0 w-full h-1 bg-orange-400"></span>
            </span> than <span className="bg-green-100 px-2 sm:px-4 py-1 rounded-full text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-6xl">today</span>
          </h2>
          <p className="text-gray-600 max-w-md mb-8 text-lg">
            We are a team of strategists, designers, communicators, researchers. 
            Together, we believe that progress only happens when you refuse to play things safe.
          </p>
          <button className="text-sm font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
            Read more &mdash;&rarr;
          </button>
        </div>
        
        <div className="md:w-1/2 flex justify-center relative">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-[400px] lg:w-[480px] md:h-[400px] lg:h-[480px] rounded-full border-[8px] sm:border-[12px] border-white shadow-2xl overflow-hidden z-10">
            <img src={tomorrowImg} alt="Team collaboration" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rotate-12 -z-10"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-40 gap-12">
        <div className="md:w-1/2 z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight text-gray-900">
            <span className="bg-green-100 px-2 sm:px-4 py-1 rounded-full text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-6xl">See</span> how we can <br/>
            help you <span className="relative inline-block">
              progress
              <span className="absolute bottom-2 left-0 w-full h-1 bg-orange-400"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-md mb-8 text-lg">
            We add a layer of fearless insights and action that allows change makers 
            to accelerate their progress in areas such as brand, design, digital, and social research.
          </p>
          <button className="text-sm font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
            Read more &mdash;&rarr;
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-[400px] lg:w-[480px] md:h-[400px] lg:h-[480px] rounded-full border-[8px] sm:border-[12px] border-white shadow-2xl overflow-hidden z-10">
            <img src={progressImg} alt="Digital progress" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-10 -right-4 w-20 h-20 bg-red-500 -z-10 -rotate-12"></div>
        </div>
      </div>
    </section>
  );
}
