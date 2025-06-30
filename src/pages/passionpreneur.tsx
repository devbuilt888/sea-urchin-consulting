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
    quote: '“I got my first online booking within days. The process was so easy!”',
    author: 'Alex, Life Coach'
  },
  {
    quote: '“The branded emails and booking system made me look so professional.”',
    author: 'Jamie, Yoga Instructor'
  },
  {
    quote: '“I spend less time on admin and more time with clients now.”',
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

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-pink-50 text-gray-800 font-sans">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-[100px] shadow-[13px_13px_13px_10px_rgba(0,0,0,0.1)] mb-10">
            <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10">Passionpreneur</h1>
            <h6> Launching a Service Business </h6>
        </div>
        {/* Soft gradient circle accent */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-100 via-blue-100 to-white rounded-full blur-3xl opacity-60 z-0" />
        {/* Floating emoji icons as icons */}
        <span role="img" aria-label="Yoga" className="absolute left-12 top-24 text-5xl animate-float-slow z-10">🧘‍♂️</span>
        <span role="img" aria-label="Business" className="absolute right-20 top-40 text-4xl animate-float z-10">💼</span>
        <span role="img" aria-label="Calendar" className="absolute left-1/3 bottom-20 text-4xl animate-float z-10">📅</span>
        <span role="img" aria-label="Email" className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10">✉️</span>
        <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10">No Website? No Problem.</h1>
        <p className="text-xl max-w-xl mb-8 text-gray-700 relative z-10">
          You're great at your service. Let us handle your online presence. We'll help you get booked, paid, and grow — without tech overwhelm.
        </p>
        <a
          href="#book"
          className="px-8 py-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Book Free Call
        </a>
      </section>

      {/* Audience Info Card */}
      <section className="flex justify-center px-4 -mt-12 mb-12">
        <div className="bg-white/90 border-l-4 border-indigo-400 shadow-lg rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-indigo-500 font-bold mb-2">Who is this for?</span>
          <div className="text-lg font-semibold text-gray-700 mb-1">Yoga/Pilates Instructors</div>
          <div className="text-lg font-semibold text-gray-700 mb-1">Life Coaches</div>
          <div className="text-lg font-semibold text-gray-700 mb-1">Freelance Marketers</div>
          <div className="mt-2 text-sm text-gray-500">...and any solo service professional ready to grow online!</div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12">Everything You Need</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border-t-4 border-indigo-100 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <img src={f.icon} alt={f.title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works timeline/stepper */}
      <section ref={stepsRef} className={`py-20 px-6 bg-gradient-to-br from-white via-indigo-50 to-pink-50 text-center shadow-inner rounded-2xl max-w-5xl mx-auto my-16 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 border-4 border-indigo-200 bg-white shadow-lg text-3xl transition-transform duration-200 group-hover:scale-110 ${i === 0 ? 'bg-pink-100' : i === 1 ? 'bg-blue-100' : i === 2 ? 'bg-yellow-100' : 'bg-green-100'} animate-step-float`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {i === 0 && '🖥️'}
                {i === 1 && '📅'}
                {i === 2 && '📋'}
                {i === 3 && '✉️'}
              </div>
              <div className="font-semibold mb-1 text-lg">{step.title}</div>
              <div className="text-gray-500 text-sm mb-2 max-w-[140px] mx-auto">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-40px] w-20 h-2 bg-gradient-to-r from-indigo-100 to-pink-100 z-0" />
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
            <div className="text-indigo-600 font-semibold">{testimonials[testimonialIdx].author}</div>
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === testimonialIdx ? 'bg-indigo-500' : 'bg-gray-300'} transition`}
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
        <span className="mr-4 font-semibold text-indigo-700">Ready to launch your business online?</span>
        <a
          href="#book"
          className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold"
        >
          Book Free Call
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
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes step-float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }
        .animate-step-float {
          animation: step-float 3.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
