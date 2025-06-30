'use client';

import { useState, useRef, useEffect } from 'react';

// Custom hook for scroll reveal
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

const features = [
  {
    icon: '🖼️',
    title: 'Portfolio Site',
    desc: 'Showcase your work with a beautiful, cohesive brand site.'
  },
  {
    icon: '🛒',
    title: 'Light E-Commerce',
    desc: 'Sell prints, downloads, or goods with an integrated shop.'
  },
  {
    icon: '💳',
    title: 'Shopping Cart + Payments',
    desc: 'Easy checkout with Stripe and PayPal integration.'
  },
  {
    icon: '📈',
    title: 'SEO & Analytics',
    desc: 'Get found online and track your growth with Google Analytics.'
  }
];

const steps = [
  {
    icon: '🖼️',
    title: 'Portfolio',
    desc: 'We design your creative portfolio site.'
  },
  {
    icon: '🛒',
    title: 'Shop Setup',
    desc: 'We add a shop for prints, downloads, or goods.'
  },
  {
    icon: '💳',
    title: 'Payments',
    desc: 'We connect Stripe and PayPal for easy checkout.'
  },
  {
    icon: '📈',
    title: 'SEO & Analytics',
    desc: 'We set up SEO basics and Google Analytics.'
  }
];

const testimonials = [
  {
    quote: '“My art finally has a home online, and I made my first sale in a week!”',
    author: 'Lena, Artist'
  },
  {
    quote: '“The portfolio looks amazing and the shop is so easy to use.”',
    author: 'Chris, Photographer'
  },
  {
    quote: '“I can track my visitors and sales, and my brand feels real now.”',
    author: 'Sam, Craft Maker'
  }
];

export default function SolopreneurPortfolio() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-blue-50 text-gray-800 font-sans">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-100 via-blue-100 to-white rounded-full blur-3xl opacity-60 z-0" />
        <span className="absolute left-12 top-24 text-5xl animate-float-slow z-10">🖼️</span>
        <span className="absolute right-20 top-40 text-4xl animate-float z-10">🛒</span>
        <span className="absolute left-1/3 bottom-20 text-4xl animate-float z-10">💳</span>
        <span className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10">📈</span>
        <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10">Showcase & Sell Your Creativity</h1>
        <h6 className="text-lg text-gray-500 mb-2 relative z-10">Creative Solopreneur Building a Portfolio + Shop</h6>
        <p className="text-xl max-w-xl mb-8 text-gray-700 relative z-10">
          Get a beautiful portfolio, sell your work, and grow your brand online — all in one place.
        </p>
        <a
          href="#book"
          className="px-8 py-4 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Book Free Consultation
        </a>
      </section>

      {/* Audience Info Card */}
      <section className="flex justify-center px-4 -mt-12 mb-12">
        <div className="bg-white/90 border-l-4 border-pink-400 shadow-lg rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-pink-500 font-bold mb-2">Who is this for?</span>
          <div className="text-lg font-semibold text-gray-700 mb-1">Photographers</div>
          <div className="text-lg font-semibold text-gray-700 mb-1">Artists</div>
          <div className="text-lg font-semibold text-gray-700 mb-1">Craft-Goods Makers</div>
          <div className="mt-2 text-sm text-gray-500">...and any creative ready to sell online!</div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12">Everything You Need</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border-t-4 border-pink-100 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <span className="text-4xl mb-4">{f.icon}</span>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works timeline/stepper */}
      <section ref={stepsRef} className={`py-20 px-6 bg-gradient-to-br from-white via-pink-50 to-blue-50 text-center shadow-inner rounded-2xl max-w-5xl mx-auto my-16 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 border-4 border-pink-200 bg-white shadow-lg text-3xl transition-transform duration-200 group-hover:scale-110 animate-step-float`}
                style={{ animationDelay: `${i * 0.5}s`, backgroundColor: i === 0 ? '#fce7f3' : i === 1 ? '#fef9c3' : i === 2 ? '#bbf7d0' : '#e0e7ff' }}
              >
                {step.icon}
              </div>
              <div className="font-semibold mb-1 text-lg">{step.title}</div>
              <div className="text-gray-500 text-sm mb-2 max-w-[140px] mx-auto">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-40px] w-20 h-2 bg-gradient-to-r from-pink-100 to-blue-100 z-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial carousel */}
      <section ref={testimonialsRef} className={`py-20 px-6 mb-20 bg-gradient-to-br from-pink-50 to-blue-50 text-center transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-10">What Clients Say</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 min-h-[160px] flex flex-col items-center">
            <blockquote className="text-lg italic text-gray-700 mb-4 transition-all duration-500 animate-fade-in">
              {testimonials[testimonialIdx].quote}
            </blockquote>
            <div className="text-pink-600 font-semibold">{testimonials[testimonialIdx].author}</div>
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === testimonialIdx ? 'bg-pink-500' : 'bg-gray-300'} transition`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 shadow-lg py-4 flex justify-center items-center z-50 backdrop-blur-md">
        <span className="mr-4 font-semibold text-pink-700">Ready to launch your creative shop?</span>
        <a
          href="#book"
          className="px-6 py-3 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 hover:scale-105 transition-transform duration-200 font-semibold"
        >
          Book Free Consultation
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes step-float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }
        .animate-step-float {
          animation: step-float 3.5s ease-in-out infinite;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>
    </main>
  );
} 