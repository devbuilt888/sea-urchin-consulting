import { useState, useRef, useEffect } from 'react';
// import RetailEcom3DBackground from '../components/RetailEcom3DBackground';
import RetailEcomPatternBg from '../components/RetailEcomPatternBg';
import FloatingPerson from '@/components/FloatingPerson';

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

const painPoints = [
  {
    icon: '😕',
    title: 'Low Personalization',
    desc: 'Generic shopping experiences and high cart abandonment rates.'
  },
  {
    icon: '🔗',
    title: 'Fragmented Data',
    desc: 'Customer data scattered across multiple channels and tools.'
  },
  {
    icon: '📊',
    title: 'Manual Reporting',
    desc: 'Time-consuming campaign reporting and lack of real-time insights.'
  }
];

const features = [
  {
    icon: '🤖',
    title: 'AI Recommendations',
    desc: 'Personalized product suggestions to boost conversion and retention.'
  },
  {
    icon: '💸',
    title: 'Dynamic Pricing',
    desc: 'AI-driven pricing to maximize sales and margin in real time.'
  },
  {
    icon: '🧑‍💻',
    title: 'Single Customer View',
    desc: 'Unified data-lake for all customer touchpoints and analytics.'
  },
  {
    icon: '📈',
    title: 'Automated Campaigns',
    desc: 'Email/SMS workflows and real-time performance dashboards.'
  }
];

const steps = [
  {
    icon: '🔍',
    title: 'Audit',
    desc: 'We review your data, channels, and goals.'
  },
  {
    icon: '🤖',
    title: 'AI & Data Integration',
    desc: 'We implement recommendations, pricing, and data-lake.'
  },
  {
    icon: '📊',
    title: 'Campaign Automation',
    desc: 'We set up automated email/SMS workflows.'
  },
  {
    icon: '🚀',
    title: 'Launch & Optimize',
    desc: 'You launch, we monitor and optimize for results.'
  }
];

const testimonials = [
  {
    quote: '“Our cart abandonment dropped and our campaigns basically run themselves now!”',
    author: 'Head of Digital, Fashion Retailer'
  },
  {
    quote: '“We finally have a single view of our customers and can personalize at scale.”',
    author: 'Director of Ecommerce, Home Goods'
  }
];

