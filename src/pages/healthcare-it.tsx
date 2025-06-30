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
    icon: '🤖',
    title: 'AI Chatbots',
    desc: 'Pre-visit triage and instant answers for patients.'
  },
  {
    icon: '🔒',
    title: 'Secure Data Integration',
    desc: 'HIPAA-compliant layer across EHR, billing, and scheduling.'
  },
  {
    icon: '📊',
    title: 'Patient-Flow Dashboards',
    desc: 'Track metrics and optimize experience in real time.'
  },
  {
    icon: '🩺',
    title: 'Unified Patient View',
    desc: 'All patient data in one place for better care.'
  }
];

const steps = [
  {
    icon: '🔍',
    title: '1. Assessment',
    desc: 'We review your systems, workflows, and compliance.'
  },
  {
    icon: '🤖',
    title: '2. AI & Integration',
    desc: 'We implement chatbots and secure data layers.'
  },
  {
    icon: '📊',
    title: '3. Dashboards',
    desc: 'We build custom dashboards for patient-flow.'
  },
  {
    icon: '🚀',
    title: '4. Launch & Support',
    desc: 'You launch, we support and optimize.'
  }
];

const testimonials = [
  {
    quote: '“Our patient intake is faster, and our staff finally has a complete view of every patient.”',
    author: 'VP Patient Experience, Regional Clinic'
  }
];

export default function HealthcareIT() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  return (
    <main className="min-h-screen text-gray-900 font-sans overflow-x-hidden relative" style={{ background: 'radial-gradient(ellipse at 60% 40%, #38bdf8 0%, #14b8a6 60%, #fff 100%)' }}>
      {/* Animated gradient blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[340px] h-[340px] bg-blue-200 rounded-full blur-3xl opacity-40 animate-blob1 z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-teal-200 rounded-full blur-3xl opacity-30 animate-blob2 z-0" />
      <div className="absolute top-1/2 left-[-80px] w-[180px] h-[180px] bg-white rounded-full blur-2xl opacity-30 animate-blob3 z-0" />
      {/* Floating SVG icons in hero */}
      <span className="absolute left-16 top-32 text-5xl animate-float z-10">🤖</span>
      <span className="absolute right-20 top-40 text-4xl animate-float-slow z-10">🔒</span>
      <span className="absolute left-1/3 bottom-20 text-4xl animate-float z-10">📊</span>
      <span className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10">🩺</span>
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10 text-blue-600 drop-shadow">Modern Healthcare IT & Patient Experience</h1>
        <h6 className="text-lg text-teal-600 mb-2 relative z-10">AI, Integration, and Dashboards for Clinics & Hospitals</h6>
        <p className="text-xl max-w-xl mb-8 text-blue-700 relative z-10">
          CIOs & Patient Experience VPs at clinics/hospitals. $15K–$100K/project. Streamline intake, unify data, and optimize patient flow.
        </p>
        <a
          href="#leadform"
          className="px-8 py-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section className="flex flex-col items-center px-4 mb-12">
        <div className="bg-blue-100/90 border-l-4 border-teal-400 shadow-lg rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-teal-600 font-bold mb-2">Pain Points</span>
          <div className="text-lg font-semibold text-blue-700 mb-1">Inefficient patient intake and triage</div>
          <div className="text-lg font-semibold text-blue-700 mb-1">Data-privacy and HIPAA compliance</div>
          <div className="text-lg font-semibold text-blue-700 mb-1">Siloed systems (EHR, billing, scheduling)</div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12 text-blue-600">Everything You Need for Patient Experience</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border-t-4 border-blue-200 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
      <section ref={stepsRef} className={`py-20 px-6 bg-gradient-to-br from-blue-100 via-teal-50 to-white text-center shadow-inner rounded-2xl max-w-5xl mx-auto my-16 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12 text-blue-600">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 border-4 border-blue-200 bg-white shadow-lg text-3xl transition-transform duration-200 group-hover:scale-110 animate-step-float`}
                style={{ animationDelay: `${i * 0.5}s`, backgroundColor: i === 0 ? '#bae6fd' : i === 1 ? '#99f6e4' : i === 2 ? '#fef9c3' : '#fbbf24' }}
              >
                {step.icon}
              </div>
              <div className="font-semibold mb-1 text-lg text-blue-700">{step.title}</div>
              <div className="text-blue-700 text-sm mb-2 max-w-[140px] mx-auto">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-40px] w-20 h-2 bg-gradient-to-r from-blue-100 to-teal-100 z-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial carousel */}
      <section ref={testimonialsRef} className={`py-20 px-6 mb-20 bg-gradient-to-br from-blue-100 to-teal-100 text-center transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-10 text-blue-600">What Clients Say</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative bg-white/90 rounded-2xl shadow-lg p-8 min-h-[160px] flex flex-col items-center">
            <blockquote className="text-lg italic text-blue-700 mb-4 transition-all duration-500 animate-fade-in">
              {testimonials[testimonialIdx].quote}
            </blockquote>
            <div className="text-teal-600 font-semibold">{testimonials[testimonialIdx].author}</div>
          </div>
        </div>
      </section>

      {/* Lead capture form placeholder */}
      <section id="leadform" className="flex flex-col items-center px-4 mb-32">
        <div className="bg-white border-l-4 border-blue-400 shadow-lg rounded-xl px-8 py-12 max-w-xl w-full flex flex-col items-center mb-20">
          <span className="uppercase text-xs tracking-widest text-blue-700 font-bold mb-4">Get Started</span>
          <div className="text-lg font-semibold text-blue-700 mb-8 text-center">Ready to modernize your patient experience? <br />Leave your email and we'll reach out for a free consultation.</div>
          {/* Replace with real form integration */}
          <form className="w-full flex flex-col gap-4">
            <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 bg-blue-100 text-blue-700 placeholder:text-blue-400 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 hover:scale-105 transition-transform duration-200 font-semibold">Request Free Consultation</button>
          </form>
          <div className="text-xs text-blue-500 mt-4">We respect your privacy. No spam, ever.</div>
        </div>
      </section>

      {/* Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-600/90 shadow-lg py-4 flex justify-center items-center z-50 backdrop-blur-md">
        <span className="mr-4 font-semibold text-white">Ready to improve patient experience?</span>
        <a
          href="#leadform"
          className="px-6 py-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 hover:scale-105 transition-transform duration-200 font-semibold"
        >
          Book a Free Consultation
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