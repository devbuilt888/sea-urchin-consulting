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
    icon: '💡',
    title: 'Landing Page + Lead Capture',
    desc: 'Professional site with MailChimp/ConvertKit integration.'
  },
  {
    icon: '📱',
    title: 'Simple MVP App',
    desc: 'No-code (Bubble/Adalo) or custom lightweight app for your idea.'
  },
  {
    icon: '🤖',
    title: 'Automated Email Nurture',
    desc: 'Onboard and nurture prospects with automated emails.'
  },
  {
    icon: '🛠️',
    title: 'Done-for-You Tech',
    desc: 'We handle all the tech, so you focus on your vision.'
  }
];

const steps = [
  {
    icon: '📝',
    title: '1. Discovery',
    desc: 'We clarify your idea and goals.'
  },
  {
    icon: '🧑‍💻',
    title: '2. MVP Build',
    desc: 'We build your landing page and app.'
  },
  {
    icon: '📧',
    title: '3. Lead Capture',
    desc: 'We connect email forms and automations.'
  },
  {
    icon: '🚀',
    title: '4. Launch & Nurture',
    desc: 'You launch, we automate onboarding and nurture.'
  }
];

const testimonials = [
  {
    quote: '“I had a vision for a coaching app, but no idea where to start. In weeks, I had a beautiful site, a working app, and my first leads!”',
    author: 'Patricia, Retired Executive'
  }
];

export default function RetireeMVP() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-50 text-gray-100 font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-100 via-blue-200 to-blue-900 rounded-full blur-3xl opacity-40 z-0" />
        <span className="absolute left-12 top-24 text-5xl animate-float-slow z-10">💡</span>
        <span className="absolute right-20 top-40 text-4xl animate-float z-10">📱</span>
        <span className="absolute left-1/3 bottom-20 text-4xl animate-float z-10">🤖</span>
        <span className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10">🛠️</span>
        <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10 text-yellow-200 drop-shadow">Retiree with a Dream MVP</h1>
        <h6 className="text-lg text-yellow-100 mb-2 relative z-10">App or Info Product, Done-for-You</h6>
        <p className="text-xl max-w-xl mb-8 text-blue-100 relative z-10">
          Affluent ex-executives or retirees with a consulting/coaching idea. Budget: $5K–$10K. No tech skills needed—get a proof-of-concept or lead-magnet app, and we take care of everything.
        </p>
        <a
          href="#leadform"
          className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Book a Free Discovery Call
        </a>
      </section>

      {/* Pain Points */}
      <section className="flex flex-col items-center px-4 mb-12">
        <div className="bg-blue-800/80 border-l-4 border-yellow-400 shadow-lg rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-yellow-300 font-bold mb-2">Pain Points</span>
          <div className="text-lg font-semibold text-yellow-100 mb-1">Zero tech chops</div>
          <div className="text-lg font-semibold text-yellow-100 mb-1">Wants a proof-of-concept or lead-magnet app</div>
          <div className="text-lg font-semibold text-yellow-100 mb-1">Doesn't want to manage tech or vendors</div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12 text-yellow-200">Everything Handled for You</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-blue-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border-t-4 border-yellow-200 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <span className="text-4xl mb-4">{f.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-yellow-100">{f.title}</h3>
              <p className="text-blue-100">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works timeline/stepper */}
      <section ref={stepsRef} className={`py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-yellow-50 text-center shadow-inner rounded-2xl max-w-5xl mx-auto my-16 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12 text-yellow-200">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 border-4 border-yellow-200 bg-blue-900 shadow-lg text-3xl transition-transform duration-200 group-hover:scale-110 animate-step-float`}
                style={{ animationDelay: `${i * 0.5}s`, backgroundColor: i === 0 ? '#fef9c3' : i === 1 ? '#e0e7ff' : i === 2 ? '#fde68a' : '#fbbf24' }}
              >
                {step.icon}
              </div>
              <div className="font-semibold mb-1 text-lg text-yellow-100">{step.title}</div>
              <div className="text-blue-100 text-sm mb-2 max-w-[140px] mx-auto">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-40px] w-20 h-2 bg-gradient-to-r from-yellow-100 to-blue-100 z-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial carousel */}
      <section ref={testimonialsRef} className={`py-20 px-6 mb-20 bg-gradient-to-br from-yellow-50 to-blue-900 text-center transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-10 text-yellow-200">What Clients Say</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative bg-blue-800/80 rounded-2xl shadow-lg p-8 min-h-[160px] flex flex-col items-center">
            <blockquote className="text-lg italic text-yellow-100 mb-4 transition-all duration-500 animate-fade-in">
              {testimonials[testimonialIdx].quote}
            </blockquote>
            <div className="text-yellow-300 font-semibold">{testimonials[testimonialIdx].author}</div>
          </div>
        </div>
      </section>

      {/* Lead capture form placeholder */}
      <section id="leadform" className="flex flex-col items-center px-4 mb-32">
        <div className="bg-blue-800/80 border-l-4 border-yellow-400 shadow-lg rounded-xl px-8 py-8 max-w-xl w-full flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-yellow-300 font-bold mb-4">Get Started</span>
          <div className="text-lg font-semibold text-yellow-100 mb-4 text-center">Ready to launch your MVP or info product?<br/>Leave your email and we'll reach out for a free discovery call.</div>
          {/* Replace with real MailChimp/ConvertKit form */}
          <form className="w-full flex flex-col gap-4">
            <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 bg-blue-900 text-yellow-100 placeholder:text-blue-200 border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <button type="submit" className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-full shadow hover:bg-yellow-500 hover:scale-105 transition-transform duration-200 font-semibold">Request Free Call</button>
          </form>
          <div className="text-xs text-blue-200 mt-3">We respect your privacy. No spam, ever.</div>
        </div>
      </section>

      {/* Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-900/90 shadow-lg py-4 flex justify-center items-center z-50 backdrop-blur-md">
        <span className="mr-4 font-semibold text-yellow-200">Ready to make your idea real?</span>
        <a
          href="#leadform"
          className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-full shadow hover:bg-yellow-500 hover:scale-105 transition-transform duration-200 font-semibold"
        >
          Book a Free Discovery Call
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