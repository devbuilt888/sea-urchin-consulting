import React from 'react';

export default function BeautySalon() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-100 to-white text-gray-800 font-sans">
      <section className="flex flex-col items-center text-center px-6 pt-32 pb-20">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Elevate Your Beauty Salon Online</h1>
        <p className="text-xl max-w-xl mb-8 text-gray-600">Attract new clients, manage appointments, and showcase your services with a stunning online presence.</p>
        <a href="#leadform" className="px-8 py-4 bg-purple-500 text-white rounded-full shadow-lg hover:bg-pink-500 hover:scale-105 transition-transform duration-200 font-semibold text-lg">Get Started</a>
      </section>
      {/* Add features, process, testimonials, and CTA sections here */}
    </main>
  );
} 