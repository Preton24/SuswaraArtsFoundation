import React from 'react';

const courses = [
  {
    category: "Vocal Arts",
    title: "Hindustani Classical Vocal",
    desc: "Dive deep into the ragas, talas, and the soulful expression of North Indian classical music.",
  },
  {
    category: "Vocal Arts",
    title: "Carnatic Vocal",
    desc: "Master the intricate rhythms and devotional compositions of South Indian classical music.",
  },
  {
    category: "Instrumental",
    title: "Sitar & Veena",
    desc: "Learn stringed instruments with a focus on technique, improvisation, and classical repertoire.",
  },
  {
    category: "Instrumental",
    title: "Tabla & Mridangam",
    desc: "Understand the complex world of Indian rhythm and percussion.",
  },
  {
    category: "Contemporary",
    title: "Western Classical Piano",
    desc: "Build a strong foundation in sight-reading, theory, and classical piano performance.",
  }
];

const Courses = () => {
  return (
    <section id="courses" className="bg-gray_dark text-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-4">Curriculum</h2>
            <h3 className="text-4xl md:text-6xl font-serif">Our Courses</h3>
          </div>
          <p className="text-cream/60 font-light max-w-md mt-6 md:mt-0 text-lg">
            Carefully curated programs designed for practitioners of all levels, from beginners to advanced performers.
          </p>
        </div>

        <div className="flex flex-col border-t border-cream/10">
          {courses.map((course, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row py-10 border-b border-cream/10 hover:border-burgundy transition-colors duration-300">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-sm font-sans tracking-widest text-burgundy uppercase group-hover:text-cream transition-colors">
                  {course.category}
                </span>
              </div>
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h4 className="text-2xl font-serif">{course.title}</h4>
              </div>
              <div className="md:w-5/12">
                <p className="text-cream/60 font-light leading-relaxed">
                  {course.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border-b border-cream pb-1 text-sm tracking-widest uppercase hover:text-burgundy hover:border-burgundy transition-colors duration-300">
            Download Full Prospectus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
