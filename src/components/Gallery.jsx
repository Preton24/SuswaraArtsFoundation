import React from 'react';
import { Link } from 'react-router-dom';
import group5Img from '../assets/group5.jpg';
import group6Img from '../assets/group6.jpg';
import group7Img from '../assets/group7.jpg';
import pose8Img from '../assets/pose8.jpg';
import pose9Img from '../assets/pose9.jpg';

const Gallery = () => {
  return (
    <section id="gallery" className="bg-black text-cream py-12 md:py-16 relative border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-4">Visuals</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-cream">Gallery</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <Link to="/gallery" className="md:col-span-2 aspect-video relative group overflow-hidden block">
             <img src={group5Img} alt="Annual Concert 2025" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-cream font-serif text-xl">Annual Concert Showcase</span>
             </div>
          </Link>
          <Link to="/gallery" className="aspect-square md:aspect-auto relative group overflow-hidden block">
             <img src={pose8Img} alt="Masterclass" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-cream font-serif text-xl">Bharatnatyam Performances</span>
             </div>
          </Link>
          <div className="aspect-square md:aspect-auto relative group overflow-hidden bg-black/60 border border-cream/10 flex items-center justify-center p-8 text-center">
             <p className="text-cream/80 font-serif text-2xl italic leading-relaxed">
               "Capturing the essence of tradition."
             </p>
          </div>
          <Link to="/gallery" className="md:col-span-2 aspect-video relative group overflow-hidden block">
             <img src={group6Img} alt="Student Recital" className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-cream font-serif text-xl">Student Recital</span>
             </div>
          </Link>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/gallery" className="inline-block border border-cream/30 text-cream px-8 py-3 uppercase tracking-widest text-sm hover:bg-cream hover:text-black transition-colors duration-300">
            View All Media
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
