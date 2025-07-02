import React, { useState, useEffect, useRef } from 'react';

const artTypes = [
  {
    title: 'Painting',
    desc: 'From watercolors to oils, our painters bring imagination to canvas.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png',
  },
  {
    title: 'Sculpture',
    desc: 'Artists who shape clay, stone, and metal into breathtaking forms.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2917/2917997.png',
  },
  {
    title: 'Digital Art',
    desc: 'Creators who use technology to craft stunning digital masterpieces.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2917/2917999.png',
  },
  {
    title: 'Photography',
    desc: 'Capturing moments and emotions through the lens.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2917/2917998.png',
  },
  {
    title: 'Calligraphy',
    desc: 'Masters of beautiful writing and expressive lettering.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2917/2918000.png',
  },
  {
    title: 'Street Art',
    desc: 'Urban artists transforming public spaces with color and creativity.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2917/2918001.png',
  },
];

const featuredArtists = [
  {
    name: 'Aarav Mehta',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    specialty: 'Abstract Painter',
    bio: 'Aarav explores color and form to evoke emotion and wonder.',
  },
  {
    name: 'Saanvi Kapoor',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
    specialty: 'Digital Illustrator',
    bio: 'Saanvi blends technology and art to create vibrant digital worlds.',
  },
  {
    name: 'Kabir Singh',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
    specialty: 'Sculptor',
    bio: 'Kabir brings stories to life through stone and metal.',
  },
];

const gallerySections = [
  {
    title: 'Modern Art',
    cover: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    ],
  },
  {
    title: 'Portraits',
    cover: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg',
    images: [
      'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg',
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    ],
  },
  {
    title: 'Street Art',
    cover: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
    images: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    ],
  },
];

const testimonials = [
  {
    quote: 'The gallery is a vibrant celebration of creativity. I found so much inspiration here!',
    author: 'Priya S.',
  },
  {
    quote: 'A must-visit for every art lover. The artists are truly talented!',
    author: 'Rohit A.',
  },
  {
    quote: 'The best place to discover new and emerging artists.',
    author: 'Meera D.',
  },
];

const faqs = [
  {
    q: 'How can I join as an artist?',
    a: 'Click the "Join the Community" button and fill out the form. Our team will review your application and get in touch!'
  },
  {
    q: 'Can I purchase artwork from the site?',
    a: 'Yes! Many artists offer their work for sale. Browse the gallery and contact the artist directly for purchases.'
  },
  {
    q: 'Is there a fee to showcase my art?',
    a: "No, it's free for artists to display their work and connect with the community."
  },
  {
    q: 'How do I contact a featured artist?',
    a: 'Each featured artist has a contact link or you can use the contact form below.'
  },
];

