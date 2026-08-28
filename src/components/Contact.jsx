import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwI6e2Ur3QA0R-CiXaym5YeCdzVs4UsftMVZ3UF5sQYQ_uvNN7XUjJs-YExzZ_DwNN5lw/exec";

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    
    // Add fallback keys just in case the Apps Script is looking for exact column headers or different casings
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
    <footer id="contact" className="bg-black text-cream pt-24 border-t border-burgundy_dark relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-burgundy_dark/20 via-black to-black opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          
          <div>
            <h2 className="text-burgundy uppercase tracking-[0.2em] text-sm font-semibold mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">Begin Your <br/><span className="italic">Journey</span></h3>
            
            <div className="space-y-6 mt-12">
              <div className="flex items-start">
                <MapPin className="text-burgundy mr-4 mt-1" size={20} />
                <div>
                  <h5 className="font-sans font-semibold mb-1">Campus</h5>
                  <p className="text-cream/60 font-light text-sm">123 Heritage Lane, Arts District<br/>New Delhi, 110001, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-burgundy mr-4 mt-1" size={20} />
                <div>
                  <h5 className="font-sans font-semibold mb-1">Phone</h5>
                  <p className="text-cream/60 font-light text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-burgundy mr-4 mt-1" size={20} />
                <div>
                  <h5 className="font-sans font-semibold mb-1">Email</h5>
                  <p className="text-cream/60 font-light text-sm">admissions@suswaraarts.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray_dark/50 backdrop-blur-sm p-8 md:p-12 border border-cream/10">
            <h4 className="text-2xl font-serif mb-8">Send an Inquiry</h4>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input type="text" name="studentName" placeholder="Student Name" required className="w-full bg-transparent border-b border-cream/30 px-0 py-3 text-sm focus:outline-none focus:border-burgundy transition-colors" />
              </div>
              <div>
                <input type="text" name="parentName" placeholder="Parent Name" required className="w-full bg-transparent border-b border-cream/30 px-0 py-3 text-sm focus:outline-none focus:border-burgundy transition-colors" />
              </div>
              <div>
                <input type="tel" name="contact" placeholder="Contact" required className="w-full bg-transparent border-b border-cream/30 px-0 py-3 text-sm focus:outline-none focus:border-burgundy transition-colors" />
              </div>
              <div>
                <input type="number" name="age" placeholder="Age of student" required className="w-full bg-transparent border-b border-cream/30 px-0 py-3 text-sm focus:outline-none focus:border-burgundy transition-colors" min="1" max="100" />
              </div>
              <div>
                <select name="course" required defaultValue="" className="w-full bg-transparent border-b border-cream/30 px-0 py-3 text-sm focus:outline-none focus:border-burgundy transition-colors text-cream/60 appearance-none">
                  <option value="" disabled className="text-black">Select Course</option>
                  <option value="hindustani-vocal" className="text-black">Hindustani Classical Vocal</option>
                  <option value="carnatic-vocal" className="text-black">Carnatic Vocal</option>
                  <option value="sitar-veena" className="text-black">Sitar & Veena</option>
                  <option value="tabla-mridangam" className="text-black">Tabla & Mridangam</option>
                  <option value="western-piano" className="text-black">Western Classical Piano</option>
                </select>
              </div>
              <div>
                <select name="mode" required defaultValue="" className="w-full bg-transparent border-b border-cream/30 px-0 py-3 text-sm focus:outline-none focus:border-burgundy transition-colors text-cream/60 appearance-none">
                  <option value="" disabled className="text-black">Mode - Online or Offline</option>
                  <option value="online" className="text-black">Online</option>
                  <option value="offline" className="text-black">Offline</option>
                </select>
              </div>

              {status === 'success' && (
                <div className="text-green-500/90 text-sm bg-green-500/10 p-3 rounded border border-green-500/20">
                  Thank you! Your admission query has been received. We will get in touch with you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="text-red-500/90 text-sm bg-red-500/10 p-3 rounded border border-red-500/20">
                  {errorMessage}
                </div>
              )}

              <button type="submit" disabled={status === 'submitting'} className="w-full bg-burgundy text-cream py-4 text-sm tracking-widest uppercase hover:bg-cream hover:text-black transition-colors duration-300 mt-8 disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>

        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-cream/10 py-8 flex flex-col md:flex-row justify-between items-center text-sm font-light text-cream/40">
          <p>&copy; {new Date().getFullYear()} Suswara Arts Foundation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-sans tracking-widest uppercase text-xs">
            <a href="#" className="hover:text-burgundy transition-colors">Instagram</a>
            <a href="#" className="hover:text-burgundy transition-colors">Facebook</a>
            <a href="#" className="hover:text-burgundy transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
