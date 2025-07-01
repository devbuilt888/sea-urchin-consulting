'use client';

import { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const features = [
  {
    icon: '/brand-web.png',
    title: 'Branded Website',
    desc: 'A beautiful, simple one-page site tailored to your brand.'
  },
  {
    icon: '/booking.png',
    title: 'Online Booking',
    desc: 'Calendly or Acuity integration for instant scheduling and payments.'
  },
  {
    icon: '/brand.png',
    title: 'Client CRM',
    desc: 'Track clients, automate emails, and manage your business with ease.'
  },
  {
    icon: '/auto-email.png',
    title: 'Automated Emails',
    desc: 'Branded welcome series and automations for every new client.'
  }
];

const steps = [
  {
    title: '1. Website',
    desc: 'We design and launch your branded site.'
  },
  {
    title: '2. Booking',
    desc: 'We set up online booking and payments.'
  },
  {
    title: '3. CRM',
    desc: 'We connect a simple CRM for you.'
  },
  {
    title: '4. Email Automation',
    desc: 'We automate your welcome emails.'
  }
];

const testimonials = [
  {
    quote: '"I got my first online booking within days. The process was so easy!"',
    author: 'Alex, Life Coach'
  },
  {
    quote: '"The branded emails and booking system made me look so professional."',
    author: 'Jamie, Yoga Instructor'
  },
  {
    quote: '"I spend less time on admin and more time with clients now."',
    author: 'Morgan, Pilates Instructor'
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

// Animated background component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-pink-700 animate-gradient-shift" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-float-slow blur-xl" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-30 animate-float blur-lg" />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-25 animate-float-slow blur-xl" />
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-35 animate-float blur-lg" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-60 animate-particle-1" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-300 rounded-full opacity-80 animate-particle-2" />
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-70 animate-particle-3" />
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full opacity-90 animate-particle-4" />
      
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent animate-wave" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/5 to-transparent animate-wave-delayed" />
    </div>
  );
}

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  return (
    <main className="min-h-screen text-gray-800 font-sans relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="flex flex-col items-center justify-center bg-white/95 backdrop-blur-lg p-10 rounded-[100px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] mb-10 border border-white/20 relative z-10 hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.3)] transition-all duration-300">
            <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Passionpreneur</h1>
            <h6 className='font-bold text-gray-900' > Launching a Service Business </h6>
        </div>
        
        {/* Enhanced floating emoji icons with glow effects */}
        <span role="img" aria-label="Yoga" className="absolute left-12 top-24 text-5xl animate-float-slow z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-110 transition-transform duration-300">🧘‍♂️</span>
        <span role="img" aria-label="Business" className="absolute right-20 top-40 text-4xl animate-float z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-110 transition-transform duration-300">💼</span>
        <span role="img" aria-label="Calendar" className="absolute left-1/3 bottom-20 text-4xl animate-float z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-110 transition-transform duration-300">📅</span>
        <span role="img" aria-label="Email" className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-110 transition-transform duration-300">✉️</span>
        
        <h1 className="text-white text-6xl font-bold mb-6 max-w-3xl relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">No Website? No Problem.</h1>
        <p className="text-white/90 text-xl max-w-xl mb-8 text-gray-100 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          You're great at your service. Let us handle your online presence. We'll help you get booked, paid, and grow — without tech overwhelm.
        </p>
        <a
          href="#book"
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-[0_10px_25px_-5px_rgba(168,85,247,0.4)] hover:shadow-[0_20px_35px_-5px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300 font-semibold text-lg relative z-10 border border-white/20 backdrop-blur-sm"
        >
          Book Free Call
        </a>
      </section>

      {/* Enhanced Audience Info Card */}
      <section className="flex justify-center px-4 -mt-12 mb-12 relative z-10">
        <div className="bg-white/95 backdrop-blur-lg border-l-4 border-purple-400 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center hover:shadow-[0_25px_35px_-5px_rgba(0,0,0,0.15)] transition-all duration-300 border border-white/20">
          <span className="uppercase text-xs tracking-widest text-purple-500 font-bold mb-2">Who is this for?</span>
          <div className="text-lg font-semibold text-gray-700 mb-1 hover:text-purple-600 transition-colors duration-200">Yoga/Pilates Instructors</div>
          <div className="text-lg font-semibold text-gray-700 mb-1 hover:text-purple-600 transition-colors duration-200">Life Coaches</div>
          <div className="text-lg font-semibold text-gray-700 mb-1 hover:text-purple-600 transition-colors duration-200">Freelance Marketers</div>
          <div className="mt-2 text-sm text-gray-500">...and any solo service professional ready to grow online!</div>
        </div>
      </section>

      {/* Enhanced Features */}
      <section ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 relative z-10 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Everything You Need</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-white/95 backdrop-blur-lg rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] p-8 flex flex-col items-center hover:shadow-[0_25px_35px_-5px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300 border-t-4 border-purple-100 border border-white/20 relative z-10 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-lg">
                <img src={f.icon} alt={f.title} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced How it works timeline/stepper */}
      <section ref={stepsRef} className={`py-20 px-6 bg-gradient-to-br from-white/95 via-purple-50/95 to-pink-50/95 backdrop-blur-lg text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] rounded-2xl max-w-5xl mx-auto my-16 transition-all duration-700 relative z-10 border border-white/20 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 border-4 border-purple-200 bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] text-3xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)] ${i === 0 ? 'bg-gradient-to-br from-pink-100 to-pink-200' : i === 1 ? 'bg-gradient-to-br from-blue-100 to-blue-200' : i === 2 ? 'bg-gradient-to-br from-yellow-100 to-yellow-200' : 'bg-gradient-to-br from-green-100 to-green-200'} animate-step-float`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {i === 0 && '🖥️'}
                {i === 1 && '📅'}
                {i === 2 && '📋'}
                {i === 3 && '✉️'}
              </div>
              <div className="font-semibold mb-1 text-lg text-gray-800">{step.title}</div>
              <div className="text-gray-500 text-sm mb-2 max-w-[140px] mx-auto">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-40px] w-20 h-2 bg-gradient-to-r from-purple-200 to-pink-200 z-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Testimonial carousel */}
      <section ref={testimonialsRef} className={`py-20 px-6 mb-20 bg-gradient-to-br from-pink-50/95 to-purple-50/95 backdrop-blur-lg text-center transition-all duration-700 relative z-10 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-4xl font-semibold mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">What Clients Say</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] p-8 min-h-[160px] flex flex-col items-center border border-white/20 hover:shadow-[0_25px_35px_-5px_rgba(0,0,0,0.15)] transition-all duration-300">
            <blockquote className="text-lg italic text-gray-700 mb-4 transition-all duration-500 animate-fade-in">
              {testimonials[testimonialIdx].quote}
            </blockquote>
            <div className="text-purple-600 font-semibold">{testimonials[testimonialIdx].author}</div>
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === testimonialIdx ? 'bg-purple-500 scale-125' : 'bg-gray-300 hover:bg-purple-300'}`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

     
      {/* Lead capture form placeholder */}
      <section id="leadform" className="flex flex-col items-center px-4 mb-32 relative z-10">
        <div className="bg-white border-l-4 border-purple-400 shadow-lg rounded-xl px-8 py-12 max-w-xl w-full flex flex-col items-center mb-20">
          <span className="uppercase text-xs tracking-widest text-purple-700 font-bold mb-4">Get Started</span>
          <div className="text-lg font-semibold text-blue-700 mb-8 text-center">Ready to modernize your HR? <br />Leave your email and we'll reach out for a free demo.</div>
          {/* Replace with real form integration */}
          <form className="w-full flex flex-col gap-4">
            <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 bg-purple-100 text-blue-700 placeholder:text-purple-400 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <button type="submit" className="px-6 py-3 bg-purple-500 text-white rounded-full shadow hover:bg-purple-600 hover:scale-105 transition-transform duration-200 font-semibold">Request Free Demo</button>
          </form>
          <div className="text-xs text-blue-500 mt-4">We respect your privacy. No spam, ever.</div>
        </div>
      </section>

      {/* Enhanced Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] py-4 flex justify-center items-center z-50 border-t border-white/20">
        <span className="mr-4 font-semibold text-purple-700">Ready to launch your business online?</span>
        <a
          href="#book"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-[0_10px_25px_-5px_rgba(168,85,247,0.4)] hover:shadow-[0_15px_35px_-5px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300 font-semibold border border-white/20"
        >
          Book Free Call
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
          animation: gradient-shift 15s ease infinite;
        }
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(100px, -50px) scale(1.2); opacity: 1; }
          50% { transform: translate(50px, -100px) scale(0.8); opacity: 0.3; }
          75% { transform: translate(-50px, -50px) scale(1.1); opacity: 0.8; }
        }
        .animate-particle-1 {
          animation: particle-1 8s ease-in-out infinite;
        }
        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          33% { transform: translate(-80px, -80px) scale(1.3); opacity: 1; }
          66% { transform: translate(60px, -120px) scale(0.7); opacity: 0.4; }
        }
        .animate-particle-2 {
          animation: particle-2 10s ease-in-out infinite;
        }
        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(120px, -60px) scale(1.4); opacity: 1; }
        }
        .animate-particle-3 {
          animation: particle-3 12s ease-in-out infinite;
        }
        @keyframes particle-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
          25% { transform: translate(-60px, -100px) scale(1.1); opacity: 1; }
          50% { transform: translate(80px, -40px) scale(0.9); opacity: 0.5; }
          75% { transform: translate(-40px, -80px) scale(1.2); opacity: 0.8; }
        }
        .animate-particle-4 {
          animation: particle-4 9s ease-in-out infinite;
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25px); }
        }
        .animate-wave {
          animation: wave 6s ease-in-out infinite;
        }
        @keyframes wave-delayed {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(25px); }
        }
        .animate-wave-delayed {
          animation: wave-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
