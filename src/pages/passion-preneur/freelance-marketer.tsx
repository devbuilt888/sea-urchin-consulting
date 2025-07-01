import React, { useState, useRef, useEffect } from 'react';

const features = [
  {
    icon: '🖥️',
    title: 'Portfolio Website',
    desc: 'Showcase your best work, testimonials, and services with a modern, creative site.'
  },
  {
    icon: '📅',
    title: 'Online Booking',
    desc: 'Let clients book discovery calls or projects online, synced to your calendar.'
  },
  {
    icon: '📊',
    title: 'Client CRM',
    desc: 'Manage leads, clients, and automate follow-ups in one place.'
  },
  {
    icon: '✉️',
    title: 'Email Automation',
    desc: 'Send branded proposals, nurture emails, and project updates automatically.'
  }
];

const steps = [
  {
    icon: '🖥️',
    title: '1. Portfolio',
    desc: 'We design and launch your personal brand site.'
  },
  {
    icon: '📅',
    title: '2. Booking',
    desc: 'We set up online consult/project booking.'
  },
  {
    icon: '📊',
    title: '3. CRM',
    desc: 'We connect a simple CRM for you.'
  },
  {
    icon: '✉️',
    title: '4. Automation',
    desc: 'We automate your proposals and emails.'
  }
];

const testimonials = [
  {
    quote: '"I landed 3 new clients in my first month with my new site!"',
    author: 'Casey, Freelance Marketer'
  },
  {
    quote: '"The booking and CRM tools make my business run so much smoother."',
    author: 'Morgan, Digital Strategist'
  },
  {
    quote: '"Automated proposals save me hours every week. My clients love the experience!"',
    author: 'Riley, Content Marketer'
  }
];

const portfolio = [
  {
    title: 'Brand Launch Campaign',
    desc: 'Multi-channel campaign for a tech startup, resulting in 200% audience growth.',
    icon: '🚀'
  },
  {
    title: 'E-commerce Funnel',
    desc: 'Built a high-converting funnel for a DTC brand, boosting sales by 50%.',
    icon: '🛒'
  },
  {
    title: 'Content Strategy',
    desc: 'Developed a content plan for a SaaS client, tripling their inbound leads.',
    icon: '📝'
  }
];

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

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-blue-100 to-white animate-gradient-shift" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-300 to-blue-200 rounded-full opacity-20 animate-float-slow blur-xl" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-300 to-pink-200 rounded-full opacity-30 animate-float blur-lg" />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-pink-200 to-blue-300 rounded-full opacity-25 animate-float-slow blur-xl" />
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full opacity-35 animate-float blur-lg" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move" />
      </div>
      <span className="absolute left-1/4 top-1/3 text-3xl opacity-60 animate-float">💡</span>
      <span className="absolute right-1/4 top-1/2 text-2xl opacity-70 animate-float-slow">💬</span>
      <span className="absolute left-1/2 bottom-1/4 text-2xl opacity-70 animate-float">📈</span>
      <span className="absolute right-1/3 bottom-1/3 text-2xl opacity-80 animate-float-slow">🚀</span>
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-60 animate-particle-1" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-300 rounded-full opacity-80 animate-particle-2" />
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-70 animate-particle-3" />
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-pink-300 rounded-full opacity-90 animate-particle-4" />
    </div>
  );
}

