'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const features = [
  {
    icon: '🏪',
    title: 'Online Storefront',
    desc: 'Beautiful e-commerce site that matches your brand and showcases your products.'
  },
  {
    icon: '📱',
    title: 'Mobile-First Design',
    desc: 'Optimized for mobile shopping - where most customers browse and buy.'
  },
  {
    icon: '🔄',
    title: 'Inventory Sync',
    desc: 'Real-time sync between your physical store and online inventory.'
  },
  {
    icon: '🚚',
    title: 'Local Delivery',
    desc: 'Same-day delivery and curbside pickup options for local customers.'
  }
];

const steps = [
  {
    icon: '📋',
    title: 'Assessment',
    desc: 'We analyze your current setup and digital needs.'
  },
  {
    icon: '🛍️',
    title: 'Store Build',
    desc: 'We create your custom online storefront.'
  },
  {
    icon: '🔗',
    title: 'Integration',
    desc: 'We connect your POS and inventory systems.'
  },
  {
    icon: '🚀',
    title: 'Launch',
    desc: 'We launch and train your team on the new system.'
  }
];

const testimonials = [
  {
    quote: '"Our online sales now account for 40% of our revenue. The inventory sync is a game-changer!"',
    author: 'Sarah Chen, Fashion Boutique Owner'
  },
  {
    quote: '"Customers love being able to order online and pick up in-store. It\'s doubled our foot traffic!"',
    author: 'Mike Rodriguez, Artisan Food Market'
  },
  {
    quote: '"The mobile-first design means customers can shop from anywhere. Sales are up 60%!"',
    author: 'Lisa Thompson, Home Decor Store'
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

// Storefront-themed animated background
function StorefrontBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Storefront gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-100 to-red-50 animate-gradient-shift" />
      
      {/* Store window frames */}
      <div className="absolute top-20 left-10 w-32 h-40 border-4 border-amber-300 rounded-lg opacity-20 animate-float-slow" />
      <div className="absolute top-40 right-20 w-28 h-36 border-4 border-orange-300 rounded-lg opacity-25 animate-float" />
      <div className="absolute bottom-32 left-1/4 w-36 h-44 border-4 border-red-300 rounded-lg opacity-20 animate-float-slow" />
      
      {/* Shopping bags floating */}
      <div className="absolute top-1/3 left-1/6 text-4xl animate-float-slow opacity-40">🛍️</div>
      <div className="absolute top-2/3 right-1/6 text-3xl animate-float opacity-35">👜</div>
      <div className="absolute bottom-1/4 left-1/5 text-3xl animate-float-slow opacity-45">💼</div>
      
      {/* Price tags */}
      <div className="absolute top-1/2 left-1/3 text-2xl animate-float opacity-30">🏷️</div>
      <div className="absolute top-1/3 right-1/4 text-2xl animate-float-slow opacity-25">💰</div>
      
      {/* Store entrance arch */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 border-t-8 border-amber-400 rounded-t-full opacity-15" />
      
      {/* Animated grid pattern like store tiles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-move" />
      </div>
      
      {/* Floating particles like shopping items */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-particle-1" />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-80 animate-particle-2" />
      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-red-400 rounded-full opacity-70 animate-particle-3" />
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
      <StorefrontBackground />
      
      {/* Hero - Storefront Style */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        {/* Storefront header */}
        <div className="bg-white/95 backdrop-blur-lg border-4 border-amber-300 rounded-t-3xl p-6 sm:p-8 shadow-2xl mb-8 sm:mb-10 relative z-10 w-full max-w-4xl">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl sm:text-4xl mr-3">🏪</span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              DIGITAL STOREFRONT
            </h1>
            <span className="text-3xl sm:text-4xl ml-3">🏪</span>
          </div>
          <div className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
            Transform Your Brick-and-Mortar Business
          </div>
          <div className="text-sm sm:text-base text-gray-600">
            From Local Shop to Online Empire
          </div>
        </div>
        
        {/* Store window display */}
        <div className="bg-white/90 backdrop-blur-lg border-4 border-amber-200 rounded-2xl p-6 sm:p-8 shadow-xl mb-8 sm:mb-10 relative z-10 w-full max-w-3xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-3 text-center">
              <div className="text-2xl mb-2">🛍️</div>
              <div className="text-xs font-semibold">Online Store</div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-3 text-center">
              <div className="text-2xl mb-2">📱</div>
              <div className="text-xs font-semibold">Mobile Ready</div>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-lg p-3 text-center">
              <div className="text-2xl mb-2">🔄</div>
              <div className="text-xs font-semibold">Sync Inventory</div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-3 text-center">
              <div className="text-2xl mb-2">🚚</div>
              <div className="text-xs font-semibold">Local Delivery</div>
            </div>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Take your local business online with a beautiful storefront that works seamlessly with your existing operations.
          </p>
        </div>
        
        {/* CTA Button - Store Entrance Style */}
        <a
          href="#"
          className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-[0_10px_30px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(245,158,11,0.6)] hover:scale-105 transition-all duration-300 font-bold text-lg sm:text-xl relative z-10 border-2 border-white/20 backdrop-blur-sm transform hover:rotate-1"
        >
          🚪 Enter Your Digital Store
        </a>
      </section>

      {/* Target Audience - Store Directory Style */}
      <section className="flex justify-center px-4 -mt-8 sm:-mt-12 mb-8 sm:mb-12 relative z-10">
        <div className="bg-white/95 backdrop-blur-lg border-4 border-amber-300 shadow-xl rounded-2xl px-6 sm:px-8 py-6 sm:py-8 max-w-3xl w-full">
          <div className="text-center mb-4">
            <span className="text-2xl mb-2 block">📋</span>
            <span className="uppercase text-xs tracking-widest text-amber-600 font-bold">Store Directory</span> <br />
            <span className="text-xs tracking-widest text-amber-600 font-bold">Check out our landing pages for each service.</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <Link href="/retailer-digital/fashion-boutique" className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
              <div className="text-2xl mb-2">👗</div>
              <div className="font-semibold text-gray-800">Fashion Boutiques</div>
            </Link>
            <Link href="/retailer-digital/food-market" className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
              <div className="text-2xl mb-2">🍎</div>
              <div className="font-semibold text-gray-800">Food Markets</div>
            </Link>
            <Link href="/retailer-digital/beauty-salon" className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-200 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
              <div className="text-2xl mb-2">💇‍♀️</div>
              <div className="font-semibold text-gray-800">Beauty Salons</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features - Store Sections */}
      <section ref={featuresRef} className={`py-12 sm:py-20 px-4 sm:px-6 text-center transition-all duration-700 relative z-10 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-12 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          🏪 Your Digital Store Sections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-amber-200 relative z-10 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center shadow-lg text-3xl sm:text-4xl animate-bounce-slow">
                {f.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 text-center">{f.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works - Store Opening Process */}
      <section ref={stepsRef} className={`py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-amber-50/95 via-orange-50/95 to-red-50/95 backdrop-blur-lg text-center shadow-xl rounded-2xl max-w-5xl mx-auto my-8 sm:my-16 transition-all duration-700 relative z-10 border-4 border-amber-200 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-12 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          🚪 Store Opening Process
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-3 sm:mb-4 border-4 border-amber-300 bg-white shadow-xl text-3xl sm:text-4xl transition-all duration-300 group-hover:scale-110 sm:group-hover:scale-125 group-hover:shadow-2xl animate-step-float transform hover:rotate-12 ${i === 0 ? 'bg-gradient-to-br from-amber-100 to-amber-200' : i === 1 ? 'bg-gradient-to-br from-orange-100 to-orange-200' : i === 2 ? 'bg-gradient-to-br from-red-100 to-red-200' : 'bg-gradient-to-br from-pink-100 to-pink-200'}`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {step.icon}
              </div>
              <div className="font-semibold mb-2 text-base sm:text-lg text-gray-800 text-center">{step.title}</div>
              <div className="text-gray-500 text-xs sm:text-sm mb-2 max-w-[140px] mx-auto leading-relaxed text-center">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-40px] w-24 h-2 bg-gradient-to-r from-amber-300 to-red-300 z-0 animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - Customer Reviews */}
      <section ref={testimonialsRef} className={`py-12 sm:py-20 px-4 sm:px-6 mb-20 sm:mb-20 bg-gradient-to-br from-amber-50/95 to-red-50/95 backdrop-blur-lg text-center transition-all duration-700 relative z-10 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-10 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          ⭐ Customer Success Stories
        </h2>
        <div className="max-w-xl mx-auto px-4">
          <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 min-h-[160px] flex flex-col items-center border-4 border-amber-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">💬</div>
            <blockquote className="w-full text-lg sm:text-xl italic text-gray-700 mb-4 sm:mb-6 transition-all duration-500 animate-fade-in leading-relaxed text-center">
              {testimonials[testimonialIdx].quote}
            </blockquote>
            <div className="text-amber-600 font-semibold text-base sm:text-lg">{testimonials[testimonialIdx].author}</div>
            <div className="flex gap-3 mt-4 sm:mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${i === testimonialIdx ? 'bg-amber-500 scale-150 shadow-lg' : 'bg-gray-300 hover:bg-amber-300 hover:scale-125'}`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA bar - Store Hours Style */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl py-3 sm:py-5 flex flex-col sm:flex-row justify-center items-center z-50 border-t-4 border-amber-300 px-4">
        <span className="mr-0 sm:mr-6 font-semibold text-amber-700 text-sm sm:text-lg text-center mb-2 sm:mb-0">
          🕐 Ready to open your digital store?
        </span>
        <a
          href="#"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white rounded-full shadow-[0_10px_30px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(245,158,11,0.6)] hover:scale-110 transition-all duration-300 font-semibold border-2 border-white/20 transform hover:rotate-1 text-sm sm:text-base w-full max-w-xs sm:w-auto"
        >
          🚪 Open Digital Store
        </a>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes step-float {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-step-float {
          animation: step-float 4s ease-in-out infinite;
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
          100% { transform: translate(40px, 40px); }
        }
        .animate-grid-move {
          animation: grid-move 25s linear infinite;
        }
        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(100px, -50px) scale(1.2); opacity: 1; }
          50% { transform: translate(50px, -100px) scale(0.8); opacity: 0.3; }
          75% { transform: translate(-50px, -50px) scale(1.1); opacity: 0.8; }
        }
        .animate-particle-1 {
          animation: particle-1 10s ease-in-out infinite;
        }
        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          33% { transform: translate(-80px, -80px) scale(1.3); opacity: 1; }
          66% { transform: translate(60px, -120px) scale(0.7); opacity: 0.4; }
        }
        .animate-particle-2 {
          animation: particle-2 12s ease-in-out infinite;
        }
        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(120px, -60px) scale(1.4); opacity: 1; }
        }
        .animate-particle-3 {
          animation: particle-3 15s ease-in-out infinite;
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