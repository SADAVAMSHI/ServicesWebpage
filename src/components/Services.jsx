import React from 'react';
import progressImg from '../assets/progress.png';

export default function Services() {
  const services = [
    { title: "Collaborative & partnership", category: "Office of multiple interest content" },
    { title: "We talk about our weight", category: "The hanger US Air force digital experimental" },
    { title: "Piloting digital confidence", category: "Delta faucet content, social, digital" }
  ];

  return (
    <section id="services" className="relative py-20 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">

      <div className="mt-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-16 text-gray-900">
          What we <span className="bg-green-100 px-4 sm:px-6 py-1 rounded-full inline-block text-green-900">can</span> <br/>
          <span className="relative inline-block">offer
            <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-1 bg-orange-400"></span>
          </span> you!
        </h2>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between py-10 border-t border-gray-200 group hover:bg-gray-50 transition-all px-4 cursor-pointer">
              <p className="text-gray-400 text-xs md:text-sm md:w-1/3 mb-2 md:mb-0 uppercase tracking-widest font-bold">
                {service.category}
              </p>
              <h3 className="text-2xl md:text-4xl font-medium md:w-1/2 group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>
              <div className="md:w-1/6 flex justify-end">
                <span className="text-4xl font-light group-hover:translate-x-4 transition-transform duration-300 text-gray-400">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}