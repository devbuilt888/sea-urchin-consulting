import React, { useState, useRef, useEffect } from 'react';

const services = [
  {
    icon: '🎯',
    title: 'Digital Marketing Strategy',
    desc: 'Comprehensive marketing strategies tailored to your business goals and target audience.',
    features: ['Market Research', 'Competitor Analysis', 'Goal Setting', 'Performance Tracking']
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    desc: 'Full-service social media management to build your brand presence and engage your audience.',
    features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
  },
  {
    icon: '📧',
    title: 'Email Marketing',
    desc: 'Strategic email campaigns that nurture leads and drive conversions.',
    features: ['List Building', 'Automation', 'A/B Testing', 'ROI Optimization']
  },
  {
    icon: '🔍',
    title: 'SEO & Content Marketing',
    desc: 'Search engine optimization and content strategies to improve your online visibility.',
    features: ['Keyword Research', 'Content Creation', 'Technical SEO', 'Link Building']
  }
];

const portfolio = [
  {
    title: 'E-commerce Growth Campaign',
    client: 'Fashion Retailer',
    desc: 'Increased online sales by 300% through targeted social media and email marketing campaigns.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    results: ['300% Sales Increase', '50% Higher Engagement', '2x Website Traffic'],
    challenge: 'Struggling with low online visibility and poor conversion rates',
    solution: 'Implemented comprehensive digital marketing strategy including SEO, social media, and email automation',
    timeframe: '6 months',
    services: ['SEO', 'Social Media', 'Email Marketing', 'Google Ads']
  },
  {
    title: 'SaaS Product Launch',
    client: 'Tech Startup',
    desc: 'Successfully launched a new SaaS product with comprehensive digital marketing strategy.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    results: ['500+ Beta Users', '25% Conversion Rate', '$50K Revenue'],
    challenge: 'New product with no market presence or customer base',
    solution: 'Created multi-channel launch strategy with content marketing, influencer partnerships, and targeted advertising',
    timeframe: '3 months',
    services: ['Content Marketing', 'Influencer Marketing', 'Google Ads', 'Social Media']
  },
  {
    title: 'Local Business Expansion',
    client: 'Restaurant Chain',
    desc: 'Helped local restaurant expand to 3 new locations through digital marketing.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
    results: ['3 New Locations', '200% Revenue Growth', '5-Star Reviews'],
    challenge: 'Limited local market reach and no digital presence',
    solution: 'Developed local SEO strategy, Google My Business optimization, and community engagement campaigns',
    timeframe: '12 months',
    services: ['Local SEO', 'Google My Business', 'Social Media', 'Content Marketing']
  }
];

const testimonials = [
  {
    quote: 'Working with Sarah transformed our business. Her strategic approach to digital marketing helped us increase our online revenue by 300% in just 6 months.',
    author: 'Michael Chen',
    title: 'CEO, TechFlow Solutions',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
  },
  {
    quote: 'Sarah\'s expertise in social media management is unmatched. She helped us build a strong brand presence and engage with our audience effectively.',
    author: 'Emily Rodriguez',
    title: 'Marketing Director, Fashion Forward',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100'
  },
  {
    quote: 'The ROI we\'ve seen from Sarah\'s email marketing campaigns is incredible. She truly understands how to connect with our customers.',
    author: 'David Thompson',
    title: 'Founder, GreenTech Innovations',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
  }
];

const blogPosts = [
  {
    title: '5 Essential Digital Marketing Trends for 2024',
    excerpt: 'Stay ahead of the curve with these key trends that will shape digital marketing this year.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Trends'
  },
  {
    title: 'How to Build a High-Converting Email Marketing Funnel',
    excerpt: 'Learn the step-by-step process to create email funnels that actually convert.',
    date: 'March 10, 2024',
    readTime: '8 min read',
    category: 'Email Marketing'
  },
  {
    title: 'Social Media Strategy: A Complete Guide for Small Businesses',
    excerpt: 'Everything you need to know to create an effective social media strategy.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Social Media'
  }
];

