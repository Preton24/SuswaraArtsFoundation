import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

const coursesList = [
  {
    id: 'bharatanatyam',
    title: 'Bharatanatyam',
    subtitle: 'Classical Dance Academy',
    shortDesc: 'Sacred Indian classical dance covering Nritta, Abhinaya, Mudras, and repertoire.',
    fullDesc: 'Master the sacred Indian classical dance through structured Nritta (rhythmic dance movements), Abhinaya (expressive storytelling & emotions), Mudras (hand gestures), and traditional stage repertoire under expert guidance.',
    features: [
      'Nritta & Adavus (Basic Steps & Stances)',
      'Abhinaya & Navarasas (Nine Expressions)',
      'Tala & Rhythm Synchronization',
      'Arangetram & Stage Performance Preparation',
      'Classical Music & Costume Aesthetics'
    ]
  },
  {
    id: 'carnatic-music',
    title: 'Carnatic Classical Music',
    subtitle: 'Vocal & Instrumental Excellence',
    shortDesc: 'Systematic Carnatic vocal and instrumental training with Ragas, Talas, and Krithis.',
    fullDesc: 'Build a profound foundation in Carnatic classical vocal and instrumental tradition through systematic Raga exploration, Tala rhythm mastery, Sarali Varisas, Geethams, Varnams, Krithis, and voice culture training.',
    features: [
      'Swaras & Raga Systems Exploration',
      'Tala & Laya Rhythm Control',
      'Classic Krithis & Composition Mastery',
      'Voice Culture & Pitch Perfecting Technique',
      'Improvised Music (Manodharma)'
    ]
  }
];

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState(null);

  const openCourseModal = (course) => {
    setActiveCourse(course);
  };

  const closeCourseModal = () => {
    setActiveCourse(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCourseModal();
    };
    if (activeCourse) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCourse]);

  return (
    <section id="courses" className="bg-burgundy_dark text-cream py-12 md:py-16 relative border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <span className="text-burgundy uppercase tracking-[0.25em] text-xs font-semibold mb-3 inline-block px-4 py-1.5 bg-burgundy/10 rounded-full border border-burgundy/30">
            Our Curriculum
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-cream mb-4">
            Featured <span className="italic font-normal">Courses</span>
          </h2>
          <p className="text-cream/70 font-light text-base md:text-lg leading-relaxed">
            Click on any course card below to view detailed curriculum & syllabus.
          </p>
        </div>

        {/* Minimal Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {coursesList.map((course) => (
            <div
              key={course.id}
              onClick={() => openCourseModal(course)}
              className="bg-black/50 border border-cream/10 p-8 md:p-10 hover:border-burgundy/70 transition-all duration-500 rounded-2xl flex flex-col justify-between group cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-burgundy/10 transform hover:-translate-y-1"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-serif text-cream mb-2 group-hover:text-burgundy_light transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-burgundy mb-4 font-mono font-medium">
                  {course.subtitle}
                </p>
                <p className="text-cream/70 font-light text-sm leading-relaxed mb-6">
                  {course.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-cream/10 flex items-center justify-between text-xs uppercase tracking-widest text-burgundy font-semibold group-hover:translate-x-1 transition-transform">
                <span>View Full Details</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Course Detail Modal */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-fadeIn">
          {/* Backdrop Overlay Click to Close */}
          <div
            className="absolute inset-0"
            onClick={closeCourseModal}
          ></div>

          {/* Modal Container */}
          <div className="relative z-10 bg-gray_dark border border-cream/20 rounded-2xl max-w-2xl w-full p-6 md:p-10 text-cream shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeCourseModal}
              className="absolute top-5 right-5 text-cream/60 hover:text-white p-2 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <span className="text-burgundy uppercase tracking-[0.25em] text-xs font-semibold px-3 py-1 bg-burgundy/10 rounded-full border border-burgundy/20 inline-block mb-3">
              Course Details
            </span>

            <h3 className="text-3xl md:text-4xl font-serif text-cream mb-1">
              {activeCourse.title}
            </h3>
            <p className="text-xs uppercase tracking-widest text-burgundy mb-6 font-mono font-medium">
              {activeCourse.subtitle}
            </p>

            <p className="text-cream/80 font-light text-base leading-relaxed mb-8 border-b border-cream/10 pb-6">
              {activeCourse.fullDesc}
            </p>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-cream/50 font-semibold mb-4">
                Syllabus & Key Highlights:
              </h4>
              <div className="space-y-3">
                {activeCourse.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start text-sm text-cream/90 font-light">
                    <CheckCircle2 size={16} className="text-burgundy mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-cream/10">
              <a
                href="#contact"
                onClick={closeCourseModal}
                className="flex-1 text-center py-3.5 bg-burgundy text-white text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-burgundy/90 transition-colors shadow-lg shadow-burgundy/20"
              >
                Inquire / Apply for Course
              </a>
              <button
                onClick={closeCourseModal}
                className="py-3.5 px-6 border border-cream/20 text-cream/80 text-xs uppercase tracking-widest font-medium rounded-xl hover:bg-cream/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
