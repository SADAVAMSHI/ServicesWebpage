import React from 'react';
import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.svg';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';// 
export default function Hero() {
  
  // Notice the classes: Mobile sizes first (w-16), then Desktop sizes (md:w-28). 
  // This completely separates the mobile layout from the desktop layout!
  const teamImages = [
    // Cluster 1
    { src: img1 , classes: "left-[0%] top-[45%] w-14 h-14 md:left-[2%] md:top-[50%] md:w-28 md:h-28 z-10" }, 
    { src: img2 , classes: "left-[10%] top-[15%] w-16 h-16 md:left-[10%] md:top-[30%] md:w-32 md:h-32 z-20" }, 
    
    // Cluster 2
    { src: img3, classes: "left-[25%] top-[0%] w-16 h-16 md:left-[28%] md:top-[10%] md:w-32 md:h-32 z-10" }, 
    { src: img4, classes: "left-[35%] top-[55%] w-20 h-20 md:left-[35%] md:top-[50%] md:w-36 md:h-36 z-20" }, 
    
    // Cluster 3
    { src: img5, classes: "left-[58%] top-[10%] w-16 h-16 md:left-[52%] md:top-[20%] md:w-32 md:h-32 z-10" }, 
    { src: img6, classes: "left-[68%] top-[40%] w-14 h-14 md:left-[60%] md:top-[45%] md:w-28 md:h-28 z-20" }, 
    
    // Cluster 4
    { src:img7, classes: "right-[5%] top-[0%] w-16 h-16 md:right-[15%] md:top-[10%] md:w-36 md:h-36 z-10" }, 
    { src: img8, classes: "right-[0%] top-[30%] w-14 h-14 md:right-[2%] md:top-[50%] md:w-32 md:h-32 z-20" }, 
  ];

  return (
    // FIXED SPACING: Changed padding from 'pt-20 pb-40' to 'pt-12 pb-16' for mobile. 
    // Desktop stays safe with 'md:pt-32 md:pb-40'
    <section id="home" className="relative px-6 pt-12 pb-16 md:pt-32 md:pb-40 flex flex-col items-center text-center max-w-[1400px] mx-auto overflow-x-hidden">
      
      {/* 1. The Red/Black Left Curves */}
      {/* <img src={leftCurves} alt="Decorative curves" className="absolute left-[-2%] top-[35%] w-16 md:w-36 -z-20" /> */}
      
      {/* 2. The Purple Half-Circle */}
      <div className="absolute right-0 top-[35%] w-8 md:w-20 h-16 md:h-40 bg-[#8b5cf6] rounded-l-full -z-20 translate-x-[20%] md:translate-x-[40%]"></div>

      {/* --- TYPOGRAPHY --- */}
      
      <h1 className="text-[40px] md:text-[80px] font-medium leading-[1.1] text-gray-900 tracking-tight mb-8 z-10">
        The <span className="relative inline-block">thinkers
          <span className="absolute -bottom-1 md:-bottom-2 left-[-5%] w-[110%] h-[3px] md:h-[5px] bg-[#fbbf24] -z-10 rounded-full -rotate-2 skew-x-12"></span>
        </span> and <br />
        
        doers were <span className="relative inline-block px-2">changing
          <span className="absolute inset-0 bg-[#ffd6e8] rounded-[60px] -z-10 scale-[1.15] -rotate-2"></span>
        </span> <br />
        
        the <span className="bg-[#e6f4ea] text-green-900 px-4 md:px-6 py-1 md:py-2 rounded-[50px] inline-block mx-2 mt-2 md:mt-0 relative top-[-5px] md:top-[-10px]">status Quo</span> with
      </h1>

      <p className="text-gray-600 max-w-2xl text-sm md:text-[15px] leading-relaxed mb-6 md:mb-10 z-10">
        We are a team of strategists, designers communicators, researchers. Together, 
        we believe that progress only happens when you refuse to play things safe.
      </p>

      {/* --- IMAGES CLUSTERS --- */}
      
      {/* Reduced the mobile container height slightly to h-[250px] so there isn't dead space */}
      <div className="relative w-full max-w-5xl h-[250px] md:h-[400px] mt-4">
        {teamImages.map((img, index) => (
          <img 
            key={index}
            src={img.src} 
            alt={`Team member ${index + 1}`}
            className={`absolute rounded-full object-cover shadow-xl hover:scale-110 hover:z-50 transition-all duration-300 cursor-pointer border-[3px] md:border-[5px] border-white ${img.classes}`}
          />
        ))}
      </div>
      
    </section>
  );
}