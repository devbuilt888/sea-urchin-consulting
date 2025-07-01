import React from 'react';

const features = [
  {
    icon: 'https://rosepng.com/wp-content/uploads/elementor/thumbs/s11728_long_hair_isolated_on_white_background_-stylize_200_-_87dc3614-4b44-4a48-b278-838186a94154_1-photoroom-png-photoroom_11zon-qjnlfg9b405yno8slohk25dhnm1aepnkvr46bab1r4.png',
    title: 'Hair Styling',
    desc: 'Trendy cuts, styling, and treatments for all hair types.'
  },
  {
    icon: 'https://png.pngtree.com/png-clipart/20240812/original/pngtree-cartoon-portrait-of-girl-face-after-skincare-art-for-girls-cute-png-image_15755820.png',
    title: 'Facials & Skincare',
    desc: 'Glow-enhancing facials and professional skincare.'
  },
  {
    icon: 'https://png.pngitem.com/pimgs/s/226-2266405_transparent-pedicure-png-manicure-pedicure-adalah-png-download.png',
    title: 'Manicure & Pedicure',
    desc: 'Perfect nails with luxe mani-pedi sessions.'
  },
  {
    icon: 'https://icon2.cleanpng.com/lnd/20241205/pw/203db356b931b5a642375c786a442d.webp',
    title: 'Bridal & Party Makeup',
    desc: 'Look stunning for every special occasion.'
  }
];

const testimonials = [
  {
    quote: '"My go-to salon for every occasion. The ambience and service are unmatched!"',
    author: 'Anjali, Fashion Blogger'
  },
  {
    quote: '"The facial and hair spa made me feel brand new. Highly recommend!"',
    author: 'Ritika, Working Professional'
  },
  {
    quote: '"Booking was easy, staff is super friendly, and I loved my new haircut!"',
    author: 'Neha, Entrepreneur'
  }
];

export default function BeautySalon() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-100 to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col relative items-center text-center px-6 pt-32 pb-20" style={{ backgroundImage: 'url(/beauty-salon.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className=' z-10'>
        <h1 className="text-[2em] px-4 py-2 font-bold mb-4 text-white rounded-lg">Elevate Your Beauty Salon Online</h1>
        <p className="text-xl max-w-xl mb-8 text-white bg-black/50 px-4 py-2 rounded-lg">Attract new clients, manage appointments, and showcase your services with a stunning online presence.</p>
        <a href="#leadform" className="px-8 py-4 bg-purple-500 text-white rounded-full shadow-lg hover:bg-pink-500 hover:scale-105 transition-transform duration-200 font-semibold text-lg">Get Started</a>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-4xl font-semibold text-pink-600 mb-4">About Radiant Beauty</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">Radiant Beauty Salon is your go-to destination for relaxation and transformation. With expert beauticians, a serene ambiance, and top-tier products, we ensure every client leaves feeling their absolute best. Whether you're preparing for a special occasion or just need a glow-up, we have you covered.</p>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-semibold text-purple-600 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-100 to-purple-100 text-center">
        <h2 className="text-4xl font-semibold text-purple-700 mb-6">Limited-Time Offers</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">Enjoy our seasonal discounts and pamper yourself with our beauty combos. Book now and get 20% off on your first visit!</p>
        <a href="#leadform" className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-purple-600 transition">Claim Offer</a>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-white to-pink-50">
        <h2 className="text-4xl font-semibold text-purple-600 mb-12">Client Love</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map(({ quote, author }) => (
            <div key={author} className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="italic text-gray-700 mb-2">{quote}</p>
              <p className="font-semibold text-purple-600">{author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="leadform" className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold text-purple-600 mb-6">Book Your Appointment</h2>
        <p className="text-gray-700 mb-6">Leave your contact and our team will get in touch to schedule your salon experience.</p>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
          <input type="email" placeholder="Your Email" className="px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
          <input type="tel" placeholder="Phone Number" className="px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
          <textarea placeholder="Message (optional)" className="px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" rows={4}></textarea>
          <button type="submit" className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-purple-600 transition">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-purple-100 py-6 px-4 text-center text-sm text-purple-700 border-t">
        <div className="mb-2">&copy; {new Date().getFullYear()} Radiant Beauty Salon. All rights reserved.</div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-pink-600 transition">Instagram</a>
          <a href="#" className="hover:text-pink-600 transition">Facebook</a>
          <a href="mailto:contact@beautysalon.com" className="hover:text-pink-600 transition">contact@beautysalon.com</a>
        </div>
      </footer>
    </main>
  );
}
