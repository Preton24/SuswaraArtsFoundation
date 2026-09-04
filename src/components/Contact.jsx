import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwI6e2Ur3QA0R-CiXaym5YeCdzVs4UsftMVZ3UF5sQYQ_uvNN7XUjJs-YExzZ_DwNN5lw/exec";

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const locationsList = [
  {
    id: 'music-classes',
    label: 'Branch 1: Music',
    title: 'Music Classes Center',
    subtitle: 'Vocal & Instrumental Music',
    address: 'Kengeri Satellite Town, Bengaluru, Karnataka',
    phone: '+91 94483 33155',
    mapUrl: 'https://www.google.com/maps?q=12.89452075958252,77.48362731933594&z=17&hl=en',
    embedUrl: 'https://maps.google.com/maps?q=12.89452075958252,77.48362731933594&z=16&output=embed'
  },
  {
    id: 'hemmigepura',
    label: 'Branch 2: Music',
    title: 'Uttarahalli Main Rd Center',
    subtitle: 'Sai Suraksha Apartment Branch',
    address: 'Uttarahalli Main Rd, Hemmigepura Ward 198, RR Nagar, Bengaluru, Karnataka 560059',
    phone: '+91 94483 33155',
    mapUrl: 'https://maps.app.goo.gl/1Q6AwANjDvradYNN9',
    embedUrl: 'https://maps.google.com/maps?q=Sai+Suraksha+Apartment,+Uttarahalli+Main+Rd,+Bengaluru&z=16&output=embed'
  },
  {
    id: 'music-and-dance',
    label: 'Branch 3: Music & Dance',
    title: 'Music & Bharatanatyam Center',
    subtitle: 'N.R.N Residency Branch',
    address: 'N.R.N Residency, Bengaluru, Karnataka',
    phone: '+91 94499 45533',
    mapUrl: 'https://www.google.com/maps/search/N.R.N%20Residency/@12.9111909866333,77.54338836669922,17z?hl=en',
    embedUrl: 'https://maps.google.com/maps?q=12.9111909866333,77.54338836669922&z=16&output=embed'
  }
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: InstagramIcon,
    url: 'https://www.instagram.com/suswaraartsfoundation/',
    color: 'hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white border-pink-500/40 text-pink-400 bg-pink-500/10'
  },
  {
    name: 'Facebook',
    icon: FacebookIcon,
    url: 'https://www.facebook.com/profile.php?id=61593089585979&sk=about_details',
    color: 'hover:bg-blue-600 hover:text-white border-blue-500/40 text-blue-400 bg-blue-500/10'
  },
  {
    name: 'YouTube',
    icon: YoutubeIcon,
    url: 'https://www.youtube.com/@SuswaraArtsFoundation',
    color: 'hover:bg-red-600 hover:text-white border-red-500/40 text-red-400 bg-red-500/10'
  }
];