export default function FreelanceMarketerLanding() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  return (
    <main className="min-h-screen text-gray-800 font-sans relative overflow-hidden bg-gradient-to-br from-pink-100 via-blue-50 to-white">
      <AnimatedBackground />
      {/* Header */}
      <header className="w-full px-8 py-6 bg-white shadow-md flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-3xl">💡</span>
          <span className="text-2xl font-bold text-pink-700">MarketerPro</span>
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-pink-700">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#leadform" className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">Get Started</a>
        </nav>
      </header>
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="flex flex-col items-center justify-center bg-white/95 backdrop-blur-lg p-10 rounded-[100px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] mb-10 border border-white/20 relative z-10 hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.2)] transition-all duration-300">
          <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10 bg-gradient-to-r from-pink-600 via-blue-600 to-pink-400 bg-clip-text text-transparent">Grow Your Freelance Marketing Business</h1>
          <h6 className="font-bold text-gray-900">For Creative Freelancers & Digital Marketers</h6>
        </div>
        <span role="img" aria-label="Laptop" className="absolute left-12 top-24 text-5xl animate-float-slow z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-110 transition-transform duration-300">💻</span>
        <span role="img" aria-label="Lightbulb" className="absolute right-20 top-40 text-4xl animate-float z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-110 transition-transform duration-300">💡</span>
        <span role="img" aria-label="Calendar" className="absolute left-1/3 bottom-20 text-4xl animate-float z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-110 transition-transform duration-300">📅</span>
        <span role="img" aria-label="Email" className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-110 transition-transform duration-300">✉️</span>
        <h1 className="text-blue-900 text-5xl font-bold mb-6 max-w-3xl relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] bg-gradient-to-r from-blue-900 via-pink-400 to-blue-900 bg-clip-text text-transparent">Land More Clients. Automate Your Admin. Stand Out Online.</h1>
        <p className="text-blue-900/90 text-xl max-w-xl mb-8 text-gray-700 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          You deliver results for your clients. Let us deliver a site and system that gets you found, gets you booked, and gets you paid—without the tech hassle.
        </p>
        <a
          href="#leadform"
          className="px-8 py-4 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-full shadow-[0_10px_25px_-5px_rgba(236,72,153,0.4)] hover:shadow-[0_20px_35px_-5px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-300 font-semibold text-lg relative z-10 border border-white/20 backdrop-blur-sm"
        >
          Get Started
        </a>
      </section>
      {/* Pain Points */}
      <section className="flex justify-center px-4 -mt-8 mb-12 relative z-10">
        <div className="bg-white/95 backdrop-blur-lg border-l-4 border-pink-400 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07)] rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center hover:shadow-[0_25px_35px_-5px_rgba(0,0,0,0.12)] transition-all duration-300 border border-white/20">
          <span className="uppercase text-xs tracking-widest text-pink-500 font-bold mb-2">Sound Familiar?</span>
          <ul className="list-disc text-left text-lg text-gray-700 space-y-2 pl-6">
            <li>No website, or your site doesn't show your real value</li>
            <li>Chasing leads and proposals in your inbox</li>
            <li>Clients can't book you easily online</li>
            <li>Manual follow-ups and lost opportunities</li>
            <li>Too much admin, not enough time for creative work</li>
          </ul>
        </div>
      </section>
      {/* Features */}
      <section id="features" ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 relative z-10 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Everything You Need</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-white/95 backdrop-blur-lg rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07)] p-8 flex flex-col items-center hover:shadow-[0_25px_35px_-5px_rgba(0,0,0,0.12)] hover:scale-105 transition-all duration-300 border-t-4 border-pink-100 border border-white/20 relative z-10 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <span className="text-4xl mb-4">{f.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Portfolio */}
      <section
        id="portfolio"
        className="py-20 px-6 bg-gradient-to-br from-white via-pink-50 to-blue-50 text-center relative z-10"
      >
        <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Portfolio Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolio.map((item) => (
            <div key={item.title} className="bg-white/95 rounded-2xl shadow p-8 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-blue-100 border">
              <span className="text-4xl mb-4">{item.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* How it works */}
      <section ref={stepsRef} className={`py-20 px-6 bg-gradient-to-br from-white/95 via-pink-50/95 to-blue-50/95 backdrop-blur-lg text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.07)] rounded-2xl max-w-5xl mx-auto my-16 transition-all duration-700 relative z-10 border border-white/20 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 border-4 border-pink-200 bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.07)] text-3xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12)] ${i === 0 ? 'bg-gradient-to-br from-pink-100 to-pink-200' : i === 1 ? 'bg-gradient-to-br from-blue-100 to-blue-200' : i === 2 ? 'bg-gradient-to-br from-yellow-100 to-yellow-200' : 'bg-gradient-to-br from-blue-100 to-pink-100'} animate-step-float`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {step.icon}
              </div>
              <div className="font-semibold mb-1 text-lg text-gray-800">{step.title}</div>
              <div className="text-gray-500 text-sm mb-2 max-w-[140px] mx-auto">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-40px] w-20 h-2 bg-gradient-to-r from-pink-200 to-blue-200 z-0" />
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section ref={testimonialsRef} className={`py-20 px-6 mb-20 bg-gradient-to-br from-pink-50/95 to-blue-50/95 backdrop-blur-lg text-center transition-all duration-700 relative z-10 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-4xl font-semibold mb-10 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">What Marketers Say</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07)] p-8 min-h-[160px] flex flex-col items-center border border-white/20 hover:shadow-[0_25px_35px_-5px_rgba(0,0,0,0.12)] transition-all duration-300">
            <blockquote className="text-lg italic text-gray-700 mb-4 transition-all duration-500 animate-fade-in">
              {testimonials[testimonialIdx].quote}
            </blockquote>
            <div className="text-pink-600 font-semibold text-base">{testimonials[testimonialIdx].author}</div>
            <div className="flex gap-3 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === testimonialIdx ? 'bg-pink-500 scale-125' : 'bg-gray-300 hover:bg-pink-300'}`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Lead capture form */}
      <section id="leadform" className="flex flex-col items-center px-4 mb-32 relative z-10">
        <div className="bg-white border-l-4 border-pink-400 shadow-lg rounded-xl px-8 py-12 max-w-xl w-full flex flex-col items-center mb-20">
          <span className="uppercase text-xs tracking-widest text-pink-700 font-bold mb-4">Get Started</span>
          <div className="text-lg font-semibold text-pink-700 mb-8 text-center">Ready to grow your freelance business? Leave your email and we'll reach out for a free demo.</div>
          <form className="w-full flex flex-col gap-4">
            <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 bg-pink-100 text-pink-700 placeholder:text-pink-400 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400" />
            <button type="submit" className="px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 hover:scale-105 transition-transform duration-200 font-semibold">Request Free Demo</button>
          </form>
          <div className="text-xs text-pink-500 mt-4">We respect your privacy. No spam, ever.</div>
        </div>
      </section>
      {/* Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.07)] py-4 flex justify-center items-center z-50 border-t border-white/20">
        <span className="mr-4 font-semibold text-pink-700">Ready to stand out and win more clients?</span>
        <a
          href="#leadform"
          className="px-6 py-3 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-full shadow-[0_10px_25px_-5px_rgba(236,72,153,0.4)] hover:shadow-[0_15px_35px_-5px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-300 font-semibold border border-white/20"
        >
          Get Started
        </a>
      </div>
      {/* Footer */}
      <footer className="bg-pink-700 text-white text-sm py-6 px-4 text-center mt-24">
        <div className="mb-2">&copy; {new Date().getFullYear()} MarketerPro. All rights reserved.</div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="mailto:hello@marketerpro.com" className="hover:underline">hello@marketerpro.com</a>
        </div>
      </footer>
      {/* Animations */}
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
          100% { transform: translate(50px, 50px); }
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
      `}</style>
    </main>
  );
} 