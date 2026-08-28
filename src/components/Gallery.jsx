import React from 'react';
import galleryImage from '../assets/gallery.png';
import eventImage from '../assets/event.png';

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gray_dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-4">Visuals</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-cream">Gallery</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="md:col-span-2 aspect-video relative group overflow-hidden">
             <img src={galleryImage} alt="Performance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-cream font-serif text-xl">Annual Concert 2025</span>
             </div>
          </div>
          <div className="aspect-square md:aspect-auto relative group overflow-hidden">
             <img src={eventImage} alt="Workshop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-cream font-serif text-xl">Masterclass</span>
             </div>
          </div>
          <div className="aspect-square md:aspect-auto relative group overflow-hidden bg-burgundy_dark flex items-center justify-center p-8 text-center">
             <p className="text-cream/80 font-serif text-2xl italic leading-relaxed">
               "Capturing the essence of tradition."
             </p>
          </div>
          <div className="md:col-span-2 aspect-video relative group overflow-hidden">
             <img src={galleryImage} alt="Performance" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-cream font-serif text-xl">Student Recital</span>
             </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="border border-cream/30 text-cream px-8 py-3 uppercase tracking-widest text-sm hover:bg-cream hover:text-black transition-colors duration-300">
            View All Media
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
