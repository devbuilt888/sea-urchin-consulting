import { useState, useRef, useEffect } from 'react';
import GeometricThreeBackground from '../components/GeometricThreeBackground';

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

// Custom hook for floating card animations
function useFloatingCard(triggerHeight = 0.2) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = scrollY / (documentHeight - windowHeight);
      
      // Show card when scroll reaches trigger height
      setIsVisible(scrollProgress >= triggerHeight && scrollProgress <= triggerHeight + 0.3);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerHeight]);
  
  return isVisible;
}

// Custom hook for initial cards that disappear on scroll
function useInitialCard(disappearHeight = 0.1) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = scrollY / (documentHeight - windowHeight);
      
      // Hide card when scroll reaches disappear height
      setIsVisible(scrollProgress < disappearHeight);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [disappearHeight]);
  
  return isVisible;
}

const features = [
  {
    icon: '💡',
    title: 'Professional Landing Page',
    desc: 'A beautiful, conversion-focused website that presents your idea with the credibility it deserves.'
  },
  {
    icon: '📱',
    title: 'Your MVP, Built Right',
    desc: 'Transform your business concept into a working prototype without learning complex tech.'
  },
  {
    icon: '🤖',
    title: 'Automated Lead Nurturing',
    desc: 'Smart email sequences that build relationships with prospects while you focus on strategy.'
  },
  {
    icon: '🛠️',
    title: 'Tech-Free for You',
    desc: 'We handle all the technical complexity so you can focus on what you do best - your vision.'
  }
];

const steps = [
  {
    icon: '💭',
    title: '1. Vision Clarity',
    desc: 'We listen to your idea and help refine it into a clear, actionable plan.'
  },
  {
    icon: '🏗️',
    title: '2. Build Your MVP',
    desc: 'We create your landing page and prototype while you stay informed, not overwhelmed.'
  },
  {
    icon: '🎯',
    title: '3. Capture Interest',
    desc: 'We set up systems to attract and collect leads from people who need what you offer.'
  },
  {
    icon: '🚀',
    title: '4. Launch & Grow',
    desc: 'You launch with confidence, knowing everything runs smoothly behind the scenes.'
  }
];

const testimonials = [
  {
    quote: '"I had this consulting framework I\'d been thinking about for years, but the tech side felt impossible. Now I have a real business that\'s actually helping people."',
    author: 'Sarah, Former Marketing Director'
  },
  {
    quote: '"After 25 years in finance, I knew I had valuable insights to share. This team made my vision real without the tech headaches."',
    author: 'Michael, Investment Advisor'
  }
];

