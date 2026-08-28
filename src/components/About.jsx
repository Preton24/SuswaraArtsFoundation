import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-black text-cream py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div>
            <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              A Legacy of <br/><span className="italic">Musical Excellence</span>
            </h3>
            <p className="text-cream/70 font-light font-sans text-lg leading-relaxed mb-6">
              Suswara Arts Foundation was established with a singular mission: to preserve and propagate the profound beauty of classical arts. We believe that music is not just a discipline, but a way of life that elevates the soul.
            </p>
            <p className="text-cream/70 font-light font-sans text-lg leading-relaxed mb-8">
              Our faculty comprises maestros who bring decades of stage experience and pedagogical expertise, ensuring that our students receive training that is both authentic and inspiring.
            </p>
            
            <div className="border-l border-burgundy pl-6 mt-12">
              <h4 className="text-xl font-serif text-cream mb-3">Our Vision</h4>
              <p className="text-cream/60 font-light text-base leading-relaxed">
                To be a global sanctuary for the arts, where traditional disciplines are passed down with purity, while encouraging individual creative expression. We envision a world deeply connected through the universal language of sound.
              </p>
            </div>
          </div>

          {/* Decorative Visual Side */}
          <div className="relative h-full min-h-[400px] flex items-center justify-center">
             <div className="absolute inset-0 border border-burgundy/30 transform rotate-3"></div>
             <div className="absolute inset-0 bg-gray_dark transform -rotate-2 flex items-center justify-center p-8">
               <p className="font-serif text-3xl md:text-4xl text-center leading-relaxed italic text-cream/90">
                 "Music is the <br/> divine path <br/> to inner peace."
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
