import React from 'react';
import sahanaImg from '../assets/sahana.jpeg';
import manasaImg from '../assets/manasa.jpeg';
import TiltedCard from './TiltedCard';

const Gurus = () => {
  return (
    <section id="gurus" className="bg-black text-cream py-12 md:py-16 relative border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-3 text-center">Our Gurus</h2>
        <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-10 text-center">
          Masters of the Arts
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16">
          
          {/* Guru 1 */}
          <div className="flex flex-col items-center text-center">
            <TiltedCard
              imageSrc={manasaImg}
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
              <h4 className="font-serif text-2xl text-cream mb-2">Vidushi Smt. Manasa Vinay</h4>
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
    </section>
  );
};

export default Gurus;