export default function RetireeMVP() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  // Initial cards that disappear on scroll
  const initialCard1Visible = useInitialCard(0.08);
  const initialCard2Visible = useInitialCard(0.12);
  const initialCard3Visible = useInitialCard(0.15);

  // Floating card visibility hooks
  const card1Visible = useFloatingCard(0.1);
  const card2Visible = useFloatingCard(0.2);
  const card3Visible = useFloatingCard(0.3);
  const card4Visible = useFloatingCard(0.4);
  const card5Visible = useFloatingCard(0.5);
  const card6Visible = useFloatingCard(0.6);
  const card7Visible = useFloatingCard(0.7);

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 text-gray-100 font-sans overflow-x-hidden relative">
      {/* Geometric 3D Background */}
      <GeometricThreeBackground />
      
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-16 overflow-hidden z-10">
        <span className="absolute left-12 top-24 text-5xl animate-float-slow z-10">💡</span>
        <span className="absolute right-20 top-40 text-4xl animate-float z-10">🎯</span>
        <span className="absolute left-1/3 bottom-20 text-4xl animate-float z-10">🚀</span>
        <span className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10">✨</span>
        
        <div className="relative z-10 max-w-3xl mx-auto mb-8 p-12 border-4 border-dashed border-yellow-400 rounded-2xl bg-slate-800/30 backdrop-blur-sm">
          <h1 className="text-5xl font-bold mb-8 text-blue-100 drop-shadow leading-tight">
            You Have the Idea.<br/>
            <span className="text-yellow-300">We Handle the Tech.</span>
          </h1>
          
          <p className="text-xl text-slate-200 leading-relaxed">
            You've spent years building expertise and watching opportunities pass by. That business idea you've been 
            thinking about? It's time to make it real. We take care of all the technical complexity so you can 
            focus on what you do best.
          </p>
        </div>
        
        {/* Floating Motivational Cards */}
        {card1Visible && (
          <div className="fixed top-20 right-6 z-40">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-4 py-2 rounded-full shadow-lg text-sm font-semibold float-in-right">
              This is your moment ✨
            </div>
          </div>
        )}
        
        {card2Visible && (
          <div className="fixed top-1/3 left-6 z-40">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold float-in-left">
              Your expertise has value 💎
            </div>
          </div>
        )}
        
        <a
          href="#leadform"
          className="px-8 py-4 bg-yellow-400 text-slate-900 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Let's Talk About Your Idea
        </a>
        
        {/* Initial Welcome Cards */}
        {initialCard1Visible && (
          <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-40">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold initial-card-center">
              Welcome to your breakthrough moment 🎉
            </div>
          </div>
        )}
        
        {initialCard2Visible && (
          <div className="fixed top-24 left-8 z-40">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-full shadow-lg text-sm font-semibold initial-card-left">
              Your business dreams start here 💫
            </div>
          </div>
        )}
        
        {initialCard3Visible && (
          <div className="fixed top-28 right-8 z-40">
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-5 py-3 rounded-full shadow-lg text-sm font-semibold initial-card-right">
              Time to turn ideas into income 🚀
            </div>
          </div>
        )}
      </section>

      {/* Pain Points */}
      <section className="flex flex-col items-center px-4 mb-16 relative z-10">
        <div className="bg-slate-800/80 border-l-4 border-yellow-400 shadow-lg rounded-xl px-8 py-8 max-w-3xl w-full">
          <span className="uppercase text-xs tracking-widest text-yellow-300 font-bold mb-4 block text-center">Sound Familiar?</span>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">😤</div>
              <div className="text-lg font-semibold text-blue-100 mb-2">Tech Overwhelm</div>
              <div className="text-slate-300 text-sm">You know your industry inside and out, but websites, apps, and integrations feel like a foreign language.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">⏰</div>
              <div className="text-lg font-semibold text-blue-100 mb-2">Time Slipping Away</div>
              <div className="text-slate-300 text-sm">You've been thinking about this idea for years. The longer you wait, the more frustrated you get.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-lg font-semibold text-blue-100 mb-2">You Know It's Valuable</div>
              <div className="text-slate-300 text-sm">Your experience and insights could help so many people. You just need the right way to share it.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Floating Cards */}
      {card3Visible && (
        <div className="fixed top-1/2 left-1/4 z-40">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold float-in-left">
            Finally launch that business you always said you would 🎯
          </div>
        </div>
      )}
      
      {card4Visible && (
        <div className="fixed top-2/3 right-1/4 z-40">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold float-in-right">
            Turn your vision into reality 🌟
          </div>
        </div>
      )}
      
      {card7Visible && (
        <div className="fixed bottom-32 right-8 z-40">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold float-in-right">
            Stop waiting, start building 🚀
          </div>
        </div>
      )}

      {/* Features */}
      <section ref={featuresRef} className={`py-12 px-6 text-center transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-4xl font-bold mb-6 text-blue-100">Finally, a Solution That Makes Sense</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          We build your business idea into reality while you stay focused on strategy, not software.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-slate-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border-t-4 border-yellow-400 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <span className="text-5xl mb-4">{f.icon}</span>
              <h3 className="text-xl font-bold mb-3 text-blue-100">{f.title}</h3>
              <p className="text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works timeline/stepper */}
      <section ref={stepsRef} className={`py-12 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-100 text-center shadow-inner rounded-2xl max-w-6xl mx-auto my-8 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-4xl font-bold mb-6 text-blue-100">How We Bring Your Vision to Life</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          A straightforward process that respects your time and expertise.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[200px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 border-4 border-yellow-400 bg-slate-800 shadow-lg text-4xl transition-transform duration-200 group-hover:scale-110">
                {step.icon}
              </div>
              <div className="font-bold mb-2 text-xl text-blue-100">{step.title}</div>
              <div className="text-slate-300 text-center leading-relaxed max-w-[180px]">{step.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-50px] w-12 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 z-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* More Floating Cards */}
      {card5Visible && (
        <div className="fixed top-1/4 right-1/3 z-40">
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold float-in-right">
            The world needs what you know 🌎
          </div>
        </div>
      )}
      
      {card6Visible && (
        <div className="fixed bottom-1/3 left-1/3 z-40">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold float-in-left">
            No more excuses, just results 💪
          </div>
        </div>
      )}

      {/* Testimonial carousel */}
      <section ref={testimonialsRef} className={`py-20 px-6 mb-16 relative z-10 transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-blue-500/10 to-purple-500/5 backdrop-blur-sm rounded-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-white drop-shadow-lg">Stories from People Like You</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 min-h-[280px] flex flex-col items-center justify-center border border-white/20 glass-card">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-6 opacity-30">"</div>
                <blockquote className="text-2xl text-white mb-8 transition-all duration-500 leading-relaxed font-light max-w-2xl">
                  {testimonials[testimonialIdx].quote}
                </blockquote>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"></div>
                <div className="text-yellow-300 font-semibold text-xl tracking-wide">
                  {testimonials[testimonialIdx].author}
                </div>
              </div>
              <div className="flex mt-8 space-x-3 relative z-10">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === testimonialIdx ? 'bg-yellow-400 w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead capture form */}
      <section id="leadform" className="flex flex-col items-center px-4 mb-24 relative z-20">
        <div className="bg-slate-800/95 backdrop-blur-sm border-l-4 border-yellow-400 shadow-2xl rounded-xl px-8 py-8 max-w-2xl w-full relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-900/20 rounded-xl"></div>
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">Ready to Finally Make It Happen?</h3>
              <p className="text-slate-200 text-lg leading-relaxed">
                Let's have a conversation about your business idea. No pressure, no sales pitch - 
                just an honest discussion about whether we can help bring your vision to life.
              </p>
            </div>
            
            <form className="w-full flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="rounded-lg px-4 py-3 bg-slate-700/80 backdrop-blur-sm text-white placeholder:text-slate-300 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200" 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="rounded-lg px-4 py-3 bg-slate-700/80 backdrop-blur-sm text-white placeholder:text-slate-300 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200" 
              />
              <textarea 
                placeholder="Tell us about your business idea (optional)" 
                rows={3}
                className="rounded-lg px-4 py-3 bg-slate-700/80 backdrop-blur-sm text-white placeholder:text-slate-300 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 resize-none transition-all duration-200" 
              />
              <button type="submit" className="px-8 py-4 bg-yellow-400 text-slate-900 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-200 font-semibold text-lg hover:shadow-xl">
                Let's Talk About Your Idea
              </button>
            </form>
            <div className="text-sm text-slate-300 mt-4 text-center">
              We respect your time and privacy. No spam, no pushy sales calls.
            </div>
          </div>
        </div>
      </section>



      {/* Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 w-full bg-slate-900/95 shadow-lg py-4 flex flex-col sm:flex-row justify-center items-center gap-2 z-50 backdrop-blur-md">
        <span className="font-semibold text-blue-200 text-center">Your idea deserves to see the light of day.</span>
        <a
          href="#leadform"
          className="px-6 py-3 bg-yellow-400 text-slate-900 rounded-full shadow hover:bg-yellow-500 hover:scale-105 transition-transform duration-200 font-semibold"
        >
          Let's Make It Real
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        @keyframes float-in-right {
          0% { 
            opacity: 0; 
            transform: translateX(100px) translateY(-20px) rotate(15deg) scale(0.8);
          }
          50% { 
            opacity: 1; 
            transform: translateX(0) translateY(-10px) rotate(3deg) scale(1);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
        }
        @keyframes float-in-left {
          0% { 
            opacity: 0; 
            transform: translateX(-100px) translateY(-20px) rotate(-15deg) scale(0.8);
          }
          50% { 
            opacity: 1; 
            transform: translateX(0) translateY(-10px) rotate(-3deg) scale(1);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
        }
        @keyframes float-out-right {
          0% { 
            opacity: 1; 
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
          50% { 
            opacity: 0.5; 
            transform: translateX(50px) translateY(-10px) rotate(8deg) scale(0.9);
          }
          100% { 
            opacity: 0; 
            transform: translateX(100px) translateY(-20px) rotate(15deg) scale(0.8);
          }
        }
        @keyframes float-out-left {
          0% { 
            opacity: 1; 
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
          50% { 
            opacity: 0.5; 
            transform: translateX(-50px) translateY(-10px) rotate(-8deg) scale(0.9);
          }
          100% { 
            opacity: 0; 
            transform: translateX(-100px) translateY(-20px) rotate(-15deg) scale(0.8);
          }
        }
        @keyframes subtle-float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes initial-fade-in {
          0% { 
            opacity: 0; 
            transform: translateY(-30px) scale(0.8);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        @keyframes initial-fade-in-left {
          0% { 
            opacity: 0; 
            transform: translateX(-50px) translateY(-20px) scale(0.8) rotate(-5deg);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) translateY(0) scale(1) rotate(0deg);
          }
        }
        @keyframes initial-fade-in-right {
          0% { 
            opacity: 0; 
            transform: translateX(50px) translateY(-20px) scale(0.8) rotate(5deg);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) translateY(0) scale(1) rotate(0deg);
          }
        }
        @keyframes gentle-float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(1deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .float-in-right {
          animation: float-in-right 0.8s ease-out forwards, subtle-float 4s ease-in-out infinite 0.8s;
        }
        .float-in-left {
          animation: float-in-left 0.8s ease-out forwards, subtle-float 4s ease-in-out infinite 0.8s;
        }
        .float-out-right {
          animation: float-out-right 0.6s ease-in forwards;
        }
        .float-out-left {
          animation: float-out-left 0.6s ease-in forwards;
        }
        .initial-card-center {
          animation: initial-fade-in 1s ease-out forwards, gentle-float 5s ease-in-out infinite 1s;
        }
        .initial-card-left {
          animation: initial-fade-in-left 1.2s ease-out forwards, gentle-float 5s ease-in-out infinite 1.2s;
        }
        .initial-card-right {
          animation: initial-fade-in-right 1.4s ease-out forwards, gentle-float 5s ease-in-out infinite 1.4s;
        }
        .glass-card {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(255, 255, 255, 0.1);
        }
        .glass-card:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </main>
  );
} 