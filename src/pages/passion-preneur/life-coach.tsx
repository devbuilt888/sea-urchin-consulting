import React from 'react';

const features = [
  {
    icon: '/branding.png',
    title: 'Build Your Brand',
    desc: 'Create a professional online presence that reflects your coaching philosophy.'
  },
  {
    icon: '/calendar.png',
    title: 'Smart Scheduling',
    desc: 'Let clients book and pay for sessions with calendar sync and reminders.'
  },
  {
    icon: '/clients.png',
    title: 'Client Management',
    desc: 'Keep track of client sessions, progress notes, and milestones in one place.'
  },
  {
    icon: '/email.png',
    title: 'Email Automation',
    desc: 'Engage clients with personalized onboarding, follow-ups, and newsletters.'
  }
];

const testimonials = [
  {
    quote: '"LifeCoachPro transformed how I run my coaching business. It\'s simple, sleek, and powerful."',
    author: 'Avery, Life Coach'
  },
  {
    quote: '"The automated bookings and follow-ups save me hours. My clients love it too!"',
    author: 'Morgan, Career Coach'
  },
  {
    quote: '"I\'ve never looked more professional online. My inquiries doubled."',
    author: 'Jamie, Wellness Coach'
  }
];

export default function LifeCoachSite() {
  return (
    <main className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-blue-50 to-purple-50">
        
      {/* Hero */}
      <section className="px-6 py-20 text-center bg-gradient-to-br from-blue-100 via-purple-100 to-white">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Empowering Coaches to Transform More Lives</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">LifeCoachPro is a done-for-you website solution built for life, career, and wellness coaches. Focus on coaching—let us handle your tech.</p>
        <a href="#contact" className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition">Get Your Free Demo</a>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold text-blue-700 mb-6">Why LifeCoachPro?</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">We help coaches launch beautiful, functional websites that attract and convert clients—with booking tools, CRM integration, email automations, and more. No tech skills required.</p>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-semibold text-blue-700 mb-12 text-center">Key Features</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map(({ icon, title, desc }, idx) => (
            <div key={title} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition text-center flex flex-col items-center">
              {/* Use emoji icons instead of images */}
              {idx === 0 && <span className="text-4xl mb-4">💼</span>}
              {idx === 1 && <span className="text-4xl mb-4">📅</span>}
              {idx === 2 && <span className="text-4xl mb-4">🧑‍🤝‍🧑</span>}
              {idx === 3 && <span className="text-4xl mb-4">✉️</span>}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 text-center">
        <h2 className="text-4xl font-semibold text-blue-700 mb-12">What Coaches Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map(({ quote, author }) => (
            <div key={author} className="bg-white p-6 rounded-xl shadow text-left hover:shadow-md transition">
              <p className="italic text-gray-700 mb-2">{quote}</p>
              <p className="font-semibold text-blue-600">{author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Ready to Launch?</h2>
        <p className="text-gray-700 mb-6">Let's set up your coaching site and get you more clients. Drop your email below and we'll reach out.</p>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input type="email" placeholder="Your Email" className="px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-purple-600 transition">Book Free Strategy Call</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-sm py-6 px-4 text-center">
        <div className="mb-2">&copy; {new Date().getFullYear()} LifeCoachPro. All rights reserved.</div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="mailto:hello@lifecoachpro.com" className="hover:underline">hello@lifecoachpro.com</a>
        </div>
      </footer>
    </main>
  );
}
