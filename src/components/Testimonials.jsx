import React from 'react';

const Testimonials = () => {
  // Manual coordinates that adapt for mobile and desktop
  const floatingFaces = [
    // Left Side
    { id: 1, top: '5%', left: '5%', size: '60px', mdSize: '90px' },   
    { id: 2, top: '25%', left: '2%', size: '40px', mdSize: '60px' },    
    { id: 3, top: '50%', left: '10%', size: '80px', mdSize: '150px' },  
    { id: 4, top: '85%', left: '5%', size: '50px', mdSize: '80px' },   

    // Right Side
    { id: 5, top: '15%', right: '15%', size: '45px', mdSize: '70px' },  
    { id: 6, top: '8%', right: '5%', size: '70px', mdSize: '110px' }, 
    { id: 7, top: '45%', right: '12%', size: '55px', mdSize: '90px' },  
    { id: 8, top: '75%', right: '2%', size: '100px', mdSize: '180px' },  
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden min-h-[700px] md:min-h-[800px] flex flex-col items-center justify-center px-4">
      
      {/* Floating Images - Now Visible on All Screens */}
      {floatingFaces.map((face) => (
        <div
          key={face.id}
          className="absolute rounded-full shadow-md overflow-hidden z-0"
          style={{
            top: face.top,
            left: face.left,
            right: face.right,
            // Use CSS variables or a simple calc for responsive sizing
            width: `var(--size-${face.id})`,
            height: `var(--size-${face.id})`,
          }}
        >
          {/* Inline style to handle the responsive size transition */}
          <style dangerouslySetInnerHTML={{ __html: `
            :root { --size-${face.id}: ${face.size}; }
            @media (min-width: 768px) { :root { --size-${face.id}: ${face.mdSize}; } }
          `}} />
          
          <img 
            src={`https://i.pravatar.cc/200?u=${face.id + 20}`} 
            alt="customer" 
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Heading Section */}
      <div className="text-center mb-10 md:mb-16 z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 bg-[#E8F5E9] rounded-full -z-10 transform scale-110"></span>
            What
          </span> our customer <br className="md:hidden" /> 
          says <span className="relative inline-block">
            About Us
            <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 bg-[#FFD54F] rounded-full"></span>
          </span>
        </h2>
      </div>

      {/* Main Testimonial Box */}
      <div className="relative w-full max-w-2xl mx-auto bg-[#F1F8F1]/80 backdrop-blur-sm p-8 md:p-12 rounded-[30px] md:rounded-[50px] text-center z-10 border border-[#E0EBE0] shadow-sm">
        {/* Quote Icon - Top Left */}
        <div className="absolute -top-4 -left-2 md:top-8 md:left-8 w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
           <span className="text-[#81C784] text-2xl md:text-3xl font-serif">“</span>
        </div>
        
        <p className="text-gray-700 text-base md:text-xl font-medium leading-relaxed">
          Elementum delivered the site within the timeline as they requested. 
          In the end, the client found a 50% increase in traffic within days 
          since its launch. They also had an impressive ability to use technologies 
          that the company hasn't used, which have also proved to be easy to use and reliable.
        </p>

        {/* Quote Icon - Bottom Right */}
        <div className="absolute -bottom-4 -right-2 md:bottom-8 md:right-8 w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
           <span className="text-[#C8E6C9] text-2xl md:text-3xl font-serif">”</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;