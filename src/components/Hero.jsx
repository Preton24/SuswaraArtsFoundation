import React from 'react';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background with slight radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-burgundy_dark/40 via-black to-black opacity-80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between w-full h-full gap-12 md:gap-0">
        
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col items-start text-left mt-12 md:mt-0">
          <h2 className="text-burgundy uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-4">Discover Your Sound</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream leading-tight mb-8">
            The Art <br/>
            <span className="italic text-cream/90">of Music</span>
          </h1>
          <p className="text-cream/70 font-light max-w-md text-lg mb-10 font-sans">
            A Bengaluru-based institution dedicated to nurturing artistic excellence through deep-rooted classical traditions and modern pedagogy, offering enriching online and offline classes for learners of all ages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#courses" className="inline-block border border-cream text-cream px-8 py-4 uppercase tracking-widest text-sm hover:bg-cream hover:text-black transition-colors duration-300 text-center">
              Explore Courses
            </a>
            <a href="#contact" className="inline-block bg-burgundy border border-burgundy text-cream px-8 py-4 uppercase tracking-widest text-sm hover:bg-cream hover:text-black hover:border-cream transition-colors duration-300 text-center">
              Enroll Now
            </a>
          </div>
        </div>

        {/* Hero Image / Vinyl Player */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <div className="relative w-full max-w-[500px] aspect-square rounded-full flex items-center justify-center">
            {/* Soft glow behind the image */}
            <div className="absolute inset-0 bg-burgundy rounded-full blur-[100px] opacity-20"></div>
            <img 
              src={heroImage} 
              alt="Turntable record player" 
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl animate-[spin_40s_linear_infinite]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
