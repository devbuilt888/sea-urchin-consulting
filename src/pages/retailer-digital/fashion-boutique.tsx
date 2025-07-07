import React, { useEffect, useState } from 'react';

const features = [
  {
    icon: 'https://png.pngtree.com/element_our/png/20181031/hand-drawn-fashion-male-model-illustration-png_225645.png',
    title: 'Designer Wear',
    desc: 'Chic, custom-tailored outfits that define elegance.'
  },
  {
    icon: 'https://png.pngtree.com/png-clipart/20241231/original/pngtree-flying-red-silk-fabric-waving-satin-cloth-isolated-png-image_18357012.png',
    title: 'Premium Fabrics',
    desc: 'Hand-picked quality fabrics for comfort and style.'
  },
  {
    icon: 'https://file.aiquickdraw.com/imgcompressed/img/compressed_7ab179470846d4a1d463feb187acc05e.webp',
    title: 'Personal Styling',
    desc: 'Get styled by professionals for every occasion.'
  },
  {
    icon: 'https://png.pngtree.com/png-vector/20250205/ourmid/pngtree-e-commerce-website-builder-featuring-3d-icon-isolated-on-a-transparent-png-image_15380852.png',
    title: 'Online Boutique',
    desc: 'Seamless shopping with doorstep delivery.'
  }
];

const newArrival = [
  {
    image: 'https://png.pngtree.com/png-clipart/20241231/original/pngtree-flying-red-silk-fabric-waving-satin-cloth-isolated-png-image_18357012.png',
    title: 'New Arrival',
    desc: 'Exclusive styles crafted for elegance, just for you.'
  }
];

const testimonials = [
  {
    quote: '"Absolutely loved my outfit! The fit was perfect and I felt amazing."',
    author: 'Meera, Bride-to-be'
  },
  {
    quote: '"A must-visit for every fashion lover. Their designs are top-notch!"',
    author: 'Priya, Fashion Blogger'
  },
  {
    quote: '"Effortless styling experience and great customer service."',
    author: 'Ayesha, Entrepreneur'
  }
];

