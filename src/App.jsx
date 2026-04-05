import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudioSection from './components/StudioSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans overflow-x-hidden text-gray-900 selection:bg-orange-200">
      <Navbar />
      <main>
        <Hero />
        <StudioSection />

        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;