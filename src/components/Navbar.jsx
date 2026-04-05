import { useState } from 'react';

export default function Navbar() {
  // This is the "State" that remembers if the menu is open or closed!
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Studio", href: "#studio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="flex justify-between items-center px-6 md:px-16 py-6 bg-white border-b-2 border-orange-500 sticky top-0 z-50 shadow-sm relative">
      <div className="text-2xl font-semibold tracking-tighter cursor-pointer z-50">
        Elementum
      </div>
      
      {/* Desktop Menu (Hidden on mobile) */}
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="relative group text-gray-700 hover:text-black transition-colors py-1"
          >
            {link.name}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Hamburger Button (Hidden on desktop) */}
      <button 
        aria-label="Toggle menu" 
        className="space-y-1.5 cursor-pointer group md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)} // This toggles the menu open and closed!
      >
        <span className="block w-6 h-0.5 bg-black transition-all duration-300 group-hover:bg-orange-500"></span>
        <span className="block w-6 h-0.5 bg-black transition-all duration-300 group-hover:bg-orange-500"></span>
      </button>

      {/* Mobile Menu Dropdown */}
      {/* This only shows up if 'isOpen' is true */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b-2 border-gray-100 shadow-xl flex flex-col items-center py-8 gap-6 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-gray-800 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)} // Closes the menu when a link is clicked
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}