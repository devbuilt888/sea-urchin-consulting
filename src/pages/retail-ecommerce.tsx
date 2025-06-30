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
    icon: '🛒',
    title: 'AI Recommendations',
    desc: 'Personalized product suggestions to boost conversion.'
  },
  {
    icon: '💸',
    title: 'Dynamic Pricing',
    desc: 'AI-driven pricing to maximize sales and margin.'
  },
  {
    icon: '🧑‍💻',
    title: 'Single Customer View',
    desc: 'Unified data-lake for all customer touchpoints.'
  },
  {
    icon: '📊',
    title: 'Automated Campaigns',
    desc: 'Email/SMS workflows and real-time performance dashboards.'
  }
];

const steps = [
  {
    icon: '🔍',
    title: '1. Audit',
    desc: 'We review your data, channels, and goals.'
  },
  {
    icon: '🛒',
    title: '2. AI & Data Integration',
    desc: 'We implement recommendations, pricing, and data-lake.'
  },
  {
    icon: '📊',
    title: '3. Campaign Automation',
    desc: 'We set up automated email/SMS workflows.'
  },
  {
    icon: '🚀',
    title: '4. Launch & Optimize',
    desc: 'You launch, we monitor and optimize for results.'
  }
];

const testimonials = [
  {
    quote: '“Our cart abandonment dropped and our campaigns basically run themselves now!”',
    author: 'Head of Digital, Fashion Retailer'
  }
];

export default function RetailEcommerce() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  return (
    <main className="min-h-screen text-gray-900 font-sans overflow-x-hidden relative" style={{ background: 'radial-gradient(ellipse at 60% 40%, #f472b6 0%, #60a5fa 60%, #fff 100%)' }}>
      {/* Animated gradient blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[340px] h-[340px] bg-pink-200 rounded-full blur-3xl opacity-40 animate-blob1 z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-200 rounded-full blur-3xl opacity-30 animate-blob2 z-0" />
      <div className="absolute top-1/2 left-[-80px] w-[180px] h-[180px] bg-yellow-100 rounded-full blur-2xl opacity-30 animate-blob3 z-0" />
      {/* Floating SVG icons in hero */}
      <span className="absolute left-16 top-32 text-5xl animate-float z-10">🛒</span>
      <span className="absolute right-20 top-40 text-4xl animate-float-slow z-10">💸</span>
      <span className="absolute left-1/3 bottom-20 text-4xl animate-float z-10">🧑‍💻</span>
      <span className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10">📊</span>
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10 text-pink-600 drop-shadow bg-black rounded-[100px] p-4">Modern Retail & eCommerce Growth</h1>
        <h6 className="text-lg text-blue-600 mb-2 relative z-10">AI, Data, and Automation for Marketers</h6>
        <p className="text-xl max-w-xl mb-8 text-blue-700 relative z-10">
          Directors of Ecommerce & Digital at mid-sized retailers <br />(50–500 staff). $5K–$75K/project. Boost personalization, unify data, and automate campaigns.
        </p>
        <a
          href="#leadform"
          className="px-8 py-4 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Book a Free Demo
        </a>
      </section>

      {/* Pain Points */}
      <section className="flex flex-col items-center px-4 mb-12">
        <div className="bg-pink-100/90 border-l-4 border-blue-400 shadow-lg rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-blue-500 font-bold mb-2">Pain Points</span>
          <div className="text-lg font-semibold text-blue-700 mb-1">Low personalization and high cart abandonment</div>
          <div className="text-lg font-semibold text-blue-700 mb-1">Fragmented customer data across channels</div>
          <div className="text-lg font-semibold text-blue-700 mb-1">Manual campaign reporting</div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12 text-pink-600">Everything You Need for Growth</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border-t-4 border-pink-200 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <span className="text-4xl mb-4">{f.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-blue-700">{f.title}</h3>
              <p className="text-blue-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works timeline/stepper */}
      <section ref={stepsRef} className={`py-20 px-6 bg-gradient-to-br from-pink-100 via-blue-50 to-white text-center shadow-inner rounded-2xl max-w-5xl mx-auto my-16 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12 text-pink-600">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 border-4 border-pink-200 bg-white shadow-lg text-3xl transition-transform duration-200 group-hover:scale-110 animate-step-float`}
                style={{ animationDelay: `${i * 0.5}s`, backgroundColor: i === 0 ? '#fce7f3' : i === 1 ? '#fef9c3' : i === 2 ? '#bbf7d0' : '#e0e7ff' }}
              >
                {step.icon}
              </div>
              <div className="font-semibold mb-1 text-lg text-blue-700">{step.title}</div>
              <div className="text-blue-700 text-sm mb-2 max-w-[140px] mx-auto">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-40px] w-20 h-2 bg-gradient-to-r from-pink-100 to-blue-100 z-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial carousel */}
      <section ref={testimonialsRef} className={`py-20 px-6 mb-20 bg-gradient-to-br from-pink-100 to-blue-100 text-center transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-10 text-pink-600">What Clients Say</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative bg-white/90 rounded-2xl shadow-lg p-8 min-h-[160px] flex flex-col items-center">
            <blockquote className="text-lg italic text-blue-700 mb-4 transition-all duration-500 animate-fade-in">
              {testimonials[testimonialIdx].quote}
            </blockquote>
            <div className="text-pink-600 font-semibold">{testimonials[testimonialIdx].author}</div>
          </div>
        </div>
      </section>

      {/* Lead capture form placeholder */}
      <section id="leadform" className="flex flex-col items-center px-4 mb-32">
        <div className="bg-white border-l-4 border-pink-400 shadow-lg rounded-xl px-8 py-12 max-w-xl w-full flex flex-col items-center mb-20">
          <span className="uppercase text-xs tracking-widest text-pink-700 font-bold mb-4">Get Started</span>
          <div className="text-lg font-semibold text-blue-700 mb-8 text-center">Ready to grow your eCommerce? <br />Leave your email and we'll reach out for a free demo.</div>
          {/* Replace with real form integration */}
          <form className="w-full flex flex-col gap-4">
            <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 bg-pink-100 text-blue-700 placeholder:text-pink-400 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400" />
            <button type="submit" className="px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 hover:scale-105 transition-transform duration-200 font-semibold">Request Free Demo</button>
          </form>
          <div className="text-xs text-blue-500 mt-4">We respect your privacy. No spam, ever.</div>
        </div>
      </section>

      {/* Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 w-full bg-pink-600/90 shadow-lg py-4 flex justify-center items-center z-50 backdrop-blur-md">
        <span className="mr-4 font-semibold text-white">Ready to boost your sales?</span>
        <a
          href="#leadform"
          className="px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 hover:scale-105 transition-transform duration-200 font-semibold"
        >
          Book a Free Demo
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
        @keyframes blob1 {
          0%, 100% { transform: scale(1) translateY(0px); }
          50% { transform: scale(1.15) translateY(30px); }
        }
        .animate-blob1 {
          animation: blob1 8s ease-in-out infinite;
        }
        @keyframes blob2 {
          0%, 100% { transform: scale(1) translateY(0px); }
          50% { transform: scale(1.1) translateY(-20px); }
        }
        .animate-blob2 {
          animation: blob2 10s ease-in-out infinite;
        }
        @keyframes blob3 {
          0%, 100% { transform: scale(1) translateX(0px); }
          50% { transform: scale(1.2) translateX(20px); }
        }
        .animate-blob3 {
          animation: blob3 12s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
} 