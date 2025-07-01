'use client';

import { useState, useRef, useEffect } from 'react';

const features = [
  {
    icon: '🛍️',
    title: 'Shopify/WooCommerce Store',
    desc: 'Launch your online store and reach more customers.'
  },
  {
    icon: '🧾',
    title: 'POS Sync',
    desc: 'Connect your in-store POS for seamless inventory and sales.'
  },
  {
    icon: '🚚',
    title: 'Local Delivery & Pickup',
    desc: 'Offer curbside pickup and local delivery to boost convenience.'
  },
  {
    icon: '💌',
    title: 'Loyalty & Promotions',
    desc: 'Automate email/SMS loyalty programs and promotions.'
  }
];

const steps = [
  {
    icon: '🛍️',
    title: 'Store Setup',
    desc: 'We build your Shopify or WooCommerce store.'
  },
  {
    icon: '🧾',
    title: 'POS Sync',
    desc: 'We connect your POS for unified sales and inventory.'
  },
  {
    icon: '🚚',
    title: 'Delivery Integration',
    desc: 'Enable local delivery and curbside pickup.'
  },
  {
    icon: '💌',
    title: 'Loyalty Automation',
    desc: 'Set up automated email/SMS loyalty and promotions.'
  }
];

const testimonials = [
  {
    quote: '"We doubled our sales after launching our online store and offering local delivery!"',
    author: 'Sophie, Boutique Owner'
  },
  {
    quote: '"POS sync made inventory a breeze. Our customers love click-and-collect!"',
    author: 'Marco, Artisanal Food Shop'
  },
  {
    quote: '"The loyalty emails keep our regulars coming back. Highly recommend!"',
    author: 'Jenna, Salon Owner'
  }
];

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

// Animated background component with jaw-dropping effects
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-amber-700 animate-gradient-shift" />
      
      {/* Animated geometric shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 animate-float-slow blur-2xl" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-30 animate-float blur-xl" />
      <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-25 animate-float-slow blur-2xl" />
      <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-35 animate-float blur-xl" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-move" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-emerald-300 rounded-full opacity-70 animate-particle-1 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-amber-300 rounded-full opacity-90 animate-particle-2 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
      <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-teal-300 rounded-full opacity-80 animate-particle-3 drop-shadow-[0_0_12px_rgba(20,184,166,0.5)]" />
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-orange-300 rounded-full opacity-95 animate-particle-4 drop-shadow-[0_0_6px_rgba(249,115,22,0.5)]" />
      
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/15 to-transparent animate-wave" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent animate-wave-delayed" />
      
      {/* Floating shopping elements */}
      <div className="absolute top-1/3 left-1/6 text-3xl animate-float-slow opacity-60">🛍️</div>
      <div className="absolute top-2/3 right-1/6 text-2xl animate-float opacity-50">🧾</div>
      <div className="absolute bottom-1/4 left-1/5 text-2xl animate-float-slow opacity-55">🚚</div>
      <div className="absolute top-1/2 left-1/4 text-2xl animate-float opacity-45">💌</div>
      
      {/* Animated light rays */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-light-ray-1" />
      <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-light-ray-2" />
    </div>
  );
}

