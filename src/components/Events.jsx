import React from 'react';
import eventImage from '../assets/event.png';

const Events = () => {
  return (
    <section id="events" className="bg-black text-cream py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-4">Happenings</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Events & Workshops</h3>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Featured Event Image */}
          <div className="md:col-span-5 relative aspect-[3/4] md:aspect-auto md:h-full min-h-[400px]">
            <div className="absolute inset-0 bg-burgundy_dark/20 mix-blend-multiply z-10"></div>
            <img src={eventImage} alt="Workshop event" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-black text-cream text-xs uppercase tracking-widest px-4 py-2">Featured</span>
            </div>
          </div>

          {/* Events List */}
          <div className="md:col-span-7 flex flex-col space-y-8">
            
            <div className="pb-8 border-b border-cream/10">
              <p className="text-burgundy font-sans tracking-widest text-sm mb-2">OCT 15, 2026</p>
              <h4 className="text-2xl font-serif mb-3">Masterclass: The Art of Improvisation</h4>
              <p className="text-cream/60 font-light mb-4">A 3-day intensive workshop focusing on vocal techniques and raga exploration with Pt. Sharma.</p>
              <button className="text-sm border border-cream/30 px-6 py-2 hover:bg-cream hover:text-black transition-colors">Register</button>
            </div>

            <div className="pb-8 border-b border-cream/10">
              <p className="text-burgundy font-sans tracking-widest text-sm mb-2">NOV 02, 2026</p>
              <h4 className="text-2xl font-serif mb-3">Annual Foundation Day Concert</h4>
              <p className="text-cream/60 font-light mb-4">Join us for an evening of mesmerizing performances by our senior faculty and advanced scholars.</p>
              <button className="text-sm border border-cream/30 px-6 py-2 hover:bg-cream hover:text-black transition-colors">Get Tickets</button>
            </div>
            
            <div className="pb-8 border-b border-cream/10">
              <p className="text-burgundy font-sans tracking-widest text-sm mb-2">NOV 20, 2026</p>
              <h4 className="text-2xl font-serif mb-3">Rhythm & Time: Percussion Workshop</h4>
              <p className="text-cream/60 font-light mb-4">Explore complex talas in this interactive session designed for instrumentalists of all disciplines.</p>
              <button className="text-sm border border-cream/30 px-6 py-2 hover:bg-cream hover:text-black transition-colors">Register</button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;
