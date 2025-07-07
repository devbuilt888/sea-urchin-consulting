import { useState } from 'react';

const categories = [
  { icon: '💊', label: 'Medicine', offer: 'SAVE 25%' },
  { icon: '🧪', label: 'Lab Tests', offer: 'UPTO 70% OFF' },
  { icon: '👨‍⚕️', label: 'Doctor Consult', offer: '' },
  { icon: '🧴', label: 'Healthcare', offer: 'UPTO 60% OFF' },
  { icon: '📝', label: 'Health Blogs', offer: '' },
  { icon: '💳', label: 'PLUS', offer: 'SAVE 5% EXTRA' },
  { icon: '🎁', label: 'Offers', offer: '' },
  { icon: '🛒', label: 'Value Store', offer: 'UPTO 50% OFF' },
];

export default function HealthcareIT() {
  const [search, setSearch] = useState('');
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 text-gray-900 font-sans overflow-x-hidden relative">
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl text-teal-600 font-extrabold">CuraCart</span>
            <span className="italic text-xs text-teal-400">Your Trusted Health Partner</span>
          </div>
          
          {/* User/Cart */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-gray-700 cursor-pointer"><span className="text-xl">👤</span> Hello, Log in</span>
            <span className="flex items-center gap-1 text-pink-600 cursor-pointer"><span className="text-xl">🎁</span> Offers</span>
            <span className="flex items-center gap-1 text-gray-700 cursor-pointer"><span className="text-2xl">🛒</span> Cart</span>
          </div>
        </div>
        {/* Nav */}
        <nav className="w-full border-t border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto flex items-center gap-8 px-4 py-2 text-gray-700 text-sm font-medium overflow-x-auto">
            <a href="#" className="hover:text-teal-600">Medicine</a>
            <a href="#" className="hover:text-teal-600">Lab Tests</a>
            <a href="#" className="hover:text-teal-600">Doctor Consult</a>
            <a href="#" className="hover:text-teal-600">Healthcare</a>
            <a href="#" className="hover:text-teal-600">Health Blogs</a>
            <a href="#" className="hover:text-teal-600">PLUS</a>
            <a href="#" className="hover:text-teal-600">Offers</a>
            <a href="#" className="hover:text-teal-600">Value Store</a>
          </div>
        </nav>
      </header>

      {/* Hero/Search */}
      <section className="w-full py-10 px-4 bg-gradient-to-r from-blue-50 via-white to-amber-50 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">What are you looking for?</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-teal-200 rounded-lg shadow text-teal-600 font-semibold hover:bg-teal-50 transition"><span className="text-xl">📄</span> Order with prescription. <span className="text-teal-700 font-bold ml-1">UPLOAD NOW →</span></button>
        </div>
        <div className="w-full max-w-2xl flex items-center bg-white rounded-full shadow-lg px-4 py-2 mb-8 border border-gray-100">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none px-2 py-2 text-lg text-gray-700 placeholder:text-gray-400"
            placeholder="Search for Health Drinks, Medicines, etc."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="ml-2 px-6 py-2 bg-teal-600 text-white rounded-full font-semibold shadow hover:bg-teal-700 transition">Search</button>
        </div>
        {/* Categories */}
        <div className="w-full max-w-5xl flex flex-wrap items-center justify-center gap-8 mt-4">
          {categories.map(cat => (
            <div key={cat.label} className="flex flex-col items-center min-w-[110px]">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow border border-gray-100 text-4xl mb-2">{cat.icon}</div>
              <div className="font-semibold text-gray-800 text-base text-center">{cat.label}</div>
              {cat.offer && <div className="text-xs text-pink-600 font-bold mt-1">{cat.offer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border-t-4 border-teal-200">
          <span className="text-3xl mb-2">🚚</span>
          <div className="font-bold text-lg mb-1 text-teal-700">Fast Home Delivery</div>
          <div className="text-gray-600">Get medicines and health products delivered to your doorstep quickly and safely.</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border-t-4 border-teal-200">
          <span className="text-3xl mb-2">🩺</span>
          <div className="font-bold text-lg mb-1 text-teal-700">Licensed Pharmacists</div>
          <div className="text-gray-600">Expert advice and support from certified professionals, always available for you.</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border-t-4 border-teal-200">
          <span className="text-3xl mb-2">🔒</span>
          <div className="font-bold text-lg mb-1 text-teal-700">Privacy & Security</div>
          <div className="text-gray-600">Your health data and orders are always safe, secure, and confidential.</div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8 text-teal-700 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-50 rounded-full text-3xl mb-3 border border-teal-200">📄</div>
            <div className="font-semibold mb-1">Upload Prescription</div>
            <div className="text-gray-600 text-sm">Snap a photo or upload your doctor's prescription.</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-50 rounded-full text-3xl mb-3 border border-teal-200">🛒</div>
            <div className="font-semibold mb-1">Choose Products & Delivery</div>
            <div className="text-gray-600 text-sm">Select medicines, health products, and delivery slot.</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-50 rounded-full text-3xl mb-3 border border-teal-200">🏠</div>
            <div className="font-semibold mb-1">Get at Your Doorstep</div>
            <div className="text-gray-600 text-sm">Sit back and relax while we deliver to your home.</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8 text-teal-700 text-center">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="bg-white rounded-2xl shadow p-6 flex-1 text-center border-t-4 border-teal-200">
            <div className="italic text-gray-700 mb-2">"Super fast delivery and genuine medicines. I trust them for my family's health!"</div>
            <div className="font-bold text-teal-700">— Priya S.</div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex-1 text-center border-t-4 border-teal-200">
            <div className="italic text-gray-700 mb-2">"Easy to upload prescription and order. Customer support is excellent!"</div>
            <div className="font-bold text-teal-700">— Rahul M.</div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="max-w-xl mx-auto mb-20 py-12 px-4">
        <h2 className="text-xl font-bold mb-4 text-teal-700 text-center">Transfer Your Prescription or Get Started</h2>
        <form className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4 border-t-4 border-teal-200">
          <input type="text" placeholder="Your Name" className="rounded-lg px-4 py-3 bg-teal-50 text-gray-700 border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400" />
          <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 bg-teal-50 text-gray-700 border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400" />
          <input type="tel" placeholder="Phone Number" className="rounded-lg px-4 py-3 bg-teal-50 text-gray-700 border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400" />
          <input type="text" placeholder="Prescription Details (optional)" className="rounded-lg px-4 py-3 bg-teal-50 text-gray-700 border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400" />
          <button type="submit" className="px-6 py-3 bg-teal-600 text-white rounded-full shadow hover:bg-teal-700 hover:scale-105 transition-transform duration-200 font-semibold">Submit</button>
        </form>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-teal-600/90 shadow-lg py-4 flex justify-center items-center z-50 backdrop-blur-md">
        <span className="mr-4 font-semibold text-white">Need medicines or lab tests?</span>
        <button className="px-6 py-3 bg-white text-teal-600 rounded-full shadow hover:bg-gray-100 hover:scale-105 transition-transform duration-200 font-semibold">Order Now</button>
      </div>
    </main>
  );
} 