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
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-28" style={{ backgroundImage: 'url(/collections/boutique.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-xl">Your Boutique. <br />Your Style. Online.</h1>
          <p className="text-lg text-white/90 mb-6">Discover curated collections and redefine your wardrobe with a single click.</p>
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
    </main>
  );
}