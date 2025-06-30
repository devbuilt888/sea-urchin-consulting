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
    icon: '🧩',
    title: 'Modular Microservices',
    desc: 'Accelerate dev cycles with scalable, decoupled architecture.'
  },
  {
    icon: '🤖',
    title: 'End-to-End AI/ML Pipeline',
    desc: 'From data ingestion to model deployment, fully integrated.'
  },
  {
    icon: '⚙️',
    title: 'DevOps Automation',
    desc: 'CI/CD, containerization, and cloud-native best practices.'
  },
  {
    icon: '🔗',
    title: 'Legacy Integration',
    desc: 'Bridge old and new systems for seamless delivery.'
  }
];

const steps = [
  {
    icon: '🔍',
    title: '1. Assessment',
    desc: 'We audit your stack, pain points, and goals.'
  },
  {
    icon: '🧩',
    title: '2. Modularization',
    desc: 'We design and build microservices for key features.'
  },
  {
    icon: '🤖',
    title: '3. AI/ML Pipeline',
    desc: 'We implement and integrate end-to-end ML workflows.'
  },
  {
    icon: '⚙️',
    title: '4. DevOps Automation',
    desc: 'We automate CI/CD and containerization for rapid delivery.'
  }
];

const testimonials = [
  {
    quote: '“We cut our release cycle in half and finally shipped AI features our customers love.”',
    author: 'VP Engineering, SaaS Platform'
  }
];

export default function MidMarketTech() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-100 text-gray-100 font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-900 via-gray-700 to-gray-900 rounded-full blur-3xl opacity-40 z-0" />
        <span className="absolute left-12 top-24 text-5xl animate-float-slow z-10">🧩</span>
        <span className="absolute right-20 top-40 text-4xl animate-float z-10">🤖</span>
        <span className="absolute left-1/3 bottom-20 text-4xl animate-float z-10">⚙️</span>
        <span className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10">🔗</span>
        <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10 text-blue-200 drop-shadow">Modernize Your Tech Stack</h1>
        <h6 className="text-lg text-blue-100 mb-2 relative z-10">Microservices, AI/ML, and DevOps for Mid-Market Leaders</h6>
        <p className="text-xl max-w-xl mb-8 text-blue-200 relative z-10">
          CTOs & VPs of 50–500-headcount tech firms. $10K–$100K/project. Solve legacy bottlenecks, scale AI, and automate delivery.
        </p>
        <a
          href="#leadform"
          className="px-8 py-4 bg-blue-400 text-gray-100 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section className="flex flex-col items-center px-4 mb-12">
        <div className="bg-gray-800/90 border-l-4 border-blue-400 shadow-lg rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-blue-300 font-bold mb-2">Pain Points</span>
          <div className="text-lg font-semibold text-blue-100 mb-1">Legacy code slowing feature delivery</div>
          <div className="text-lg font-semibold text-blue-100 mb-1">Engineering bandwidth stretched thin</div>
          <div className="text-lg font-semibold text-blue-100 mb-1">Difficulty integrating AI into core product</div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12 text-blue-200">Solutions for Modern Tech Teams</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-gray-800/90 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border-t-4 border-blue-200 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <span className="text-4xl mb-4">{f.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-blue-100">{f.title}</h3>
              <p className="text-blue-200">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works timeline/stepper */}
      <section ref={stepsRef} className={`py-20 px-6 bg-gradient-to-br from-gray-100 via-blue-700 to-blue-900 text-center shadow-inner rounded-2xl max-w-5xl mx-auto my-16 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12 text-blue-200">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 border-4 border-blue-200 bg-gray-900 shadow-lg text-3xl transition-transform duration-200 group-hover:scale-110 animate-step-float`}
                style={{ animationDelay: `${i * 0.5}s`, backgroundColor: i === 0 ? '#dbeafe' : i === 1 ? '#f1f5f9' : i === 2 ? '#a5b4fc' : '#fbbf24' }}
              >
                {step.icon}
              </div>
              <div className="font-semibold mb-1 text-lg text-blue-100">{step.title}</div>
              <div className="text-blue-200 text-sm mb-2 max-w-[140px] mx-auto">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-9px] w-10 h-2 bg-gradient-to-r from-blue-100 to-blue-400 z-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial carousel */}
      <section ref={testimonialsRef} className={`py-20 px-6 mb-20 bg-gradient-to-br from-blue-900 to-gray-900 text-center transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-10 text-blue-200">What Clients Say</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative bg-gray-800/90 rounded-2xl shadow-lg p-8 min-h-[160px] flex flex-col items-center">
            <blockquote className="text-lg italic text-blue-100 mb-4 transition-all duration-500 animate-fade-in">
              {testimonials[testimonialIdx].quote}
            </blockquote>
            <div className="text-blue-300 font-semibold">{testimonials[testimonialIdx].author}</div>
          </div>
        </div>
      </section>

      {/* Lead capture form placeholder */}
      <section id="leadform" className="flex flex-col items-center px-4 mb-32">
        <div className="bg-white border-l-4 border-blue-400 shadow-lg rounded-xl px-8 py-12 max-w-xl w-full flex flex-col items-center mb-20">
          <span className="uppercase text-xs tracking-widest text-blue-700 font-bold mb-4">Get Started</span>
          <div className="text-lg font-semibold text-gray-900 mb-8 text-center">Ready to modernize your stack?<br />Leave your email and we'll reach out for a free consultation.</div>
          {/* Replace with real form integration */}
          <form className="w-full flex flex-col gap-4">
            <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 bg-blue-100 text-gray-900 placeholder:text-blue-400 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="px-6 py-3 bg-blue-400 text-gray-900 rounded-full shadow hover:bg-blue-500 hover:scale-105 transition-transform duration-200 font-semibold">Request Free Consultation</button>
          </form>
          <div className="text-xs text-blue-500 mt-4">We respect your privacy. No spam, ever.</div>
        </div>
      </section>

      {/* Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-900/90 shadow-lg py-4 flex justify-center items-center z-50 backdrop-blur-md">
        <span className="mr-4 font-semibold text-blue-200">Ready to accelerate your roadmap?</span>
        <a
          href="#leadform"
          className="px-6 py-3 bg-blue-400 text-gray-900 rounded-full shadow hover:bg-blue-500 hover:scale-105 transition-transform duration-200 font-semibold"
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
      `}</style>
    </main>
  );
} 