import React, { useState, useRef, useEffect } from 'react';

const features = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/5346/5346492.png',
    title: 'Fresh Produce',
    desc: 'Locally sourced fruits, veggies, and more—picked at peak freshness.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/2722/2722160.png',
    title: 'Easy Online Ordering',
    desc: 'Browse, select, and order your favorites from home or on the go.'
  },
  {
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/028/651/305/small/food-delivery-service-fast-food-delivery-png.png',
    title: 'Local Delivery',
    desc: 'Fast, friendly delivery right to your door or curbside pickup.'
  },
  {
    icon: 'https://thumbs.dreamstime.com/b/weekly-special-stamp-white-background-labels-stamps-series-154647347.jpg',
    title: 'Weekly Specials',
    desc: 'Discover new deals and seasonal favorites every week.'
  }
];

const benefits = [
  'Farm-to-table freshness you can taste',
  'Support local growers and artisans',
  'No-hassle ordering and payment',
  'Eco-friendly packaging and practices',
  'Personalized service and community focus'
];

const steps = [
  { icon: '🛒', title: 'Browse', desc: 'Explore our fresh selection online.' },
  { icon: '📦', title: 'Order', desc: 'Add your favorites to your cart and checkout.' },
  { icon: '🚚', title: 'Delivery', desc: 'We deliver to your door or prepare for pickup.' }
];

const testimonials = [
  {
    quote: '"The produce is always so fresh and the online ordering is a breeze!"',
    author: 'Priya, Local Foodie'
  },
  {
    quote: '"I love supporting local farmers and getting my groceries delivered."',
    author: 'Ramesh, Busy Parent'
  },
  {
    quote: '"Weekly specials keep me coming back. The quality is unbeatable!"',
    author: 'Anita, Chef'
  }
];

export default function FoodMarket() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-100 to-white text-gray-800 font-sans relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-200/60 via-yellow-100/60 to-white/80 pointer-events-none -z-10" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2Fu6QEeiZnm__Mq7EaMVMmxyayifYY7sYw&s" alt="Fresh Produce" className="w-24 h-24 mb-4 animate-float" />
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent drop-shadow">Take Your Food Market Digital</h1>
        <p className="text-xl max-w-xl mb-8 text-gray-700">Connect with your community, offer online ordering, and grow your market with a fresh, vibrant website.</p>
        <a href="#leadform" className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-200 font-semibold text-lg">Get Started</a>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-semibold text-green-700 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-center">
              <img src={icon} alt={title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Shop With Us / Benefits */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-yellow-50 text-center">
        <h2 className="text-4xl font-semibold text-yellow-700 mb-6">Why Shop With Us?</h2>
        <ul className="max-w-2xl mx-auto text-lg text-gray-700 space-y-3">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center gap-3 justify-center">
              <span className="text-green-500 text-2xl">✔️</span> {b}
            </li>
          ))}
        </ul>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-semibold text-green-700 mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center flex-1 min-w-[120px]">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-3 border-4 border-green-200 bg-yellow-50 shadow text-3xl">
                {step.icon}
              </div>
              <div className="font-semibold mb-1 text-lg text-gray-800">{step.title}</div>
              <div className="text-gray-500 text-sm mb-2 max-w-[140px] mx-auto">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-20 h-2 bg-gradient-to-r from-green-200 to-yellow-200 my-2" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-white to-yellow-50">
        <h2 className="text-4xl font-semibold text-green-700 mb-12">What Our Customers Say</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow p-8 min-h-[160px] flex flex-col items-center border border-yellow-100 hover:shadow-md transition">
            <blockquote className="text-lg italic text-gray-700 mb-4">{testimonials[testimonialIdx].quote}</blockquote>
            <div className="text-green-600 font-semibold">{testimonials[testimonialIdx].author}</div>
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === testimonialIdx ? 'bg-green-500 scale-125' : 'bg-gray-300 hover:bg-green-300'}`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture / Contact Form */}
      <section id="leadform" className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">Get In Touch</h2>
        <p className="text-gray-700 mb-6">Leave your contact and we’ll help you get started with online ordering or answer your questions.</p>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          <input type="email" placeholder="Your Email" className="px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          <input type="tel" placeholder="Phone Number" className="px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          <textarea placeholder="Message (optional)" className="px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" rows={4}></textarea>
          <button type="submit" className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-yellow-500 transition">Submit</button>
        </form>
      </section>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-green-600 text-white py-4 flex justify-center items-center z-50 shadow-lg">
        <span className="mr-4 font-semibold">Ready for fresh, local groceries?</span>
        <a href="#leadform" className="px-6 py-3 bg-yellow-400 text-green-900 rounded-full font-semibold shadow hover:bg-yellow-500 transition">Get Started</a>
      </div>

      {/* Footer */}
      <footer className="bg-green-100 py-6 px-4 text-center text-sm text-green-700 border-t mt-24">
        <div className="mb-2">&copy; {new Date().getFullYear()} Fresh Market. All rights reserved.</div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-yellow-600 transition">Instagram</a>
          <a href="#" className="hover:text-yellow-600 transition">Facebook</a>
          <a href="mailto:hello@freshmarket.com" className="hover:text-yellow-600 transition">hello@freshmarket.com</a>
        </div>
      </footer>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
