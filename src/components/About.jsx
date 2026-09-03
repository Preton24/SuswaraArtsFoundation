import React from 'react';
import sahanaImg from '../assets/sahana.jpeg';
import pose7Img from '../assets/pose7.jpg';
import TiltedCard from './TiltedCard';

const About = () => {
  return (
    <section id="about" className="bg-black text-cream py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div>
            <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              A Legacy of <br/><span className="italic">Classical Arts Excellence</span>
            </h3>
            <p className="text-cream/70 font-light font-sans text-lg leading-relaxed mb-6">
              Suswara Arts Foundation was established with a singular mission: to preserve and propagate the profound beauty of classical arts. We believe that music and dance are not just disciplines, but ways of life that elevate the soul.
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
                 "Art is the <br/> divine path <br/> to inner peace."
               </p>
             </div>
          </div>

        </div>

        {/* Our Gurus Section */}
        <div className="mt-32">
          <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center">Our Gurus</h2>
          <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-16 text-center">
            Masters of the Arts
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-start gap-16">
            
            {/* Guru 1 */}
            <div className="flex flex-col items-center text-center">
              <TiltedCard
                imageSrc={sahanaImg}
                altText="Manasa"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={14}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
              />
              <div className="mt-8">
                <h4 className="font-serif text-2xl text-cream mb-2">Smt Manasa</h4>
                <p className="font-sans text-sm tracking-[0.2em] text-burgundy uppercase">Vocalist</p>
              </div>
            </div>

            {/* Guru 2 */}
            <div className="flex flex-col items-center text-center">
              <TiltedCard
                imageSrc={sahanaImg}
                altText="Vidushi Smt. Sahana Bharadwaj"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={14}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
              />
              <div className="mt-8">
                <h4 className="font-serif text-2xl text-cream mb-2">Vidushi Smt. Sahana Bharadwaj</h4>
                <p className="font-sans text-sm tracking-[0.2em] text-burgundy uppercase">Bharatnatyam Dancer and playback singer</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
