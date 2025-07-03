import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import Countdown from 'react-countdown';

// Custom hook for intersection observer
function useInView(options = { threshold: 0.2 }) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  return [ref, inView];
}

const ARTIST_NAME = 'Artistry Global';
const ARTIST_BIO = `Artistry Global is a contemporary artist whose work explores the intersection of color, form, and emotion. With a passion for bold expression and elegant simplicity, their pieces invite viewers to experience art in a new light.`;
const ARTIST_STATS = [
  { label: 'Solo Exhibitions', value: 24 },
  { label: 'Awards', value: 12 },
  { label: 'Collectors', value: 300, suffix: '+' },
];
const ARTWORKS = [
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
];
const PARTNERS = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
];
const OFFER_DURATION = 1000 * 60 * 60 * 24 * 3; // 3 days

export default function ArtistPortfolio() {
  const [offerComplete, setOfferComplete] = useState(false);
  const [offerDeadline, setOfferDeadline] = useState(null);
  useEffect(() => {
    setOfferDeadline(Date.now() + OFFER_DURATION);
  }, []);

  // Intersection observer for stats and offer
  const [statsRef, statsInView] = useInView();
  const [offerRef, offerInView] = useInView();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-pink-50 text-gray-900 font-sans overflow-x-hidden">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 bg-white">
        <div className="mb-8">
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b" alt="Artist portrait" className="w-48 h-48 object-cover rounded-full border-4 border-pink-300 shadow-xl mx-auto" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-xl bg-gradient-to-r from-fuchsia-600 via-yellow-400 to-indigo-600 bg-clip-text text-transparent">{ARTIST_NAME}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-700 font-medium">{ARTIST_BIO}</p>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="flex flex-wrap justify-center gap-8 px-6 mb-16">
        {ARTIST_STATS.map(stat => (
          <div key={stat.label} className="bg-white rounded-2xl shadow-lg p-8 min-w-[180px] flex flex-col items-center border border-pink-100">
            <span className="text-4xl font-bold text-pink-500 mb-2">
              {statsInView ? <CountUp end={stat.value} duration={2} suffix={stat.suffix || ''} /> : stat.value + (stat.suffix || '')}
            </span>
            <span className="text-gray-700 font-semibold">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* OFFER */}
      <section ref={offerRef} className="flex justify-center mb-16 px-6">
        <div className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-6 max-w-2xl w-full">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Limited Edition Prints Available!</h3>
            <p className="mb-2">Order your signed print before the offer ends. Each print is crafted with museum-quality materials and comes with a certificate of authenticity.</p>
            <span className="font-semibold">Time left:</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            {offerComplete ? (
              <span className="text-xl font-bold">Offer Ended</span>
            ) : offerDeadline && offerInView ? (
              <Countdown
                date={offerDeadline}
                onComplete={() => setOfferComplete(true)}
                renderer={({ days, hours, minutes, seconds }) => (
                  <span className="text-3xl font-mono font-bold bg-white/20 px-4 py-2 rounded-xl shadow">
                    {days}d {hours}h {minutes}m {seconds}s
                  </span>
                )}
              />
            ) : null}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-pink-500">About the Artist</h2>
        <div className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">{ARTIST_BIO}</div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-pink-50 text-center">
        <h2 className="text-3xl font-bold mb-10 text-pink-500">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {ARTWORKS.map((art, i) => (
            <img key={i} src={art} alt={`Artwork ${i+1}`} className="w-full h-72 object-cover rounded-2xl shadow-lg border-2 border-pink-100 hover:scale-105 transition" />
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold mb-8 text-pink-500">Featured In</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {PARTNERS.map((logo, i) => (
            <img key={i} src={logo} alt="Partner logo" className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300 bg-white rounded-xl shadow p-2" />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-pink-50 py-10 px-6 text-gray-700 border-t border-pink-100 mt-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-full"></span>
            <span className="text-2xl font-extrabold text-pink-500">{ARTIST_NAME}</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-pink-500 transition">About</a>
            <a href="#gallery" className="hover:text-pink-500 transition">Gallery</a>
            <a href="#" className="hover:text-pink-500 transition">Contact</a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-xs text-pink-400 mt-2">
            <a href="#" className="hover:text-pink-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-pink-600 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-pink-600 transition">Copyright Policy</a>
            <a href="#" className="hover:text-pink-600 transition">Code of Conduct</a>
            <a href="#" className="hover:text-pink-600 transition">Fees & Charges</a>
          </div>
          <div className="text-center text-xs text-pink-400 mt-4">&copy; {new Date().getFullYear()} {ARTIST_NAME}. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
