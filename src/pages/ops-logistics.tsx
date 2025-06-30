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
    icon: '🗺️',
    title: 'AI Route Optimization',
    desc: 'Smarter scheduling and routing for lower costs and fewer errors.'
  },
  {
    icon: '📊',
    title: 'Real-Time KPI Dashboards',
    desc: 'Custom dashboards for asset, inventory, and ops visibility.'
  },
  {
    icon: '🤖',
    title: 'Workflow Automation',
    desc: 'Automate order processing, supplier integration, and more.'
  },
  {
    icon: '📈',
    title: 'Demand Forecasting',
    desc: 'AI-driven predictions to optimize labor and inventory.'
  }
];

const steps = [
  {
    icon: '🔍',
    title: '1. Assessment',
    desc: 'We audit your ops, data, and pain points.'
  },
  {
    icon: '🗺️',
    title: '2. AI Optimization',
    desc: 'We implement route and demand AI models.'
  },
  {
    icon: '📊',
    title: '3. Dashboards',
    desc: 'We build real-time KPI dashboards for your team.'
  },
  {
    icon: '🤖',
    title: '4. Automation',
    desc: 'We automate workflows and integrate suppliers.'
  }
];

const testimonials = [
  {
    quote: '“We cut delivery times by 20% and our team finally has real-time visibility. The dashboards are a game changer.”',
    author: 'COO, Logistics Firm'
  }
];

export default function OpsLogistics() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  return (
    <main className="min-h-screen text-gray-100 font-sans overflow-x-hidden relative" style={{ background: 'radial-gradient(ellipse at 60% 40%, #34d399 0%, #2563eb 60%, #fff 100%)' }}>
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-100 via-blue-200 to-blue-900 rounded-full blur-3xl opacity-40 z-0" />
        <span className="absolute left-12 top-24 text-5xl animate-float-slow z-10">🗺️</span>
        <span className="absolute right-20 top-40 text-4xl animate-float z-10">📊</span>
        <span className="absolute left-1/3 bottom-20 text-4xl animate-float z-10">🤖</span>
        <span className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10">📈</span>
        <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10 text-green-200 drop-shadow">Modernize Your Operations</h1>
        <h6 className="text-lg text-green-100 mb-2 relative z-10">AI, Dashboards, and Automation for Ops Leaders</h6>
        <p className="text-xl max-w-xl mb-8 text-blue-100 relative z-10">
          COOs & Heads of Ops at manufacturing/logistics firms (100–1,000 employees). $20K–$150K/project. Eliminate manual errors, gain real-time visibility, and automate your workflows.
        </p>
        <a
          href="#leadform"
          className="px-8 py-4 bg-green-400 text-blue-900 rounded-full shadow-lg hover:bg-green-500 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section className="flex flex-col items-center px-4 mb-12">
        <div className="bg-blue-800/90 border-l-4 border-green-400 shadow-lg rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-green-300 font-bold mb-2">Pain Points</span>
          <div className="text-lg font-semibold text-green-100 mb-1">Manual scheduling and routing errors</div>
          <div className="text-lg font-semibold text-green-100 mb-1">Lack of real-time visibility into assets/inventory</div>
          <div className="text-lg font-semibold text-green-100 mb-1">High labor overhead on repetitive tasks</div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12 text-green-900">Solutions for Modern Ops Teams</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border-t-4 border-green-200 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <span className="text-4xl mb-4">{f.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-green-900">{f.title}</h3>
              <p className="text-blue-900">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works timeline/stepper */}
      <section ref={stepsRef} className={`py-20 px-6 bg-gradient-to-br from-green-100 via-blue-50 to-white text-center shadow-inner rounded-2xl max-w-5xl mx-auto my-16 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12 text-green-900">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 border-4 border-green-200 bg-white shadow-lg text-3xl transition-transform duration-200 group-hover:scale-110 animate-step-float`}
                style={{ animationDelay: `${i * 0.5}s`, backgroundColor: i === 0 ? '#bbf7d0' : i === 1 ? '#e0e7ff' : i === 2 ? '#fef9c3' : '#fbbf24' }}
              >
                {step.icon}
              </div>
              <div className="font-semibold mb-1 text-lg text-green-900">{step.title}</div>
              <div className="text-blue-900 text-sm mb-2 max-w-[140px] mx-auto">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-40px] w-20 h-2 bg-gradient-to-r from-green-100 to-blue-100 z-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial carousel */}
      <section ref={testimonialsRef} className={`py-20 px-6 mb-20 bg-gradient-to-br from-green-100 to-blue-900 text-center transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-10 text-green-900">What Clients Say</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative bg-white/90 rounded-2xl shadow-lg p-8 min-h-[160px] flex flex-col items-center">
            <blockquote className="text-lg italic text-green-900 mb-4 transition-all duration-500 animate-fade-in">
              {testimonials[testimonialIdx].quote}
            </blockquote>
            <div className="text-green-700 font-semibold">{testimonials[testimonialIdx].author}</div>
          </div>
        </div>
      </section>

      {/* Lead capture form placeholder */}
      <section id="leadform" className="flex flex-col items-center px-4 mb-32">
        <div className="bg-white border-l-4 border-green-400 shadow-lg rounded-xl px-8 py-12 max-w-xl w-full flex flex-col items-center mb-20">
          <span className="uppercase text-xs tracking-widest text-green-700 font-bold mb-4">Get Started</span>
          <div className="text-lg font-semibold text-green-900 mb-8 text-center">Ready to modernize your ops?<br />Leave your email and we'll reach out for a free consultation.</div>
          {/* Replace with real form integration */}
          <form className="w-full flex flex-col gap-4">
            <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 bg-green-100 text-green-900 placeholder:text-green-400 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 hover:scale-105 transition-transform duration-200 font-semibold">Request Free Consultation</button>
          </form>
          <div className="text-xs text-green-700 mt-4">We respect your privacy. No spam, ever.</div>
        </div>
      </section>

      {/* Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 w-full bg-green-700/90 shadow-lg py-4 flex justify-center items-center z-50 backdrop-blur-md">
        <span className="mr-4 font-semibold text-white">Ready to modernize your ops?</span>
        <a
          href="#leadform"
          className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 hover:scale-105 transition-transform duration-200 font-semibold"
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