const Contact = () => {
  const [activeLocation, setActiveLocation] = useState(locationsList[0].id);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const currentLoc = locationsList.find((loc) => loc.id === activeLocation) || locationsList[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.target;
    const formData = new FormData(form);
    
    const urlSearchParams = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      urlSearchParams.append(key, value);
    }
    
    urlSearchParams.append('Contact', formData.get('contact'));
    urlSearchParams.append('contactNumber', formData.get('contact'));
    urlSearchParams.append('Age of student', formData.get('age'));
    urlSearchParams.append('ageOfStudent', formData.get('age'));

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: urlSearchParams,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage('Submission failed. Please try again later.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('A network error occurred. Please try again.');
    }
  };

  return (
    <footer id="contact" className="bg-black text-cream pt-8 md:pt-10 pb-4 border-t border-cream/10 relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-burgundy_dark/20 via-black to-black opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Compact Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-burgundy uppercase tracking-[0.25em] text-[11px] font-semibold mb-1.5 inline-block px-3 py-1 bg-burgundy/10 rounded-full border border-burgundy/30">
            Get in Touch
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-cream mb-1">
            Begin Your <span className="italic text-cream/90">Journey</span>
          </h3>
          <p className="text-cream/70 font-light text-xs md:text-sm">
            We welcome students across our 3 academy locations in Bengaluru.
          </p>
        </div>

        {/* 2-Column Equalized Compact Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch mb-6">
          
          {/* Left Column: Branch Locations & Compact Map */}
          <div className="flex flex-col justify-between bg-gray_dark/50 backdrop-blur-sm border border-cream/10 rounded-2xl p-5 md:p-6 shadow-xl">
            <div>
              {/* Branch Selector Tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {locationsList.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc.id)}
                    className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold rounded-lg transition-all duration-300 ${
                      activeLocation === loc.id
                        ? 'bg-burgundy text-white shadow-md'
                        : 'bg-black/60 text-cream/70 hover:text-cream border border-cream/10'
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>

              {/* Active Branch Info */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-serif text-lg text-cream">{currentLoc.title}</h4>
                  <p className="text-[11px] uppercase tracking-widest text-burgundy font-mono">{currentLoc.subtitle}</p>
                </div>
                <a
                  href={currentLoc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-burgundy hover:underline font-medium flex-shrink-0 ml-2"
                >
                  Directions <ExternalLink size={13} className="ml-1" />
                </a>
              </div>

              <div className="space-y-1.5 mb-3 text-xs font-light text-cream/80">
                <div className="flex items-start">
                  <MapPin size={15} className="text-burgundy mr-2 mt-0.5 flex-shrink-0" />
                  <span className="truncate">{currentLoc.address}</span>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="flex items-center">
                    <Phone size={15} className="text-burgundy mr-2 flex-shrink-0" />
                    <span>Contact: <strong className="font-medium text-cream">{currentLoc.phone}</strong></span>
                  </span>
                  <span className="flex items-center">
                    <Mail size={15} className="text-burgundy mr-2 flex-shrink-0" />
                    <span>suswaraartsfoundation@gmail.com</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Compact Embedded Google Map */}
            <div className="w-full h-[160px] md:h-[175px] rounded-xl overflow-hidden border border-cream/10 relative mt-1">
              <iframe
                title={currentLoc.title}
                src={currentLoc.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Compact Admission Inquiry Form */}
          <div className="bg-gray_dark/50 backdrop-blur-sm border border-cream/10 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xl">
            <div>
              <h4 className="text-xl md:text-2xl font-serif text-cream mb-4">Send an Inquiry</h4>
              <form className="space-y-3.5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="studentName"
                    placeholder="Student Name"
                    required
                    className="w-full bg-transparent border-b border-cream/30 px-0 py-2 text-xs text-cream placeholder-cream/40 focus:outline-none focus:border-burgundy transition-colors"
                  />
                  <input
                    type="text"
                    name="parentName"
                    placeholder="Parent Name"
                    required
                    className="w-full bg-transparent border-b border-cream/30 px-0 py-2 text-xs text-cream placeholder-cream/40 focus:outline-none focus:border-burgundy transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="tel"
                    name="contact"
                    placeholder="Contact Number"
                    required
                    className="w-full bg-transparent border-b border-cream/30 px-0 py-2 text-xs text-cream placeholder-cream/40 focus:outline-none focus:border-burgundy transition-colors"
                  />
                  <input
                    type="number"
                    name="age"
                    placeholder="Age of student"
                    required
                    className="w-full bg-transparent border-b border-cream/30 px-0 py-2 text-xs text-cream placeholder-cream/40 focus:outline-none focus:border-burgundy transition-colors"
                    min="1"
                    max="100"
                  />
                </div>
                <div>
                  <select
                    name="course"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-cream/30 px-0 py-2 text-xs text-cream/80 focus:outline-none focus:border-burgundy transition-colors appearance-none"
                  >
                    <option value="" disabled className="text-black">Select Course</option>
                    <option value="bharatanatyam" className="text-black">Bharatanatyam</option>
                    <option value="carnatic-music" className="text-black">Carnatic Classical Music</option>
                  </select>
                </div>
                <div>
                  <select
                    name="mode"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-cream/30 px-0 py-2 text-xs text-cream/80 focus:outline-none focus:border-burgundy transition-colors appearance-none"
                  >
                    <option value="" disabled className="text-black">Mode - Online or Offline</option>
                    <option value="online" className="text-black">Online</option>
                    <option value="offline" className="text-black">Offline</option>
                  </select>
                </div>

                {status === 'success' && (
                  <div className="text-green-400 text-[11px] bg-green-500/10 p-2.5 rounded-lg border border-green-500/20">
                    Thank you! Your admission query has been received. We will get in touch with you soon.
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="text-red-400 text-[11px] bg-red-500/10 p-2.5 rounded-lg border border-red-500/20">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-burgundy text-cream py-3 text-xs tracking-widest uppercase hover:bg-cream hover:text-black transition-colors duration-300 mt-3 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-semibold shadow-md"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Compact Full-Width Social Media Banner */}
        <div className="p-4 md:p-5 bg-gradient-to-r from-burgundy_dark/80 via-gray_dark to-burgundy_dark/80 rounded-2xl border border-burgundy/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div>
            <h5 className="text-xs md:text-sm font-serif text-cream">Connect On Social Media</h5>
            <p className="text-[11px] text-cream/60 font-light mt-0.5">Follow Suswara Arts Foundation for performances, updates & events</p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {socialLinks.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border font-semibold text-xs tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-md ${item.color}`}
                >
                  <IconComponent size={15} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Compact Footer Bottom Bar */}
        <div className="border-t border-cream/10 pt-4 pb-2 flex flex-col sm:flex-row justify-between items-center text-[11px] font-light text-cream/40">
          <p>&copy; {new Date().getFullYear()} Suswara Arts Foundation. All rights reserved.</p>
          <div className="flex items-center space-x-5 mt-2 sm:mt-0 uppercase tracking-widest text-[10px]">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-burgundy transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
