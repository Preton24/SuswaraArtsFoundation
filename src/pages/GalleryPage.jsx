import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowLeft, FolderOpen, Images } from 'lucide-react';
import {
  AnnualDaySection,
  annualDayPhotos,
  PerformancesSection,
  performancePhotos,
  TeachersSoloSection,
  teachersSoloPhotos,
} from '../sections';
import group5Img from '../assets/group5.jpg';
import pose1Img from '../assets/pose1.jpg';
import manasaImg from '../assets/manasa.jpeg';
import Contact from '../components/Contact';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPhotoset, setCurrentPhotoset] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const openLightbox = (photo, index, photoset) => {
    const list = photoset || getActivePhotoset();
    setCurrentPhotoset(list);
    setCurrentIndex(index >= 0 ? index : 0);
    setSelectedPhoto(photo);
  };

  const getActivePhotoset = () => {
    if (activeTab === 'annual') return annualDayPhotos;
    if (activeTab === 'performances') return performancePhotos;
    if (activeTab === 'teachers') return teachersSoloPhotos;
    return [...annualDayPhotos, ...performancePhotos, ...teachersSoloPhotos];
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const prevPhoto = () => {
    if (!currentPhotoset.length) return;
    const newIdx = (currentIndex - 1 + currentPhotoset.length) % currentPhotoset.length;
    setCurrentIndex(newIdx);
    setSelectedPhoto(currentPhotoset[newIdx]);
  };

  const nextPhoto = () => {
    if (!currentPhotoset.length) return;
    const newIdx = (currentIndex + 1) % currentPhotoset.length;
    setCurrentIndex(newIdx);
    setSelectedPhoto(currentPhotoset[newIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, currentIndex, currentPhotoset]);

  const eventFolders = [
    {
      id: 'annual',
      title: 'Annual Day Celebrations',
      count: annualDayPhotos.length,
      cover: group5Img,
      subtitle: 'Annual Concert & Foundation Day Performances',
    },
    {
      id: 'performances',
      title: 'Stage & Recital Performances',
      count: performancePhotos.length,
      cover: pose1Img,
      subtitle: 'Classical Dance & Vocal Stage Recitals',
    },
    {
      id: 'teachers',
      title: "Teachers' Solo Shots",
      count: teachersSoloPhotos.length,
      cover: manasaImg,
      subtitle: 'Guru Portraits & Solo Performances',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-cream pt-20 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-white text-sm uppercase tracking-widest transition-colors duration-200"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          {activeTab !== 'all' && (
            <button
              onClick={() => setActiveTab('all')}
              className="text-xs uppercase tracking-widest text-burgundy hover:text-white transition-colors"
            >
              View All Folders
            </button>
          )}
        </div>

        {/* Gallery Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-burgundy uppercase tracking-[0.3em] text-xs font-semibold mb-3 inline-block px-4 py-1.5 bg-burgundy/10 rounded-full border border-burgundy/30">
            Event Gallery
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-cream mb-3">
            Visual Memories & <span className="italic text-cream/90">Moments</span>
          </h1>
          <p className="text-cream/70 font-light text-base md:text-lg leading-relaxed">
            {activeTab === 'all'
              ? 'Select an event folder below to view all photos for that occasion.'
              : `Viewing photos for ${
                  activeTab === 'annual'
                    ? 'Annual Day Celebrations'
                    : activeTab === 'performances'
                    ? 'Stage Performances'
                    : "Teachers' Solo Shots"
                }`}
          </p>
        </div>

        {/* Event Tabs Navigation */}
        <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2.5 text-xs md:text-sm uppercase tracking-widest rounded-full transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-burgundy text-white font-medium shadow-lg shadow-burgundy/20'
                : 'bg-gray_dark text-cream/70 hover:text-cream border border-cream/10'
            }`}
          >
            All Folders (3)
          </button>
          <button
            onClick={() => setActiveTab('annual')}
            className={`px-6 py-2.5 text-xs md:text-sm uppercase tracking-widest rounded-full transition-all duration-300 ${
              activeTab === 'annual'
                ? 'bg-burgundy text-white font-medium shadow-lg shadow-burgundy/20'
                : 'bg-gray_dark text-cream/70 hover:text-cream border border-cream/10'
            }`}
          >
            Annual Day ({annualDayPhotos.length})
          </button>
          <button
            onClick={() => setActiveTab('performances')}
            className={`px-6 py-2.5 text-xs md:text-sm uppercase tracking-widest rounded-full transition-all duration-300 ${
              activeTab === 'performances'
                ? 'bg-burgundy text-white font-medium shadow-lg shadow-burgundy/20'
                : 'bg-gray_dark text-cream/70 hover:text-cream border border-cream/10'
            }`}
          >
            Stage Performances ({performancePhotos.length})
          </button>
          <button
            onClick={() => setActiveTab('teachers')}
            className={`px-6 py-2.5 text-xs md:text-sm uppercase tracking-widest rounded-full transition-all duration-300 ${
              activeTab === 'teachers'
                ? 'bg-burgundy text-white font-medium shadow-lg shadow-burgundy/20'
                : 'bg-gray_dark text-cream/70 hover:text-cream border border-cream/10'
            }`}
          >
            Teachers' Solo ({teachersSoloPhotos.length})
          </button>
        </div>

        {/* Content Area */}
        {activeTab === 'all' ? (
          /* SINGLE COVER PHOTO CARDS VIEW FOR "ALL" TAB */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventFolders.map((folder) => (
              <div
                key={folder.id}
                onClick={() => setActiveTab(folder.id)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-gray_dark border border-cream/10 hover:border-burgundy/50 transition-all duration-500 shadow-xl flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={folder.cover}
                    alt={folder.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <span className="bg-burgundy text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full font-medium inline-flex items-center gap-1.5 w-max mb-2">
                      <Images size={14} /> {folder.count} Photos
                    </span>
                    <h3 className="text-2xl font-serif text-cream group-hover:text-burgundy_light transition-colors">
                      {folder.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 bg-black/40 flex items-center justify-between border-t border-cream/10">
                  <span className="text-cream/70 text-xs font-light tracking-wider">
                    {folder.subtitle}
                  </span>
                  <span className="text-burgundy text-xs uppercase tracking-widest font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View All &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* INDIVIDUAL EVENT FOLDER ALL-IMAGES GRID VIEW */
          <div>
            {activeTab === 'annual' && <AnnualDaySection onSelectImage={openLightbox} />}
            {activeTab === 'performances' && <PerformancesSection onSelectImage={openLightbox} />}
            {activeTab === 'teachers' && <TeachersSoloSection onSelectImage={openLightbox} />}
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream/70 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-md transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 md:left-8 text-cream/70 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-md transition-colors z-50"
            aria-label="Previous Photo"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 md:right-8 text-cream/70 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-md transition-colors z-50"
            aria-label="Next Photo"
          >
            <ChevronRight size={28} />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center text-center">
            <div className="relative overflow-hidden rounded-xl border border-cream/20 shadow-2xl max-h-[75vh] mb-4">
              <img
                src={selectedPhoto.src}
                alt="Event Gallery Photo"
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </div>
            <span className="text-cream/60 text-xs font-light uppercase tracking-widest">
              Photo {currentIndex + 1} of {currentPhotoset.length}
            </span>
          </div>
        </div>
      )}

      {/* Footer Contact component */}
      <div className="mt-12">
        <Contact />
      </div>
    </div>
  );
};

export default GalleryPage;
