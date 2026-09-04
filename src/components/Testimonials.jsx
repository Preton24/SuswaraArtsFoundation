import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-burgundy_dark text-cream py-12 md:py-16 relative border-b border-cream/10">
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-burgundy to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-8">Voices</h2>
        
        <div className="relative">
          <span className="absolute -top-10 -left-6 text-6xl text-burgundy/20 font-serif leading-none">"</span>
          <p className="text-2xl md:text-4xl font-serif leading-relaxed italic mb-8 relative z-10">
            Studying here has transformed my approach to music. The focus on authenticity and discipline, combined with the warmth of the faculty, creates an unparalleled learning environment.
          </p>
          <span className="absolute -bottom-10 -right-6 text-6xl text-burgundy/20 font-serif leading-none">"</span>
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <div className="w-16 h-px bg-burgundy mb-6"></div>
          <h4 className="font-sans uppercase tracking-widest text-sm font-semibold">Ananya R.</h4>
          <p className="text-cream/50 text-xs tracking-widest mt-1">Vocal Scholar, Alumnus</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
