import React from 'react';
import { ArrowRight } from 'lucide-react';

const Updates = () => {
  return (
    <section id="updates" className="bg-gray_dark text-cream py-24 border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
          <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-4">Newsboard</h2>
          <h3 className="text-4xl font-serif mb-6">Latest Updates</h3>
          <p className="text-cream/60 font-light mb-8">
            Stay informed about our upcoming admissions, schedule changes, and achievements.
          </p>
        </div>

        <div className="md:w-2/3 flex flex-col space-y-6">
          
          <a href="#" className="group block border border-cream/10 p-8 hover:border-burgundy/50 transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className="text-burgundy text-xs uppercase tracking-widest">Announcements</span>
              <span className="text-cream/40 text-xs">Oct 10, 2026</span>
            </div>
            <h4 className="text-xl font-serif mb-3 group-hover:text-burgundy transition-colors">Admissions Open for Winter Session</h4>
            <p className="text-cream/60 font-light text-sm mb-6 line-clamp-2">
              We are now accepting applications for the upcoming winter session across all departments. Early bird registration ends on October 30th.
            </p>
            <div className="flex items-center text-xs tracking-widest uppercase group-hover:text-burgundy transition-colors">
              Read More <ArrowRight size={14} className="ml-2" />
            </div>
          </a>

          <a href="#" className="group block border border-cream/10 p-8 hover:border-burgundy/50 transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className="text-burgundy text-xs uppercase tracking-widest">Press</span>
              <span className="text-cream/40 text-xs">Sep 28, 2026</span>
            </div>
            <h4 className="text-xl font-serif mb-3 group-hover:text-burgundy transition-colors">Faculty Member Honored with National Award</h4>
            <p className="text-cream/60 font-light text-sm mb-6 line-clamp-2">
              Our very own Pt. Sharma has been recognized with the National Arts Endowment for his lifelong contribution to classical music preservation.
            </p>
            <div className="flex items-center text-xs tracking-widest uppercase group-hover:text-burgundy transition-colors">
              Read More <ArrowRight size={14} className="ml-2" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Updates;
