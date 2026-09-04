import React from 'react';
import InfiniteSpiral from './InfiniteSpiral';
import godImg from '../assets/god.jpg';
import groupImg from '../assets/group.jpg';
import group1Img from '../assets/group1.jpg';
import group2Img from '../assets/group2.jpg';
import group3Img from '../assets/group3.jpg';
import group4Img from '../assets/group4.jpg';
import pose1Img from '../assets/pose1.jpg';
import pose2Img from '../assets/pose2.jpg';
import pose3Img from '../assets/pose3.jpg';
import pose4Img from '../assets/pose4.jpg';
import pose5Img from '../assets/pose5.jpg';
import pose6Img from '../assets/pose6.jpg';

const spiralImages = [
  { src: pose1Img, alt: 'Classical Dance Pose', label: 'Classical Bharatanatyam' },
  { src: groupImg, alt: 'Arts Foundation Students', label: 'Student Performance' },
  { src: pose2Img, alt: 'Expressive Abhinaya', label: 'Recital' },
  { src: godImg, alt: 'Divine Traditions', label: 'Spiritual Arts' },
  { src: group1Img, alt: 'Group Concert', label: 'Annual Concert' },
  { src: pose3Img, alt: 'Solo Recital', label: 'Classical Solo' },
  { src: group2Img, alt: 'Gurus and Students', label: 'Gurukul Traditions' },
  { src: pose4Img, alt: 'Dance Recital', label: 'Stage Performance' },
  { src: group3Img, alt: 'Musical Ensemble', label: 'Classical Music' },
  { src: pose5Img, alt: 'Vocal Performance', label: 'Vocal Class' },
  { src: group4Img, alt: 'Celebration', label: 'Events & Recitals' },
  { src: pose6Img, alt: 'Choreography', label: 'Dance Workshop' }
];

const Hero = () => {
  return (
    <section id="home" className="relative bg-black overflow-hidden pt-16 md:pt-20 pb-8 md:pb-10">
      {/* Background with slight radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-burgundy_dark/40 via-black to-black opacity-80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between w-full h-full gap-8 md:gap-6">
        
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-burgundy uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-3">Discover Your Art</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream leading-tight mb-5">
            The Art <br/>
            <span className="italic text-cream/90">of Music & Dance</span>
          </h1>
          <p className="text-cream/70 font-light max-w-md text-base mb-6 font-sans">
            A Bengaluru-based institution dedicated to nurturing artistic excellence through deep-rooted classical traditions and modern pedagogy, offering enriching online and offline classes for learners of all ages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#courses" className="inline-block border border-cream text-cream px-8 py-3.5 uppercase tracking-widest text-sm hover:bg-cream hover:text-black transition-colors duration-300 text-center font-medium">
              Explore Courses
            </a>
            <a href="#contact" className="inline-block bg-burgundy border border-burgundy text-cream px-8 py-3.5 uppercase tracking-widest text-sm hover:bg-cream hover:text-black hover:border-cream transition-colors duration-300 text-center font-medium">
              Enroll Now
            </a>
          </div>
        </div>

        {/* 3D Infinite Spiral Gallery */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative w-full h-[420px] md:h-[460px]">
          <div className="absolute inset-0 bg-burgundy rounded-full blur-[120px] opacity-25"></div>
          <div className="w-full h-full relative z-10 overflow-hidden">
            <InfiniteSpiral
              items={spiralImages}
              animationMode="all"
              speed={0.3}
              radius={170}
              cardWidth={120}
              cardHeight={130}
              verticalSpacing={65}
              perspective={1000}
              cardRadius={10}
              centerScale={1.2}
              edgeBlur={6}
              cardsPerTurn={7}
              pauseOnHover={true}
              grayscale={0}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
