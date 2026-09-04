import React from 'react';
import manasaImg from '../assets/manasa.jpeg';
import sahanaImg from '../assets/sahana.jpeg';
import pose7Img from '../assets/pose7.jpg';
import pose8Img from '../assets/pose8.jpg';
import pose9Img from '../assets/pose9.jpg';

export const teachersSoloPhotos = [
  { id: 'teacher-1', src: manasaImg },
  { id: 'teacher-2', src: sahanaImg },
  { id: 'teacher-3', src: pose8Img },
  { id: 'teacher-4', src: pose7Img },
  { id: 'teacher-5', src: pose9Img },
];

const TeachersSoloSection = ({ onSelectImage }) => {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-cream/10 pb-6">
        <div>
          <span className="text-burgundy uppercase tracking-[0.25em] text-xs font-semibold px-3 py-1 bg-burgundy/10 rounded-full border border-burgundy/20 inline-block mb-3">
            Event Folder 03
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-cream">Teachers & Gurus Solo Shots</h2>
        </div>
        <p className="text-cream/60 text-sm max-w-md mt-2 md:mt-0 font-light">
          {teachersSoloPhotos.length} Photos in this event section
        </p>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
        {teachersSoloPhotos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => onSelectImage && onSelectImage(photo, idx, teachersSoloPhotos)}
            className="break-inside-avoid relative group overflow-hidden rounded-xl border border-cream/10 bg-gray_dark cursor-pointer shadow-lg transition-all duration-300 hover:border-burgundy/40"
          >
            <img
              src={photo.src}
              alt={`Teacher Solo Photo ${idx + 1}`}
              className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
              <div className="bg-black/60 backdrop-blur-md text-cream p-3 rounded-full border border-cream/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeachersSoloSection;