export default function RetailEcommerce() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [painRef, painVisible] = useReveal();
  const [formRef, formVisible] = useReveal();

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((idx) => (idx + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff1f2] via-[#f0f9ff] to-[#fef9c3] text-gray-900 font-sans overflow-x-hidden relative">
      {/* <RetailEcom3DBackground /> */}
      <RetailEcomPatternBg />
      <FloatingPerson />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-36 pb-28 overflow-hidden mb-10" style={{ backgroundImage: 'url(/hd4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'overlay' }}>
        <div className="backdrop-blur-3xl bg-white/30 border border-white/50 shadow-2xl rounded-xl p-10 w-full max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Retail & eCommerce Growth, Powered by AI
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Personalize, unify, and automate your marketing with next-gen data and AI. $5K–$75K/project.
          </p>
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold text-lg shadow-lg animate-pulse">
              🎁 Sign up now & get <span className="mx-1 text-2xl">20% OFF</span> your first order!
            </span>
          </div>
          <a
            href="#leadform"
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-blue-500 text-white rounded-full shadow-xl hover:scale-105 transition-transform duration-200 font-semibold text-lg"
          >
            SignUp Now
          </a>
        </div>

        <span className="absolute left-10 top-20 text-6xl animate-float">🤖</span>
        <span className="absolute right-10 top-32 text-5xl animate-float-slow">💸</span>
        <span className="absolute left-1/3 bottom-24 text-5xl animate-float">🧑‍💻</span>
        <span className="absolute right-1/4 bottom-20 text-5xl animate-float-slow">📈</span>
      </section>

      {/* Value Proposition & Incentive Section */}
      <section className="flex justify-center px-4 mb-12">
        <div className="relative bg-gradient-to-br from-pink-100 via-blue-50 to-white border-2 border-pink-400 shadow-xl rounded-2xl px-10 py-10 max-w-3xl w-full flex flex-col items-center text-center overflow-hidden">
          <div className="absolute top-0 right-0 m-4 px-4 py-1 bg-pink-500 text-white text-xs font-bold rounded-full shadow animate-pulse">LIMITED TIME: 20% OFF FIRST PROJECT</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">Why Choose Us?</h2>
          <p className="text-lg text-blue-800 mb-4 font-medium">Unlock the power of AI-driven marketing and data integration—without the enterprise price tag or complexity.</p>
          <ul className="text-blue-700 text-base mb-6 space-y-2 text-left max-w-xl mx-auto">
            <li><span className="font-bold text-pink-600">•</span> Instantly boost conversions with personalized recommendations and dynamic pricing.</li>
            <li><span className="font-bold text-pink-600">•</span> Eliminate data silos—get a single, actionable view of every customer.</li>
            <li><span className="font-bold text-pink-600">•</span> Automate campaigns and reporting, so your team can focus on growth, not grunt work.</li>
            <li><span className="font-bold text-pink-600">•</span> Designed for mid-sized retailers—fast setup, real results, and ongoing support.</li>
          </ul>
          <div className="text-pink-700 font-semibold mb-4">Explore our solutions and see how we can help you outpace the competition.</div>
          <a href="#features" className="inline-block px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 hover:scale-105 transition-transform duration-200 font-semibold text-lg">See Features</a>
          <div className="mt-6 text-xs text-blue-500">Book a free strategy session today and get 20% off your first project—offer ends soon!</div>
        </div>
      </section>

      {/* Pain Points */}
      <section ref={painRef} className={`flex flex-col items-center px-4 mb-12 transition-all duration-700 ${painVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full">
          {painPoints.map((p, i) => (
            <div key={p.title} className="flex-1 bg-gradient-to-br from-pink-100 via-blue-50 to-white border-l-4 border-pink-400 shadow-lg rounded-2xl px-8 py-8 flex flex-col items-center hover:scale-105 transition-transform duration-200">
              <span className="text-4xl mb-3">{p.icon}</span>
              <div className="font-bold text-blue-700 mb-1 text-lg">{p.title}</div>
              <div className="text-blue-700 text-base text-center">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className='flex items-center justify-center h-screen my-20' style={{ backgroundImage: 'url(/hd5.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'overlay' }}>
          <div className='bg-white/90 rounded-2xl shadow-lg p-10 flex flex-col items-center max-w-2xl hover:shadow-2xl hover:scale-105 transition-transform duration-200 border-t-4 border-pink-200 transition-all duration-700'>
            <h2 className='text-2xl font-semibold mb-6 text-pink-600'>Why Modern Retailers Choose Us</h2>
            <p className='text-md text-blue-800 mb-6 text-center'>
              Our platform empowers eCommerce brands and retailers to deliver personalized, seamless, and data-driven shopping experiences that drive real results. By unifying your customer data, automating campaigns, and leveraging AI-powered recommendations, you can:
            </p>
            <ul className='text-blue-700 text-base mb-6 space-y-3 text-left max-w-xl mx-auto list-disc pl-6'>
              <li><span className='font-bold text-pink-600'>•</span> <b>Boost Conversions:</b> Show the right products to the right customers at the right time, increasing sales and average order value.</li>
              <li><span className='font-bold text-pink-600'>•</span> <b>Build Loyalty:</b> Create memorable, personalized journeys that keep shoppers coming back.</li>
              <li><span className='font-bold text-pink-600'>•</span> <b>Save Time:</b> Automate repetitive marketing tasks and reporting, freeing your team to focus on growth.</li>
              <li><span className='font-bold text-pink-600'>•</span> <b>Gain Insights:</b> Access a single, actionable view of every customer and campaign, so you can make smarter decisions, faster.</li>
              <li><span className='font-bold text-pink-600'>•</span> <b>Stand Out:</b> Offer a modern, delightful experience that sets your brand apart from the competition.</li>
            </ul>
            <div className='text-pink-700 font-semibold mb-2 text-center'>
              Influence your customers at every touchpoint—turn browsers into buyers, and buyers into loyal fans.
            </div>
            <div className='mt-4 text-xs text-blue-500 text-center'>Ready to transform your retail business? Discover how our solution can help you grow faster and smarter.</div>
          </div>
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
      <section className="py-20 px-6 mb-20 bg-gradient-to-br from-pink-100 to-blue-100 text-center">
        <h2 className="relative text-3xl font-semibold mb-10 text-pink-600">What Clients Say</h2>
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
      <section id="leadform" ref={formRef} className={`flex flex-col items-center px-4 mb-32 transition-all duration-700 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="bg-white border-l-4 border-pink-400 shadow-lg rounded-xl px-8 py-12 max-w-xl w-full flex flex-col items-center mb-20">
          <span className="uppercase text-xs tracking-widest text-pink-700 font-bold mb-4">Get Started</span>
          <div className="text-lg font-semibold text-blue-700 mb-8 text-center">Ready to grow your eCommerce? <br />Leave your email and we'll reach out for a free demo.</div>
          {/* Replace with real form integration */}
          <form className="w-full flex flex-col gap-4">
            <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 bg-pink-100 text-blue-700 placeholder:text-pink-400 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400" />
            <input type="text" placeholder="Company Name" className="rounded-lg px-4 py-3 bg-blue-50 text-blue-700 placeholder:text-blue-300 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 hover:scale-105 transition-transform duration-200 font-semibold">Request Free Demo</button>
          </form>
          <div className="text-xs text-blue-500 mt-4">We respect your privacy. No spam, ever.</div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-pink-600/90 shadow-lg py-4 flex justify-center items-center z-50 backdrop-blur-md">
        <span className="mr-4 font-semibold text-white">Ready to boost your sales?</span>
        <a
          href="#leadform"
          className="px-6 py-3 bg-white text-pink-600 rounded-full shadow hover:bg-gray-100 hover:scale-105 transition-transform duration-200 font-semibold"
        >
          Book a Free Demo
        </a>
      </div>

      {/* Animation Styles */}
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
      `}</style>
    </main>
  );
}