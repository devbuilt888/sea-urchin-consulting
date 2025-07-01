import React from 'react';

export default function FoodMarket() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-100 to-white text-gray-800 font-sans">
      <section className="flex flex-col items-center text-center px-6 pt-32 pb-20">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">Take Your Food Market Digital</h1>
        <p className="text-xl max-w-xl mb-8 text-gray-600">Connect with your community, offer online ordering, and grow your market with a fresh, vibrant website.</p>
        <a href="#leadform" className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-200 font-semibold text-lg">Get Started</a>
      </section>
      {/* Add features, process, testimonials, and CTA sections here */}
    </main>
  );
} 