export default function RetailerDigital() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  return (
    <main className="min-h-screen text-gray-800 font-sans relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="flex flex-col items-center justify-center bg-white/95 backdrop-blur-lg p-10 rounded-[100px] shadow-[0_35px_60px_-12px_rgba(0,0,0,0.3)] mb-10 border border-white/20 relative z-10 hover:shadow-[0_45px_80px_-12px_rgba(0,0,0,0.4)] transition-all duration-500 transform hover:scale-105">
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 text-white p-3 rounded-full text-sm font-bold mb-4 animate-pulse">
            Take Your Store Digital
          </span>
          <h1 className="text-6xl font-bold mb-4 max-w-3xl relative z-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
            Brick-and-Mortar Retailer Going Digital
          </h1>
        </div>
        
        {/* Enhanced floating emoji icons with glow effects */}
        <span className="absolute left-12 top-24 text-6xl animate-float-slow z-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] hover:scale-125 transition-transform duration-300 filter brightness-110">🛍️</span>
        <span className="absolute right-20 top-40 text-5xl animate-float z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-125 transition-transform duration-300 filter brightness-110">🧾</span>
        <span className="absolute left-1/3 bottom-20 text-5xl animate-float z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-125 transition-transform duration-300 filter brightness-110">🚚</span>
        <span className="absolute right-1/4 bottom-32 text-5xl animate-float-slow z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-125 transition-transform duration-300 filter brightness-110">💌</span>
        
        <p className="text-white/95 text-2xl max-w-2xl mb-10 text-gray-100 relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] leading-relaxed">
          Grow beyond foot-traffic. Get your boutique, food shop, or salon online with e-commerce, delivery, and loyalty automations.
        </p>
        <a
          href="#book"
          className="px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 text-white rounded-full shadow-[0_15px_35px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_25px_50px_-5px_rgba(16,185,129,0.6)] hover:scale-110 transition-all duration-300 font-bold text-xl relative z-10 border border-white/20 backdrop-blur-sm transform hover:rotate-1"
        >
          Book Free Consultation
        </a>
      </section>

      {/* Enhanced Audience Info Card */}
      <section className="flex justify-center px-4 -mt-12 mb-12 relative z-10">
        <div className="bg-white/95 backdrop-blur-lg border-l-4 border-emerald-400 shadow-[0_25px_35px_-5px_rgba(0,0,0,0.15)] rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center hover:shadow-[0_35px_45px_-5px_rgba(0,0,0,0.2)] transition-all duration-300 border border-white/20 transform hover:scale-105">
          <span className="uppercase text-xs tracking-widest text-emerald-500 font-bold mb-2">Who is this for?</span>
          <div className="text-lg font-semibold text-gray-700 mb-1 hover:text-emerald-600 transition-colors duration-200 cursor-pointer">Boutique Retailers</div>
          <div className="text-lg font-semibold text-gray-700 mb-1 hover:text-emerald-600 transition-colors duration-200 cursor-pointer">Artisanal Food Shops</div>
          <div className="text-lg font-semibold text-gray-700 mb-1 hover:text-emerald-600 transition-colors duration-200 cursor-pointer">Salons & Barbershops</div>
          <div className="mt-2 text-sm text-gray-500">...and any local shop ready to go digital!</div>
        </div>
      </section>

      {/* Enhanced Features */}
      <section ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 relative z-10 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-5xl font-semibold mb-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Everything You Need</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-white/95 backdrop-blur-lg rounded-2xl shadow-[0_25px_35px_-5px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center hover:shadow-[0_35px_45px_-5px_rgba(0,0,0,0.2)] hover:scale-110 transition-all duration-300 border-t-4 border-emerald-100 border border-white/20 relative z-10 transform hover:rotate-1 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <div className="w-20 h-20 mb-6 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center shadow-lg text-5xl animate-bounce-slow">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced How it works timeline/stepper */}
      <section ref={stepsRef} className={`py-20 px-6 bg-gradient-to-br from-white/95 via-emerald-50/95 to-amber-50/95 backdrop-blur-lg text-center shadow-[0_35px_50px_-12px_rgba(0,0,0,0.15)] rounded-2xl max-w-5xl mx-auto my-16 transition-all duration-700 relative z-10 border border-white/20 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-5xl font-semibold mb-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 border-4 border-emerald-200 bg-white shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)] text-4xl transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_25px_45px_-5px_rgba(0,0,0,0.2)] animate-step-float transform hover:rotate-12 ${i === 0 ? 'bg-gradient-to-br from-amber-100 to-amber-200' : i === 1 ? 'bg-gradient-to-br from-emerald-100 to-emerald-200' : i === 2 ? 'bg-gradient-to-br from-teal-100 to-teal-200' : 'bg-gradient-to-br from-orange-100 to-orange-200'}`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {step.icon}
              </div>
              <div className="font-semibold mb-2 text-lg text-gray-800">{step.title}</div>
              <div className="text-gray-500 text-sm mb-2 max-w-[140px] mx-auto leading-relaxed">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-40px] w-24 h-2 bg-gradient-to-r from-emerald-200 to-amber-200 z-0 animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Testimonial carousel */}
      <section ref={testimonialsRef} className={`py-20 px-6 mb-20 bg-gradient-to-br from-emerald-50/95 to-amber-50/95 backdrop-blur-lg text-center transition-all duration-700 relative z-10 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-5xl font-semibold mb-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">What Clients Say</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-[0_25px_35px_-5px_rgba(0,0,0,0.15)] p-8 min-h-[160px] flex flex-col items-center border border-white/20 hover:shadow-[0_35px_45px_-5px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105">
            <blockquote className="text-xl italic text-gray-700 mb-6 transition-all duration-500 animate-fade-in leading-relaxed">
              {testimonials[testimonialIdx].quote}
            </blockquote>
            <div className="text-emerald-600 font-semibold text-lg">{testimonials[testimonialIdx].author}</div>
            <div className="flex gap-3 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${i === testimonialIdx ? 'bg-emerald-500 scale-150 shadow-lg' : 'bg-gray-300 hover:bg-emerald-300 hover:scale-125'}`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg shadow-[0_-15px_35px_-5px_rgba(0,0,0,0.15)] py-5 flex justify-center items-center z-50 border-t border-white/20">
        <span className="mr-6 font-semibold text-emerald-700 text-lg">Ready to take your store digital?</span>
        <a
          href="#book"
          className="px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 text-white rounded-full shadow-[0_15px_35px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_25px_50px_-5px_rgba(16,185,129,0.6)] hover:scale-110 transition-all duration-300 font-semibold border border-white/20 transform hover:rotate-1"
        >
          Book Free Consultation
        </a>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(8deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 7s ease-in-out infinite;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes step-float {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-step-float {
          animation: step-float 5s ease-in-out infinite;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 400% 400%;
          animation: gradient-shift 20s ease infinite;
        }
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        .animate-grid-move {
          animation: grid-move 25s linear infinite;
        }
        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          25% { transform: translate(120px, -60px) scale(1.3); opacity: 1; }
          50% { transform: translate(60px, -120px) scale(0.8); opacity: 0.4; }
          75% { transform: translate(-60px, -60px) scale(1.2); opacity: 0.9; }
        }
        .animate-particle-1 {
          animation: particle-1 10s ease-in-out infinite;
        }
        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
          33% { transform: translate(-100px, -100px) scale(1.4); opacity: 1; }
          66% { transform: translate(80px, -140px) scale(0.7); opacity: 0.5; }
        }
        .animate-particle-2 {
          animation: particle-2 12s ease-in-out infinite;
        }
        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          50% { transform: translate(140px, -80px) scale(1.5); opacity: 1; }
        }
        .animate-particle-3 {
          animation: particle-3 15s ease-in-out infinite;
        }
        @keyframes particle-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.95; }
          25% { transform: translate(-80px, -120px) scale(1.2); opacity: 1; }
          50% { transform: translate(100px, -60px) scale(0.9); opacity: 0.6; }
          75% { transform: translate(-60px, -100px) scale(1.3); opacity: 0.9; }
        }
        .animate-particle-4 {
          animation: particle-4 11s ease-in-out infinite;
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-30px); }
        }
        .animate-wave {
          animation: wave 8s ease-in-out infinite;
        }
        @keyframes wave-delayed {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(30px); }
        }
        .animate-wave-delayed {
          animation: wave-delayed 10s ease-in-out infinite;
        }
        @keyframes light-ray-1 {
          0%, 100% { opacity: 0.2; transform: translateX(0); }
          50% { opacity: 0.4; transform: translateX(20px); }
        }
        .animate-light-ray-1 {
          animation: light-ray-1 6s ease-in-out infinite;
        }
        @keyframes light-ray-2 {
          0%, 100% { opacity: 0.15; transform: translateX(0); }
          50% { opacity: 0.3; transform: translateX(-15px); }
        }
        .animate-light-ray-2 {
          animation: light-ray-2 8s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0, -8px, 0); }
          70% { transform: translate3d(0, -4px, 0); }
          90% { transform: translate3d(0, -2px, 0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
} 