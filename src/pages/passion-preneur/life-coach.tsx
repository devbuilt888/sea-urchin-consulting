import React, { useState, useEffect } from 'react';

const services = [
  {
    icon: '👑',
    title: 'Effective Leadership 1:1 Coaching',
    desc: 'Want to lead with Calm and Deep Presence? Become the effective Leader you want to Be.',
    gradient: 'from-emerald-400 to-teal-500',
    cta: 'Click Here for leadership coaching with me'
  },
  {
    icon: '🏢',
    title: 'Corporate Training & Speaking',
    desc: 'Want to Tap into your team\'s full potential? Looking for Effective Training & Coaching with Great Results?',
    gradient: 'from-violet-400 to-purple-500',
    cta: 'Know more about my unique corporate trainings'
  },
  {
    icon: '🌟',
    title: 'Quantum Shift Coaches Community',
    desc: 'Want to build an abundant, ever-thriving coaching practice? Feeling alone and lost as a coach?',
    gradient: 'from-rose-400 to-pink-500',
    cta: 'Join our community of abundant coaches'
  }
];

const testimonials = [
  {
    quote: 'Maya is beyond compare. She is not someone who can be labeled. She is powerful in her listening and in her life coaching. If there is something in your life you are yearning for: Something you desire to create or find solution for. There\'s something that is in the way of what you wish to create, I know coaching with Maya will get you on the path. It will make your your life better. Working with Maya will transform you life.',
    author: 'Alex Thompson',
    title: 'Life & Leadership Coach (Toronto ON)',
    rating: 5
  },
  {
    quote: 'Maya has been a mentor, life coach and guide for me. She\'s helped me evolve gently and steadily, at my pace through her coaching. Each life coaching session has added immense value to my life and personality. I feel a sense of deep calmness and peace in me like never before. Thank you, Maya, for helping me go through tough times with ease, making this challenging journey beautiful and ever evolving!',
    author: 'Priya Patel',
    title: 'Sr. Vice-President, Global Bank',
    rating: 5
  },
  {
    quote: 'Maya is an incredible life coach. Working with her has transformed my life, leading to profound personal, professional & spiritual growth. Maya exhibited a remarkable ability to connect on a deep level. Her empathetic approach fostered an environment of trust & openness. Her great strength lies in asking powerful questions that challenged my perspectives and encouraged introspection, enriching my life.',
    author: 'David Chen',
    title: 'Director Operations, TechCorp',
    rating: 5
  }
];

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '500+', label: 'Leaders Coached' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '1:1', label: 'Personal Coaching' }
];

export default function LifeCoachSite() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Add custom CSS for mind-relaxing animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gentle-breathe {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.05); opacity: 0.9; }
      }
      
      @keyframes soft-glow {
        0%, 100% { box-shadow: 0 0 5px rgba(16, 185, 129, 0.3); }
        50% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.6); }
      }
      
      @keyframes gentle-float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-3px); }
      }
      
      .logo-container {
        animation: gentle-breathe 4s ease-in-out infinite, soft-glow 4s ease-in-out infinite;
      }
      
      .logo-icon {
        animation: gentle-float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <main className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-r from-rose-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center logo-container hover:animate-none transition-all duration-1000 hover:scale-110">
              <svg className="w-6 h-6 text-white logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Life Coach Logo</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-emerald-600 transition font-medium">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition font-medium">Testimonials</a>
            <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center relative">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-700 font-medium text-sm">15+ Years of Coaching Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent">
              I Help Leaders with
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Profound Professional & Spiritual Growth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Hello, I am Maya, your Life Coach! We are here to evolve. To become our Highest Self.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
              Let's Discuss your Goals
            </a>
            <a href="#services" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full text-lg font-semibold hover:border-emerald-400 hover:text-emerald-600 transition-all duration-300">
              View My Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={stat.label} className={`text-center transition-all duration-700 delay-${idx * 100}`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Life Coaching Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you want to become an inspiring leader, who leads with calm and presence. Or you desire more contentment at work and fulfilment in relationships; it all starts with the inner work and higher awareness of self.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={service.title} className={`group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-emerald-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  {service.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Loved by Coaches
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of successful coaches who've transformed their businesses with LifeCoachPro.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={testimonial.author} className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${idx * 200}ms` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="italic text-gray-700 mb-6 leading-relaxed text-lg">"{testimonial.quote}"</p>
                          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">{testimonial.author.charAt(0)}</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">{testimonial.author}</p>
              <p className="text-emerald-600 text-sm">{testimonial.title}</p>
            </div>
          </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Over the last 15 years, I've coached Senior Leaders, CEOs, Start-up Founders, Coaches and Executives like you, become highly effective leaders in every area of their life.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Through 1:1 Life Coaching services, I have helped leaders:</h3>
              <ul className="space-y-2 text-emerald-100">
                <li>• Handle triggers, tough situations, and conflicts with Calm.</li>
                <li>• Become comfortable in their skin, by dropping self-doubts and self-judgements.</li>
                <li>• Express themselves fully and effectively in all situations, without any fear of judgement.</li>
                <li>• Lead effectively in life, both personally as well as professionally.</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">When you focus on becoming your 'Best Version', you:</h3>
              <ul className="space-y-2 text-emerald-100">
                <li>• Start to excel in every area of your life</li>
                <li>• Connect with inner wisdom and have higher clarity in life</li>
                <li>• That's where I support you as your life coach</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="px-8 py-4 bg-white text-emerald-600 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Connect with me, now!
            </a>
            <a href="#" className="px-8 py-4 border-2 border-white/30 text-white rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Download Free eBook
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Ready To Grow and Amplify Your Impact?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Are you too ready to create a Shift your Consciousness? Let's work together.
          </p>
          
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-200/50 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-left">
                <h3 className="font-bold text-gray-800 mb-3">You will learn to:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Handle any conflict or situation with calm and poise</li>
                  <li>• Express yourself effectively & assertively</li>
                  <li>• Exude magnetic leadership presence</li>
                  <li>• Become a highly effective leader, now</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800 mb-3">Free eBook: "Cultivate a New Mind"</h3>
                <p className="text-gray-600 mb-4">
                  Do you overthink and over-analyze things? Get this gift of e-book by Maya Now:
                </p>
                <form className="flex flex-col gap-3">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Get Started Now
                  </button>
        </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">LC</span>
              </div>
              <span className="text-2xl font-bold">LifeCoachPro</span>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition">Terms of Service</a>
              <a href="mailto:hello@quantumshift.com" className="text-gray-300 hover:text-emerald-400 transition">hello@quantumshift.com</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Quantum Shift. All rights reserved. Leadership coaching.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