// Custom hook for intersection observer
function useInViewArray(length) {
  const refs = useRef([]);
  const [inView, setInView] = useState(Array(length).fill(false));

  useEffect(() => {
    setInView(Array(length).fill(false));
    const observers = [];
    for (let idx = 0; idx < length; idx++) {
      if (!refs.current[idx]) continue;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(prev => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(refs.current[idx]);
      observers.push(observer);
    }
    return () => observers.forEach(observer => observer.disconnect());
  }, [length]);

  return [refs, inView];
}

export default function ArtistsLanding() {
  // For animation
  const [artTypeRefs, artTypeInView] = useInViewArray(artTypes.length);
  const [artistRefs, artistInView] = useInViewArray(featuredArtists.length);
  const [galleryRefs, galleryInView] = useInViewArray(gallerySections.length);
  const [testimonialRefs, testimonialInView] = useInViewArray(testimonials.length);
  const [faqRefs, faqInView] = useInViewArray(faqs.length);

  // For staggered animation
  const getDelay = idx => ({ animationDelay: `${idx * 120}ms` });

  // Lightbox for gallery
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0, title: '' });
  const openLightbox = (images, title) => setLightbox({ open: true, images, index: 0, title });
  const closeLightbox = () => setLightbox({ open: false, images: [], index: 0, title: '' });
  const nextLightbox = () => setLightbox(l => ({ ...l, index: (l.index + 1) % l.images.length }));
  const prevLightbox = () => setLightbox(l => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }));

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 text-gray-900 font-sans overflow-x-hidden">
      {/* Lightbox Overlay */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeLightbox}>
          <div className="relative max-w-3xl w-full px-4" onClick={e => e.stopPropagation()}>
            <button
              className="absolute w-10 h-10 top-5 right-10 bg-black/70 text-white rounded-full p-2 text-2xl hover:bg-pink-500 transition z-10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              &times;
            </button>
            <button
              className="absolute left-12 top-1/2 -translate-y-1/2 bg-black/70 text-white w-10 h-fit rounded-full p-2 text-2xl hover:bg-pink-500 transition z-10"
              onClick={prevLightbox}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              className="absolute right-12 top-1/2 -translate-y-1/2 bg-black/70 text-white w-10 h-fit rounded-full p-2 text-2xl hover:bg-pink-500 transition z-10"
              onClick={nextLightbox}
              aria-label="Next"
            >
              &#8594;
            </button>
            <img src={lightbox.images[lightbox.index]} alt="Enlarged view" className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-pink-500 animate-scalein" />
            <div className="text-center mt-4 text-pink-400 text-lg font-semibold capitalize">{lightbox.title}</div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-28 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1465101046530-73398c7f28ca)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 opacity-80 z-0"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500">Artistry Unleashed</h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8">Discover, connect, and be inspired by the world of contemporary artists.</p>
          <a href="#contact" className="px-10 py-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-full shadow-lg hover:scale-105 transition font-bold text-lg">Join the Community</a>
        </div>
      </section>

      {/* What Artists Do Section */}
      <section className="py-20 px-6 bg-white/90">
        <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500">What Our Artists Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {artTypes.map((type, idx) => (
            <div
              key={type.title}
              ref={el => (artTypeRefs.current[idx] = el)}
              className={`bg-gradient-to-br from-pink-50 to-yellow-100 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center opacity-0 translate-y-8${artTypeInView[idx] ? ' animate-fadeinup' : ''}`}
              style={getDelay(idx)}
            >
              <img src={type.icon} alt={type.title} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-pink-600">{type.title}</h3>
              <p className="text-gray-700 text-base">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-yellow-50">
        <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">Featured Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {featuredArtists.map((artist, idx) => (
            <div
              key={artist.name}
              ref={el => (artistRefs.current[idx] = el)}
              className={`bg-white/90 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center opacity-0 translate-y-8${artistInView[idx] ? ' animate-fadeinup' : ''}`}
              style={getDelay(idx)}
            >
              <img src={artist.image} alt={artist.name} className="w-28 h-28 rounded-full object-cover border-4 border-pink-400 shadow mb-4" />
              <h3 className="text-xl font-bold mb-1 text-pink-600">{artist.name}</h3>
              <div className="text-sm text-yellow-600 mb-2">{artist.specialty}</div>
              <p className="text-gray-700 text-base mb-2">{artist.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-pink-50">
        <h2 className="text-3xl font-semibold mb-10 text-pink-500">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {gallerySections.map((section, idx) => (
            <div
              key={section.title}
              ref={el => (galleryRefs.current[idx] = el)}
              className={`overflow-hidden rounded-2xl shadow-lg group relative cursor-pointer opacity-0 translate-y-8${galleryInView[idx] ? ' animate-fadeinup' : ''}`}
              style={getDelay(idx)}
              onClick={() => openLightbox(section.images, section.title)}
            >
              <img src={section.cover} alt={section.title + ' cover'} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-lg font-semibold capitalize">View {section.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-yellow-50 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-pink-500">What Art Lovers Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map(({ quote, author }, idx) => (
            <div
              key={idx}
              ref={el => (testimonialRefs.current[idx] = el)}
              className={`bg-white/90 p-8 rounded-2xl shadow-lg border border-pink-200 opacity-0 translate-y-8${testimonialInView[idx] ? ' animate-fadeinup' : ''}`}
              style={getDelay(idx)}
            >
              <p className="italic text-lg mb-4 text-gray-700">"{quote}"</p>
              <p className="font-bold text-pink-500">{author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white/90">
        <h2 className="text-3xl font-semibold mb-10 text-pink-500">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto divide-y divide-pink-200 rounded-2xl shadow-lg bg-white">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              ref={el => (faqRefs.current[idx] = el)}
              className={`p-6 opacity-0 translate-y-8${faqInView[idx] ? ' animate-fadeinup' : ''}`}
              style={getDelay(idx)}
            >
              <div className="font-bold text-pink-600 mb-2">Q: {faq.q}</div>
              <div className="text-gray-700">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/90 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-pink-500">Let's Connect</h2>
        <p className="text-gray-700 mb-8">Are you an artist or an art lover? Reach out to join our creative community or for any inquiries.</p>
        <form className="max-w-lg mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-900" />
          <input type="email" placeholder="Your Email" className="px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-900" />
          <textarea placeholder="Your Message" rows={4} className="px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-900"></textarea>
          <button type="submit" className="px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold rounded-full hover:scale-105 transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-pink-50 py-6 px-4 text-center text-sm text-pink-500 border-t border-pink-100">
        <div className="mb-2">&copy; {new Date().getFullYear()} Artistry. All rights reserved.</div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-yellow-500 transition">Instagram</a>
          <a href="#" className="hover:text-yellow-500 transition">Facebook</a>
          <a href="mailto:hello@artistry.com" className="hover:text-yellow-500 transition">hello@artistry.com</a>
        </div>
      </footer>
    </main>
  );
}