const stats = [
  { number: '150+', label: 'Happy Clients' },
  { number: '500%', label: 'Average ROI' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
];

const certifications = [
  {
    name: 'Google Ads Certification',
    issuer: 'Google',
    icon: '🔍',
    year: '2024'
  },
  {
    name: 'HubSpot Marketing Certification',
    issuer: 'HubSpot Academy',
    icon: '📊',
    year: '2023'
  },
  {
    name: 'Facebook Blueprint Certification',
    issuer: 'Meta',
    icon: '📱',
    year: '2023'
  },
  {
    name: 'Google Analytics Individual Qualification',
    issuer: 'Google',
    icon: '📈',
    year: '2024'
  }
];

const awards = [
  {
    title: 'Top Digital Marketer 2024',
    issuer: 'Marketing Excellence Awards',
    year: '2024',
    description: 'Recognized for outstanding results in client campaigns'
  },
  {
    title: 'Best ROI Achievement',
    issuer: 'Digital Marketing Institute',
    year: '2023',
    description: 'Awarded for delivering exceptional return on investment'
  },
  {
    title: 'Client Satisfaction Excellence',
    issuer: 'Freelance Union',
    year: '2023',
    description: 'Perfect 5-star rating across all client projects'
  }
];

const recognitions = [
  {
    title: 'Featured Speaker',
    event: 'Digital Marketing Summit 2024',
    description: 'Presented on "Data-Driven Marketing Strategies"'
  },
  {
    title: 'Guest Contributor',
    publication: 'Marketing Weekly',
    description: 'Regular contributor on digital marketing trends'
  },
  {
    title: 'Industry Expert Panelist',
    event: 'Startup Growth Conference',
    description: 'Panel discussion on scaling marketing efforts'
  }
];

const socialLinks = [
  { href: 'mailto:hello@murad.com', icon: '✉️', label: 'Email' },
  { href: 'https://linkedin.com', icon: 'in', label: 'LinkedIn' },
  { href: 'https://instagram.com', icon: '📸', label: 'Instagram' },
  { href: 'https://github.com', icon: 'G', label: 'GitHub' },
];

const navLinks = [
  { href: '#about', label: 'About Me' },
  { href: '#consult', label: 'Marketing Consultancy' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

// Reveal animation hook
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

export default function FreelanceMarketerLanding() {
  const [activeTab, setActiveTab] = useState('all');
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [heroRef, heroVisible] = useReveal();
  const [servicesRef, servicesVisible] = useReveal();
  const [portfolioRef, portfolioVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <main className="min-h-screen font-sans bg-yellow-200">
      {/* Header */}
      <header className="relative bg-black text-white pb-0">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 pt-4 text-lg opacity-80">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="hover:text-yellow-400 transition">{s.icon}</a>
          ))}
        </div>
        {/* Logo */}
        <div className="flex flex-col items-center mt-2 mb-2">
          <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-yellow-400 pt-8 sm:pt-10 md:pt-14 text-center transition-transform duration-300 hover:scale-105 animate-logo-pulse" style={{letterSpacing: '0.02em'}}>
            <span className="block sm:hidden">Ava Carter</span>
            <span className="hidden sm:block">Ava Carter</span>
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 pb-4 text-xs sm:text-sm md:text-base">
          {navLinks.map((n) => (
            <a key={n.label} href={n.href} className="text-white hover:text-yellow-400 transition font-medium px-2 py-1 hover:underline underline-offset-4">
              {n.label}
            </a>
          ))}
        </nav>
        {/* Wavy Divider */}
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-12 sm:h-20 md:h-28">
            <path d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z" fill="#FFD600" />
          </svg>
        </div>
      </header>
      {/* Hero Section */}
      <section className="bg-yellow-200 pt-0 pb-12 px-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8 md:gap-0">
        <div className="flex-1 flex flex-col items-start md:items-start mt-0 md:mt-8 w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 transition-all duration-700">Hello, I&apos;m Ava Carter.</h1>
          <p className="text-base sm:text-lg md:text-xl text-black/90 mb-6 max-w-lg transition-all duration-700 delay-100">
            I&apos;m a Marketing & Digital Marketing Freelancer. With a great passion about real and honest business conversations.
          </p>
          <a href="#contact" className="bg-black text-yellow-400 px-6 py-3 rounded font-bold shadow hover:bg-yellow-400 hover:text-black border-2 border-black transition text-base transform hover:scale-105">HOW I CAN HELP</a>
        </div>
        {/* Illustration */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 w-full md:w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg animate-float">
          {/* Placeholder SVG illustration */}
          <svg width="100%" height="180" viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[260px]">
            <ellipse cx="130" cy="170" rx="120" ry="10" fill="#E6C200" />
            <g>
              <rect x="40" y="80" width="60" height="70" rx="12" fill="#fff" stroke="#222" strokeWidth="2" />
              <ellipse cx="70" cy="80" rx="30" ry="25" fill="#B97A56" />
              <rect x="60" y="120" width="20" height="30" rx="5" fill="#4A9C8C" />
              <rect x="50" y="150" width="15" height="20" rx="4" fill="#4A9C8C" />
              <rect x="75" y="150" width="15" height="20" rx="4" fill="#4A9C8C" />
              <rect x="60" y="110" width="40" height="8" rx="4" fill="#FFD600" />
              <circle cx="70" cy="95" r="4" fill="#222" />
              <circle cx="90" cy="95" r="4" fill="#222" />
              <rect x="80" y="105" width="10" height="4" rx="2" fill="#222" />
            </g>
            <g>
              <rect x="160" y="80" width="60" height="70" rx="12" fill="#fff" stroke="#222" strokeWidth="2" />
              <ellipse cx="190" cy="80" rx="30" ry="25" fill="#B97A56" />
              <rect x="180" y="120" width="20" height="30" rx="5" fill="#4A9C8C" />
              <rect x="170" y="150" width="15" height="20" rx="4" fill="#4A9C8C" />
              <rect x="195" y="150" width="15" height="20" rx="4" fill="#4A9C8C" />
              <rect x="180" y="110" width="40" height="8" rx="4" fill="#FFD600" />
              <circle cx="190" cy="95" r="4" fill="#222" />
              <circle cx="210" cy="95" r="4" fill="#222" />
              <rect x="200" y="105" width="10" height="4" rx="2" fill="#222" />
            </g>
            {/* String between characters */}
            <line x1="100" y1="120" x2="180" y2="120" stroke="#222" strokeWidth="2" />
            {/* Speech bubbles */}
            <ellipse cx="110" cy="60" rx="22" ry="14" fill="#fff" stroke="#FFD600" strokeWidth="2" />
            <ellipse cx="210" cy="50" rx="22" ry="14" fill="#fff" stroke="#FFD600" strokeWidth="2" />
          </svg>
        </div>
      </section>
      {/* About Section */}
      {(() => { const [aboutRef, aboutVisible] = useReveal(); return (
      <section id="about" ref={aboutRef} className={`bg-white py-12 sm:py-16 px-4 transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-4">About Me</h2>
            <p className="text-base sm:text-lg text-black/80 mb-4">Hi, I'm Ava Carter—a passionate marketing consultant and digital marketing freelancer. I believe in honest business conversations and creative strategies that deliver real results. My mission is to help brands grow with clarity, confidence, and a personal touch.</p>
            <ul className="list-disc pl-5 text-black/70 space-y-2 text-sm sm:text-base">
              <li>5+ years of hands-on experience in digital marketing</li>
              <li>Google Ads, HubSpot, and Facebook Blueprint certified</li>
              <li>Worked with 150+ clients across 12 industries</li>
              <li>Specialist in transparent, results-driven communication</li>
              <li>Featured in Marketing Weekly and Digital Summit 2024</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center w-full mt-8 md:mt-0">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-yellow-300 border-4 border-black flex items-center justify-center text-4xl sm:text-6xl">🧑‍💼</div>
            </div>
        </div>
      </section>); })()}
      {/* Wavy Divider */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-12 md:h-16">
          <path d="M0,40 C360,120 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff" />
        </svg>
      </div>
      {/* Services Section */}
      {(() => { const [servicesRef, servicesVisible] = useReveal(); return (
      <section id="services" ref={servicesRef} className={`bg-yellow-100 py-12 sm:py-16 px-4 transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-10 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0,1,2,3].map(i => (
              <div key={i} className={`bg-white rounded-xl shadow p-8 border-2 border-black flex flex-col items-start transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:scale-105 hover:shadow-2xl`} style={{ transitionDelay: servicesVisible ? `${i * 100 + 200}ms` : '0ms' }}>
                <div className="text-3xl mb-2">{services[i].icon}</div>
                <h3 className="font-bold text-xl mb-2 text-black">{services[i].title}</h3>
                <p className="text-black/80 mb-2">{services[i].desc}</p>
                <ul className="list-disc pl-5 text-black/70 space-y-1 text-sm">
                  {services[i].features.map((feature, j) => (
                    <li key={`${i}-${j}`}>{feature}</li>
                  ))}
                </ul>
            </div>
          ))}
          </div>
        </div>
      </section>); })()}
      {/* Wavy Divider */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-12 md:h-16">
          <path d="M0,40 C360,120 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFD600" />
        </svg>
      </div>
      {/* Portfolio Section */}
      {(() => { const [portfolioRef, portfolioVisible] = useReveal(); return (
      <section id="portfolio" ref={portfolioRef} className={`bg-white py-12 sm:py-16 px-4 transition-all duration-700 ${portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-10 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0,1,2].map(i => (
              <div key={i} className={`bg-yellow-100 rounded-xl shadow p-6 border-2 border-black flex flex-col items-start transition-all duration-700 ${portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:scale-105 hover:shadow-2xl`} style={{ transitionDelay: portfolioVisible ? `${i * 100 + 200}ms` : '0ms' }}>
                <div className="text-2xl text-black mb-2">{portfolio[i].title.split(' ')[0]}</div>
                <h3 className="font-bold text-lg mb-1 text-black">{portfolio[i].title}</h3>
                <p className="text-black/80 mb-2 text-sm">{portfolio[i].desc}</p>
                <ul className="text-xs text-black/70 mb-2 space-y-1">
                  <li><b>Challenge:</b> {portfolio[i].challenge}</li>
                  <li><b>Solution:</b> {portfolio[i].solution}</li>
                  <li><b>Results:</b> {portfolio[i].results.join(', ')}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>); })()}
      {/* Wavy Divider */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-12 md:h-16">
          <path d="M0,40 C360,120 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff" />
        </svg>
      </div>
      {/* Contact Section */}
      {(() => { const [contactRef, contactVisible] = useReveal(); return (
      <section id="contact" ref={contactRef} className={`bg-yellow-100 py-12 sm:py-16 px-4 transition-all duration-700 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-6 text-center">Let's Connect</h2>
          <p className="text-black/80 mb-8 text-center text-sm sm:text-base">Ready to grow your business or have a project in mind? Let's chat! Fill out the form below and I'll get back to you within 24 hours.</p>
          <form className="bg-white rounded-xl shadow p-4 sm:p-8 border-2 border-black flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="px-4 py-3 rounded border border-black text-black placeholder-black/50 focus:outline-none text-sm sm:text-base" />
            <input type="email" placeholder="Your Email" className="px-4 py-3 rounded border border-black text-black placeholder-black/50 focus:outline-none text-sm sm:text-base" />
            <textarea placeholder="How can I help you?" rows={4} className="px-4 py-3 rounded border border-black text-black placeholder-black/50 focus:outline-none text-sm sm:text-base" />
            <button type="submit" className="bg-black text-yellow-400 px-6 py-3 rounded font-bold shadow hover:bg-yellow-400 hover:text-black border-2 border-black transition text-sm sm:text-base transform hover:scale-105">Send Message</button>
          </form>
        </div>
      </section>); })()}
      {/* Footer */}
      <footer className="bg-black text-yellow-400 py-8 px-4 text-center mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-2 font-bold text-lg sm:text-xl">Ava Carter</div>
          <div className="text-xs sm:text-sm mb-2">Marketing & Digital Marketing Freelancer</div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-2 text-xs sm:text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#portfolio" className="hover:underline">Portfolio</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <div className="text-xs">&copy; {new Date().getFullYear()} Ava Carter. All rights reserved.</div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes logo-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        .animate-logo-pulse {
          animation: logo-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
} 