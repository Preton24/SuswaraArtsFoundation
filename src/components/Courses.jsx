import React from 'react';

const certificateCourses = [
  {
    title: "Lydian Classical Music",
    desc: "Explore classical music through structured vocal training, musical expression, and a strong foundation in technique."
  },
  {
    title: "Cinema Sugama Music",
    desc: "Learn expressive singing through the rich tradition of Kannada cinema and Sugama Sangeetha."
  },
  {
    title: "Hindustani Classical Music",
    desc: "Discover the depth of Hindustani music through ragas, rhythm, vocal technique, and traditional compositions."
  },
  {
    title: "Carnatic Classical Music",
    desc: "Build a strong foundation in Carnatic music through ragas, talas, compositions, and disciplined vocal practice."
  }
];

const specialPrograms = [
  {
    title: "Voice Culture",
    desc: "Strengthen vocal quality, breath control, pitch, clarity, range, and overall vocal expression."
  },
  {
    title: "Vocal Training",
    desc: "Develop a confident and versatile singing voice through guided technique, practice, and musical expression."
  },
  {
    title: "Studio Recording Experience",
    desc: "Gain practical experience with studio recording, microphone techniques, and recording practices."
  },
  {
    title: "Stage Performance & Personality Development",
    desc: "Build stage presence, confidence, expression, communication, and performance skills."
  }
];

const Courses = () => {
  return (
    <section id="courses" className="bg-gray_dark text-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-4">Curriculum</h2>
            <h3 className="text-4xl md:text-6xl font-serif">Our Programs</h3>
          </div>
          <p className="text-cream/60 font-light max-w-md mt-6 md:mt-0 text-lg">
            Carefully curated programs designed for practitioners of all levels, from beginners to advanced performers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Certificate Courses Card */}
          <div className="bg-black/40 border border-cream/10 p-8 md:p-12 hover:border-burgundy/50 transition-colors duration-500 rounded-sm">
            <h4 className="text-2xl font-serif text-burgundy mb-8">
              Certificate Courses 
              <span className="text-sm font-sans tracking-widest text-cream/60 uppercase ml-0 sm:ml-4 block sm:inline mt-2 sm:mt-0">— 6 Months</span>
            </h4>
            <div className="space-y-8">
              {certificateCourses.map((course, idx) => (
                <div key={idx} className="border-l-2 border-burgundy/30 pl-6 hover:border-burgundy transition-colors duration-300">
                  <h5 className="text-xl font-serif mb-2">{course.title}</h5>
                  <p className="text-cream/60 font-light text-sm leading-relaxed">{course.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Special Training Programs Card */}
          <div className="bg-black/40 border border-cream/10 p-8 md:p-12 hover:border-burgundy/50 transition-colors duration-500 rounded-sm">
            <h4 className="text-2xl font-serif text-burgundy mb-8">Special Training Programs</h4>
            <div className="space-y-8">
              {specialPrograms.map((program, idx) => (
                <div key={idx} className="border-l-2 border-burgundy/30 pl-6 hover:border-burgundy transition-colors duration-300">
                  <h5 className="text-xl font-serif mb-2">{program.title}</h5>
                  <p className="text-cream/60 font-light text-sm leading-relaxed">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default Courses;
