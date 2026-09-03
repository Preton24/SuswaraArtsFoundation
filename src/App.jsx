import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-black text-cream selection:bg-burgundy selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Gallery />
        <Testimonials />
      </main>
      <Contact />
    </div>
  );
}

export default App;
