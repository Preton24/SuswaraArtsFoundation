import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Updates from './components/Updates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-black text-cream selection:bg-burgundy selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Events />
        <Gallery />
        <Testimonials />
        <Updates />
      </main>
      <Contact />
    </div>
  );
}

export default App;