export default function FashionBoutique() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-white text-gray-800 font-sans relative overflow-x-hidden">
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm text-center animate-fade-in">
            <h3 className="text-2xl font-semibold text-rose-600 mb-4">Welcome to The Boutique Co.</h3>
            <p className="text-sm text-gray-600 mb-6">Sign up today and get 10% off your first purchase!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition"
            >
              Let's Shop
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-background-white"></div>
        <div className="absolute inset-0 hero-background"></div>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        {/* Elegant Spiral Overlay */}
        <div className="absolute inset-0 z-5">
          <div className="spiral-container">
            <div className="spiral-overlay"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-xl yantra-text">Your Boutique. <br />Your Style. Online.</h1>
          <p className="text-lg text-white/90 mb-6 yantra-text-subtitle">Discover curated collections and redefine your wardrobe with a single click.</p>
          <a href="#leadform" className="px-8 py-4 bg-rose-500 text-white rounded-full shadow-lg hover:bg-rose-600 transition font-semibold text-lg">Start Shopping</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-semibold text-rose-600 mb-12">Why Shop With Us?</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-rose-50 p-6 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105">
              <img src={icon} alt={title} className="w-14 h-14 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrival Section */}
      <section className="py-20 px-6 bg-rose-50 text-center">
        <h2 className="text-4xl font-semibold text-rose-600 mb-10">This Season's Must-Haves</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
              <img src={`/collections/collection${item}.jpg`} alt={`Collection ${item}`} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Look #{item}</h4>
                <p className="text-sm text-gray-600">Exclusive styles crafted for elegance, just for you.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-white to-rose-50">
        <h2 className="text-4xl font-semibold text-rose-500 mb-12">Loved by Our Customers</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map(({ quote, author }) => (
            <div key={author} className="bg-white p-6 rounded-xl border border-rose-100 shadow hover:shadow-md transition">
              <p className="italic text-gray-700 mb-2">{quote}</p>
              <p className="font-semibold text-rose-600">{author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map and Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto items-start">
          {/* Map */}
          <div className="flex-1 text-center">
            <h2 className="text-3xl font-semibold text-rose-600 mb-6">Visit Our Boutique</h2>
            <p className="text-gray-700 mb-8">Find us at the heart of fashion. Drop by for a personalized shopping experience!</p>
            <div className="rounded-xl overflow-hidden shadow-lg border border-rose-100">
              <iframe
                title="Boutique Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999349857885!2d2.292292615674839!3d48.8583730792877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf1f6b1b1%3A0x8c1b1b1b1b1b1b1b!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1710000000000!5m2!1sen!2sfr"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Contact Form */}
          <div className="flex-1 text-center" id="leadform">
            <h2 className="text-3xl font-semibold text-rose-600 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-6">Need help with styling or placing an order? We're just a message away.</p>
            <form className="max-w-md mx-auto flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400" />
              <input type="email" placeholder="Your Email" className="px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400" />
              <input type="tel" placeholder="Phone Number" className="px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400" />
              <textarea placeholder="Your Message" rows={4} className="px-4 py-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"></textarea>
              <button type="submit" className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-full hover:bg-rose-600 transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-rose-100 py-6 px-4 text-center text-sm text-rose-700 border-t">
        <div className="mb-2">&copy; {new Date().getFullYear()} The Boutique Co. All rights reserved.</div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-rose-600 transition">Instagram</a>
          <a href="#" className="hover:text-rose-600 transition">Facebook</a>
          <a href="mailto:hello@theboutique.com" className="hover:text-rose-600 transition">hello@theboutique.com</a>
        </div>
      </footer>

      {/* Elegant Spiral Animation Styles */}
      <style jsx>{`
        .hero-background {
          background-image: url('/collections/boutique.jpg');
          background-size: cover;
          background-position: center;
          clip-path: polygon(0 0, 100% 0, 100% 75%, 85% 85%, 70% 90%, 55% 88%, 40% 85%, 25% 88%, 15% 92%, 0 85%);
        }

        .hero-background-white {
          background: white;
          clip-path: polygon(0 78%, 100% 78%, 100% 81%, 88% 91%, 73% 96%, 58% 94%, 43% 91%, 28% 94%, 18% 98%, 0 91%, 0 78%);
          z-index: -1;
        }

        @keyframes yantra-expand {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          8% {
            opacity: 0.8;
          }
          20% {
            transform: scale(4) rotate(120deg);
            opacity: 0.95;
          }
          28% {
            transform: scale(4) rotate(180deg);
            opacity: 0.95;
          }
          36% {
            transform: scale(4) rotate(240deg);
            opacity: 0.95;
          }
          44% {
            opacity: 0.8;
          }
          48% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes text-border-sync {
          0% {
            text-shadow: 0 0 0 transparent;
          }
          8% {
            text-shadow: 
              1px 1px 0 rgba(0, 0, 0, 0.4),
              -1px -1px 0 rgba(0, 0, 0, 0.4),
              1px -1px 0 rgba(0, 0, 0, 0.4),
              -1px 1px 0 rgba(0, 0, 0, 0.4);
          }
          20% {
            text-shadow: 
              3px 3px 0 rgba(0, 0, 0, 0.9),
              -3px -3px 0 rgba(0, 0, 0, 0.9),
              3px -3px 0 rgba(0, 0, 0, 0.9),
              -3px 3px 0 rgba(0, 0, 0, 0.9),
              0 0 15px rgba(0, 0, 0, 0.7);
          }
          28% {
            text-shadow: 
              3px 3px 0 rgba(0, 0, 0, 0.9),
              -3px -3px 0 rgba(0, 0, 0, 0.9),
              3px -3px 0 rgba(0, 0, 0, 0.9),
              -3px 3px 0 rgba(0, 0, 0, 0.9),
              0 0 15px rgba(0, 0, 0, 0.7);
          }
          36% {
            text-shadow: 
              3px 3px 0 rgba(0, 0, 0, 0.9),
              -3px -3px 0 rgba(0, 0, 0, 0.9),
              3px -3px 0 rgba(0, 0, 0, 0.9),
              -3px 3px 0 rgba(0, 0, 0, 0.9),
              0 0 15px rgba(0, 0, 0, 0.7);
          }
          44% {
            text-shadow: 
              1px 1px 0 rgba(0, 0, 0, 0.4),
              -1px -1px 0 rgba(0, 0, 0, 0.4),
              1px -1px 0 rgba(0, 0, 0, 0.4),
              -1px 1px 0 rgba(0, 0, 0, 0.4);
          }
          48% {
            text-shadow: 0 0 0 transparent;
          }
          100% {
            text-shadow: 0 0 0 transparent;
          }
        }

        @keyframes text-border-sync-subtitle {
          0% {
            text-shadow: 0 0 0 transparent;
          }
          8% {
            text-shadow: 
              0.5px 0.5px 0 rgba(0, 0, 0, 0.2),
              -0.5px -0.5px 0 rgba(0, 0, 0, 0.2),
              0.5px -0.5px 0 rgba(0, 0, 0, 0.2),
              -0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
          }
          20% {
            text-shadow: 
              1.5px 1.5px 0 rgba(0, 0, 0, 0.45),
              -1.5px -1.5px 0 rgba(0, 0, 0, 0.45),
              1.5px -1.5px 0 rgba(0, 0, 0, 0.45),
              -1.5px 1.5px 0 rgba(0, 0, 0, 0.45),
              0 0 8px rgba(0, 0, 0, 0.35);
          }
          28% {
            text-shadow: 
              1.5px 1.5px 0 rgba(0, 0, 0, 0.45),
              -1.5px -1.5px 0 rgba(0, 0, 0, 0.45),
              1.5px -1.5px 0 rgba(0, 0, 0, 0.45),
              -1.5px 1.5px 0 rgba(0, 0, 0, 0.45),
              0 0 8px rgba(0, 0, 0, 0.35);
          }
          36% {
            text-shadow: 
              1.5px 1.5px 0 rgba(0, 0, 0, 0.45),
              -1.5px -1.5px 0 rgba(0, 0, 0, 0.45),
              1.5px -1.5px 0 rgba(0, 0, 0, 0.45),
              -1.5px 1.5px 0 rgba(0, 0, 0, 0.45),
              0 0 8px rgba(0, 0, 0, 0.35);
          }
          44% {
            text-shadow: 
              0.5px 0.5px 0 rgba(0, 0, 0, 0.2),
              -0.5px -0.5px 0 rgba(0, 0, 0, 0.2),
              0.5px -0.5px 0 rgba(0, 0, 0, 0.2),
              -0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
          }
          48% {
            text-shadow: 0 0 0 transparent;
          }
          100% {
            text-shadow: 0 0 0 transparent;
          }
        }
        
        .spiral-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .yantra-text {
          animation: text-border-sync 35s ease-in-out infinite;
        }

        .yantra-text-subtitle {
          animation: text-border-sync-subtitle 35s ease-in-out infinite;
        }
        
        .spiral-overlay {
          position: absolute;
          width: 95vw;
          height: 95vw;
          max-width: 1000px;
          max-height: 1000px;
          background: 
            /* Outer Sri Yantra triangles - upward pointing */
            conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(255, 255, 255, 0.8) 5deg,
              transparent 10deg,
              transparent 50deg,
              rgba(255, 255, 255, 0.8) 55deg,
              transparent 60deg,
              transparent 110deg,
              rgba(255, 255, 255, 0.8) 115deg,
              transparent 120deg,
              transparent 170deg,
              rgba(255, 255, 255, 0.8) 175deg,
              transparent 180deg,
              transparent 230deg,
              rgba(255, 255, 255, 0.8) 235deg,
              transparent 240deg,
              transparent 290deg,
              rgba(255, 255, 255, 0.8) 295deg,
              transparent 300deg,
              transparent 350deg,
              rgba(255, 255, 255, 0.8) 355deg,
              transparent 360deg
            ),
            /* Sacred lotus petals - 8 directions */
            radial-gradient(ellipse 45% 25% at 50% 12%, rgba(255, 255, 255, 0.9) 0%, transparent 60%),
            radial-gradient(ellipse 45% 25% at 88% 50%, rgba(255, 255, 255, 0.9) 0%, transparent 60%),
            radial-gradient(ellipse 45% 25% at 50% 88%, rgba(255, 255, 255, 0.9) 0%, transparent 60%),
            radial-gradient(ellipse 45% 25% at 12% 50%, rgba(255, 255, 255, 0.9) 0%, transparent 60%),
            radial-gradient(ellipse 35% 20% at 76% 24%, rgba(255, 255, 255, 0.8) 0%, transparent 60%),
            radial-gradient(ellipse 35% 20% at 76% 76%, rgba(255, 255, 255, 0.8) 0%, transparent 60%),
            radial-gradient(ellipse 35% 20% at 24% 76%, rgba(255, 255, 255, 0.8) 0%, transparent 60%),
            radial-gradient(ellipse 35% 20% at 24% 24%, rgba(255, 255, 255, 0.8) 0%, transparent 60%),
            /* Intermediate petals */
            radial-gradient(ellipse 30% 15% at 62% 18%, rgba(255, 255, 255, 0.7) 0%, transparent 60%),
            radial-gradient(ellipse 30% 15% at 82% 38%, rgba(255, 255, 255, 0.7) 0%, transparent 60%),
            radial-gradient(ellipse 30% 15% at 82% 62%, rgba(255, 255, 255, 0.7) 0%, transparent 60%),
            radial-gradient(ellipse 30% 15% at 62% 82%, rgba(255, 255, 255, 0.7) 0%, transparent 60%),
            radial-gradient(ellipse 30% 15% at 38% 82%, rgba(255, 255, 255, 0.7) 0%, transparent 60%),
            radial-gradient(ellipse 30% 15% at 18% 62%, rgba(255, 255, 255, 0.7) 0%, transparent 60%),
            radial-gradient(ellipse 30% 15% at 18% 38%, rgba(255, 255, 255, 0.7) 0%, transparent 60%),
            radial-gradient(ellipse 30% 15% at 38% 18%, rgba(255, 255, 255, 0.7) 0%, transparent 60%),
            /* Sacred center mandala */
            radial-gradient(circle at center, rgba(255, 255, 255, 0.95) 4%, transparent 8%),
            radial-gradient(circle at center, transparent 10%, rgba(255, 255, 255, 0.8) 11%, rgba(255, 255, 255, 0.8) 13%, transparent 14%);
          border-radius: 50%;
          animation: yantra-expand 35s ease-in-out infinite;
          transform-origin: center;
        }
        
        .spiral-overlay::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: 
            /* Intersecting sacred triangles - downward pointing */
            conic-gradient(
              from 30deg,
              transparent 0deg,
              rgba(255, 255, 255, 0.7) 8deg,
              transparent 16deg,
              transparent 56deg,
              rgba(255, 255, 255, 0.7) 64deg,
              transparent 72deg,
              transparent 116deg,
              rgba(255, 255, 255, 0.7) 124deg,
              transparent 132deg,
              transparent 176deg,
              rgba(255, 255, 255, 0.7) 184deg,
              transparent 192deg,
              transparent 236deg,
              rgba(255, 255, 255, 0.7) 244deg,
              transparent 252deg,
              transparent 296deg,
              rgba(255, 255, 255, 0.7) 304deg,
              transparent 312deg,
              transparent 356deg,
              rgba(255, 255, 255, 0.7) 364deg,
              transparent 372deg
            ),
            /* Hexagonal sacred pattern */
            conic-gradient(
              from 60deg,
              rgba(255, 255, 255, 0.6) 0deg,
              transparent 20deg,
              rgba(255, 255, 255, 0.6) 40deg,
              transparent 60deg,
              rgba(255, 255, 255, 0.6) 80deg,
              transparent 100deg,
              rgba(255, 255, 255, 0.6) 120deg,
              transparent 140deg,
              rgba(255, 255, 255, 0.6) 160deg,
              transparent 180deg,
              rgba(255, 255, 255, 0.6) 200deg,
              transparent 220deg,
              rgba(255, 255, 255, 0.6) 240deg,
              transparent 260deg,
              rgba(255, 255, 255, 0.6) 280deg,
              transparent 300deg,
              rgba(255, 255, 255, 0.6) 320deg,
              transparent 340deg,
              rgba(255, 255, 255, 0.6) 360deg
            );
          border-radius: 50%;
          transform: translate(-50%, -50%) rotate(22.5deg);
        }
        
        .spiral-overlay::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          background: 
            /* Inner sacred geometry - 12-pointed star */
            conic-gradient(
              from 15deg,
              rgba(255, 255, 255, 0.9) 0deg,
              transparent 12.5deg,
              rgba(255, 255, 255, 0.8) 15deg,
              transparent 27.5deg,
              rgba(255, 255, 255, 0.9) 30deg,
              transparent 42.5deg,
              rgba(255, 255, 255, 0.8) 45deg,
              transparent 57.5deg,
              rgba(255, 255, 255, 0.9) 60deg,
              transparent 72.5deg,
              rgba(255, 255, 255, 0.8) 75deg,
              transparent 87.5deg,
              rgba(255, 255, 255, 0.9) 90deg,
              transparent 102.5deg,
              rgba(255, 255, 255, 0.8) 105deg,
              transparent 117.5deg,
              rgba(255, 255, 255, 0.9) 120deg,
              transparent 132.5deg,
              rgba(255, 255, 255, 0.8) 135deg,
              transparent 147.5deg,
              rgba(255, 255, 255, 0.9) 150deg,
              transparent 162.5deg,
              rgba(255, 255, 255, 0.8) 165deg,
              transparent 177.5deg,
              rgba(255, 255, 255, 0.9) 180deg,
              transparent 192.5deg,
              rgba(255, 255, 255, 0.8) 195deg,
              transparent 207.5deg,
              rgba(255, 255, 255, 0.9) 210deg,
              transparent 222.5deg,
              rgba(255, 255, 255, 0.8) 225deg,
              transparent 237.5deg,
              rgba(255, 255, 255, 0.9) 240deg,
              transparent 252.5deg,
              rgba(255, 255, 255, 0.8) 255deg,
              transparent 267.5deg,
              rgba(255, 255, 255, 0.9) 270deg,
              transparent 282.5deg,
              rgba(255, 255, 255, 0.8) 285deg,
              transparent 297.5deg,
              rgba(255, 255, 255, 0.9) 300deg,
              transparent 312.5deg,
              rgba(255, 255, 255, 0.8) 315deg,
              transparent 327.5deg,
              rgba(255, 255, 255, 0.9) 330deg,
              transparent 342.5deg,
              rgba(255, 255, 255, 0.8) 345deg,
              transparent 357.5deg,
              rgba(255, 255, 255, 0.9) 360deg
            ),
            /* Inner concentric rings */
            radial-gradient(circle at center, transparent 18%, rgba(255, 255, 255, 0.9) 19%, rgba(255, 255, 255, 0.9) 21%, transparent 22%),
            radial-gradient(circle at center, transparent 30%, rgba(255, 255, 255, 0.8) 31%, rgba(255, 255, 255, 0.8) 33%, transparent 34%);
          border-radius: 50%;
          transform: translate(-50%, -50%) rotate(-22.5deg);
        }
      `}</style>
    </main>
  );
}