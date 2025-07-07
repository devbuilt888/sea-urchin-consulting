import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

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
    icon: '🗓️',
    title: 'Booking & Dispatch Portal',
    desc: 'Custom portal for customers and your team to manage jobs.'
  },
  {
    icon: '💸',
    title: 'Automated Estimates & Invoicing',
    desc: 'QuickBooks/Xero integration for seamless billing.'
  },
  {
    icon: '📲',
    title: 'SMS/Email Confirmations',
    desc: 'Automatic reminders and confirmations for every job.'
  },
  {
    icon: '📊',
    title: 'No More Double-Booking',
    desc: 'Real-time scheduling keeps your team and customers in sync.'
  }
];

const steps = [
  {
    icon: '🔍',
    title: '1. Discovery',
    desc: 'We learn your workflow and needs.'
  },
  {
    icon: '🛠️',
    title: '2. Portal Setup',
    desc: 'We build your custom booking & dispatch system.'
  },
  {
    icon: '💬',
    title: '3. Automations',
    desc: 'We connect invoicing, reminders, and notifications.'
  },
  {
    icon: '🚀',
    title: '4. Go Live',
    desc: 'You launch, we support your team and customers.'
  }
];

const testimonials = [
  {
    quote: '“We stopped losing jobs and our team is always in sync. Invoicing is a breeze now!”',
    author: 'Carlos, HVAC Owner'
  }
];

export default function LocalServicesModern() {
  const router = useRouter();
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [selectedService, setSelectedService] = useState('');
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  const services = [
    {
      id: 'plumbers',
      title: 'Plumbers',
      icon: '🔧',
      description: 'Emergency calls, estimates, and service tracking',
      features: ['Emergency dispatch', 'Quote automation', 'Parts inventory', 'Customer follow-up'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'hvac',
      title: 'HVAC',
      icon: '❄️',
      description: 'Seasonal maintenance and emergency repairs',
      features: ['Maintenance scheduling', 'System diagnostics', 'Contract management', 'Energy audits'],
      color: 'from-green-500 to-green-700'
    },
    {
      id: 'landscapers',
      title: 'Landscapers',
      icon: '🌱',
      description: 'Design, maintenance, and seasonal services',
      features: ['Project planning', 'Seasonal scheduling', 'Equipment tracking', 'Photo documentation'],
      color: 'from-emerald-500 to-emerald-700'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-green-100 to-white text-gray-900 font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-100 via-blue-200 to-blue-900 rounded-full blur-3xl opacity-40 z-0" />
        <span className="absolute left-12 top-24 text-5xl animate-float-slow z-10">🗓️</span>
        <span className="absolute right-20 top-40 text-4xl animate-float z-10">💸</span>
        <span className="absolute left-1/3 bottom-20 text-4xl animate-float z-10">📲</span>
        <span className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10">📊</span>
        <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10 text-green-900 drop-shadow">Modernize Your Local Service Business</h1>
        <h6 className="text-lg text-green-800 mb-2 relative z-10">Booking, Invoicing, and Dispatch—Automated</h6>
        <p className="text-xl max-w-xl mb-8 text-blue-900 relative z-10">
          Plumbers, landscapers, HVAC: $4K–$9K. No more quoting by hand, lost jobs, or double-booking. We build your custom portal and automate your ops.
        </p>
        <a
          href="#leadform"
          className="px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Book a Free Demo
        </a>
      </section>

      {/* Service Selection */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-green-900">Choose Your Service Type</h2>
          <p className="text-xl text-center mb-12 text-blue-800 max-w-2xl mx-auto">
            Select your business type to see customized features and pricing
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => router.push(`/${service.id}`)}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
                  selectedService === service.id ? 'ring-4 ring-green-400 scale-105' : ''
                }`}
              >
                {/* Gradient header */}
                <div className={`h-24 bg-gradient-to-r ${service.color} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-6 text-4xl">{service.icon}</div>
                  <div className="absolute top-4 right-6">
                    {selectedService === service.id && (
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Key Features:</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                      selectedService === service.id 
                        ? 'bg-green-600 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}>
                      {selectedService === service.id ? 'Selected ✓' : 'Select This Service'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {selectedService && (
            <div className="mt-12 text-center">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Great choice! 🎉
                </h3>
                <p className="text-green-700">
                  You've selected <strong>{services.find(s => s.id === selectedService)?.title}</strong>. 
                  Continue below to see how we can modernize your {services.find(s => s.id === selectedService)?.title.toLowerCase()} business.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pain Points */}
      <section className="flex flex-col items-center px-4 mb-12">
        <div className="bg-blue-800/80 border-l-4 border-green-400 shadow-lg rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-green-300 font-bold mb-2">Pain Points</span>
          <div className="text-lg font-semibold text-green-100 mb-1">Quoting/invoicing by hand</div>
          <div className="text-lg font-semibold text-green-100 mb-1">Lost jobs</div>
          <div className="text-lg font-semibold text-green-100 mb-1">Double-booking</div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-semibold mb-12 text-green-900">Everything You Need to Modernize</h2>
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
        <div className="bg-white/90 border-l-4 border-green-400 shadow-lg rounded-xl px-8 py-8 max-w-xl w-full flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-green-700 font-bold mb-4">Get Started</span>
          <div className="text-lg font-semibold text-green-900 mb-4 text-center">
            Ready to modernize your {selectedService ? services.find(s => s.id === selectedService)?.title.toLowerCase() : ''} business?
            <br/>Leave your email and we'll reach out for a free demo.
          </div>
          {/* Replace with real form integration */}
          <form className="w-full flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="rounded-lg px-4 py-3 bg-green-100 text-green-900 placeholder:text-green-400 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="rounded-lg px-4 py-3 bg-green-100 text-green-900 placeholder:text-green-400 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="rounded-lg px-4 py-3 bg-green-100 text-green-900 placeholder:text-green-400 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            {selectedService && (
              <input 
                type="hidden" 
                value={selectedService} 
                name="selectedService"
              />
            )}
            <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 hover:scale-105 transition-transform duration-200 font-semibold">
              Request Free Demo {selectedService ? `for ${services.find(s => s.id === selectedService)?.title}` : ''}
            </button>
          </form>
          <div className="text-xs text-green-700 mt-3">We respect your privacy. No spam, ever.</div>
        </div>
      </section>

      {/* Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 w-full bg-green-700/90 shadow-lg py-4 flex justify-center items-center z-50 backdrop-blur-md">
        <span className="mr-4 font-semibold text-white">Ready to modernize your ops?</span>
        <a
          href="#leadform"
          className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 hover:scale-105 transition-transform duration-200 font-semibold"
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
      `}</style>
    </main>
  );
} 